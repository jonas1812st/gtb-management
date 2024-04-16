"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(credentials: {
  username: string;
  password: string;
  callbackUrl: string;
}) {
  try {
    await signIn("credentials", {
      username: credentials.username,
      password: credentials.password,
      redirectTo: credentials.callbackUrl,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
