"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { CreateExceptionInputSchema as InputSchema } from "@/utils/zodSchema";
import { formatDatesEdit } from "./format";

export async function editException(data: z.infer<typeof InputSchema>, id: number) {
  const result = InputSchema.parse(data);

  try {
    await prisma.exception.update({
      where: {
        id,
      },
      data: {
        // --- date options ---
        ...formatDatesEdit({ singleDates: result.dates, mode: result.mode }),

        // --- referring to --- (studentId cannot be updated)
        ExceptionsOnLists: {
          deleteMany: {},
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
    message: "The exception was successfully updated.",
  };
}
