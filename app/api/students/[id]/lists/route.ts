import { getStudentListsById } from "@/utils/db";
import { IdSchema } from "@/utils/zodSchema";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const studentId = IdSchema.parse(Number(id));

    const studentLists = await getStudentListsById(studentId);

    return NextResponse.json({ data: studentLists });
  } catch (error) {
    return NextResponse.json({ error: "Invalid student id" }, { status: 400 });
  }
}
