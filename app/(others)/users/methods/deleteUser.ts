"use server";

import { getAccessRights } from "@/utils/accessRights";
import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function deleteUser(userId: number) {
  const rights = await getAccessRights();
  if (!rights.deleteUser) throw new Error("Not allowed.");

  const result = z.number().parse(userId);

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
