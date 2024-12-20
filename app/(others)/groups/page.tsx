import { getGroups } from "@/utils/db";

export default async function Page() {
  const groups = await getGroups();
  return <div>{JSON.stringify(groups)}</div>;
}
