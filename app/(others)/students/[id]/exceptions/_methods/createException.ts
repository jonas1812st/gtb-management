"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { CreateExceptionInputSchema as InputSchema } from "@/utils/zodSchema";
import { formatDatesCreate } from "./format";
import { ApiResponseMessage } from "@/types/global";

export async function createException(data: z.infer<typeof InputSchema>): Promise<ApiResponseMessage> {
  const result = InputSchema.parse(data);

  try {
    await prisma.exception.create({
      data: {
        // --- date options ---
        ...formatDatesCreate({ singleDates: result.dates, mode: result.mode }),

        // --- referring to ---
        studentId: result.studentId,
        ExceptionsOnLists: {
          create: result.lists.map((listId) => ({ listId })),
        },

        // --- exception options ---
        presence: result.rule.presence,
        notes: result.rule.notes ?? null,
        end: result.rule.presence === "PRESENT" ? result.rule.time : null,
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("students");

  return {
    success: true,
    message: "The exception was successfully created.",
  };
}
