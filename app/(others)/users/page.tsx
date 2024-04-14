import prisma from "@/utils/prisma";
import { UsersList } from "./_components/users";

export default async function Page() {
  const users = await prisma.user.findMany();

  return <UsersList users={users} />;
}
