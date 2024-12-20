import StudentList from "./_components/studentList";
import dayjs from "dayjs";
import { connection } from "next/server";
import { getStudentsByWeekDay } from "@/utils/db";

export default async function Page() {
  await connection();

  const dayOfWeek = dayjs().day();

  const dayOfWeekToAttendanceDay: {
    [k: number]: number;
  } = {
    0: -1,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: -1,
  };

  const students = await getStudentsByWeekDay(dayOfWeekToAttendanceDay[dayOfWeek]);

  return <StudentList students={students} />;
}
