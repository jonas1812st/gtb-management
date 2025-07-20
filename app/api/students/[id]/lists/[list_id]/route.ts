import { getStudentListsById, getStudentsByWeekDay, getStudentsByWeekDayAndListId } from "@/utils/db";
import { IdSchema } from "@/utils/zodSchema";
import dayjs from "dayjs";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string; list_id: string; weekday: string }> }
) {
  const { id, list_id } = await params;

  try {
    // const studentId = IdSchema.parse(Number(id));
    const listId = IdSchema.parse(Number(list_id));
    const date = dayjs(dayjs().format("YYYY-MM-DD")).toDate();

    console.log(dayjs(date).toISOString(), listId);

    const studentLists = await getStudentsByWeekDayAndListId(date, listId);

    return NextResponse.json({ data: studentLists });
  } catch (error) {
    return NextResponse.json({ error: "Invalid student id" }, { status: 400 });
  }
}
