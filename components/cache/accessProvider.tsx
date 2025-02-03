"use client";

import { AccessRights } from "@/utils/accessRights";
import { PropsWithChildren, createContext, useContext } from "react";

const AccessContext = createContext<AccessRights | null>(null);

export default function AccessProvider({ access, children }: PropsWithChildren<{ access: AccessRights }>) {
  return <AccessContext.Provider value={access}>{children}</AccessContext.Provider>;
}

export const useAccess = () => {
  const access = useContext(AccessContext);

  if (!access) throw new Error("This hook can only be used inside of the <AccessContext>");

  return access;
};
