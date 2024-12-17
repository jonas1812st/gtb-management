"use server";

import prisma from "@/utils/prisma";
import { CreateListInputSchema as InputSchema } from "@/utils/zodSchema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createList(data: z.infer<typeof InputSchema>) {
  const result = InputSchema.parse(data);

  try {
    await prisma.list.create({
      data: {
        name: result.name,
        options: {
          create: {
            activations: {
              createMany: {
                data: result.activations,
              },
            },
            cycle: result.cycle,
            manageTime: result.manageTime,
            ListTableInformation: {
              create: result.table,
            },
            recordTime: data.recordTime,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidatePath("/lists");

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
