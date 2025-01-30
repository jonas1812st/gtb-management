import ConnectionWrapper from "@/components/cache/connectionWrapper";
import StudentForm from "../_components/form";
import { createStudent } from "../methods/createStudent";
import Error from "@/components/navigation/error";
import { getMainList } from "@/utils/db";

export default async function Page() {
  const mainList = await getMainList();

  if (!mainList) return <Error error="Die Anwesenheitsliste existiert nicht." url="/students" btnLabel="Zur Schülerübersicht" />;

  return (
    <ConnectionWrapper>
      <StudentForm
        action="create"
        actionMethod={createStudent}
        mainList={{ id: mainList.id, name: mainList.name, activeDays: mainList.activations.map((activation) => activation.day) }}
      />
    </ConnectionWrapper>
  );
}
