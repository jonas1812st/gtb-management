"use server";

import prisma from "@/utils/prisma";
import { CreateListInputSchema as InputSchema } from "@/utils/zodSchema";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function editList(data: z.infer<typeof InputSchema>, id: number) {
  const result = InputSchema.parse(data);

  try {
    await prisma.list.update({
      where: {
        id,
      },
      data: {
        name: result.name,
        options: {
          update: {
            activations: {
              deleteMany: {},
              createMany: {
                data: result.activations,
              },
            },
            cycle: result.cycle,
            manageTime: result.manageTime,
            ListTableInformation: {
              update: result.table,
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
  revalidatePath("/lists/" + id);

  return {
    success: true,
    message: "The student was successfully created.",
  };
}
