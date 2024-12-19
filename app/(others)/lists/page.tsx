import prisma from "@/utils/prisma";
import { ListsList } from "./[id]/_components/list";

export default async function Page() {
  const lists = await prisma.list.findMany({
    include: {
      options: {
        include: {
          activations: true,
          ListTableInformation: true,
        },
      },
      Group: true,
    },
  });

  return <ListsList lists={lists} />;
}
