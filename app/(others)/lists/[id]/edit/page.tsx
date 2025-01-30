import ListForm from "../../_components/form";
import Error from "@/components/navigation/error";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
import { editList } from "../../_methods/editList";
import { getListById } from "@/utils/db";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { BackNavigation } from "@/components/ui/back-navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listId = parseInt(id) || 0;

  // check if user id is valid
  if (id === "" || listId === 0) return <Error error="Id not valid." url="/lists" btnLabel="Zur Übersicht" />;

  // fetch list by id
  const list = await getListById(listId);

  // show error if not found
  if (!list) return <Error error="List not found." url="/lists" btnLabel="Zur Übersicht" />;

  const rights = await getAccessRights();
  if (!rights.updateList) return <NotAllowed url="/lists" label="Zur Übersicht" />;

  return (
    <div className="flex flex-col space-y-4">
      <BackNavigation title="Liste bearbeiten" href={"/lists/" + listId} />
      <ConnectionWrapper>
        <ListForm
          values={{
            name: list.name,
            recordTime: list.recordTime,
            manageTime: list.manageTime,
            activations: list.activations,
            table: {
              groupColor: list.groupColor,
              notes: list.notes,
              time: list.time,
              className: list.className,
              studentName: list.studentName,
            },
          }}
          id={listId}
          action="edit"
          actionMethod={editList}
        />
      </ConnectionWrapper>
    </div>
  );
}
