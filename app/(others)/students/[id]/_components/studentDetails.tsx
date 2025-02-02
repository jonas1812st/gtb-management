"use client";

import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { DataTable } from "@/components/form/dataForm";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { DetailsContainer, DetailsHeading } from "@/components/details";
import Link from "next/link";
dayjs.locale("de");

export const StudentLists = ({
  attendances,
  lists,
  visitations,
}: {
  attendances: Prisma.AttendanceGetPayload<{}>[];
  lists: Prisma.ListGetPayload<{
    include: {
      activations: true;
    };
  }>[];
  visitations: Prisma.VisitationGetPayload<{}>[];
}) => {
  const [selectedListId, setSelectedListId] = useState(lists[0]?.id ?? null);
  const selectedList = lists.find((list) => list.id === selectedListId);

  const presentEntries = attendances.filter((attendance) => attendance.listId === selectedListId && attendance.status === "PRESENT");
  const absentEntries = attendances.filter((attendance) => attendance.listId === selectedListId && attendance.status === "ABSENT");

  const attendingDays = selectedList?.activations
    .filter((activation) => !absentEntries.some((entry) => activation.day === entry.day))
    .map((activation) => ({
      id: activation.id,
      day: activation.day,
      end: presentEntries.find((entry) => entry.day === activation.day)?.end ?? activation.endTime,
    }));

  const columns: ColumnDef<Prisma.VisitationGetPayload<{}>>[] = [
    {
      accessorKey: "date",
      header: "Datum",
      accessorFn: (row) => dayjs(row.date).format("ddd DD.MM.YYYY"),
      cell: ({ row: { original: visitation } }) => {
        return (
          <Link href={`/lists/${selectedListId}/${dayjs(visitation.date).format("YYYY-MM-DD")}`}>
            {dayjs(visitation.date).format("ddd DD.MM.YYYY")}
          </Link>
        );
      },
    },
    {
      accessorKey: "time",
      header: "Zeiten",
      accessorFn: (row) =>
        dayjs(row.date).minute(row.start).format("HH:mm") +
        (selectedList?.recordTime === "START_END" ? " - " + (row.end ? dayjs(row.date).minute(row.end).format("HH:mm") : "--:--") : ""),
      enableSorting: false,
    },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex gap-x-2 items-end justify-between">
        <DetailsHeading className="mb-0">Listen</DetailsHeading>
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

      <DetailsContainer>
        {selectedList?.manageTime === "STUDENT" && (
          <div className="p-3 pb-0 flex space-x-3 items-center">
            <h4 className="font-medium">Anwesenheiten:</h4>
            <div className="flex flex-wrap gap-2">
              {attendingDays?.length !== 0 ? (
                attendingDays?.map((attendance) => (
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
      </DetailsContainer>
    </div>
  );
};
