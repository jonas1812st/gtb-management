"use server";

import {
  AttendanceCreateWithoutStudentInputSchema,
  StudentCreateInputSchema,
  StudentCreateWithoutAttendancesInputSchema,
} from "@/prisma/generated/zod";
import prisma from "@/utils/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const InputSchema = z.object({
  student: StudentCreateWithoutAttendancesInputSchema.transform((values) => ({
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    notes: values.notes?.trim() || null,
    grade: values.grade,
    className: values.className.toUpperCase().trim(),
  })),
  attendances: z.array(
    AttendanceCreateWithoutStudentInputSchema.transform((values) => ({
      day: values.day,
      end: values.end,
    })),
  ),
});

export async function createStudent(data: z.infer<typeof InputSchema>) {
  const result = InputSchema.parse(data);

  try {
    await prisma.student.create({
      data: {
        ...result.student,
        attendances: {
          createMany: {
            data: result.attendances,
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

  revalidatePath("/list");

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
