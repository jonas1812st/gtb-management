import StudentForm from "../_components/form";
import { createStudent } from "../methods/createStudent";

export default function Page() {
  return <StudentForm action="create" actionMethod={createStudent} />;
}
