"use client";

import { DataTable } from "@/components/form/dataForm";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

type Group = Prisma.GroupGetPayload<{
  include: {
    GroupsOnStudents: true;
    list: true;
  };
}>;

export function GroupsList({ groups }: { groups: Group[] }) {
  const columns: ColumnDef<Group>[] = [
    {
      accessorKey: "color",
      header: "Farbe",
      enableSorting: false,
      cell: ({ row: { original: group } }) => <div className="h-5 w-5 rounded-full" style={{ backgroundColor: group.color ?? "grey" }} />,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row: { original: group } }) => (
        <Link href={"/groups/" + group.id}>
          <span>{group.name}</span>
        </Link>
      ),
    },
    {
      accessorKey: "listId",
      header: "Liste",
      accessorFn: (group) => group.list.name,
      cell: ({ row: { original: group } }) => (
        <Link href={"/lists/" + group.listId}>
          <span>{group.list.name}</span>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={groups}
      filter={{ column: "name", placeholder: "Suche" }}
      addItemBtn={{ type: "url", label: "Neue Gruppe", url: "/groups/create" }}
    />
  );
}
