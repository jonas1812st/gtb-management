import { cn } from "@/lib/utils";
import { timeToString } from "@/utils/time";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { DateNavigationCalendar } from "./dateNavigation";
import Icon from "@mdi/react";
import { mdiExclamation, mdiExclamationThick, mdiInformationOutline } from "@mdi/js";
import weekday from "dayjs/plugin/weekday";
import DayNotes from "./dayNotes";
import { saveDayNote } from "../_methods/daynote";
import { CreateDayNotesInputSchema } from "@/utils/zodSchema";
import { z } from "zod";
import { getDayNotesByListIdAndDate } from "@/utils/db";
dayjs.locale("de");
dayjs.extend(weekday);

export default async function StatusBar({
  date,
  list,
  currentActivation,
  isToday,
}: {
  date: string;
  list: Prisma.ListGetPayload<{
    include: {
      activations: true;
      Group: true;
    };
  }>;
  currentActivation: Prisma.ListActivationGetPayload<{}> | undefined;
  isToday: boolean;
}) {
  const dayNotes = await getDayNotesByListIdAndDate(list.id, dayjs(date).toDate());

  const saveDayNoteWrapper = async (notes: z.infer<typeof CreateDayNotesInputSchema> | null) => {
    "use server";

    return await saveDayNote(notes === null ? null : notes, dayNotes?.id);
  };

  return (
    <div className="sticky z-10 scale-[101%] top-3">
      <div
        className={cn(
          "p-2 rounded-xl border-2 border-primary/10 bg-primary/10 relative",
          !isToday ? "border-red-500" : ""
        )}
      >
        <h1 className="text-3xl font-bold text-center mb-3">{list.name}</h1>

        <div className="text-lg font-semibold text-center flex flex-wrap gap-2 justify-center items-center">
          {[
            dayjs(date).format("DD[.] MMMM YYYY"),
            timeToString(currentActivation?.startTime ?? 0) + " - " + timeToString(currentActivation?.endTime ?? 0),
          ].map((el, index) => (
            <span
              key={index + "_time_element"}
              className="py-1 px-2 rounded-xl border-2 border-primary/10 bg-primary/10"
            >
              {el}
            </span>
          ))}
        </div>

        <div className="absolute bottom-2 left-2">
          <DateNavigationCalendar date={date} listId={list.id} />
        </div>

        <div className="absolute bottom-2 right-2">
          <DayNotes
            notes={{
              date: dayjs(date).startOf("day").toDate(),
              listId: list.id,
              notes: dayNotes?.notes,
            }}
            onSave={saveDayNoteWrapper}
          />
          {dayNotes && (
            <span className="absolute flex justify-center items-center -top-1.5 -right-1.5 size-5 bg-yellow-400 rounded-full font-bold">
              !
            </span>
          )}
        </div>
        {!isToday && (
          <div className="absolute top-2 left-2">
            <Icon path={mdiInformationOutline} className="text-red-500" size={1} />
          </div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-50 bg-white rounded-xl" />
    </div>
  );
}
