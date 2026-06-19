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
import { ActionButton } from "@/components/form/actionBtn";
import { deleteUser } from "../methods/deleteUser";
import { resetUserPassword } from "../methods/resetUserPassword";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
import { auth } from "@/auth";
import { canManage, isCurrentUserHighestRole } from "@/utils/roles";
import { getUserById } from "@/utils/db";
import { mdiLockReset } from "@mdi/js";
dayjs.locale("de");

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const rights = await getAccessRights();

  if (!rights.manageUsers && id !== session?.user?.userId.toString())
    return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const userId = parseInt(id) || 0;

  if (id === "" || userId === 0) return <Error error="Id not valid." btnLabel="Zur Übersicht" url="/users" />;

  const user = await getUserById(userId);
  const me = userId === session?.user?.userId;

  if (!user) return <Error error="User not found." btnLabel="Zur Übersicht" url="/users" />;

  const deleteUserFunc = async () => {
    "use server";

    return await deleteUser(user.id);
  };

  const resetUserPasswordFunc = async () => {
    "use server";

    return await resetUserPassword(user.id);
  };

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
                // only show that the user has not set his password to the owner -- May be a Security risk
                ...(user.password === "not set" && (await isCurrentUserHighestRole())
                  ? [{ label: "Passwort gesetzt", value: "Nein" }]
                  : []),
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
        <div className="flex space-x-2">
          {rights.updateUser && (await canManage(user.role)) ? (
            <Link href={"/users/" + user.id + "/edit"}>
              <Button variant={"outline"} size={"sm"}>
                Bearbeiten
              </Button>
            </Link>
          ) : null}
          {me ? (
            <Link href={"/users/" + user.id + "/change-password"}>
              <Button variant={"outline"} size={"sm"}>
                Passwort ändern
              </Button>
            </Link>
          ) : null}
        </div>
        <div className="flex space-x-2">
          {!me && user.password !== "not set" && rights.updateUser && (await canManage(user.role)) ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"destructive"} size={"sm"}>
                  Passwort zurücksetzen
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Passwort dieses Benutzers zurücksetzen?</DialogTitle>
                  <DialogDescription>
                    Das Passwort des Benutzers wird zurückgesetzt. Der Benutzer muss sich bei der nächsten Anmeldung mit
                    seinem Benutzernamen als Passwort anmelden, um ein neues Passwort festzulegen.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Abbrechen
                    </Button>
                  </DialogClose>
                  <ActionButton
                    action={resetUserPasswordFunc}
                    redirectUrl={"/users/" + user.id}
                    label="Passwort zurücksetzen"
                    icon={{ path: mdiLockReset }}
                    toast={{
                      success: "Passwort erfolgreich zurückgesetzt",
                    }}
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : null}
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
                    Diese Aktion kann nicht rückgängig gemacht werden. Dieser Benutzer und seine Daten werden permanent
                    von diesem System gelöscht.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Abbrechen
                    </Button>
                  </DialogClose>
                  <ActionButton action={deleteUserFunc} redirectUrl="/users" />
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : null}
        </div>
      </div>
    </div>
  );
}
