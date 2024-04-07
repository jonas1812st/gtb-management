import { cn } from "@/lib/utils";

export const Td = ({
  children,
  colSpan,
}: {
  children: React.ReactNode;
  colSpan?: number;
}) => (
  <td className="p-3" colSpan={colSpan}>
    {children}
  </td>
);

export const Tr = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <tr className={cn("border-b last:border-b-0", className)}>{children}</tr>;

export const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="p-3 text-left">{children}</th>
);

export const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="w-full border-collapse">{children}</table>
);
