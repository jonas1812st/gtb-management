import { Td, Th, Tr, Table } from "@/components/form/table";
import NotAllowed from "@/components/navigation/not-allowed";
import { Button } from "@/components/ui/button";
import { getAccessRights } from "@/utils/accessRights";
import { mdiInformationOutline, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import Link from "next/link";

type Users = Prisma.UserGetPayload<{}>[];

export async function UsersList({ users }: { users: Users }) {
  const rights = await getAccessRights();

  if (!rights.manageUsers) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  return (
    <div className="flex flex-col space-y-2">
      <div>
        {rights.createUsers ? (
          <Link href={"/users/create"}>
            <Button className="flex items-center space-x-2" size={"sm"} variant={"secondary"}>
              <Icon size={0.7} path={mdiPlus} />
              <span>Neuer Benutzer</span>
            </Button>
          </Link>
        ) : null}
      </div>
      <Table>
        <thead>
          <Tr>
            <Th>Benutzername</Th>
            <Th>Rolle</Th>
          </Tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Tr key={index + "_user"}>
              <Td>
                <Link href={"/users/" + user.id}>{user.username}</Link>
              </Td>
              <Td>{user.role}</Td>
              <Td>
                <Link href={"/users/" + user.id} className="text-gray-600 h-full w-full">
                  <Icon size={0.8} path={mdiInformationOutline} />
                </Link>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
