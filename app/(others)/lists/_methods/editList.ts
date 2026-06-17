"use server";

import { ApiResponseMessage } from "@/types/global";
import { getAccessRights } from "@/utils/accessRights";
import prisma from "@/utils/prisma";
import { CreateListInputSchema as InputSchema } from "@/utils/zodSchema";
import { updateTag } from "next/cache";
import { z } from "zod";

export async function editList(data: z.infer<typeof InputSchema>, id: number): Promise<ApiResponseMessage> {
  const rights = await getAccessRights();
  if (!rights.updateList)
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

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

  updateTag("lists");
  updateTag("groups");

  return {
    success: true,
    message: "The list was successfully updated.",
  };
}
