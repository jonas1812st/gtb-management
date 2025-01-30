"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export async function deleteStudent(studentId: number) {
  const result = z.number().parse(studentId);

  try {
    // delete related attendances
    await prisma.attendance.deleteMany({
      where: {
        studentId: result,
      },
    });
    await prisma.groupsOnStudents.deleteMany({
      where: {
        studentId: result,
      },
    });
    await prisma.visitation.deleteMany({
      where: {
        studentId: result,
      },
    });

    await prisma.student.delete({
      where: {
        id: result,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("students");
  revalidateTag("lists");

  return {
    success: true,
    message: "The student was successfully deleted.",
  };
}
