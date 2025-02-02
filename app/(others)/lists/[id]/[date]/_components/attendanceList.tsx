"use client";

import { onVisiting } from "../_methods/visit";
import { DataTable } from "@/components/form/dataForm";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { timeToString } from "@/utils/time";
import { mdiClockEditOutline, mdiDotsVertical, mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import { PopoverClose } from "@radix-ui/react-popover";
import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditTimeDialog from "./time";
import { AttendanceWarningDialog } from "./warnings";
import { Checkbox } from "@/components/ui/checkbox";

type Student = Prisma.StudentGetPayload<{
  include: {
    attendances: true;
    visitations: true;
    GroupsOnStudents: {
      include: {
        group: true;
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
  const [edit, setEdit] = useState<number | null>(null);
  const [attendanceWarning, setAttendanceWarning] = useState<number | null>(null);
  const hiddenCols = ["fullName", "class", "time", "groupColor"].filter((_, i) => ![list.studentName, list.className, list.time, list.groupColor][i]);

  const columns: ColumnDef<Student>[] = [
    {
      accessorKey: "isPresent",
      header: "Anwesend",
      cell: ({ row: { original: student } }) => {
        // !!! when changing something here, the code below at AttendanceWarningDialog.confirm has to be changed too
        const presentState = getPresentState(student, date);

        return (
          <div className="w-[78px] flex gap-2 justify-between items-center">
            {student.attendances[0] !== undefined ? <EndTimeNote student={student} /> : <div />}
            <Checkbox
              defaultChecked={presentState.state === "visiting"}
              onCheckedChange={() => {
                // !!! when changing something here, the code below at AttendanceWarningDialog.confirm has to be changed too

                if (list.recordTime === "START" && presentState.visitation?.start) {
                  setAttendanceWarning(student.id);
                  return;
                }

                onVisiting(student.id, presentState.visitation, list.id, date, list.recordTime);
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

        return (
          <Link href={"/students/" + student.id} className={cn("flex gap-x-2", notesExist && list.notes !== "MARKED" ? "flex-col" : "items-center")}>
            <span>
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

        return (startTime || "--:--") + (list.recordTime === "START_END" ? " - " + (endTime || "--:--") : list.recordTime === "START" ? "" : "");
      },
      enableSorting: false,
    },
    {
      accessorKey: "visitation",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: student } }) => (
        <div className="flex items-center">
          <Popover>
            <PopoverTrigger>
              <Icon size={0.8} path={mdiDotsVertical} />
            </PopoverTrigger>
            <PopoverContent className="p-2 w-fit">
              <div className="flex flex-col">
                <PopoverClose
                  onClick={() => setEdit(student.id)}
                  className="p-2 hover:bg-gray-100 transition rounded-md text-left flex space-x-2 items-center pe-5"
                >
                  <Icon size={0.9} path={mdiClockEditOutline} />
                  <span>Anwesenheit bearbeiten</span>
                </PopoverClose>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
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
      />
      <AttendanceWarningDialog
        open={attendanceWarning !== null}
        closeDialog={() => setAttendanceWarning(null)}
        confirm={() => {
          const student = students.find((student) => student.id === attendanceWarning);

          if (student) {
            const presentState = getPresentState(student, date);
            onVisiting(student.id, presentState.visitation, list.id, date, list.recordTime);
            setAttendanceWarning(null);
          }
        }}
      />
    </>
  );
}

type AttendanceTimeStatus = "IN_TIME" | "CLOSE_TO_TIME" | "OVER_TIME" | "DONE";

const EndTimeNote = ({ student }: { student: Student }) => {
  const currentAttendance = student.attendances[0];

  const getAttendanceStatus = (attendanceStatus?: AttendanceTimeStatus) => {
    let status = attendanceStatus || "DONE";
    const currMinutes = dayjs().hour() * 60 + dayjs().minute();

    if (student.visitations[0] && student.visitations[0].end !== null) {
      status = "DONE";
    } else if (currentAttendance.end > currMinutes) {
      if (currentAttendance.end - currMinutes <= 15) {
        status = "CLOSE_TO_TIME";
      } else {
        status = "IN_TIME";
      }
    } else if (currentAttendance.end <= currMinutes) {
      status = "OVER_TIME";
    }

    return status;
  };

  // state
  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceTimeStatus>(getAttendanceStatus());

  useEffect(() => {
    getAttendanceStatus();
  }, [student]);

  useEffect(() => {
    // interval every 3 minutes
    const interval = setInterval(
      () => {
        setAttendanceStatus(getAttendanceStatus());
      },
      1000 * 3 * 60
    );

    return () => clearInterval(interval);
  }, []);

  const attendanceTimeClassnames: Record<AttendanceTimeStatus, string> = {
    DONE: "bg-green-500/10 border-green-500",
    IN_TIME: "bg-gray-300/10 border-gray-300",
    CLOSE_TO_TIME: "bg-orange-400/10 border-orange-400",
    OVER_TIME: "bg-red-500/10 border-red-500",
  };

  if (!currentAttendance) return null;

  return (
    <span className={cn("rounded-xl border-2 px-1.5 py-0.5 text-sm font-medium", attendanceTimeClassnames[attendanceStatus])}>
      {timeToString(currentAttendance?.end)}
    </span>
  );
};
