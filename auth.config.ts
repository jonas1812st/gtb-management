import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
  },

  callbacks: {
    async authorized({ request, auth }) {
      // Logged in users are authenticated, otherwise redirect to login page
      const isLoggendIn = !!auth?.user;
      if (isLoggendIn && request.nextUrl.pathname.endsWith("/auth/login")) {
        const url = request.nextUrl.clone();
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
      return isLoggendIn;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
