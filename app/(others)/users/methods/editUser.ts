"use server";

import { z } from "zod";
import { InputSchema } from "../methods/schema";
import { updateTag } from "next/cache";
import prisma from "@/utils/prisma";
import { getAccessRights } from "@/utils/accessRights";
import { canManage, isRoleHighest } from "@/utils/roles";
import { getUserById } from "@/utils/db";
import { ApiResponseMessage } from "@/types/global";

export async function editUser(data: z.infer<typeof InputSchema>, id: number): Promise<ApiResponseMessage> {
  const rights = await getAccessRights();
  const user = await getUserById(id);

  if (!user)
    return {
      success: false,
      message: "NotFoundError: User not found.",
    };

  if (!rights.updateUser || !(await canManage(user.role)))
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  const result = InputSchema.parse(data);
  const highestRole = isRoleHighest(user.role);

  try {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...result,
        // prevent any changes to the role if the user has the highest role (e.g. OWNER)
        role: highestRole ? user.role : result.role,
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  updateTag("lists");
  updateTag("users");

  return {
    success: true,
    message: "The user was successfully updated.",
  };
}
