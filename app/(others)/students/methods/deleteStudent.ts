"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function deleteStudent(studentId: number) {
  const result = z.number().parse(studentId);

  try {
    await prisma.student.delete({
      where: {
        id: result,
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidatePath("/students");

  return {
    success: true,
    message: "The student was successfully deleted.",
  };
}
