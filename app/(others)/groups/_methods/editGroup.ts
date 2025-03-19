"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { CreateGroupInputSchema as InputSchema } from "@/utils/zodSchema";
import { getAccessRights } from "@/utils/accessRights";
import { ApiResponseMessage } from "@/types/global";

export async function editGroup(data: z.infer<typeof InputSchema>, groupId: number): Promise<ApiResponseMessage> {
  const rights = await getAccessRights();
  if (!rights.updateGroup)
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  const result = InputSchema.parse(data);

  try {
    await prisma.group.update({
      where: {
        id: groupId,
      },
      data: {
        name: result.name,
        listId: result.listId,
        color: result.color,
        GroupsOnStudents: {
          deleteMany: {},
          create: result.studentIds.map((studentId) => ({
            studentId: studentId,
          })),
        },
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("groups");

  return {
    success: true,
    message: "The group was successfully updated.",
  };
}
