import { z } from "zod";

export const AttendanceResponseSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  day: z.number(),
  end: z.number(),
  studentId: z.number(),
});

export const StudentResponseSchema = z.object({
  id: z.number(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  notes: z.string().min(1).nullable(),
  grade: z.number(),
  className: z.string().toUpperCase().min(1),
  attendances: z.array(AttendanceResponseSchema),
});

export const StudentInputSchema = StudentResponseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
