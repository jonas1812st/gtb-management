import prisma from "@/utils/prisma";
import ListForm from "../../_components/form";
import Error from "@/components/navigation/error";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
import { editList } from "../../_methods/editList";

export default async function Page({ params }: { params: { id: string } }) {
  const listId = parseInt(params.id) || 0;

  // check if user id is valid
  if (params.id === "" || listId === 0) return <Error error="Id not valid." />;

  // fetch list by id
  const list = await prisma.list.findUnique({
    where: { id: listId },
    include: {
      options: {
        include: {
          activations: true,
          ListTableInformation: true,
        },
      },
    },
  });

  // show error if not found
  if (!list || !list.options || !list.options.ListTableInformation) return <Error error="List not found." />;

  const rights = await getAccessRights();
  if (!rights.updateList) return <NotAllowed url="/lists" label="Zur Übersicht" />;

  return (
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
  );
}
