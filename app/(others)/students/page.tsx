"use server";

import prisma from "@/utils/prisma";
import { StudentList } from "./_components/students";
import { getAccessRights } from "@/utils/accessRights";

export default async function Page() {
  const students = await prisma.student.findMany();
  const rights = await getAccessRights();

  return <StudentList students={students} rights={rights} />;
}
