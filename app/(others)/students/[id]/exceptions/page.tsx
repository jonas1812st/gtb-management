import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: studentId } = await params;

  if (studentId === "" || parseInt(studentId) === 0 || isNaN(parseInt(studentId))) return redirect("/students");

  return redirect(`/students/${studentId}`);
}
