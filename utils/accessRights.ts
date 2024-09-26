import { auth } from "@/auth";

export async function getAccessRights() {
  const session = await auth();

  let rights = {
    manageUsers: false,
    createUsers: false,
    updateUser: false,
    deleteUser: false,
  };

  if (session?.user?.role === "ADMIN" || session?.user?.role === "OWNER") {
    rights.createUsers = true;
    rights.deleteUser = true;
    rights.manageUsers = true;
    rights.updateUser = true;
  }

  return rights;
}

export type AccessRights = Awaited<ReturnType<typeof getAccessRights>>;
