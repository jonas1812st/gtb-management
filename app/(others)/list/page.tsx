import prisma from "@/utils/prisma";
import StudentList from "./_components/studentList";
import dayjs from "dayjs";
import { connection } from "next/server";

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

  const students = await prisma.student.findMany({
    where: {
      attendances: {
        some: {
          day: dayOfWeekToAttendanceDay[dayOfWeek],
        },
      },
    },
    include: {
      visitations: {
        where: {
          date: {
            equals: dayjs().startOf("day").toISOString(),
          },
        },
      },
    },
  });

  return <StudentList students={students} />;
}
