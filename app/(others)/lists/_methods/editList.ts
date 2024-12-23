"use server";

import prisma from "@/utils/prisma";
import { CreateListInputSchema as InputSchema } from "@/utils/zodSchema";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export async function editList(data: z.infer<typeof InputSchema>, id: number) {
  const result = InputSchema.parse(data);

  try {
    await prisma.list.update({
      where: {
        id,
      },
      data: {
        name: result.name,

        // --- list options ---
        recordTime: result.recordTime,
        cycle: result.cycle,
        manageTime: result.manageTime,
        activations: {
          deleteMany: {},
          createMany: {
            data: result.activations,
          },
        },

        // --- table options ---
        studentName: result.table.studentName,
        className: result.table.className,
        time: result.table.time,
        notes: result.table.notes,
        groupColor: result.table.groupColor,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("lists");
  revalidateTag("groups");

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
