import type { NextAuthConfig } from "next-auth";
import { JWT } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async authorized({ request, auth }) {
      // Logged in users are authenticated, otherwise redirect to login page
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn && request.nextUrl.pathname.endsWith("/auth/login")) {
        const url = request.nextUrl.clone();
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
      return isLoggedIn;
    },
    async jwt({ token, user, trigger }) {
      if (trigger === "signIn") {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session) {
        session.user.username = token.username;
        session.user.role = token.role;
      }

      return session;
    },
  },
  providers: [],
  session: {
    maxAge: 60 * 60 * 12, // idle session expires after 12 hours
  },
  trustHost: true,
} satisfies NextAuthConfig;
