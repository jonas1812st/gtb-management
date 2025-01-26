"use client";

import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { DataTable } from "@/components/form/dataForm";
import dayjs from "dayjs";
import "dayjs/locale/de";
dayjs.locale("de");

export const StudentLists = ({
  attendances,
  lists,
  visitations,
}: {
  attendances: Prisma.AttendanceGetPayload<{}>[];
  lists: Prisma.ListGetPayload<{}>[];
  visitations: Prisma.VisitationGetPayload<{}>[];
}) => {
  const [selectedListId, setSelectedListId] = useState(lists[0]?.id ?? null);
  const selectedList = lists.find((list) => list.id === selectedListId);

  const activeAttendances = attendances.filter((attendance) => attendance.listId === selectedListId && attendance.status === "PRESENT");

  const columns: ColumnDef<Prisma.VisitationGetPayload<{}>>[] = [
    {
      accessorKey: "date",
      header: "Datum",
      accessorFn: (row) => dayjs(row.date).format("ddd DD.MM.YYYY"),
    },
    {
      accessorKey: "time",
      header: "Zeiten",
      accessorFn: (row) =>
        dayjs(row.date).minute(row.start).format("HH:mm") +
        (selectedList?.recordTime === "START_END" ? " - " + (row.end ? dayjs(row.date).minute(row.end).format("HH:mm") : "--:--") : ""),
    },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex gap-x-2 items-end justify-between">
        <h1 className="text-xl font-semibold">Listen</h1>
        <Select
          value={selectedListId + "_list"}
          onValueChange={(value) => {
            const listId = parseInt(value.split("_")[0]);
            if (!isNaN(listId)) setSelectedListId(listId);
          }}
        >
          <SelectTrigger className="w-fit">
            <SelectValue placeholder="Liste" />
          </SelectTrigger>
          <SelectContent>
            {lists.map((list) => (
              <SelectItem key={list.id + "_list_select_item"} value={list.id + "_list"}>
                {list.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-lg">
        {selectedList?.manageTime === "STUDENT" && (
          <div className="p-3 pb-0 flex space-x-3 items-center">
            <h4 className="font-medium">Anwesenheiten:</h4>
            <div className="flex flex-wrap gap-2">
              {activeAttendances.length !== 0 ? (
                activeAttendances.map((attendance) => (
                  <span key={attendance.id + "_attendance_element"} className="text-sm p-1.5 border rounded-md">
                    {dayjs()
                      .day(attendance.day + 1)
                      .format("ddd")}{" "}
                    {dayjs().hour(0).minute(attendance.end).format("HH:mm")}
                  </span>
                ))
              ) : (
                <i>Keine Anwesenheiten</i>
              )}
            </div>
          </div>
        )}
        <div className="max-h-[400px] overflow-auto p-3">
          <DataTable columns={columns} data={visitations.filter((visitation) => visitation.listId === selectedListId)} />
        </div>
      </div>
    </div>
  );
};
