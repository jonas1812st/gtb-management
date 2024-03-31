"use server";

import prisma from "@/utils/prisma";
import { StudentInputSchema } from "@/utils/zodSchema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createStudent(data: z.infer<typeof StudentInputSchema>) {
  const result = StudentInputSchema.parse(data);

  try {
    await prisma.student.create({
      data: result,
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
