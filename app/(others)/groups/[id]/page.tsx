import Error from "@/components/navigation/error";
import NotAllowed from "@/components/navigation/not-allowed";
import { getAccessRights } from "@/utils/accessRights";
import { getGroupById } from "@/utils/db";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const rights = await getAccessRights();

  if (!rights.manageGroups) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const groupId = parseInt(id);

  if (isNaN(groupId)) return <Error error="Id not valid" btnLabel="Zur Übersicht" url="/groups" />;

  const group = await getGroupById(groupId);

  if (!group) return <Error error="Group not found." btnLabel="Zur Übersicht" url="/groups" />;

  return <div>{JSON.stringify(group)}</div>;
}
