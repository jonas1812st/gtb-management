"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { CreateStudentInputSchema as InputSchema } from "@/utils/zodSchema";
import { AttendanceZodSchemaType } from "./types";

export async function createStudent(data: z.infer<typeof InputSchema>) {
  const result = InputSchema.parse(data);

  try {
    await prisma.student.create({
      data: {
        ...result,
        attendances: {
          createMany: {
            data: result.attendances.filter((attendance): attendance is AttendanceZodSchemaType => attendance.status !== "DEFAULT"),
          },
        },
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("lists");
  revalidateTag("students");

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
