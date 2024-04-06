import { z } from "zod";

export const CreateAttendanceInputSchema = z.object({
  day: z.number().gte(0).lte(5),
  end: z.number().gte(0).lte(1439),
});

export const CreateStudentInputSchema = z.object({
  firstName: z.string().trim().min(1).max(50),
  lastName: z.string().trim().min(1).max(50),
  notes: z.string().trim().min(1).max(500).nullish(),
  grade: z.number(),
  className: z.string().length(1).toUpperCase(),
  attendances: z.array(CreateAttendanceInputSchema.optional()),
});
