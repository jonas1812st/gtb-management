import prisma from "@/utils/prisma";

export default async function Page() {
  const lists = prisma.list.findMany();

  return <div>{JSON.stringify(lists)}</div>;
}
