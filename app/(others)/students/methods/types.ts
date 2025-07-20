import { RequiredBy } from "@/types/global";
import { Prisma } from "@prisma/client";

export type AttendanceZodSchemaType = RequiredBy<Omit<Prisma.AttendanceCreateWithoutStudentInput, "List">, "status"> & {
  listId: number;
};
