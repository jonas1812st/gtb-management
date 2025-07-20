"use client";

import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/form/dataForm";
import dayjs from "dayjs";
import "dayjs/locale/de";
import { DetailsHeading } from "@/components/details";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiCalendar, mdiCheck, mdiClose, mdiDelete, mdiDotsVertical, mdiPencil, mdiPlus } from "@mdi/js";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";
import { useState } from "react";
import { timeToString } from "@/utils/time";
import { studentExceptionPresence } from "@/utils/enum-translations";
import { ApiResponseMessage } from "@/types/global";

dayjs.locale("de");

type ExceptionItem = Prisma.ExceptionGetPayload<{ include: { SpecificDates: true; ExceptionsOnLists: { include: { list: true } } } }>;

export const ExceptionsList = ({
  exceptions,
  studentId,
  actions,
}: {
  exceptions: ExceptionItem[];
  studentId: number;
  actions: {
    deleteException: (id: number) => Promise<ApiResponseMessage>;
  };
}) => {
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const onDelete = async () => {
    if (!deleteId) return;

    const response = await actions.deleteException(deleteId);

    if (response.success) {
      toast.success("Erfolgreich gelöscht");
      setDeleteId(null);
    }
    if (!response.success) {
      toast.success("Es ist ein Fehler aufgetreten");
    }
  };

  const defaultCalendarProps = {
    className: "rounded-md border",
    weekStartsOn: 1 as const,
    disabled: true,
  };

  const columns: ColumnDef<ExceptionItem>[] = [
    {
      accessorKey: "presence",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: exception } }) => (
        <div className="flex justify-center">
          {
            {
              PRESENT: (
                <span className="rounded-xl border-2 px-1.5 py-0.5 text-sm font-medium bg-gray-300/10 border-gray-300">
                  {timeToString(exception.end)}
                </span>
              ),
              ABSENT: (
                <div className="p-0.5 rounded-full border-2 border-gray-300 bg-gray-300/10">
                  <Icon path={mdiClose} size={0.7} />
                </div>
              ),
            }[exception.presence]
          }
        </div>
      ),
      accessorFn: (row) => studentExceptionPresence[row.presence],
    },
    {
      accessorKey: "date",
      header: "Datum",
      accessorFn: (row) =>
        row.startDate
          ? dayjs(row.startDate).format("DD.MM.YYYY") + " - " + dayjs(row.endDate).format("DD.MM.YYYY")
          : row.SpecificDates.map((date) => dayjs(date.date).format("DD.MM.YYYY")).join(" "),
      cell: ({ row: { original: exception } }) => (
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="rounded-xl p-1.5 h-fit" variant={"light"}>
                {exception.startDate
                  ? dayjs(exception.startDate).format("DD.MM.YY") + " - " + dayjs(exception.endDate).format("DD.MM.YY")
                  : exception.SpecificDates.length <= 2
                    ? exception.SpecificDates.sort((dateA, dateB) => (dayjs(dateA.date).isAfter(dateB.date) ? 1 : -1))
                        .map((date) => dayjs(date.date).format("DD.MM.YY"))
                        .join(", ")
                    : exception.SpecificDates.length + " Tage ausgewählt"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              {exception.startDate && exception.endDate ? (
                <Calendar
                  {...defaultCalendarProps}
                  mode={"range"}
                  selected={{
                    from: exception.startDate,
                    to: exception.endDate,
                  }}
                />
              ) : (
                <Calendar {...defaultCalendarProps} mode={"multiple"} selected={exception.SpecificDates.map((date) => date.date)} />
              )}
            </PopoverContent>
          </Popover>
        </div>
      ),
    },
    {
      accessorKey: "lists",
      header: "Listen",
      enableSorting: false,
      accessorFn: (row) => row.ExceptionsOnLists.map((exceptionOnList) => exceptionOnList.list.name).join(" "),
      cell: ({ row: { original: exception } }) => (
        <div className="flex flex-wrap">
          {exception.ExceptionsOnLists.map((exceptionOnList) => (
            <Link href={"/lists/" + exceptionOnList.listId} key={exceptionOnList.listId + "_list_link"}>
              <Button variant={"link"} size={"xs"} className="px-0.5 py-0">
                {exceptionOnList.list.name}
              </Button>
            </Link>
          ))}
        </div>
      ),
    },
    {
      accessorKey: "notes",
      header: "Beschreibung",
      accessorFn: (row) => row.notes,
      enableSorting: false,
      cell: ({ row: { original: exception } }) =>
        exception.notes && (
          <div className="min-w-[200px] break-words">
            <span>
              {exception.notes?.slice(0, 65)}
              {exception.notes.length > 65 && "..."}
            </span>
            {exception.notes.length > 65 && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="inline-block p-0.5 px-1 text-sm ms-1 h-fit">
                    mehr
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <DialogTitle>Mehr lesen</DialogTitle>
                  <p className="max-h-[397px] overflow-auto">{exception.notes}</p>
                </DialogContent>
              </Dialog>
            )}
          </div>
        ),
    },
    {
      accessorKey: "actions",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: exception } }) => (
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Icon size={0.8} path={mdiDotsVertical} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href={`/students/${studentId}/exceptions/${exception.id}/edit`}>
                <DropdownMenuItem>
                  <Icon size={0.8} path={mdiPencil} />
                  <span>Ausnahme bearbeiten</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={() => setDeleteId(exception.id)}>
                <Icon size={0.8} path={mdiDelete} />
                <span>Löschen</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex gap-x-2 items-end justify-between mb-2">
        <DetailsHeading className="mb-0">Ausnahmen</DetailsHeading>
        <Link href={`/students/${studentId}/exceptions/create`}>
          <Button className="flex items-center space-x-1" variant="light" size={"sm"}>
            <Icon path={mdiPlus} size={0.7} />
            <span>Neue Ausnahme</span>
          </Button>
        </Link>
      </div>

      <div className="max-h-[400px] overflow-auto">
        <DataTable columns={columns} data={exceptions} />
      </div>

      <Dialog open={deleteId !== null} onOpenChange={(close) => !close && setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Möchtest du diese Ausnahme löschen?</DialogTitle>
            <DialogDescription>
              Diese Aktion kann nicht rückgängig gemacht werden. Diese Ausnahme wird permanent von diesem System gelöscht.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Abbrechen
              </Button>
            </DialogClose>
            <Button variant={"destructive"} onClick={onDelete}>
              Endgültig löschen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
