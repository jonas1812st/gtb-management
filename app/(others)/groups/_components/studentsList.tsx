"use client";

import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/form/dataForm";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { DetailsHeading } from "@/components/details";
import Link from "next/link";
dayjs.locale("de");

export const GroupStudents = ({ students }: { students: Prisma.StudentGetPayload<{}>[] }) => {
  const columns: ColumnDef<Prisma.StudentGetPayload<{}>>[] = [
    {
      accessorKey: "name",
      header: "Name",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => <Link href={`/students/${student.id}`}>{student.firstName + " " + student.lastName}</Link>,
    },
    {
      accessorKey: "class",
      header: "Klasse",
      accessorFn: (row) => row.grade + row.className,
    },
  ];

  return (
    <div>
      <DetailsHeading>Schüler</DetailsHeading>
      <div className="max-h-[400px] overflow-auto">
        <DataTable columns={columns} data={students} />
      </div>
    </div>
  );
};
