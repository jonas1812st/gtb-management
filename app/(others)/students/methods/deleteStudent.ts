"use server";

import { ApiResponseMessage } from "@/types/global";
import prisma from "@/utils/prisma";
import { updateTag } from "next/cache";
import { z } from "zod";

export async function deleteStudents(studentIds: number[]): Promise<ApiResponseMessage> {
  const result = z.number().array().parse(studentIds);

  try {
    // delete related attendances
    await prisma.attendance.deleteMany({
      where: {
        studentId: {
          in: result,
        },
      },
    });
    await prisma.groupsOnStudents.deleteMany({
      where: {
        studentId: {
          in: result,
        },
      },
    });
    await prisma.visitation.deleteMany({
      where: {
        studentId: {
          in: result,
        },
      },
    });

    await prisma.student.deleteMany({
      where: {
        id: {
          in: result,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  updateTag("students");
  updateTag("lists");

  const responseMessage =
    studentIds.length > 1 ? "The student was successfully deleted." : "The students were successfully deleted.";

  return {
    success: true,
    message: responseMessage,
  };
}
