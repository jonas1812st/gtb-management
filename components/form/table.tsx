export const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="p-3">{children}</td>
);

export const Tr = ({ children }: { children: React.ReactNode }) => (
  <tr className="border-b last:border-b-0">{children}</tr>
);

export const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="p-3 text-left">{children}</th>
);

export const Table = ({ children }: { children: React.ReactNode }) => (
  <table className="w-full border-collapse">{children}</table>
);
