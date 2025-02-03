import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { ListsList } from "./_components/list";
import { getLists } from "@/utils/db";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";

export default async function Page() {
  const rights = await getAccessRights();
  if (!rights.manageLists) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const lists = await getLists();

  return (
    <ConnectionWrapper>
      <ListsList lists={lists} />
    </ConnectionWrapper>
  );
}
