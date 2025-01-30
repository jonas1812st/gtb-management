import StudentForm from "../../_components/form";
import { editStudent } from "../../methods/editStudent";
import Error from "@/components/navigation/error";
import { getStudentById, getStudentListsById } from "@/utils/db";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { BackNavigation } from "@/components/ui/back-navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const studentId = parseInt(id) || 0;

  if (id === "" || studentId === 0) return <Error error="Id not valid." url="/students" btnLabel="Zur Übersicht" />;

  const student = await getStudentById(studentId);

  if (!student) return <Error error="Student not found." url="/students" btnLabel="Zur Übersicht" />;

  const studentLists = await getStudentListsById(studentId);
  const mutableAttendanceLists = studentLists.filter((list) => list.manageTime === "STUDENT");

  return (
    <div className="flex flex-col space-y-4">
      <BackNavigation title="Schüler bearbeiten" href={"/students/" + studentId} />
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
            attendances: mutableAttendanceLists.flatMap((list) =>
              list.activations.flatMap((activation) => {
                const studentAttendanceItem = student.attendances.find(
                  (attendance) => attendance.listId === activation.listId && attendance.day === activation.day
                );

                return {
                  day: activation.day,
                  status: studentAttendanceItem?.status ?? "DEFAULT",
                  end: studentAttendanceItem?.end ?? activation.endTime,
                  listId: list.id,
                };
              })
            ),
          }}
          lists={mutableAttendanceLists.map((list) => ({
            id: list.id,
            name: list.name,
          }))}
        />
      </ConnectionWrapper>
    </div>
  );
}
