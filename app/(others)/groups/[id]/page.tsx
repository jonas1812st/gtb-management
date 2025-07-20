import { DetailsContainer, DetailsHeading, DetailsTable, DetailsTableContent } from "@/components/details";
import { DeleteButton } from "@/components/form/deleteBtn";
import Error from "@/components/navigation/error";
import NotAllowed from "@/components/navigation/not-allowed";
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
import { getAccessRights } from "@/utils/accessRights";
import { getGroupById, getGroupStudentsById } from "@/utils/db";
import Link from "next/link";
import { deleteGroup } from "../_methods/deleteGroup";
import { GroupStudents } from "../_components/studentsList";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const rights = await getAccessRights();
  if (!rights.manageGroups) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const { id } = await params;
  const groupId = parseInt(id);

  if (isNaN(groupId)) return <Error error="Id not valid" btnLabel="Zur Übersicht" url="/groups" />;

  const group = await getGroupById(groupId);

  if (!group) return <Error error="Group not found." btnLabel="Zur Übersicht" url="/groups" />;

  const groupStudents = await getGroupStudentsById(groupId);

  const deleteGroupFunc = async () => {
    "use server";

    return await deleteGroup(group.id);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <DetailsHeading>Informationen</DetailsHeading>
        <DetailsContainer>
          <DetailsTable>
            <DetailsTableContent
              items={[
                {
                  label: "Name",
                  value: group.name,
                },
                {
                  label: "Farbe",
                  value: (
                    <div className="flex space-x-2 items-center">
                      <div className="h-5 w-5 rounded-full" style={{ backgroundColor: group.color ?? "grey" }} />
                      <span>{group.color}</span>
                    </div>
                  ),
                },
                {
                  label: "Liste",
                  value: group.list ? (
                    <Link href={`/lists/${group.list.id}`}>{group.list.name}</Link>
                  ) : (
                    <i>Keine Liste</i>
                  ),
                },
              ]}
            />
          </DetailsTable>
        </DetailsContainer>
      </div>

      <GroupStudents students={groupStudents} />

      <div className="flex justify-between">
        {rights.updateGroup && (
          <Link href={`/groups/${group.id}/edit`}>
            <Button size={"sm"} variant="outline">
              Bearbeiten
            </Button>
          </Link>
        )}
        {rights.deleteGroup && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"destructive"} size={"sm"}>
                Löschen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Möchtest du diese Gruppe löschen?</DialogTitle>
                <DialogDescription>
                  Diese Aktion kann nicht rückgängig gemacht werden. Diese Gruppe und ihre Daten werden permanent von
                  diesem System gelöscht.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Abbrechen
                  </Button>
                </DialogClose>
                <DeleteButton action={deleteGroupFunc} redirectUrl="/groups" />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
