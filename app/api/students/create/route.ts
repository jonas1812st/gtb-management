import prisma from "@/utils/prisma";
import { StudentInputSchema } from "@/utils/zodSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const parseResult = StudentInputSchema.safeParse(
    await req.json().catch(() => ({})),
  );
  if (!parseResult.success)
    return NextResponse.json({ error: parseResult.error }, { status: 400 });

  const student = await prisma.student.create({
    data: parseResult.data,
  });

  return Response.json({
    data: student,
  });
}
