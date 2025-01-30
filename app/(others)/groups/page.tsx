import { getGroups } from "@/utils/db";
import { GroupsList } from "./_components/list";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";

export default async function Page() {
  const groups = await getGroups();

  const rights = await getAccessRights();
  if (!rights.manageGroups) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  return (
    <ConnectionWrapper>
      <GroupsList groups={groups} />
    </ConnectionWrapper>
  );
}
