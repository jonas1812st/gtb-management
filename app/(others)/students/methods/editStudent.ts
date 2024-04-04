"use server";

import { z } from "zod";
import { InputSchema } from "./schema";
import { revalidatePath } from "next/cache";
import prisma from "@/utils/prisma";

export async function editStudent(
  data: z.infer<typeof InputSchema>,
  id: number,
) {
  const result = InputSchema.parse(data);

  try {
    await prisma.student.update({
      where: {
        id: id,
      },
      data: {
        ...result.student,
        attendances: {
          deleteMany: {
            studentId: id,
          },
          create: result.attendances,
        },
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidatePath("/students/" + id);

  return {
    success: true,
    message: "The student was successfully updated.",
  };
}
