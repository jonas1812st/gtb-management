"use client";

import { DataTable } from "@/components/form/dataForm";
import { AccessRights } from "@/utils/accessRights";
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
  ];

  return (
    <DataTable
      columns={columns}
      data={users}
      filter={{ column: "username", placeholder: "Suche" }}
      addItemBtn={rights.createUser ? { type: "url", label: "Neuer Benutzer", url: "/users/create" } : undefined}
    />
  );
}
