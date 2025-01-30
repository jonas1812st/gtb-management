"use server";

import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export async function deleteList(listId: number) {
  const result = z.number().parse(listId);

  try {
    await prisma.list.delete({
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

  revalidateTag("lists");

  return {
    success: true,
    message: "The list was successfully deleted.",
  };
}
