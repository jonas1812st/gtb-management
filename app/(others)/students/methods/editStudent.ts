"use server";

import { z } from "zod";
import { CreateStudentInputSchema as InputSchema } from "@/utils/zodSchema";
import { revalidateTag } from "next/cache";
import prisma from "@/utils/prisma";
import { Prisma } from "@prisma/client";

export async function editStudent(data: z.infer<typeof InputSchema>, id: number) {
  const result = InputSchema.parse(data);

  try {
    await prisma.student.update({
      where: {
        id: id,
      },
      data: {
        ...result,
        attendances: {
          deleteMany: {
            studentId: id,
          },
          create: result.attendances.filter((attendance): attendance is Prisma.AttendanceCreateWithoutStudentInput => !!attendance),
        },
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("students");
  revalidateTag("lists");

  return {
    success: true,
    message: "The student was successfully updated.",
  };
}
