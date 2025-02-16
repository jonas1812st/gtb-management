import { getStudents } from "@/utils/db";
import ExceptionForm from "../_components/form";

export default async function Page() {
  const allStudents = await getStudents();

  return <ExceptionForm students={allStudents} />;
}
