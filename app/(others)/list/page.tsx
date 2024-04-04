import prisma from "@/utils/prisma";
import StudentList from "./_components/studentList";
import dayjs from "dayjs";

export default async function Page() {
  const dayOfWeek = dayjs().day();

  const students = await prisma.student.findMany({
    where: {
      attendances: {
        some: {
          day: dayOfWeek - 1,
        },
      },
    },
    include: {
      visitations: {
        where: {
          date: {
            equals: dayjs()
              .hour(0)
              .minute(0)
              .second(0)
              .millisecond(0)
              .toISOString(),
          },
        },
      },
    },
  });

  return <StudentList students={students} />;
}
