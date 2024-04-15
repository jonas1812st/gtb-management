"use server";

import { auth } from "@/auth";
import { getAccessRights } from "@/utils/accessRights";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function deleteUser(userId: number) {
  const rights = await getAccessRights();
  const session = await auth();
  const result = z.number().parse(userId);

  // check if user exists
  const deletedUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!deletedUser)
    return {
      success: false,
      message: "NotFoundError: User not found.",
    };

  // check if user has access rights to delete / if he doesn't delete himself / the user to delete is not the owner
  if (
    !rights.deleteUser ||
    session?.user?.userId === userId ||
    deletedUser.role === "OWNER"
  )
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  try {
    await prisma.user.delete({
      where: {
        id: result,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidatePath("/user");

  return {
    success: true,
    message: "The user was successfully deleted.",
  };
}
