import StudentForm from "../../_components/form";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Link from "next/link";
import { editStudent } from "../../methods/editStudent";
import Error from "@/components/navigation/error";
import { getStudentById } from "@/utils/db";
import ConnectionWrapper from "@/components/cache/connectionWrapper";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const studentId = parseInt(id) || 0;

  if (id === "" || studentId === 0) return <Error error="Id not valid." url="/students" btnLabel="Zur Übersicht" />;

  const student = await getStudentById(studentId);

  if (!student) return <Error error="Student not found." url="/students" btnLabel="Zur Übersicht" />;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 items-center">
        <Link href={"/students/" + studentId}>
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <Icon size={0.8} path={mdiArrowLeft} />
          </Button>
        </Link>
        <h2 className="text-2xl font-semibold">Schüler bearbeiten</h2>
      </div>
      <ConnectionWrapper>
        <StudentForm
          action="edit"
          actionMethod={editStudent}
          id={studentId}
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
      </ConnectionWrapper>
    </div>
  );
}
