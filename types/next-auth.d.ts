import { Role } from "@prisma/client";
import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

interface RegisteredUser {
  username: string;
  role?: Role;
  isNew: boolean;
  userId: number;
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    User: RegisteredUser;
  }

  interface User extends RegisteredUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends RegisteredUser {}
}
