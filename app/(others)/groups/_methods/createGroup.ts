"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { CreateGroupInputSchema as InputSchema } from "@/utils/zodSchema";

export async function createGroup(data: z.infer<typeof InputSchema>) {
  const result = InputSchema.parse(data);

  try {
    await prisma.group.create({
      data: result,
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
    message: "The student was successfully created.",
  };
}
