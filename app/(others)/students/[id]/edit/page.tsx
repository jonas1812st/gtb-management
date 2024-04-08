import prisma from "@/utils/prisma";
import StudentForm from "../../_components/form";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Link from "next/link";
import { editStudent } from "../../methods/editStudent";

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
