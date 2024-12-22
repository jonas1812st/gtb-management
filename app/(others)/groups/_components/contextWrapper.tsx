"use client";

import { Prisma } from "@prisma/client";
import { ListsContext, StudentsContext } from "./context";

export const ListsContextWrapper = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Prisma.ListGetPayload<{
    include: {
      options: {
        include: {
          activations: true;
          ListTableInformation: true;
        };
      };
      Group: true;
    };
  }>[];
}) => {
  return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>;
};

export const StudentsContextWrapper = ({ children, value }: { children: React.ReactNode; value: Prisma.StudentGetPayload<{}>[] }) => {
  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>;
};
