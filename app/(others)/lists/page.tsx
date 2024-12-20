import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { ListsList } from "./[id]/_components/list";
import { getLists } from "@/utils/db";

export default async function Page() {
  const lists = await getLists();

  return (
    <ConnectionWrapper>
      <ListsList lists={lists} />
    </ConnectionWrapper>
  );
}
