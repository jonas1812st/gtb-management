import Error from "@/components/navigation/error";
import NotAllowed from "@/components/navigation/not-allowed";
import { getAccessRights } from "@/utils/accessRights";
import { getListById } from "@/utils/db";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const rights = await getAccessRights();

  if (!rights.manageUsers) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const listId = Number(id);

  if (id === "" || listId === 0 || isNaN(listId)) return <Error error="Id not valid." btnLabel="Zur Listenübersicht" url="/lists" />;

  const list = await getListById(listId);

  if (!list) return <Error error="List not found." btnLabel="Zur Listenübersicht" url="/lists" />;

  return <span>{JSON.stringify(list)}</span>;
}
