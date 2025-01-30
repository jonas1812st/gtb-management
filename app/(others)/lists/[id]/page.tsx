import { DetailsContainer, DetailsHeading, DetailsTable, DetailsTableContent } from "@/components/details";
import Error from "@/components/navigation/error";
import NotAllowed from "@/components/navigation/not-allowed";
import { Button } from "@/components/ui/button";
import { GroupLink, GroupLinkContainer } from "@/components/ui/group-link";
import { cn } from "@/lib/utils";
import { getAccessRights } from "@/utils/accessRights";
import { getListById } from "@/utils/db";
import { listStudentNotesTranslation } from "@/utils/enum-translations";
import { ListStudentNotes } from "@prisma/client";
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
import { deleteList } from "../_methods/deleteList";
import Link from "next/link";
import { DeleteButton } from "@/components/form/deleteBtn";
dayjs.locale("de");

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const rights = await getAccessRights();

  if (!rights.manageUsers) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const listId = Number(id);

  if (id === "" || listId === 0 || isNaN(listId)) return <Error error="Id not valid." btnLabel="Zur Listenübersicht" url="/lists" />;

  const list = await getListById(listId);

  if (!list) return <Error error="List not found." btnLabel="Zur Listenübersicht" url="/lists" />;

  const deleteListFunc = async () => {
    "use server";

    return await deleteList(list.id);
  };

  return (
    <div>
      <DetailsHeading>Informationen</DetailsHeading>
      <DetailsContainer>
        <DetailsTable>
          <DetailsTableContent
            items={[
              {
                label: "Name",
                value: list.name,
              },
              {
                label: "Gruppen",
                value:
                  list.Group.length !== 0 ? (
                    <GroupLinkContainer>
                      {list.Group.map((group) => (
                        <GroupLink group={group} key={group.id + "_group_link"} />
                      ))}
                    </GroupLinkContainer>
                  ) : (
                    <i>Keine Gruppen</i>
                  ),
              },
              {
                label: "Optionen",
                value: (
                  <DetailsTable>
                    <DetailsTableContent
                      items={[
                        {
                          label: "Zeitaufnahme",
                          value: {
                            START: "Nur Start",
                            START_END: "Start- und Endzeiten",
                          }[list.recordTime],
                        },
                        {
                          label: "Zeitverwaltung",
                          value: {
                            STUDENT: "Individuell (pro Person)",
                            LIST: "Zentral (Liste)",
                          }[list.manageTime],
                        },
                      ]}
                    />
                  </DetailsTable>
                ),
              },
              {
                label: "Aktivierungszeiten",
                value: (
                  <div className="flex flex-wrap gap-2">
                    {list.activations.length !== 0 ? (
                      list.activations.map((attendance) => (
                        <span key={attendance.id + "_attendance_element"} className="text-sm p-1.5 border rounded-md">
                          {dayjs()
                            .day(attendance.day + 1)
                            .format("ddd")}{" "}
                          {dayjs().hour(0).minute(attendance.startTime).format("HH:mm")} -{" "}
                          {dayjs().hour(0).minute(attendance.endTime).format("HH:mm")}
                        </span>
                      ))
                    ) : (
                      <i>Keine Aktivierungszeiten</i>
                    )}
                  </div>
                ),
              },
              {
                label: "Anzeigeoptionen",
                value: (
                  <DisplayOptions
                    options={{
                      Schülername: list.studentName,
                      Klasse: list.className,
                      Zeiten: list.time,
                      Anmerkungen: list.notes,
                      Gruppenfarbe: list.groupColor,
                    }}
                  />
                ),
              },
            ]}
          />
        </DetailsTable>
      </DetailsContainer>

      <div className="flex justify-between mt-4">
        <Link href={`/lists/${list.id}/today`}>
          <Button size={"sm"}>Zu den Anwesenheiten</Button>
        </Link>

        <div className="flex items-center space-x-2">
          <Link href={`/lists/${list.id}/edit`}>
            <Button size={"sm"} variant="outline">
              Bearbeiten
            </Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"destructive"} size={"sm"}>
                Löschen
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Möchtest du diese Liste löschen?</DialogTitle>
                <DialogDescription>
                  Diese Aktion kann nicht rückgängig gemacht werden. Diese <b>Liste</b> und alle ihre zugehörigen <b>Anwesenheitsdaten</b> werden
                  permanent von diesem System gelöscht.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Abbrechen
                  </Button>
                </DialogClose>
                <DeleteButton action={deleteListFunc} redirectUrl="/lists" />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

const DisplayOptions = ({ options }: { options: Record<string, boolean | ListStudentNotes> }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(options).map((el) => {
        const value = options[el];

        return (
          <span key={el + "_table_display_option"} className={cn("text-sm p-1.5 border rounded-md", value === false ? "line-through" : "")}>
            {el}
            {value !== false && value !== true ? ": " + listStudentNotesTranslation[value] : ""}
          </span>
        );
      })}
    </div>
  );
};
