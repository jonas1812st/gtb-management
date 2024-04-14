import prisma from "@/utils/prisma";
import StudentForm from "../../_components/form";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Link from "next/link";
import { editStudent } from "../../methods/editStudent";
import Error from "@/components/navigation/error";

export default async function Page({ params }: { params: { id: string } }) {
  const studentId = parseInt(params.id) || 0;

  if (params.id === "" || studentId === 0)
    return <Error error="Id not valid." />;

  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
    include: {
      attendances: true,
    },
  });

  if (!student) return <Error error="Student not found." />;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 items-center">
        <Link href={"/students/" + params.id}>
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <Icon size={0.8} path={mdiArrowLeft} />
          </Button>
        </Link>
        <h2 className="text-2xl font-semibold">Schüler bearbeiten</h2>
      </div>
      <StudentForm
        action="edit"
        actionMethod={editStudent}
        id={parseInt(params.id, 10)}
        values={{
          grade: student.grade,
          notes: student.notes,
          lastName: student.lastName,
          className: student.className,
          firstName: student.firstName,
          attendances: student.attendances.map((attendance) => ({
            day: attendance.day,
            end: attendance.end,
          })),
        }}
      />
    </div>
  );
}
