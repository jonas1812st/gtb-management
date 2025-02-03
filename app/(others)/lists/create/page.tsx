import ConnectionWrapper from "@/components/cache/connectionWrapper";
import ListForm from "../_components/form";
import { createList } from "../_methods/createList";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";

export default async function Page() {
  const rights = await getAccessRights();
  if (!rights.createList) return <NotAllowed url="/lists" label="Zur Übersicht" />;

  return (
    <ConnectionWrapper>
      <ListForm action="create" actionMethod={createList} />
    </ConnectionWrapper>
  );
}
