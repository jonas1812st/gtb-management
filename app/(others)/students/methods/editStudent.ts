"use server";

import { z } from "zod";
import { CreateStudentInputSchema as InputSchema } from "@/utils/zodSchema";
import { updateTag } from "next/cache";
import prisma from "@/utils/prisma";
import { AttendanceZodSchemaType } from "./types";
import { ApiResponseMessage } from "@/types/global";

export async function editStudent(data: z.infer<typeof InputSchema>, id: number): Promise<ApiResponseMessage> {
  const result = InputSchema.parse(data);

  try {
    await prisma.student.update({
      where: {
        id,
      },
      data: {
        ...result,
        attendances: {
          deleteMany: {
            studentId: id,
          },
          create: result.attendances.filter(
            (attendance): attendance is AttendanceZodSchemaType => attendance.status !== "DEFAULT"
          ),
        },
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  updateTag("students");
  updateTag("lists");

  return {
    success: true,
    message: "The student was successfully updated.",
  };
}
