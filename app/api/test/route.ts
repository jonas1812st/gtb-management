import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allStudents = await prisma.student.findMany();

  return Response.json({
    hello: "world",
    data: allStudents,
  });
}
