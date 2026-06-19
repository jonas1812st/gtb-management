"use server";

import { z } from "zod";
import { PasswordChangeSchema } from "./passwordSchema";
import { auth } from "@/auth";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { ApiResponseMessage } from "@/types/global";
import { getUserById } from "@/utils/db";

export async function changePassword(
  id: number,
  data: z.infer<typeof PasswordChangeSchema>
): Promise<ApiResponseMessage> {
  const session = await auth();

  if (!session || !session.user) {
    return {
      success: false,
      message: "Session Error: Please check if you are logged in.",
    };
  }

  // Security check: user can only change their own password
  if (session.user.userId !== id) {
    return {
      success: false,
      message: "Access Rights Error: You can only change your own password.",
    };
  }

  const result = PasswordChangeSchema.parse(data);

  try {
    const user = await getUserById(id);
    if (!user) {
      return {
        success: false,
        message: "User not found.",
      };
    }

    // Verify current password
    let currentPasswordMatches = false;
    if (user.password === "not set") {
      currentPasswordMatches = result.currentPassword === user.username;
    } else {
      currentPasswordMatches = bcrypt.compareSync(result.currentPassword, user.password);
    }

    if (!currentPasswordMatches) {
      return {
        success: false,
        message: "The current password entered is incorrect.",
      };
    }

    // Hash and update password
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "12");
    const hashedPassword = bcrypt.hashSync(result.newPassword, saltRounds);

    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Failed to update password.",
    };
  }

  return {
    success: true,
    message: "The password was successfully changed.",
  };
}
