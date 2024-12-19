"use client";

import { DataTable } from "@/components/form/dataForm";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

type List = Prisma.ListGetPayload<{
  include: {
    options: {
      include: {
        activations: true;
        ListTableInformation: true;
      };
    };
    Group: true;
  };
}>;

export function ListsList({ lists }: { lists: List[] }) {
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
      addItemBtn={{ type: "url", label: "Neue Liste", url: "/lists/create" }}
    />
  );
}
