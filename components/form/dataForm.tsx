"use client";

import React from "react";
import { AdditionalElements, DataTableProps, useTable } from "@/lib/useTable";
import AddItem from "./dataTableAddItem";
import { DataTableComp } from "./dataTableComp";

export function DataTable<TData, TValue>({
  columns,
  data,
  filter,
  addItemBtn,
  className,
  hiddenCols = [],
  initialSorting = [],
}: DataTableProps<TData, TValue> & AdditionalElements) {
  const { table } = useTable({
    data,
    columns,
    hiddenCols,
    initialSorting,
  });

  return (
    <div>
      <AddItem table={table} filter={filter} addItemBtn={addItemBtn} />
      <DataTableComp columns={columns} className={className} table={table} />
    </div>
  );
}
