"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { InputSchema } from "./schema";

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
