"use server";

import { ApiResponseMessage } from "@/types/global";
import prisma from "@/utils/prisma";
import { updateTag } from "next/cache";
import { z } from "zod";

export async function deleteException(exceptionId: number): Promise<ApiResponseMessage> {
  const result = z.number().parse(exceptionId);

  try {
    await prisma.exception.delete({
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

  updateTag("students");

  return {
    success: true,
    message: "The exception was successfully deleted.",
  };
}
