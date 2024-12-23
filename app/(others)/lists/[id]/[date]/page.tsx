import Error from "@/components/navigation/error";
import { DateInputSchema } from "@/utils/zodSchema";
import dayjs from "dayjs";

export default async function Page({ params }: { params: Promise<{ date: string; id: string }> }) {
  const { date: dateParam, id } = await params;
  const listId = parseInt(id);

  if (isNaN(listId)) return <Error url="/lists" error="Id not valid." btnLabel="Zur Übersicht" />;

  try {
    DateInputSchema.parse(dateParam);
  } catch (error) {
    return <Error error="Date not valid." url={"/lists/" + listId} btnLabel="Zur Liste" />;
  }

  const date = dateParam === "now" ? dayjs().format("YYYY-MM-DD") : dateParam;

  return <div>{date}</div>;
}
