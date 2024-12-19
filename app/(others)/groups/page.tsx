import prisma from "@/utils/prisma";

export default async function Page() {
  const groups = await prisma.group.findMany({
    include: {
      list: true,
      GroupsOnStudents: true,
    },
  });
  return <div>{JSON.stringify(groups)}</div>;
}
