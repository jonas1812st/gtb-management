"use server";

import { ApiResponseMessage } from "@/types/global";
import { getAccessRights } from "@/utils/accessRights";
import prisma from "@/utils/prisma";
import { revalidateTag } from "next/cache";
import { z } from "zod";

// HACK: Maybe add a intentional delay of 3-5 seconds to this server action AND OTHERS. This is a common design strategy to convey the feeling of executing something important as it takes some time to finish the job
export async function updateStudentGrades(studentIds: number[], direction: 1 | -1): Promise<ApiResponseMessage> {
  const result = z
    .object({
      direction: z.union([z.literal(1), z.literal(-1)]),
      studentIds: z.number().array(),
    })
    .parse({
      direction,
      studentIds,
    });

  const rights = await getAccessRights();
  if (!rights.executeActions)
    return {
      success: false,
      message: "Access Rights Error: Not allowed.",
    };

  try {
    await prisma.student.updateMany({
      where: {
        id: {
          in: result.studentIds,
        },
      },
      data: {
        grade: {
          increment: result.direction,
        },
      },
    });
  } catch (error) {
    return {
      success: false,
      message: "Database Error: Please check your inputs.",
    };
  }

  revalidateTag("students");
  revalidateTag("lists");

  return {
    success: true,
    message: "The student was successfully updated.",
  };
}
