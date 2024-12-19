import NotAllowed from "@/components/navigation/not-allowed";
import GroupForm from "../_components/form";
import { createGroup } from "../_methods/createGroup";
import { getAccessRights } from "@/utils/accessRights";

export default async function Page() {
  const rights = await getAccessRights();

  if (!rights.createGroup) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  return <GroupForm action="create" actionMethod={createGroup} />;
}
