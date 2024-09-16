import UserForm from "../_components/form";
import NotAllowed from "@/components/navigation/not-allowed";
import { getAccessRights } from "@/utils/accessRights";
import { createUser } from "../methods/createUser";

export default async function Page() {
  const rights = await getAccessRights();

  if (!rights.createUsers) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  return <UserForm action="create" actionMethod={createUser} />;
}
