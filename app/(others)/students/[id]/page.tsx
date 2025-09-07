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
import { deleteStudents } from "../methods/deleteStudent";
import Error from "@/components/navigation/error";
import { getStudentById, getStudentListsById } from "@/utils/db";
import { StudentLists } from "./_components/studentDetails";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { DetailsContainer, DetailsHeading, DetailsTable, DetailsTableContent } from "@/components/details";
import { GroupLink, GroupLinkContainer } from "@/components/ui/group-link";
import { DeleteButton } from "@/components/form/deleteBtn";
import { ExceptionsList } from "./_components/exceptionsList";
import { deleteException } from "./exceptions/_methods/deleteException";
dayjs.locale("de");

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const studentId = parseInt(id) || 0;

  if (id === "" || studentId === 0) return <Error error="Id not valid." btnLabel="Zur Übersicht" url="/students" />;

  const student = await getStudentById(studentId);
  const studentLists = await getStudentListsById(studentId);

  if (!student) return <Error error="Student not found." btnLabel="Zur Übersicht" url="/students" />;

  const deleteStudentFunc = async () => {
    "use server";

    return await deleteStudents([student.id]);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <DetailsHeading>Informationen</DetailsHeading>
        <DetailsContainer>
          <DetailsTable>
            <DetailsTableContent
              items={[
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
                      <GroupLinkContainer>
                        {student.GroupsOnStudents?.map(({ group }) => (
                          <GroupLink key={group.id + "_group_link"} group={group} />
                        ))}
                      </GroupLinkContainer>
                    ) : undefined) || "Keine Gruppen",
                },
                {
                  label: "Anmerkungen",
                  value: student.notes || "Keine Anmerkung",
                },
              ]}
            />
          </DetailsTable>
        </DetailsContainer>
      </div>

      <ConnectionWrapper>
        <StudentLists attendances={student.attendances} lists={studentLists} visitations={student.visitations} />
      </ConnectionWrapper>

      <ExceptionsList
        exceptions={student.Exception}
        studentId={studentId}
        actions={{ deleteException: deleteException }}
      />

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
                Diese Aktion kann nicht rückgängig gemacht werden. Dieser Schüler und seine Daten werden permanent von
                diesem System gelöscht.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Abbrechen
                </Button>
              </DialogClose>
              <DeleteButton action={deleteStudentFunc} redirectUrl="/students" />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
