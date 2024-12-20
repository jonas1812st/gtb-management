import ConnectionWrapper from "@/components/cache/connectionWrapper";
import StudentForm from "../_components/form";
import { createStudent } from "../methods/createStudent";

export default async function Page() {
  return (
    <ConnectionWrapper>
      <StudentForm action="create" actionMethod={createStudent} />
    </ConnectionWrapper>
  );
}
