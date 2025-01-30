"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export async function deleteGroup(groupId: number) {
  const result = z.number().parse(groupId);

  try {
    await prisma.group.delete({
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

  revalidateTag("groups");

  return {
    success: true,
    message: "The group was successfully deleted.",
  };
}
