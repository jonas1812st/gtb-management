"use server";

import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { StudentList } from "./_components/students";
import { getStudents } from "@/utils/db";

export default async function Page() {
  const students = await getStudents();

  return (
    <ConnectionWrapper>
      <StudentList students={students} />
    </ConnectionWrapper>
  );
}
