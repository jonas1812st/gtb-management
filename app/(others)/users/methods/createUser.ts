"use server";

import prisma from "@/utils/prisma";
import { InputSchema } from "./schema";
import { z } from "zod";
import { Role } from "@prisma/client";
import { getAccessRights } from "@/utils/accessRights";
import { revalidateTag } from "next/cache";

export async function createUser(data: z.infer<typeof InputSchema>) {
  const rights = await getAccessRights();
  if (!rights.createUser)
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  const result = InputSchema.parse(data);

  try {
    await prisma.user.create({
      data: { ...result, role: result.role as Role, password: "not set" },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("users");

  return {
    success: true,
    message: "The user was successfully created.",
  };
}
