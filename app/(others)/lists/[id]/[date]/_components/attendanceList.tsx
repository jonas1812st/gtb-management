"use client";

import { onVisiting, updateVisitation } from "../_methods/visit";
import { DataTable } from "@/components/form/dataForm";
import { cn } from "@/lib/utils";
import { timeToString } from "@/utils/time";
import {
  mdiCalendarEdit,
  mdiCalendarPlus,
  mdiClockEditOutline,
  mdiDotsVertical,
  mdiFileDocumentOutline,
  mdiHelp,
  mdiInformationOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma, RecordTime } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditTimeDialog from "./time";
import { AttendanceWarningDialog } from "./warnings";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { studentExceptionPresence } from "@/utils/enum-translations";
import { useVisitationOptionsState } from "./visitationOptionsState";
import { useShallow } from "zustand/react/shallow";

type Student = Prisma.StudentGetPayload<{
  include: {
    attendances: true;
    visitations: true;
    GroupsOnStudents: {
      include: {
        group: true;
      };
    };
    Exception: {
      include: {
        SpecificDates: true;
      };
    };
  };
}>;

const getPresentState = (student: Student, date: Date) => {
  const currentVisitation = student.visitations.find((visitation) => visitation.date.toISOString() === dayjs(date).startOf("day").toISOString());

  return {
    visitation: currentVisitation,
    state: currentVisitation !== undefined ? (currentVisitation.end !== null ? ("visited" as const) : ("visiting" as const)) : ("default" as const),
  };
};

const getStudentException = (student: Student): Prisma.ExceptionGetPayload<{ include: { SpecificDates: true } }> | undefined => {
  return student.Exception[0];
};

export function AttendanceList({
  students,
  date = new Date(),
  list,
}: {
  students: Student[];
  date?: Date;
  list: Prisma.ListGetPayload<{
    include: {
      activations: true;
      Group: true;
    };
  }>;
}) {
  const { setVisitation, setOpen: setVisitationOpen } = useVisitationOptionsState(
    useShallow((state) => ({
      setVisitation: state.setVisitation,
      setOpen: state.setOpen,
    }))
  );

  useEffect(() => {
    // clear visitation on unmount and close options
    return () => {
      setVisitation(null);
      setVisitationOpen(false);
    };
  }, []);

  const [edit, setEdit] = useState<number | null>(null);
  const [attendanceWarning, setAttendanceWarning] = useState<number | null>(null);
  const hiddenCols = ["fullName", "class", "time", "groupColor"].filter((_, i) => ![list.studentName, list.className, list.time, list.groupColor][i]);

  const onVisitingWrapper = async (
    studentId: number,
    visitation: Prisma.VisitationGetPayload<{}> | undefined,
    listId: number,
    date: Date,
    recordTime: RecordTime
  ) => {
    const response = await onVisiting(studentId, visitation, listId, date, recordTime);
    // only redirect if it is the main list
    if (list.isMainList && response) {
      setVisitation(
        { ...response, hasHomework: true },
        {
          beforeUpdate: async (previous, open) => {
            // only update if previous visitation exists and the options are still open
            if (previous && open) {
              const time = {
                startTime: response.id === previous.id ? response.start : previous.start,
                endTime: response.id === previous.id ? response.end : previous.end,
              };

              // if the response is the same as the previous one and updates start time, don't update
              if (response.end === null && response.id === previous.id) return;

              await updateVisitation(
                previous.studentId,
                {
                  start: time.startTime,
                  end: time.endTime,
                  ...(previous.end === null
                    ? {
                        startNotes: previous.startNotes || null,
                        hasHomework: previous.hasHomework,
                      }
                    : { endNotes: previous.endNotes || null }),
                },
                previous.listId,
                previous.date
              );
            }
          },
        }
      );
      setVisitationOpen(true);
    }
  };

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "isPresent",
      header: "Anwesend",
      cell: ({ row: { original: student } }) => {
        // !!! when changing something here, the code below at AttendanceWarningDialog.confirm has to be changed too
        const presentState = getPresentState(student, date);
        const exception = getStudentException(student);

        return (
          <div className="w-[78px] flex gap-2 justify-between items-center">
            {student.attendances[0] !== undefined || (exception && exception.presence === "PRESENT" && exception.end) ? (
              <EndTimeNote
                student={student}
                attendance={{
                  end: exception?.presence === "PRESENT" && exception?.end ? exception?.end : student.attendances[0]?.end,
                }}
              />
            ) : (
              <div />
            )}
            <Checkbox
              disabled={exception?.presence === "ABSENT"}
              defaultChecked={presentState.state === "visiting"}
              onCheckedChange={() => {
                // !!! when changing something here, the code below at AttendanceWarningDialog.confirm has to be changed too

                if (list.recordTime === "START" && presentState.visitation?.start) {
                  setAttendanceWarning(student.id);
                  return;
                }

                onVisitingWrapper(student.id, presentState.visitation, list.id, date, list.recordTime);
              }}
            />
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: "groupColor",
      header: "",
      cell: ({ row: { original: student } }) => (
        <div className="relative flex items-center justify-center -space-x-2">
          {student.GroupsOnStudents.map(({ group }) => (
            <div
              key={group.id + "_group"}
              style={{
                backgroundColor: group.color ?? "gray",
              }}
              className={cn("h-5 w-5 rounded-full")}
            />
          ))}
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "fullName",
      header: "Name",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => {
        const notesExist = student.notes !== null && list.notes !== "NONE";
        const exception = getStudentException(student);

        return (
          <Link href={"/students/" + student.id} className={cn("flex gap-x-2", notesExist && list.notes !== "MARKED" ? "flex-col" : "items-center")}>
            <span className={cn(exception?.presence === "ABSENT" ? "line-through" : "", "truncate max-w-[200px]")}>
              {student.firstName} {student.lastName}
            </span>
            {notesExist ? (
              list.notes === "MARKED" ? (
                <Icon path={mdiInformationOutline} size={0.8} className="text-gray-500 translate-y-[1px]" />
              ) : list.notes === "SHORTENED" ? (
                <span className="text-sm text-muted-foreground">
                  {student.notes?.substring(0, 50) + ((student.notes?.length ?? 0) > 50 ? "..." : "")}
                </span>
              ) : list.notes === "FULL" ? (
                <span className="text-sm text-muted-foreground">{student.notes}</span>
              ) : null
            ) : null}
          </Link>
        );
      },
    },
    {
      accessorKey: "class",
      header: "Klasse",
      accessorFn: (student) => student.grade + student.className,
    },
    {
      accessorKey: "time",
      header: "Zeiten",
      cell: ({ row: { original: student } }) => {
        const startTime = timeToString(student.visitations[0]?.start);
        const endTime = timeToString(student.visitations[0]?.end);

        return (
          <div className="flex space-x-1 items-center">
            <TimePopover
              time={startTime || "--:--"}
              enabled={student.visitations[0] && student.visitations[0].startNotes !== null}
              notes={student.visitations[0]?.startNotes}
              title={"Anmerkung Startzeit"}
            />
            {list.recordTime === "START_END" && (
              <>
                <span> - </span>
                <TimePopover
                  time={endTime || "--:--"}
                  enabled={student.visitations[0] && student.visitations[0].endNotes !== null}
                  notes={student.visitations[0]?.endNotes}
                  title={"Anmerkung Endzeit"}
                />
              </>
            )}
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: "more-information",
      header: "",
      enableSorting: false,

      cell: ({ row: { original: student } }) => {
        const exception = getStudentException(student);

        return (
          <div className="flex space-x-1 items-center">
            {student.visitations[0]?.hasHomework && (
              <div className="h-[25px] w-[25px] flex items-center justify-center">
                <Icon path={mdiFileDocumentOutline} size={1} />
              </div>
            )}
            {exception && exception.notes && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="light" size={"icon"} className="rounded-lg h-[25px] w-[25px]">
                    <Icon path={mdiHelp} size={0.7} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <h3 className="font-medium">{studentExceptionPresence[exception.presence]}</h3>
                  <p className="text-muted-foreground text-sm max-h-[397px] overflow-auto">{exception.notes}</p>
                </PopoverContent>
              </Popover>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "visitation",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: student } }) => {
        const exception = getStudentException(student);

        return (
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icon size={0.8} path={mdiDotsVertical} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setEdit(student.id)} disabled={exception?.presence === "ABSENT"}>
                  <Icon size={0.8} path={mdiClockEditOutline} />
                  <span>Anwesenheit bearbeiten</span>
                </DropdownMenuItem>
                {exception ? (
                  <Link
                    href={`/students/${student.id}/exceptions/${exception.id}/edit?referrer=lists_${list.id}_${dayjs(date).format("YYYY-MM-DD")}`}
                  >
                    <DropdownMenuItem>
                      <Icon size={0.8} path={mdiCalendarEdit} />
                      <span>Ausnahme bearbeiten</span>
                    </DropdownMenuItem>
                  </Link>
                ) : (
                  <Link
                    href={`/students/${student.id}/exceptions/create?lists=[${list.id}]&dates=["${dayjs(date).format("YYYY-MM-DD")}"]&mode=multiple&referrer=lists_${list.id}_${dayjs(date).format("YYYY-MM-DD")}`}
                  >
                    <DropdownMenuItem>
                      <Icon size={0.8} path={mdiCalendarPlus} />
                      <span>Ausnahme erstellen</span>
                    </DropdownMenuItem>
                  </Link>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={students} filter={{ column: "fullName", placeholder: "Suche" }} hiddenCols={hiddenCols} />
      <EditTimeDialog
        listId={list.id}
        open={edit !== null}
        closeDialog={() => setEdit(null)}
        studentId={edit}
        visitation={students.find((student) => student.id === edit)?.visitations[0]}
        date={date}
        recordTime={list.recordTime}
        isMainList={list.isMainList}
      />
      <AttendanceWarningDialog
        open={attendanceWarning !== null}
        closeDialog={() => setAttendanceWarning(null)}
        confirm={() => {
          const student = students.find((student) => student.id === attendanceWarning);

          if (student) {
            const presentState = getPresentState(student, date);
            onVisitingWrapper(student.id, presentState.visitation, list.id, date, list.recordTime);
            setAttendanceWarning(null);
          }
        }}
      />
    </>
  );
}

type AttendanceTimeStatus = "IN_TIME" | "CLOSE_TO_TIME" | "OVER_TIME" | "DONE";

const EndTimeNote = ({ student, attendance }: { student: Student; attendance: Pick<Prisma.AttendanceGetPayload<{}>, "end"> | null }) => {
  const getAttendanceStatus = (attendanceStatus?: AttendanceTimeStatus) => {
    let status = attendanceStatus || "DONE";
    const currMinutes = dayjs().hour() * 60 + dayjs().minute();

    if (student.visitations[0] && student.visitations[0].end !== null) {
      status = "DONE";
    } else if ((attendance?.end ?? 0) > currMinutes) {
      if ((attendance?.end ?? 0) - currMinutes <= 15) {
        status = "CLOSE_TO_TIME";
      } else {
        status = "IN_TIME";
      }
    } else if ((attendance?.end ?? 0) <= currMinutes) {
      status = "OVER_TIME";
    }

    return status;
  };

  // state
  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceTimeStatus>(getAttendanceStatus());

  useEffect(() => {
    getAttendanceStatus();
    // eslint-disable-next-line
  }, [student]);

  useEffect(() => {
    // interval every 3 minutes
    const interval = setInterval(
      () => {
        const attendanceStatus = getAttendanceStatus();

        setAttendanceStatus(attendanceStatus);
      },
      1000 * 3 * 60
    );

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const attendanceTimeClassnames: Record<AttendanceTimeStatus, string> = {
    DONE: "bg-green-500/10 border-green-500",
    IN_TIME: "bg-gray-300/10 border-gray-300",
    CLOSE_TO_TIME: "bg-orange-400/10 border-orange-400",
    OVER_TIME: "bg-red-500/10 border-red-500",
  };

  if (!attendance) return null;

  return (
    <span className={cn("rounded-xl border-2 px-1.5 py-0.5 text-sm font-medium", attendanceTimeClassnames[attendanceStatus])}>
      {timeToString(attendance?.end)}
    </span>
  );
};

export const TimePopover = ({ time, enabled, notes, title }: { time: string; enabled: boolean; notes: string | null; title: string }) => {
  if (!enabled) return <span>{time}</span>;

  return (
    <Popover>
      <PopoverTrigger className={"text-primary hover:underline"}>{time || "--:--"}</PopoverTrigger>
      <PopoverContent>
        <h3 className="font-medium">{title}</h3>
        <p className="text-muted-foreground text-sm max-h-[397px] overflow-auto">{notes}</p>
      </PopoverContent>
    </Popover>
  );
};
