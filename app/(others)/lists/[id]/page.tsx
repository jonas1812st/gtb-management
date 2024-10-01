import Error from "@/components/navigation/error";
import NotAllowed from "@/components/navigation/not-allowed";
import { getAccessRights } from "@/utils/accessRights";
import prisma from "@/utils/prisma";

export default async function Page({ params }: { params: { id: string } }) {
  const rights = await getAccessRights();

  if (!rights.manageUsers) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const listId = Number(params.id);

  if (params.id === "" || listId === 0 || isNaN(listId)) return <Error error="Id not valid." btnLabel="Zur Listenübersicht" url="/lists" />;

  const list = await prisma.list.findUnique({
    where: {
      id: listId,
    },
    include: {
      options: {
        include: {
          ListTableInformation: true,
          activations: true,
        },
      },
    },
  });

  if (!list) return <Error error="List not found." btnLabel="Zur Listenübersicht" url="/lists" />;

  return <span>{JSON.stringify(list)}</span>;
}
