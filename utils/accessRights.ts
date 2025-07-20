import { auth } from "@/auth";

export async function getAccessRights() {
  const session = await auth();

  // manage => the element can be seen (both list or details)
  // create => the element can be created
  // updated => the element can be edited
  // delete => the element can be deleted

  // execute => the element can be executed

  let rights = {
    // users
    manageUsers: false,
    createUser: false,
    updateUser: false,
    deleteUser: false,

    // lists
    manageLists: false,
    updateList: false,
    deleteList: false,
    createList: false,

    // groups
    manageGroups: false,
    updateGroup: false,
    deleteGroup: false,
    createGroup: false,

    // actions
    manageActions: false,
    executeActions: false,
  };

  if (session?.user?.role === "ADMIN" || session?.user?.role === "OWNER") {
    rights.manageUsers = true;
    rights.createUser = true;
    rights.deleteUser = true;
    rights.updateUser = true;

    rights.manageLists = true;
    rights.updateList = true;
    rights.deleteList = true;
    rights.createList = true;

    rights.manageGroups = true;
    rights.updateGroup = true;
    rights.deleteGroup = true;
    rights.createGroup = true;

    rights.manageActions = true;
    rights.executeActions = true;
  }

  return rights;
}

export type AccessRights = Awaited<ReturnType<typeof getAccessRights>>;
