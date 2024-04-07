"use server";

import prisma from "@/utils/prisma";
import { StudentList } from "./_components/students";

export default async function Page() {
  const students = await prisma.student.findMany();
  return <StudentList students={students} />;
}
