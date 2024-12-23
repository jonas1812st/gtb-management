import UserForm from "../../_components/form";
import { editUser } from "../../methods/editUser";
import Error from "@/components/navigation/error";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";
import { canManage, getIsHighestRole } from "@/utils/roles";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { getUserById } from "@/utils/db";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = parseInt(id) || 0;

  // check if user id is valid
  if (id === "" || userId === 0) return <Error error="Id not valid." btnLabel="Zur Übersicht" url="/users" />;

  // fetch user by id
  const user = await getUserById(userId);

  // show error if not found
  if (!user) return <Error error="User not found." btnLabel="Zur Übersicht" url="/users" />;

  const rights = await getAccessRights();
  if (!(await canManage(user.role)) || !rights.updateUser) return <NotAllowed url="/users" label="Zur Übersicht" />;

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 items-center">
        <Link href={"/users/" + userId}>
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <Icon size={0.8} path={mdiArrowLeft} />
          </Button>
        </Link>
        <h2 className="text-2xl font-semibold">Benutzer bearbeiten</h2>
      </div>
      <UserForm
        action="edit"
        actionMethod={editUser}
        rights={{
          updateUsername: true,
          // role can only be updated if the user role is below the own role and if the user is not the owner himself
          updateUserRole: !getIsHighestRole(user.role),
        }}
        id={userId}
        values={{ role: user.role, username: user.username }}
      />
    </div>
  );
}
