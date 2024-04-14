import { Role } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    User: {
      /** The user's username. */
      username: string;
      role?: Role;
    };
  }

  interface User {
    username: string;
    role?: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    role?: Role;
  }
}
