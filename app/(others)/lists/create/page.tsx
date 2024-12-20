import ConnectionWrapper from "@/components/cache/connectionWrapper";
import ListForm from "../_components/form";
import { createList } from "../_methods/createList";

export default async function Page() {
  return (
    <ConnectionWrapper>
      <ListForm action="create" actionMethod={createList} />{" "}
    </ConnectionWrapper>
  );
}
