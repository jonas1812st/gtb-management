"use server";

import prisma from "@/utils/prisma";
import { stringToTime, stringToTimeNonNullable } from "@/utils/time";
import { Prisma, RecordTime } from "@prisma/client";
import dayjs from "dayjs";
import { revalidatePath, revalidateTag } from "next/cache";
import { InputSchema } from "./timeSchema";

export async function onVisiting(
  studentId: number,
  visitation: Prisma.VisitationGetPayload<{}> | undefined,
  listId: number,
  date: Date,
  recordTime: RecordTime
) {
  const dateIso = dayjs(date).startOf("day").toISOString();
  const time = stringToTime(dayjs().format("HH:mm"));

  let visitationEntry: Prisma.VisitationGetPayload<{}> | undefined;

  try {
    // Wenn der aktuelle Eintrag "Visitation" kein Ende hat, dann wird das Ende hinzugefügt oder der Eintrag gelöscht (hängt von recordTime ab)
    if (visitation?.end === null) {
      if (recordTime === "START_END") {
        visitationEntry = await prisma.visitation.update({
          where: {
            date_studentId_listId: {
              date: dateIso,
              studentId,
              listId,
            },
          },
          data: {
            end: time,
          },
        });
      } else if (recordTime === "START") {
        await deleteVisitation(studentId, listId, date);
      }
    } else {
      visitationEntry = await prisma.visitation.upsert({
        update: {
          start: time,
          end: null,
          endNotes: null,
        },
        where: {
          date_studentId_listId: {
            date: dateIso,
            studentId,
            listId,
          },
        },
        create: {
          date: dateIso,
          studentId,
          start: time!,
          listId,
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidateTag("lists");
  revalidateTag("students");

  return visitationEntry;
}

export async function deleteVisitation(studentId: number, listId: number, date: Date) {
  const dateIso = dayjs(date).startOf("day").toISOString();

  try {
    await prisma.visitation.deleteMany({
      where: {
        studentId,
        listId,
        date: dateIso,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidateTag("lists");
  revalidateTag("students");
}

export async function updateVisitation(
  studentId: number,
  visitation: { start: string; end: string | undefined; startNotes?: string; endNotes?: string; hasHomework?: boolean },
  listId: number,
  date: Date
) {
  const { end, start } = InputSchema.parse(visitation);
  const dateIso = dayjs(date).startOf("day").toISOString();

  let newVisitationEntry: Prisma.VisitationGetPayload<{}> | undefined;

  try {
    newVisitationEntry = await prisma.visitation.upsert({
      update: {
        start: stringToTime(start),
        end: stringToTime(end) || null,
        startNotes: visitation.startNotes?.trim() || null,
        endNotes: visitation.endNotes?.trim() || null,
        hasHomework: visitation.hasHomework ?? null,
      },
      where: {
        date_studentId_listId: {
          date: dateIso,
          studentId,
          listId,
        },
      },
      create: {
        date: dateIso,
        studentId,
        start: stringToTimeNonNullable(start),
        end: stringToTime(end) || null,
        listId,
        startNotes: visitation.startNotes?.trim() || null,
        endNotes: visitation.endNotes?.trim() || null,
        hasHomework: visitation.hasHomework ?? null,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidateTag("lists");
  revalidateTag("students");
  revalidatePath("/list");

  return newVisitationEntry;
}
