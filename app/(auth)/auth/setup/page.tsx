import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";
import SetupForm from "./setupForm";

export default async function SetupPage() {
  // Check if database already has users. If yes, setup is not allowed.
  const userCount = await prisma.user.count();
  if (userCount > 0) {
    redirect("/auth/login");
  }

  return <SetupForm />;
}
