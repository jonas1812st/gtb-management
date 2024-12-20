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
import dayjs from "dayjs";
import "dayjs/locale/de";
import Link from "next/link";
import Error from "@/components/navigation/error";
import { DeleteButton } from "@/components/form/deleteBtn";
import { deleteUser } from "../methods/deleteUser";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
import { auth } from "@/auth";
import { canManage, isHighestRole } from "@/utils/roles";
import { getUserById } from "@/utils/db";
dayjs.locale("de");

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const rights = await getAccessRights();

  if (!rights.manageUsers && id !== session?.user?.userId.toString()) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const userId = parseInt(id) || 0;

  if (id === "" || userId === 0) return <Error error="Id not valid." btnLabel="Zur Benutzerübersicht" url="/users" />;

  const user = await getUserById(userId);

  if (!user) return <Error error="User not found." btnLabel="Zur Benutzerübersicht" url="/users" />;

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
                // only show that the user has not set his password to the owner -- Security risk
                ...(user.password === "not set" && (await isHighestRole()) ? [{ label: "Passwort gesetzt", value: "Nein" }] : []),
              ].map((information, index) => (
                <Tr key={index + "_information_row"}>
                  <td className="font-semibold text-gray-600 p-3">{information.label}</td>
                  <Td>{information.value}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {rights.updateUser && (await canManage(user.role)) ? (
            <Link href={"/users/" + user.id + "/edit"}>
              <Button variant={"outline"} size={"sm"}>
                Bearbeiten
              </Button>
            </Link>
          ) : null}
        </div>
        {(await canManage(user.role)) ? (
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
                  Diese Aktion kann nicht rückgängig gemacht werden. Dieser Benutzer und seine Daten werden permanent von diesem System gelöscht.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Abbrechen
                  </Button>
                </DialogClose>
                <DeleteButton url="/users" action={deleteUser} userId={userId} />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
    </div>
  );
}
