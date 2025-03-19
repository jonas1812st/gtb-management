"use server";

import { ApiResponseMessage } from "@/types/global";
import { getAccessRights } from "@/utils/accessRights";
import prisma from "@/utils/prisma";
import { CreateListInputSchema as InputSchema } from "@/utils/zodSchema";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export async function createList(data: z.infer<typeof InputSchema>): Promise<ApiResponseMessage> {
  const rights = await getAccessRights();
  if (!rights.createList)
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  const result = InputSchema.parse(data);

  try {
    await prisma.list.create({
      data: {
        name: result.name,

        // --- list options ---
        activations: {
          createMany: {
            data: result.activations,
          },
        },
        manageTime: result.manageTime,
        recordTime: data.recordTime,

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

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
