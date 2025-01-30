import Error from "@/components/navigation/error";
import { getListById, getStudentsByWeekDayAndListId } from "@/utils/db";
import { DateInputSchema } from "@/utils/zodSchema";
import "dayjs/locale/de";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import { AttendanceList } from "./_components/attendanceList";
import ConnectionWrapper from "@/components/cache/connectionWrapper";
import { cn } from "@/lib/utils";
import Icon from "@mdi/react";
import { mdiInformationOutline } from "@mdi/js";
import { DateNavigationCalendar } from "./_components/dateNavigation";
import { timeToString } from "@/utils/time";
dayjs.locale("de");
dayjs.extend(weekday);

export default async function Page({ params }: { params: Promise<{ date: string; id: string }> }) {
  const { date: dateParam, id } = await params;
  const listId = parseInt(id);

  if (isNaN(listId)) return <Error url="/lists" error="Id not valid." btnLabel="Zur Übersicht" />;

  try {
    DateInputSchema.parse(dateParam);
  } catch (error) {
    return <Error error="Date not valid." url={"/lists/" + listId} btnLabel="Zur Liste" />;
  }

  const list = await getListById(listId);

  if (!list) {
    return <Error error="List does not exist." url={"/lists"} btnLabel="Zur Übersicht" />;
  }

  const date = dateParam === "today" ? dayjs().format("YYYY-MM-DD") : dateParam;
  const weekDay = dayjs(date).weekday();
  const currentActivation = list.activations.find((activation) => activation.day === weekDay);

  const students = await getStudentsByWeekDayAndListId(date, weekDay, listId);

  const isToday = dayjs().isSame(dayjs(date), "date");

  return (
    <div className="flex flex-col space-y-4">
      <div className={cn("p-2 rounded-xl border-2 border-primary/10 bg-primary/10 relative", !isToday ? "border-red-500" : "")}>
        <h1 className="text-3xl font-bold text-center mb-3">{list.name}</h1>

        <div className="text-lg font-semibold text-center flex flex-wrap gap-2 justify-center items-center">
          {[dayjs(date).format("DD[.] MMMM YYYY"), timeToString(currentActivation?.startTime) + " - " + timeToString(currentActivation?.endTime)].map(
            (el, index) => (
              <span key={index + "_time_element"} className="py-1 px-2 rounded-xl border-2 border-primary/10 bg-primary/10">
                {el}
              </span>
            )
          )}
        </div>

        <div className="absolute bottom-2 left-2">
          <DateNavigationCalendar date={date} listId={listId} />
        </div>
        {!isToday && (
          <div className="absolute top-2 left-2">
            <Icon path={mdiInformationOutline} className="text-red-500" size={1} />
          </div>
        )}
      </div>

      {!list.activations.some((activation) => activation.day === weekDay) ? (
        <Error error="List is not activated for this day." url={"/lists/" + listId} />
      ) : (
        <ConnectionWrapper>
          <AttendanceList list={list} students={students} date={new Date(date)} />
        </ConnectionWrapper>
      )}
    </div>
  );
}
