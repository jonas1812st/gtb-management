import { auth } from "@/auth";
import Form from "../_components/newUserForm";

export default async function Page() {
  const session = await auth();
  return <Form session={session} />;
}
