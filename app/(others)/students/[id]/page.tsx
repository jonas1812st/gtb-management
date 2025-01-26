import { Table, Td, Tr } from "@/components/form/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { deleteStudent } from "../methods/deleteStudent";
import { DeleteButton } from "../_components/deleteStudent";
import Error from "@/components/navigation/error";
import { getStudentById, getStudentListsById } from "@/utils/db";
import { StudentLists } from "./_components/studentDetails";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import dayjs from "dayjs";
import "dayjs/locale/de";
dayjs.locale("de");

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const studentId = parseInt(id) || 0;

  if (id === "" || studentId === 0) return <Error error="Id not valid." btnLabel="Zur Übersicht" url="/students" />;

  const student = await getStudentById(studentId);
  const studentLists = await getStudentListsById(studentId);

  if (!student) return <Error error="Student not found." btnLabel="Zur Übersicht" url="/students" />;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-semibold">Informationen</h1>
        <div className="border rounded-lg">
          <Table>
            <tbody>
              {[
                {
                  label: "Name",
                  value: student.firstName + " " + student.lastName,
                },
                {
                  label: "Klasse",
                  value: student.grade + student.className,
                },
                {
                  label: "Gruppen",
                  value:
                    (student.GroupsOnStudents?.length !== 0 ? (
                      <div className="flex gap-2 flex-wrap">
                        {student.GroupsOnStudents?.map(({ group }) => (
                          <Link
                            href={"/groups/" + group.id}
                            className="px-2.5 py-0.5 bg-primary/20 transition hover:bg-primary/30 rounded-full flex space-x-1 items-center"
                            key={group.id + "_group_link"}
                          >
                            <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: group.color ?? "grey" }} />
                            <span>{group.name}</span>
                          </Link>
                        ))}
                      </div>
                    ) : undefined) || "Keine Gruppen",
                },
                {
                  label: "Anmerkungen",
                  value: student.notes || "Keine Anmerkung",
                },
              ].map((information, index) => (
                <Tr key={index + "_information_row"}>
                  <td className="font-semibold text-gray-600 p-3">{information.label}</td>
                  <Td>{information.value}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <ConnectionWrapper>
        <StudentLists attendances={student.attendances} lists={studentLists} visitations={student.visitations} />
      </ConnectionWrapper>

      <div className="flex items-center justify-between">
        <Link href={"/students/" + student.id + "/edit"}>
          <Button variant={"outline"} size={"sm"}>
            Bearbeiten
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"destructive"} size={"sm"}>
              Löschen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Möchtest du diesen Schüler löschen?</DialogTitle>
              <DialogDescription>
                Diese Aktion kann nicht rückgängig gemacht werden. Dieser Schüler und seine Daten werden permanent von diesem System gelöscht.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Abbrechen
                </Button>
              </DialogClose>
              <DeleteButton action={deleteStudent} studentId={student.id} />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
