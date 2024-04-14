"use server";

import { z } from "zod";
import { InputSchema } from "../methods/schema";
import { revalidatePath } from "next/cache";
import prisma from "@/utils/prisma";
import { Role } from "@prisma/client";
import { getAccessRights } from "@/utils/accessRights";

export async function editUser(data: z.infer<typeof InputSchema>, id: number) {
  const rights = await getAccessRights();
  if (!rights.updateUser) throw new Error("Not allowed.");

  const result = InputSchema.parse(data);

  try {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...result,
        role: result.role as Role,
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidatePath("/users/" + id);
  revalidatePath("/users");

  return {
    success: true,
    message: "The user was successfully updated.",
  };
}
