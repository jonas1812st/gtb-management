import { z } from "zod";

export const StudentResponseSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().nullable(),
  grade: z.number(),
  className: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
});

export const StudentInputSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  notes: z.string().nullable(),
  grade: z.number(),
  className: z.string(),
});
