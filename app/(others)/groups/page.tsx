import { getGroups } from "@/utils/db";
import { GroupsList } from "./_components/list";
import ConnectionWrapper from "@/components/cache/connectionWrapper";

export default async function Page() {
  const groups = await getGroups();

  return (
    <ConnectionWrapper>
      <GroupsList groups={groups} />
    </ConnectionWrapper>
  );
}
