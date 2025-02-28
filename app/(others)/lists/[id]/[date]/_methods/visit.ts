"use server";

import prisma from "@/utils/prisma";
import { Prisma, RecordTime } from "@prisma/client";
import dayjs from "dayjs";
import { revalidateTag } from "next/cache";
import { VisitationUpdateInputSchema } from "@/utils/zodSchema";

export async function onVisiting(
  studentId: number,
  visitation: Prisma.VisitationGetPayload<{}> | undefined,
  listId: number,
  date: Date,
  recordTime: RecordTime
) {
  const dateIso = dayjs(date).startOf("day").toISOString();
  const time = dayjs().diff(dayjs().startOf("day"), "minute");

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
          start: time,
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

type Nullish<T> = T | null | undefined;

export async function updateVisitation(
  studentId: number,
  visitation: { start: number; end?: Nullish<number>; startNotes?: Nullish<string>; endNotes?: Nullish<string>; hasHomework?: Nullish<boolean> },
  listId: number,
  date: Date,
  options?: {
    revalidate?: boolean;
  }
) {
  const { end, start } = VisitationUpdateInputSchema.parse(visitation);
  const dateIso = dayjs(date).startOf("day").toISOString();

  let newVisitationEntry: Prisma.VisitationGetPayload<{}> | undefined;

  try {
    newVisitationEntry = await prisma.visitation.upsert({
      update: {
        start: start,
        end: end,
        startNotes: visitation.startNotes,
        endNotes: visitation.endNotes,
        hasHomework: visitation.hasHomework,
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
        start: start,
        end: end,
        listId,
        startNotes: visitation.startNotes,
        endNotes: visitation.endNotes,
        hasHomework: visitation.hasHomework,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  if (options?.revalidate !== false) {
    revalidateTag("lists");
    revalidateTag("students");
  }

  return newVisitationEntry;
}
