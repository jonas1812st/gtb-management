import type { NextAuthConfig } from "next-auth";
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
  },
  providers: [],
  session: {
    maxAge: 60 * 60 * 12, // idle session expires after 12 hours
  },
} satisfies NextAuthConfig;
