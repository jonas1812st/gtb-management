import { getAccessRights } from "@/utils/accessRights";
import { SessionProvider } from "next-auth/react";
import AccessProvider from "./cache/accessProvider";

export default async function Provider({ children }: { children: React.ReactNode }) {
  const access = await getAccessRights();

  return (
    <SessionProvider>
      <AccessProvider access={access}>{children}</AccessProvider>
    </SessionProvider>
  );
}
