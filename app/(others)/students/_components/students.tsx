"use client";

import { DataTable } from "@/components/form/dataForm";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

type Students = Prisma.StudentGetPayload<{}>[];

export function StudentList({ students }: { students: Students }) {
  const columns: ColumnDef<Prisma.StudentGetPayload<{}>>[] = [
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
        </Link>
      ),
    },
    {
      accessorKey: "class",
      header: "Klasse",
      accessorFn: (student) => student.grade + student.className,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={students}
      filter={{ column: "fullName", placeholder: "Suche" }}
    />
  );
}
