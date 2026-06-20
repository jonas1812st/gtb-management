import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./utils/prisma";
import bcrypt from "bcrypt";

async function getUser(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch user.");
  }
}

export const config = NextAuth({
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async session({ session, token }) {
      if (session) {
        session.user.username = token.username;
        session.user.role = token.role;
        session.user.isNew = token.isNew;
        session.user.userId = token.userId;

        if (token.userId) {
          try {
            const user = await prisma.user.findUnique({
              where: { id: Number(token.userId) },
              select: { role: true, password: true },
            });
            if (user) {
              session.user.role = user.role;
              session.user.isNew = user.password === "not set";
            }
          } catch (error) {
            console.error("Error fetching user role from database:", error);
          }
        }
      }
      return session;
    },
  },
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string(),
            password: z.string(),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;

          if (parsedCredentials.data.password === parsedCredentials.data.username && user.password === "not set") {
            return {
              username: user.username,
              role: user.role,
              isNew: true,
              userId: user.id,
            };
          } else {
            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch)
              return {
                username: user.username,
                role: user.role,
                isNew: false,
                userId: user.id,
              };
          }
        }

        return null;
      },
    }),
  ],
});

export const { auth, signIn, signOut, handlers, unstable_update } = config;
