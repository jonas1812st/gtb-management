"use server";

import prisma from "@/utils/prisma";
import { getAccessRights } from "@/utils/accessRights";
import { canManage } from "@/utils/roles";
import { getUserById } from "@/utils/db";
import { ApiResponseMessage } from "@/types/global";
import { updateTag } from "next/cache";

export async function resetUserPassword(id: number): Promise<ApiResponseMessage> {
  const rights = await getAccessRights();
  const user = await getUserById(id);

  if (!user) {
    return {
      success: false,
      message: "User not found.",
    };
  }

  // Permission check: viewer must be allowed to edit/update users and manage this role
  if (!rights.updateUser || !(await canManage(user.role))) {
    return {
      success: false,
      message: "Access Rights Error: Not authorized.",
    };
  }

  try {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: "not set",
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Failed to reset password.",
    };
  }

  updateTag("users");

  return {
    success: true,
    message:
      "The password was successfully reset. The user must log in using their username next time.",
  };
}
