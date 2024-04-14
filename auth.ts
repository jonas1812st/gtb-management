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
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string().min(3).max(50),
            password: z.string().min(6).max(50),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch)
            return { username: user.username, role: user.role };
        }

        return null;
      },
    }),
  ],
});

export const { auth, signIn, signOut, handlers } = config;
