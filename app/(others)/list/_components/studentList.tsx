"use client";

import { mdiClockEditOutline, mdiDotsVertical, mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";
import { onVisiting } from "../methods/visit";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import EditTimeDialog from "./time";
import { DataTable } from "@/components/form/dataForm";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

type Student = Prisma.StudentGetPayload<{
  include: {
    visitations: true;
  };
}>;

type Students = Student[];

const getPresentState = (student: Student) => {
  const currentVisitation = student.visitations.find((visitation) => visitation.date.toISOString() === dayjs().startOf("day").toISOString());

  return {
    visitation: currentVisitation,
    state: currentVisitation !== undefined ? (currentVisitation.end !== null ? ("visited" as const) : ("visiting" as const)) : ("default" as const),
  };
};

export default function StudentList({ students }: { students: Students }) {
  const [edit, setEdit] = useState<number | null>(null);

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "isPresent",
      header: "Anwesend",
      cell: ({ row: { original: student } }) => {
        const presentState = getPresentState(student);

        return (
          <input type="checkbox" defaultChecked={presentState.state === "visiting"} onClick={() => onVisiting(student.id, presentState.visitation)} />
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: "fullName",
      header: "Name",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => (
        <Link href={"/students/" + student.id} className="flex space-x-2 items-center">
          <span>
            {student.firstName} {student.lastName}
          </span>
          {student.notes !== null ? <Icon path={mdiInformationOutline} size={0.8} className="text-red-500 translate-y-[1px]" /> : null}
        </Link>
      ),
    },
    {
      accessorKey: "class",
      header: "Klasse",
      accessorFn: (student) => student.grade + student.className,
    },
    {
      accessorKey: "visitation",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: student } }) => (
        <div className="flex items-center">
          <Popover>
            <PopoverTrigger>
              <Icon size={0.8} path={mdiDotsVertical} />
            </PopoverTrigger>
            <PopoverContent className="p-2 w-fit">
              <div className="flex flex-col">
                <PopoverClose
                  onClick={() => setEdit(student.id)}
                  className="p-2 hover:bg-gray-100 transition rounded-md text-left flex space-x-2 items-center pe-5"
                >
                  <Icon size={0.9} path={mdiClockEditOutline} />
                  <span>Anwesenheit bearbeiten</span>
                </PopoverClose>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={students} filter={{ column: "fullName", placeholder: "Suche" }} />
      {edit !== null ? (
        <EditTimeDialog
          open={edit !== null}
          closeDialog={() => setEdit(null)}
          studentId={edit}
          visitation={students.find((student) => student.id === edit)?.visitations[0]}
        />
      ) : null}
    </>
  );
}
