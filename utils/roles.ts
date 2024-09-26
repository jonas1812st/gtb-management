import { auth } from "@/auth";
import { Role } from "@prisma/client";

export function getRoles() {
  // these are the roles in ascending order (!!!) of importance
  const roles: Role[] = ["DEFAULT", "ADMIN", "OWNER"];

  return roles;
}

export async function isHighestRole() {
  const session = await auth();
  const roles = getRoles();

  if (session?.user?.role) {
    const myRole = session?.user?.role;
    const isHighest = roles.indexOf(myRole) === roles.length - 1;

    return isHighest;
  } else {
    return false;
  }
}

export function getIsHighestRole(role: Role) {
  const roles = getRoles();

  const isHighest = roles.indexOf(role) === roles.length - 1;

  return isHighest;
}

export async function canManage(roleToEdit: Role) {
  const session = await auth();

  if (session?.user?.role) {
    const myRole = session?.user?.role;

    // these are the roles in descending order (!!!) of importance
    const roles = getRoles();

    // exception for highest role
    if (roles.indexOf(myRole) === roles.length - 1) return true;

    // roles can only edit roles below them (not above or the same as them / themselves)
    if (roles.indexOf(myRole) <= roles.indexOf(roleToEdit)) return false;

    return true;
  }
  return false;
}
