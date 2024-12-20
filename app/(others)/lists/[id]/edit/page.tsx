import ListForm from "../../_components/form";
import Error from "@/components/navigation/error";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
import { editList } from "../../_methods/editList";
import { getListById } from "@/utils/db";
import ConnectionWrapper from "@/components/cache/connectionWrapper";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listId = parseInt(id) || 0;

  // check if user id is valid
  if (id === "" || listId === 0) return <Error error="Id not valid." />;

  // fetch list by id
  const list = await getListById(listId);

  // show error if not found
  if (!list || !list.options || !list.options.ListTableInformation) return <Error error="List not found." />;

  const rights = await getAccessRights();
  if (!rights.updateList) return <NotAllowed url="/lists" label="Zur Übersicht" />;

  return (
    <ConnectionWrapper>
      <ListForm
        values={{
          name: list.name,
          recordTime: list.options.recordTime,
          cycle: list.options.cycle,
          manageTime: list.options.manageTime,
          activations: list.options.activations,
          table: list.options.ListTableInformation,
        }}
        id={listId}
        action="edit"
        actionMethod={editList}
      />
    </ConnectionWrapper>
  );
}
