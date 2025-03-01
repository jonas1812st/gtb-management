"use client";

import { cn } from "@/lib/utils";
import { mdiChevronDown, mdiChevronUp, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import React from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: { column: string; placeholder: string };
  className?: {
    tableContainer?: string;
  };
  hiddenCols?: string[];
  initialSorting?: SortingState;
}

interface AdditionalElements {
  addItemBtn?: { label: string } & ({ type: "url"; url: string } | { type: "click"; onClick: () => void });
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filter,
  addItemBtn,
  className,
  hiddenCols = [],
  initialSorting,
}: DataTableProps<TData, TValue> & AdditionalElements) {
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting ?? []);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    initialState: {
      columnVisibility: hiddenCols.reduce((acc, curr) => ((acc[curr] = false), acc), {} as Record<string, boolean>),
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      {(addItemBtn || filter) && (
        <div className="flex items-center justify-between pb-4">
          {addItemBtn && addItemBtn.type === "url" ? (
            <Link href={addItemBtn.url}>
              <Button className="flex items-center space-x-2" size={"sm"} variant={"secondary"}>
                <Icon size={0.7} path={mdiPlus} />
                <span>{addItemBtn.label}</span>
              </Button>
            </Link>
          ) : addItemBtn && addItemBtn.type === "click" ? (
            <Button className="flex items-center space-x-2" size={"sm"} variant={"secondary"} onClick={addItemBtn.onClick}>
              <Icon size={0.7} path={mdiPlus} />
              <span>{addItemBtn.label}</span>
            </Button>
          ) : (
            <div />
          )}

          {filter && (
            <Input
              type="text"
              placeholder={filter.placeholder}
              value={(table.getColumn(filter.column)?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn(filter.column)?.setFilterValue(event.target.value)}
              className="w-[340px]"
            />
          )}
        </div>
      )}
      <Table className={className?.tableContainer}>
        <TableHeader>
          {table?.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: cn("flex items-center", header.column.getCanSort() ? "cursor-pointer select-none" : ""),
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <Icon path={mdiChevronDown} size={0.8} className="text-gray-700" />,
                          desc: <Icon path={mdiChevronUp} size={0.8} className="text-gray-700" />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table?.getRowModel().rows?.length ? (
            table?.getRowModel().rows.map((row) => {
              const hasRowMeta = row.getAllCells()[0].getContext().cell.column.columnDef.meta;

              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  {...(hasRowMeta && {
                    ...hasRowMeta.getCellContext(row.getAllCells()[0].getContext()).row,
                  })}
                >
                  {row.getVisibleCells().map((cell) => {
                    const hasCellMeta = cell.getContext().cell.column.columnDef.meta;

                    return (
                      <TableCell
                        key={cell.id}
                        {...(hasCellMeta && {
                          ...hasCellMeta.getCellContext(cell.getContext()).cell,
                        })}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                <i className="text-gray-500 font-medium">Keine Einträge</i>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

const Table = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("rounded-md border", className)}>
    <table className="w-full border-collapse">{children}</table>
  </div>
);

const TableHeader = ({ children }: { children?: React.ReactNode }) => <thead>{children}</thead>;

const TableBody = ({ children }: { children?: React.ReactNode }) => <tbody className="[&_tr:last-child]:border-0">{children}</tbody>;

const TableRow = ({ children, ...props }: { children: React.ReactNode }) => (
  <tr className="border-b" {...props}>
    {children}
  </tr>
);

const TableHead = ({ children, colSpan, className }: { children?: React.ReactNode; colSpan?: number; className?: string }) => (
  <th className={cn("p-4", className)} colSpan={colSpan}>
    {children}
  </th>
);

const TableCell = ({ children, colSpan, className, ...props }: { children?: React.ReactNode; colSpan?: number; className?: string }) => (
  <td className={cn("p-4", className)} colSpan={colSpan} {...props}>
    {children}
  </td>
);
