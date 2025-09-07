import React from "react";
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filter?: { column: string; placeholder: string };
  className?: {
    tableContainer?: string;
  };
  hiddenCols?: string[];
  initialSorting?: SortingState;
}

export interface AdditionalElements {
  addItemBtn?: { label: string } & ({ type: "url"; url: string } | { type: "click"; onClick: () => void });
}

export function useTable<TData, TValue>({
  data,
  columns,
  initialSorting = [],
  hiddenCols = [],
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility: hiddenCols.reduce((acc, curr) => ((acc[curr] = false), acc), {} as Record<string, boolean>),
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  return {
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    table,
  };
}
