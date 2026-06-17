"use server";

import { z } from "zod";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { ApiResponseMessage } from "@/types/global";
import { InputSchema } from "./schema";
import { updateTag } from "next/cache";

export async function createOwner(data: z.infer<typeof InputSchema>): Promise<ApiResponseMessage> {
  const result = InputSchema.parse(data);

  try {
    // 1. Check if database already has users
    const userCount = await prisma.user.count();
    if (userCount > 0) {
      return {
        success: false,
        message: "Ein Benutzer existiert bereits. Setup nicht möglich.",
      };
    }

    // 2. Hash password and create Owner
    const saltRounds = parseInt(process.env.SALT_ROUNDS || "12");
    const hashedPassword = bcrypt.hashSync(result.password, saltRounds);

    await prisma.$transaction(async (tx) => {
      await tx.user.create({
        data: {
          username: result.username,
          password: hashedPassword,
          role: "OWNER",
        },
      });

      // 3. Seed default list and group from env
      const mainList = await tx.list.findFirst({
        where: {
          isMainList: true,
        },
      });

      if (!mainList) {
        await tx.list.create({
          data: {
            Group: {
              create: {
                isMainGroup: true,
                name: process.env.MAIN_GROUP_NAME || "Alle",
                color: process.env.MAIN_GROUP_COLOR || "#d3d3d3",
              },
            },

            isMainList: true,
            name: process.env.MAIN_LIST_NAME || "Allgemeine Anwesenheitsliste",

            // --- table options ---
            notes: "MARKED",
            time: true,
            className: true,
            studentName: true,
            groupColor: false,

            // --- list options ---
            recordTime: "START_END",
            manageTime: "STUDENT",

            activations: {
              createMany: {
                data: Array.from({ length: 5 }).map((_, index) => ({
                  day: index,
                  startTime: 835,
                  startBuffer: 10,
                  endTime: 960,
                  endBuffer: 10,
                })),
              },
            },
          },
        });
      }
    });

    updateTag("");

    return {
      success: true,
      message: "Owner-Benutzer erfolgreich erstellt und Datenbank initialisiert.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Datenbankfehler bei der Initialisierung des Setups.",
    };
  }
}
