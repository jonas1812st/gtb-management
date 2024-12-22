import { Prisma } from "@prisma/client";
import { createContext, useContext } from "react";

export const ListsContext = createContext<
  | Prisma.ListGetPayload<{
      include: {
        options: {
          include: {
            activations: true;
            ListTableInformation: true;
          };
        };
        Group: true;
      };
    }>[]
  | null
>(null);

export const useListsContext = () => {
  const listsContext = useContext(ListsContext);

  if (!listsContext) throw new Error("Lists are not defined");

  return listsContext;
};

export const StudentsContext = createContext<Prisma.StudentGetPayload<{}>[] | null>(null);

export const useStudentsContext = () => {
  const studentsContext = useContext(StudentsContext);

  if (!studentsContext) throw new Error("Students are not defined");

  return studentsContext;
};
