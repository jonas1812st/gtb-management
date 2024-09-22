import { Table, Td, Th, Tr } from "@/components/form/table";
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
import prisma from "@/utils/prisma";
import dayjs from "dayjs";
import "dayjs/locale/de";
import Link from "next/link";
import { deleteStudent } from "../methods/deleteStudent";
import { DeleteButton } from "../_components/deleteStudent";
import Error from "@/components/navigation/error";
dayjs.locale("de");

export default async function Page({ params }: { params: { id: string } }) {
  const studentId = parseInt(params.id) || 0;

  if (params.id === "" || studentId === 0) return <Error error="Id not valid." />;

  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
    include: {
      attendances: true,
      visitations: {
        orderBy: {
          date: "desc",
        },
      },
    },
  });

  if (!student) return <Error error="Student not found." />;

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
                  label: "Anmerkungen",
                  value: student.notes || "Keine Anmerkung",
                },
                {
                  label: "Erscheint am",
                  value:
                    student.attendances.length !== 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {student.attendances.map((attendance, index) => (
                          <span key={index + "_attendance_element"} className="text-sm p-1.5 border rounded-md">
                            {dayjs()
                              .day(attendance.day + 1)
                              .format("ddd")}{" "}
                            {dayjs().hour(0).minute(attendance.end).format("HH:mm")}
                          </span>
                        ))}
                      </div>
                    ) : (
                      "Keine Zeiten"
                    ),
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
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-semibold">Erschien am</h1>
        <div className="border rounded-lg max-h-[400px] overflow-auto">
          <Table>
            <thead>
              <Tr>
                <Th>Datum</Th>
                <Th>Zeitraum</Th>
              </Tr>
            </thead>
            <tbody>
              {student.visitations.length === 0 && (
                <Tr>
                  {/* should span the whole table */}
                  <Td colSpan={100}>
                    <div className="flex items-center justify-center text-gray-500">
                      <span className="font-medium">Keine Einträge</span>
                    </div>
                  </Td>
                </Tr>
              )}
              {student.visitations.map((visitation, index) => (
                <Tr key={index + "_" + visitation.id + "_" + "_visitation"}>
                  <Td>{dayjs(visitation.date).format("ddd DD.MM.YYYY")}</Td>
                  <Td>
                    {dayjs(visitation.date).minute(visitation.start).format("HH:mm") +
                      " - " +
                      (visitation.end ? dayjs(visitation.date).minute(visitation.end).format("HH:mm") : "--:--")}
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
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
