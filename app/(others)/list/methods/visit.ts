"use server";

import prisma from "@/utils/prisma";
import { stringToTime } from "@/utils/time";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { revalidatePath, revalidateTag } from "next/cache";
import { InputSchema } from "../_components/time";

export async function onVisiting(
  studentId: number,
  visitation: Prisma.VisitationGetPayload<{}> | undefined,
) {
  const date = dayjs().hour(0).minute(0).second(0).millisecond(0).toISOString();
  const time = stringToTime(dayjs().format("HH:mm"));

  try {
    if (visitation?.end === null) {
      await prisma.visitation.update({
        where: {
          date,
          studentId,
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
          date,
          studentId,
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
  const date = dayjs().hour(0).minute(0).second(0).millisecond(0).toISOString();

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

export async function updateVisitation(
  studentId: number,
  visitation: { end: string | undefined; start: string | undefined },
) {
  const { end, start } = InputSchema.parse(visitation);
  const date = dayjs().hour(0).minute(0).second(0).millisecond(0).toISOString();

  try {
    await prisma.visitation.update({
      data: {
        start: stringToTime(start),
        end: stringToTime(end) || null,
      },
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
