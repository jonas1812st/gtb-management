import { PropsWithChildren } from "react";
import { Table, Td, Tr } from "./form/table";
import { cn } from "@/lib/utils";

export const DetailsHeading = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <h1 className={cn("text-xl font-semibold mb-2", className)}>{children}</h1>
);

export const DetailsContainer = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <div className={cn("border rounded-lg", className)}>{children}</div>
);

export const DetailsTable = ({ children }: PropsWithChildren<{}>) => (
  <Table>
    <tbody>{children}</tbody>
  </Table>
);

type TableItemType = {
  label: string;
  value: string | number | React.ReactNode;
};

export const DetailsTableContent = ({ items }: { items: TableItemType[] }) => (
  <>
    {items.map((item, index) => (
      <DetailsTableItem key={index + "_table_item"} value={item.value} label={item.label} />
    ))}
  </>
);

export const DetailsTableItem = ({ label, value }: { label: string; value: string | number | React.ReactNode }) => (
  <Tr>
    <Td className="font-semibold text-gray-600">{label}</Td>
    <Td>{value}</Td>
  </Tr>
);
