import { UsersList } from "./_components/users";
import NotAllowed from "@/components/navigation/not-allowed";
import { getAccessRights } from "@/utils/accessRights";
import { getUsers } from "@/utils/db";

export default async function Page() {
  const users = await getUsers();

  const rights = await getAccessRights();
  if (!rights.manageUsers) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  return <UsersList users={users} rights={rights} />;
}
