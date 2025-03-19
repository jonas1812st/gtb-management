"use server";

import { z } from "zod";
import { InputSchema } from "./schema";
import { auth } from "@/auth";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { ApiResponseMessage } from "@/types/global";

export async function setPassword(data: z.infer<typeof InputSchema>): Promise<ApiResponseMessage> {
  const result = InputSchema.parse(data);
  const session = await auth();

  if (!session || !session.user || !session.user.isNew)
    return {
      success: false,
      message: "Session Error: Please check if you are logged in.",
    };

  try {
    await prisma.user.update({
      where: {
        id: session.user.userId,
      },
      data: {
        password: bcrypt.hashSync(result.password, parseInt(process.env.SALT_ROUNDS!)),
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  return {
    success: true,
    message: "Successfully updated password.",
  };
}
