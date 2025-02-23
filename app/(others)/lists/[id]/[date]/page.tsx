import Error from "@/components/navigation/error";
import { getListById, getStudentsByWeekDayAndListId, getVisitationById } from "@/utils/db";
import { DateInputSchema, IdSchema } from "@/utils/zodSchema";
import { AttendanceList } from "./_components/attendanceList";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import StatusBar from "./_components/statusBar";
import VisitationOptions from "./_components/visitationOptions";
import "dayjs/locale/de";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.locale("de");
dayjs.extend(weekday);

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ date: string; id: string }>;
  searchParams: Promise<{ visitation: string }>;
}) {
  const { date: dateParam, id } = await params;
  const { visitation } = await searchParams;
  const listId = parseInt(id);

  if (isNaN(listId)) return <Error url="/lists" error="Id not valid." btnLabel="Zur Übersicht" />;

  try {
    DateInputSchema.parse(dateParam);
  } catch (error) {
    return <Error error="Date not valid." url={"/lists/" + listId} btnLabel="Zur Liste" />;
  }
  const date = dateParam === "today" ? dayjs().format("YYYY-MM-DD") : dateParam;
  const isToday = dayjs().isSame(dayjs(date), "date");

  try {
    if (visitation) IdSchema.parse(Number(visitation));
  } catch (error) {
    return <Error error="Visitation not valid." url={"/lists/" + listId + "/" + dateParam} btnLabel="Zu den Anwesenheiten" />;
  }
  const visitationData = visitation ? await getVisitationById(Number(visitation)) : null;

  const list = await getListById(listId);

  if (!list) {
    return <Error error="List does not exist." url={"/lists"} btnLabel="Zur Übersicht" />;
  }

  const currentActivation = list.activations.find((activation) => activation.day === dayjs(date).weekday());

  const students = await getStudentsByWeekDayAndListId(dayjs(date).toDate(), listId);

  return (
    <div className="flex flex-col space-y-4">
      <StatusBar isToday={isToday} currentActivation={currentActivation} list={list} date={date} />

      {!currentActivation ? (
        <Error error="List is not activated for this day." url={"/lists/" + listId} />
      ) : (
        <ConnectionWrapper>
          <AttendanceList list={list} students={students} date={dayjs(date).toDate()} />
          {list.isMainList && <VisitationOptions visitation={visitationData} />}
        </ConnectionWrapper>
      )}
    </div>
  );
}
