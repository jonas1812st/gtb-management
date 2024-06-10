"use client";

import { Table, Td, Th, Tr } from "@/components/form/table";
import { mdiDotsVertical, mdiTimerEditOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";
import { onVisiting } from "../methods/visit";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import EditTimeDialog from "./time";
import { SearchStudentsInput } from "@/components/form/search";
import { DataTable } from "@/components/form/dataForm";
import { ColumnDef } from "@tanstack/react-table";

type Student = Prisma.StudentGetPayload<{
  include: {
    visitations: true;
  };
}>;

type Students = Student[];

export default function StudentList({ students }: { students: Students }) {
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [edit, setEdit] = useState<number | null>(null);

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "fullName",
      header: "Name",
      accessorFn: (row) => row.firstName + " " + row.lastName,
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-end">
          <SearchStudentsInput
            students={students}
            setFiltered={(ids) =>
              setFilteredStudents(
                students.filter((student) => ids.includes(student.id))
              )
            }
          />
        </div>
        <div className="overflow-auto">
          {/* <StudentTable students={filteredStudents} setEdit={setEdit} /> */}
          <DataTable
            columns={columns}
            data={students}
            filter={{ column: "fullName", placeholder: "Namen filtern..." }}
          />
        </div>
      </div>
      {edit !== null ? (
        <EditTimeDialog
          open={edit !== null}
          closeDialog={() => setEdit(null)}
          studentId={edit}
          visitation={
            students.find((student) => student.id === edit)?.visitations[0]
          }
        />
      ) : null}
    </>
  );
}
const StudentTable = ({
  students,
  setEdit,
}: {
  students: Students;
  setEdit: (studentId: number) => void;
}) => {
  return (
    <Table>
      <thead>
        <tr>
          {["Anwesend", "Name", "Klasse"].map((header, index) => (
            <Th key={index + "_header_element"}>{header}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.length === 0 && (
          <Tr>
            {/* should span the whole table */}
            <Td colSpan={100}>
              <div className="flex items-center justify-center text-gray-500">
                <span className="font-medium">Keine Schüler verfügbar</span>
              </div>
            </Td>
          </Tr>
        )}
        {students.map((student, index) => {
          const currentVisitation = student.visitations.find(
            (visitation) =>
              visitation.date.toISOString() ===
              dayjs().hour(0).minute(0).second(0).millisecond(0).toISOString()
          );
          const visitationState: "visiting" | "visited" | "default" =
            currentVisitation !== undefined
              ? currentVisitation.end !== null
                ? "visited"
                : "visiting"
              : "default";

          return (
            <Tr
              key={index + "_student"}
              className={
                visitationState === "visiting"
                  ? "bg-yellow-100"
                  : visitationState === "visited"
                  ? "bg-green-100"
                  : ""
              }
            >
              <Td>
                <input
                  type="checkbox"
                  defaultChecked={
                    currentVisitation !== undefined &&
                    currentVisitation.end === null
                  }
                  onClick={() => onVisiting(student.id, currentVisitation)}
                />
              </Td>
              <Td>
                <Link href={"/students/" + student.id}>
                  {student.firstName} {student.lastName}
                </Link>
              </Td>
              <Td>
                {student.grade}
                {student.className}
              </Td>
              <Td>
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
                          <Icon size={0.9} path={mdiTimerEditOutline} />
                          <span>Anwesenheit bearbeiten</span>
                        </PopoverClose>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};
