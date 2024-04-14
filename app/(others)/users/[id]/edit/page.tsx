import prisma from "@/utils/prisma";
import UserForm from "../../_components/form";
import { editUser } from "../../methods/editUser";
import Error from "@/components/navigation/error";
import { getAccessRights } from "@/utils/accessRights";
import NotAllowed from "@/components/navigation/not-allowed";

export default async function Page({ params }: { params: { id: string } }) {
  const rights = await getAccessRights();

  if (!rights.updateUser)
    return <NotAllowed url="/manage" label="Zur Verwaltung" />;

  const userId = parseInt(params.id) || 0;

  if (params.id === "" || userId === 0) return <Error error="Id not valid." />;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id, 10),
    },
  });

  if (!user) return <Error error="User not found." />;

  return (
    <UserForm
      action="edit"
      actionMethod={editUser}
      id={userId}
      values={{ role: user.role, username: user.username }}
    />
  );
}
