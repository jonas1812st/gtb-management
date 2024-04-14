import { auth } from "@/auth";

export async function getAccessRights() {
  const session = await auth();

  let rights = {
    manageUsers: false,
    createUsers: false,
    updateUser: false,
  };

  if (session?.user?.role === "ADMIN" || session?.user?.role === "OWNER") {
    rights.createUsers = false;
    rights.manageUsers = true;
  }

  return rights;
}
