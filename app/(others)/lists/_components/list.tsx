"use client";

import { useAccess } from "@/components/cache/accessProvider";
import { DataTable } from "@/components/form/dataForm";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

type List = Prisma.ListGetPayload<{
  include: {
    activations: true;
    Group: true;
  };
}>;

export function ListsList({ lists }: { lists: List[] }) {
  const access = useAccess();

  const columns: ColumnDef<List>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row: { original: list } }) => (
        <Link href={"/lists/" + list.id}>
          <span>{list.name}</span>
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={lists}
      filter={{ column: "name", placeholder: "Suche" }}
      {...(access.createList && {
        addItemBtn: {
          type: "url",
          label: "Neue Liste",
          url: "/lists/create",
        },
      })}
    />
  );
}
