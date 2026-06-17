import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";
import LoginForm from "./loginForm";

export default async function LoginPage() {
  // Check if there are no users in the database. If so, redirect to onboarding setup.
  const userCount = await prisma.user.count();
  if (userCount === 0) {
    redirect("/auth/setup");
  }

  return <LoginForm />;
}
