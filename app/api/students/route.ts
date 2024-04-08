import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const students = await prisma.student.findMany({
    include: {
      attendances: true,
      visitations: true,
    },
  });
  return NextResponse.json({ data: students });
}

export const dynamic = "force-dynamic";
