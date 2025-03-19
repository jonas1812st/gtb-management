import Error from "@/components/navigation/error";
import ExceptionForm from "../_components/form";
import { getStudentById, getStudentListsById } from "@/utils/db";
import { CreateExceptionInputSchema, ExceptionReferrerSchema } from "@/utils/zodSchema";
import { z } from "zod";
import { ApiResponseMessage } from "@/types/global";

export default async function ExceptionFormWrapper({
  params,
  props,
}: {
  params: Promise<{ id: string }>;
  props: (
    | { action: "create"; defaultValues?: Partial<z.infer<typeof CreateExceptionInputSchema>> }
    | { action: "edit"; values: z.infer<typeof CreateExceptionInputSchema>; id: number }
  ) & {
    actionMethod: (data: z.infer<typeof CreateExceptionInputSchema>, id: number) => Promise<ApiResponseMessage>;
    referrer?: z.infer<typeof ExceptionReferrerSchema>;
  };
}) {
  const { id } = await params;

  const studentId = parseInt(id) || 0;

  if (id === "" || studentId === 0) return <Error error="Id not valid." btnLabel="Zur Übersicht" url="/students" />;

  const student = await getStudentById(studentId);

  if (!student) return <Error error="Student not found." btnLabel="Zur Übersicht" url="/students" />;

  const studentLists = await getStudentListsById(studentId);

  return <ExceptionForm {...props} student={student} lists={studentLists} />;
}
