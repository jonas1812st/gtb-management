import { Table, Td, Tr } from "@/components/form/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import prisma from "@/utils/prisma";
import dayjs from "dayjs";
import "dayjs/locale/de";
import Link from "next/link";
import Error from "@/components/navigation/error";
import { DeleteButton } from "@/components/form/deleteBtn";
import { deleteUser } from "../methods/deleteUser";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
dayjs.locale("de");

export default async function Page({ params }: { params: { id: string } }) {
  const rights = await getAccessRights();

  if (!rights.manageUsers)
    return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const userId = parseInt(params.id) || 0;

  if (params.id === "" || userId === 0)
    return (
      <Error
        error="Id not valid."
        btnLabel="Zur Benutzerübersicht"
        url="/users"
      />
    );

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user)
    return (
      <Error
        error="User not found."
        btnLabel="Zur Benutzerübersicht"
        url="/users"
      />
    );

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-semibold">Informationen</h1>
        <div className="border rounded-lg">
          <Table>
            <tbody>
              {[
                {
                  label: "Benutzername",
                  value: user.username,
                },
                { label: "Rolle", value: user.role },
              ].map((information, index) => (
                <Tr key={index + "_information_row"}>
                  <td className="font-semibold text-gray-600 p-3">
                    {information.label}
                  </td>
                  <Td>{information.value}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {rights.updateUser ? (
            <Link href={"/users/" + user.id + "/edit"}>
              <Button variant={"outline"} size={"sm"}>
                Bearbeiten
              </Button>
            </Link>
          ) : null}
        </div>
        {user.role !== "OWNER" ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"destructive"} size={"sm"}>
                Löschen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Möchtest du diesen Benutzer löschen?</DialogTitle>
                <DialogDescription>
                  Diese Aktion kann nicht rückgängig gemacht werden. Dieser
                  Benutzer und seine Daten werden permanent von diesem System
                  gelöscht.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Abbrechen
                  </Button>
                </DialogClose>
                <DeleteButton
                  url="/users"
                  action={deleteUser}
                  userId={userId}
                />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </div>
  );
}
