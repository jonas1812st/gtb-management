"use server";

import { ApiResponseMessage } from "@/types/global";
import prisma from "@/utils/prisma";
import { CreateDayNotesInputSchema as InputSchema } from "@/utils/zodSchema";
import { updateTag } from "next/cache";
import { z } from "zod";

export async function saveDayNote(
  data: z.infer<typeof InputSchema> | null,
  noteId?: number
): Promise<ApiResponseMessage> {
  if (noteId !== undefined && data === null) {
    try {
      await prisma.dayNotes.delete({
        where: {
          id: noteId,
        },
      });
    } catch (error) {
      return {
        success: false,
        message: "Database Error: Please check your inputs.",
      };
    }

    updateTag("day-notes");

    return {
      success: true,
      message: "The day notes were successfully deleted.",
    };
  }

  if (noteId === undefined && data === null) {
    updateTag("day-notes");

    return {
      success: true,
      message: "Nothing to delete.",
    };
  }

  const result = InputSchema.parse(data);

  // This function saves the day notes to the database.
  try {
    if (noteId === undefined) {
      await prisma.dayNotes.create({
        data: result,
      });
    } else {
      await prisma.dayNotes.update({
        where: {
          id: noteId,
        },
        data: result,
      });
    }
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  updateTag("day-notes");

  return {
    success: true,
    message: "The day notes were successfully saved.",
  };
}
