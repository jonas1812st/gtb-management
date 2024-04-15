import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  return redirect("/users/" + session?.user?.userId);
}
