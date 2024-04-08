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
import prisma from "@/utils/prisma";
import dayjs from "dayjs";
import "dayjs/locale/de";
import Link from "next/link";
import { deleteStudent } from "../methods/deleteStudent";
import { DeleteButton } from "../_components/deleteStudent";
dayjs.locale("de");

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
    <div className="flex flex-col space-y-2">
      <Table>
        <tbody>
          {[
            {
              label: "Name",
              value: student.firstName + " " + student.lastName,
            },
            { label: "Klasse", value: student.grade + student.className },
            { label: "Anmerkungen", value: student.notes || "Keine Anmerkung" },
            {
              label: "Erscheint am",
              value:
                student.attendances.length !== 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {student.attendances.map((attendance, index) => (
                      <span
                        key={index + "_attendance_element"}
                        className="text-sm p-1.5 border rounded-md"
                      >
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
              <td className="font-semibold text-gray-600">
                {information.label}
              </td>
              <Td>{information.value}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
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
                Diese Aktion kann nicht rückgängig gemacht werden. Dieser
                Schüler und seine Daten werden permanent von diesem System
                gelöscht.
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
