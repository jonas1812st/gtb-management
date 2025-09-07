import Link from "next/link";
import { Button } from "../ui/button";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { Input } from "../ui/input";
import { DataTableProps } from "@/lib/useTable";
import { Table } from "@tanstack/react-table";

export default function AddItem<TData, TValue>({
  table,
  filter,
  addItemBtn,
}: {
  table: Table<TData>;
  filter: DataTableProps<TData, TValue>["filter"];
  addItemBtn?: { label: string } & ({ type: "url"; url: string } | { type: "click"; onClick: () => void });
}) {
  return addItemBtn || filter ? (
    <div className="flex items-center justify-between pb-4">
      {addItemBtn && addItemBtn.type === "url" ? (
        <Link href={addItemBtn.url}>
          <Button size={"sm"} variant={"secondary"} icon={{ path: mdiPlus }}>
            {addItemBtn.label}
          </Button>
        </Link>
      ) : addItemBtn && addItemBtn.type === "click" ? (
        <Button size={"sm"} variant={"secondary"} icon={{ path: mdiPlus }} onClick={addItemBtn.onClick}>
          {addItemBtn.label}
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
  ) : null;
}
