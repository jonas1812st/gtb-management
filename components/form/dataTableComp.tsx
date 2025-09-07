import { AdditionalElements, DataTableProps } from "@/lib/useTable";
import { cn } from "@/lib/utils";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";
import { type Table, flexRender } from "@tanstack/react-table";

export function DataTableComp<TData, TValue>({
  className,
  table,
  columns,
}: {
  className?: DataTableProps<TData, TValue>["className"];
  table: Table<TData>;
  columns: DataTableProps<TData, TValue>["columns"];
}) {
  return (
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
                        className: cn(
                          "flex items-center",
                          header.column.getCanSort() ? "cursor-pointer select-none" : ""
                        ),
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
  );
}

const Table = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("rounded-md border", className)}>
    <table className="w-full border-collapse">{children}</table>
  </div>
);

const TableHeader = ({ children }: { children?: React.ReactNode }) => <thead>{children}</thead>;

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
  <th className={cn("p-4", className)} colSpan={colSpan}>
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
  <td className={cn("p-4", className)} colSpan={colSpan} {...props}>
    {children}
  </td>
);
