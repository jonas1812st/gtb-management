import { getAccessRights } from "@/utils/accessRights";
import { SessionProvider } from "next-auth/react";
import AccessProvider from "./cache/accessProvider";
import ReactQueryProvider from "./providers/react-query";

export default async function Provider({ children }: { children: React.ReactNode }) {
  const access = await getAccessRights();

  return (
    <ReactQueryProvider>
      <SessionProvider>
        <AccessProvider access={access}>{children}</AccessProvider>
      </SessionProvider>
    </ReactQueryProvider>
  );
}
