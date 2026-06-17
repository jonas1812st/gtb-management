import { Prisma, PrismaClient } from "./generated/prisma_client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export async function studentAddToMainGroupMiddleware(
  client: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  params: Prisma.MiddlewareParams,
  next: (params: Prisma.MiddlewareParams) => Promise<any>
): Promise<Prisma.Middleware<any>> {
  // Überprüfen, ob die Aktion das Hinzufügen eines neuen Schülers betrifft
  if (params.model === "Student" && params.action === "create") {
    const result = await next(params); // Die ursprüngliche Aktion ausführen
    const mainGroup = await client.group.findFirst({ where: { isMainGroup: true } });
    if (mainGroup) {
      // Unterschiedliche Behandlung für `create` und `createMany`
      if (params.action === "create") {
        // Einzelnen Schüler hinzufügen
        await client.groupsOnStudents.create({
          data: {
            studentId: result.id,
            groupId: mainGroup.id,
          },
        });
      } else if (params.action === "createMany") {
        // Mehrere Schüler hinzufügen
        const students = params.args.data; // Daten der erstellten Schüler

        if (Array.isArray(students)) {
          const connections = students.map((student: { id: number }) => ({
            studentId: student.id, // ID des erstellten Schülers
            groupId: mainGroup.id,
          }));

          // Bulk-Insert in die GroupsOnStudents-Tabelle
          await client.groupsOnStudents.createMany({
            data: connections,
          });
        }
      }
    }

    return result;
  }

  // Standardmäßig weiterleiten
  return next(params);
}
