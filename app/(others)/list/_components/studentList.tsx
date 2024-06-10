"use client";

import { Table, Td, Th, Tr } from "@/components/form/table";
import {
  mdiDotsVertical,
  mdiInformation,
  mdiInformationOutline,
  mdiTimerEditOutline,
} from "@mdi/js";
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
import { DataTable } from "@/components/form/dataForm";
import { ColumnDef } from "@tanstack/react-table";

type Student = Prisma.StudentGetPayload<{
  include: {
    visitations: true;
  };
}>;

type Students = Student[];

const getPresentState = (student: Student) => {
  const currentVisitation = student.visitations.find(
    (visitation) =>
      visitation.date.toISOString() ===
      dayjs().hour(0).minute(0).second(0).millisecond(0).toISOString(),
  );

  return {
    visitation: currentVisitation,
    state:
      currentVisitation !== undefined
        ? currentVisitation.end !== null
          ? "visited"
          : "visiting"
        : "default",
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
          <input
            type="checkbox"
            defaultChecked={
              presentState.visitation !== undefined &&
              presentState.visitation.end === null
            }
            onClick={() => onVisiting(student.id, presentState.visitation)}
          />
        );
      },
      enableSorting: false,
      meta: {
        getCellContext: ({ row: { original: student } }) => {
          const presentState = getPresentState(student);

          return {
            row: {
              style: {
                backgroundColor:
                  presentState.state === "visiting"
                    ? "#FEF9C3"
                    : presentState.state === "visited"
                      ? "#DCFCE7"
                      : null,
              },
            },
          };
        },
      },
    },
    {
      accessorKey: "fullName",
      header: "Name",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => (
        <Link
          href={"/students/" + student.id}
          className="flex space-x-2 items-center"
        >
          <span>
            {student.firstName} {student.lastName}
          </span>
          {student.notes !== null ? (
            <Icon
              path={mdiInformationOutline}
              size={0.8}
              className="text-red-500 translate-y-[1px]"
            />
          ) : null}
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
                  <Icon size={0.9} path={mdiTimerEditOutline} />
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
      <div className="flex flex-col space-y-2">
        {/* <StudentTable students={filteredStudents} setEdit={setEdit} /> */}
        <DataTable
          columns={columns}
          data={students}
          filter={{ column: "fullName", placeholder: "Suche" }}
        />
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
          const presentState = getPresentState(student);
          return (
            <Tr
              key={index + "_student"}
              className={
                presentState.state === "visiting"
                  ? "bg-yellow-100"
                  : presentState.state === "visited"
                    ? "bg-green-100"
                    : ""
              }
            >
              <Td>
                <input
                  type="checkbox"
                  defaultChecked={
                    presentState.visitation !== undefined &&
                    presentState.visitation.end === null
                  }
                  onClick={() =>
                    onVisiting(student.id, presentState.visitation)
                  }
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
