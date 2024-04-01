import prisma from "@/utils/prisma";
import StudentForm from "../../_components/form";

export default async function Page({ params }: { params: { id: string } }) {
  if (params.id === "" || typeof parseInt(params.id, 10) !== "number")
    throw new Error("Id not valid.");

  const student = await prisma.student.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
    include: {
      attendances: true,
    },
  });

  if (!student) throw new Error("Student not found.");

  return (
    <StudentForm
      action="edit"
      id={parseInt(params.id, 10)}
      values={{
        student: {
          grade: student.grade,
          notes: student.notes,
          lastName: student.lastName,
          className: student.className,
          firstName: student.firstName,
        },
        attendances: student.attendances.map((attendance) => ({
          day: attendance.day,
          end: attendance.end,
        })),
      }}
    />
  );
}
