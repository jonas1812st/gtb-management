import { z } from "zod";

export const StudentResponseSchema = z.object({
  id: z.number(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  notes: z.string().min(1).nullable(),
  grade: z.number(),
  className: z.string().toUpperCase().min(1),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export const StudentInputSchema = StudentResponseSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});
