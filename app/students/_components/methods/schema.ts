import {
  AttendanceCreateWithoutStudentInputSchema,
  StudentCreateWithoutAttendancesInputSchema,
} from "@/prisma/generated/zod";
import { z } from "zod";

export const InputSchema = z.object({
  student: StudentCreateWithoutAttendancesInputSchema.transform((values) => ({
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    notes: values.notes?.trim() || null,
    grade: values.grade,
    className: values.className.toUpperCase().trim(),
  })),
  attendances: z.array(
    AttendanceCreateWithoutStudentInputSchema.transform((values) => ({
      day: values.day,
      end: values.end,
    })),
  ),
});
