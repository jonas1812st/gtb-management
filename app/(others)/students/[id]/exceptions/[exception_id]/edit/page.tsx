import Error from "@/components/navigation/error";
import { getExceptionById } from "@/utils/db";
import ExceptionFormWrapper from "../../_components/FormWrapper";
import { editException } from "../../_methods/editException";

export default async function Page({ params }: { params: Promise<{ exception_id: string; id: string }> }) {
  const { exception_id, id } = await params;
  const exceptionId = parseInt(exception_id) || 0;
  const studentId = parseInt(id) || 0;

  if (id === "" || studentId === 0) return <Error error="Id not valid." url="/students" btnLabel="Zur Übersicht" />;

  // check if exception id is valid
  if (exception_id === "" || exceptionId === 0) return <Error error="Id not valid." url={"/students/" + studentId} btnLabel="Zum Schüler" />;

  // fetch list by id
  const exception = await getExceptionById(exceptionId);

  // show error if not found
  if (!exception) return <Error error="Exception not found." url={"/students/" + studentId} btnLabel="Zur Übersicht" />;

  return (
    <ExceptionFormWrapper
      props={{
        action: "edit",
        actionMethod: editException,
        id: exceptionId,
        values: {
          lists: exception.ExceptionsOnLists.map((e) => e.listId),
          studentId: exception.studentId,
          dates: exception.startDate && exception.endDate ? [exception.startDate, exception.endDate] : exception.SpecificDates.map((e) => e.date),
          mode: exception.startDate ? "range" : "multiple",
          rule: {
            presence: exception.presence,
            notes: exception.notes ?? undefined,
            time: exception.end ?? undefined,
          },
        },
      }}
      params={params}
    />
  );
}
