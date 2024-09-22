"use client";

import { DataTable } from "@/components/form/dataForm";
import { AccessRights } from "@/utils/accessRights";
import { mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

type User = Prisma.UserGetPayload<{}>;

export function UsersList({ users, rights }: { users: User[]; rights: AccessRights }) {
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "username",
      header: "Benutzername",
      cell: ({ row: { original: user } }) => <Link href={"/users/" + user.id}>{user.username}</Link>,
    },
    {
      accessorKey: "role",
      header: "Rolle",
    },
    {
      accessorKey: "information",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: user } }) => (
        <Link href={"/users/" + user.id} className="text-gray-600 h-full w-full">
          <Icon size={0.8} path={mdiInformationOutline} />
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={users}
      filter={{ column: "username", placeholder: "Suche" }}
      addItemBtn={rights.createUsers ? { type: "url", label: "Neuer Benutzer", url: "/users/create" } : undefined}
    />
  );
}
