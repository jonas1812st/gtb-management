"use server";

import prisma from "@/utils/prisma";
import { stringToTime } from "@/utils/time";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { revalidatePath } from "next/cache";
import { InputSchema } from "../_components/timeSchema";

export async function onVisiting(studentId: number, visitation: Prisma.VisitationGetPayload<{}> | undefined) {
  const date = dayjs().startOf("day").toISOString();
  const time = stringToTime(dayjs().format("HH:mm"));

  try {
    if (visitation?.end === null) {
      await prisma.visitation.update({
        where: {
          date_studentId: {
            date,
            studentId,
          },
        },
        data: {
          end: time,
        },
      });
    } else {
      await prisma.visitation.upsert({
        update: {
          start: time,
          end: null,
        },
        where: {
          date_studentId: {
            date,
            studentId,
          },
        },
        create: {
          date,
          studentId,
          start: time!,
        },
      });
    }
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidatePath("/list");
}

export async function deleteVisitation(studentId: number) {
  const date = dayjs().startOf("day").toISOString();

  try {
    await prisma.visitation.deleteMany({
      where: {
        studentId,
        date,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidatePath("/list");
}

export async function updateVisitation(studentId: number, visitation: { end: string | undefined; start: string | undefined }) {
  const { end, start } = InputSchema.parse(visitation);
  const date = dayjs().startOf("day").toISOString();

  try {
    await prisma.visitation.upsert({
      update: {
        start: stringToTime(start),
        end: stringToTime(end) || null,
      },
      where: {
        date_studentId: {
          date,
          studentId,
        },
      },
      create: {
        date,
        studentId,
        start: stringToTime(start),
        end: stringToTime(end) || null,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong.");
  }

  revalidatePath("/list");
  revalidatePath("/student/" + studentId);
}
