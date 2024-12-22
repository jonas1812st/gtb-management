import { ListCycleType, ListStudentNotes, RecordTime, TimeManagement } from "@prisma/client";
import { z } from "zod";
import { DEFAULT_BUFFER } from "./constants";

export const TimeSchema = z.number().gte(0).lte(1439).default(960); // 00:00 - 23:59 <=> 0 - 1439
export const WeekDaySchema = z.number().gte(0).lte(6); // 0 (monday) to 6 (sunday)

export const CreateAttendanceInputSchema = z.object({
  day: z.number().gte(0).lte(4),
  end: TimeSchema,
});

export const CreateStudentInputSchema = z.object({
  firstName: z.string().trim().min(1).max(50),
  lastName: z.string().trim().min(1).max(50),
  notes: z.string().trim().min(1).max(500).nullish(),
  grade: z.number(),
  className: z.string().length(1).toUpperCase(),
  attendances: z.array(CreateAttendanceInputSchema.optional()),
});

export const CreateListActivationSchema = z.object({
  day: WeekDaySchema,
  startTime: TimeSchema,
  startBuffer: z.number().gt(0).lte(60).optional().default(DEFAULT_BUFFER), // buffer in minutes
  endTime: TimeSchema,
  endBuffer: z.number().gt(0).lte(60).optional().default(DEFAULT_BUFFER), // buffer in minutes
});

export const CreateListInputSchema = z.object({
  name: z.string().trim().min(1).max(50),
  recordTime: z.nativeEnum(RecordTime),
  table: z.object({
    studentName: z.boolean(),
    className: z.boolean(),
    time: z.boolean(),
    notes: z.nativeEnum(ListStudentNotes),
    groupColor: z.boolean(),
  }),
  cycle: z.nativeEnum(ListCycleType),
  activations: z.array(CreateListActivationSchema),
  manageTime: z.nativeEnum(TimeManagement),
});

export const CreateGroupInputSchema = z.object({
  name: z.string().trim().min(1).max(50),
  color: z.string().optional(),
  studentIds: z.number().array().min(1),
  listId: z.number(),
});
