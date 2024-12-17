import prisma from "@/utils/prisma";

export default async function Page() {
  const lists = await prisma.list.findMany({
    include: {
      options: true,
      Group: true,
    },
  });

  return <div>{JSON.stringify(lists)}</div>;
}
