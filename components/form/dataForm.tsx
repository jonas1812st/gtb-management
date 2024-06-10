"use client";

import { cn } from "@/lib/utils";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter: { column: string; placeholder: string };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filter,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="flex items-center justify-end py-4">
        <Input
          type="text"
          placeholder={filter.placeholder}
          value={
            (table.getColumn(filter.column)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(filter.column)?.setFilterValue(event.target.value)
          }
          className="w-[340px]"
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: cn(
                            "flex items-center",
                            header.column.getCanSort()
                              ? "cursor-pointer select-none"
                              : "",
                          ),
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}{" "}
                        {{
                          asc: (
                            <Icon
                              path={mdiChevronDown}
                              size={0.8}
                              className="text-gray-700"
                            />
                          ),
                          desc: (
                            <Icon
                              path={mdiChevronUp}
                              size={0.8}
                              className="text-gray-700"
                            />
                          ),
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
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              const hasRowMeta = row.getAllCells()[0].getContext().cell.column
                .columnDef.meta;

              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  {...(hasRowMeta && {
                    ...hasRowMeta.getCellContext(
                      row.getAllCells()[0].getContext(),
                    ).row,
                  })}
                >
                  {row.getVisibleCells().map((cell) => {
                    const hasCellMeta =
                      cell.getContext().cell.column.columnDef.meta;

                    return (
                      <TableCell
                        key={cell.id}
                        {...(hasCellMeta && {
                          ...hasCellMeta.getCellContext(cell.getContext()).cell,
                        })}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
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

const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border overflow-hidden">
    <table className="w-full border-collapse">{children}</table>
  </div>
);

const TableHeader = ({ children }: { children?: React.ReactNode }) => (
  <thead>{children}</thead>
);

const TableBody = ({ children }: { children?: React.ReactNode }) => (
  <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
);

const TableRow = ({ children, ...props }: { children: React.ReactNode }) => (
  <tr className="border-b" {...props}>
    {children}
  </tr>
);

const TableHead = ({
  children,
  colSpan,
  className,
}: {
  children?: React.ReactNode;
  colSpan?: number;
  className?: string;
}) => (
  <th className={cn("p-3", className)} colSpan={colSpan}>
    {children}
  </th>
);

const TableCell = ({
  children,
  colSpan,
  className,
  ...props
}: {
  children?: React.ReactNode;
  colSpan?: number;
  className?: string;
}) => (
  <td className={cn("p-3", className)} colSpan={colSpan} {...props}>
    {children}
  </td>
);
