"use server";

import prisma from "@/utils/prisma";
import { updateTag } from "next/cache";
import { z } from "zod";
import { CreateGroupInputSchema as InputSchema } from "@/utils/zodSchema";
import { getAccessRights } from "@/utils/accessRights";
import { ApiResponseMessage } from "@/types/global";

export async function createGroup(data: z.infer<typeof InputSchema>): Promise<ApiResponseMessage> {
  const rights = await getAccessRights();
  if (!rights.createGroup)
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  const result = InputSchema.parse(data);

  try {
    await prisma.group.create({
      data: {
        name: result.name,
        listId: result.listId,
        color: result.color,
        GroupsOnStudents: {
          create: result.studentIds.map((studentId) => ({ studentId })),
        },
      },
    });
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  updateTag("groups");

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
