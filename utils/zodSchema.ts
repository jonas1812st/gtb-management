import { AttendanceStatus, ExceptionPresence, ListStudentNotes, RecordTime, TimeManagement } from "@prisma/client";
import { z } from "zod";
import { DEFAULT_BUFFER, DEFAULT_STUDENT_END_TIME } from "./constants";

export const TimeSchema = z.number().gte(0).lte(1439); // 00:00 - 23:59 <=> 0 - 1439
export const WeekDaySchema = z.number().gte(0).lte(6); // 0 (monday) to 6 (sunday)
export const IdSchema = z.number().gte(1);

export const CreateAttendanceInputSchema = z.object({
  day: WeekDaySchema,
  end: TimeSchema.default(DEFAULT_STUDENT_END_TIME),
  status: z.nativeEnum(AttendanceStatus).or(z.literal("DEFAULT")),
  listId: z.number(),
});

export const CreateStudentInputSchema = z.object({
  firstName: z.string().trim().min(1).max(50),
  lastName: z.string().trim().min(1).max(50),
  notes: z.string().trim().min(1).max(500).nullish(),
  grade: z.number(),
  className: z.string().length(1).toUpperCase(),
  attendances: z.array(CreateAttendanceInputSchema),
});

export const CreateListActivationSchema = z.object({
  day: WeekDaySchema,
  startTime: TimeSchema,
  startBuffer: z.number().gt(0).lte(60).optional().default(DEFAULT_BUFFER), // buffer in minutes
  endTime: TimeSchema.default(DEFAULT_STUDENT_END_TIME),
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
  activations: z.array(CreateListActivationSchema),
  manageTime: z.nativeEnum(TimeManagement),
});

export const CreateGroupInputSchema = z.object({
  name: z.string().trim().min(1).max(50),
  color: z.string().optional(),
  studentIds: IdSchema.array(),
  listId: z.number().nullable(),
});

export const DateInputSchema = z.string().date().or(z.literal("today"));

export const CreateExceptionRuleInputSchema = z
  .object({
    presence: z.nativeEnum(ExceptionPresence).default("PRESENT"),
    time: TimeSchema.optional(),
    notes: z.string().trim().min(1).max(1000).optional(),
  })
  .refine(
    (data) =>
      (data.presence === "ABSENT" && (data.time === undefined || data.time !== undefined)) ||
      (data.presence === "PRESENT" && data.time !== undefined),
    {
      path: ["time"],
      message: "When present, end time is required",
    }
  );

export const ExceptionDateModeSchema = z.enum(["range", "multiple"]);
export const ExceptionDatesSchema = z.date().array().min(1);
export const ExceptionListsSchema = IdSchema.array().min(1);
export const CreateExceptionInputSchema = z
  .object({
    dates: ExceptionDatesSchema,
    mode: ExceptionDateModeSchema, // range: from-to, multiple: multiple / single dates
    studentId: IdSchema,
    lists: IdSchema.array().min(1),
    rule: CreateExceptionRuleInputSchema,
  })
  .refine((data) => (data.mode === "multiple" && data.dates.length >= 1) || (data.mode === "range" && data.dates.length >= 2), {
    path: ["dates"],
    message: "Range mode requires at least two dates",
  });

export const VisitationUpdateInputSchema = z
  .object({
    start: TimeSchema,
    end: TimeSchema.nullish(),
    hasHomework: z.boolean().nullish(),
    startNotes: z
      .string()
      .trim()
      .transform((value) => value || null)
      .nullish(),
    endNotes: z
      .string()
      .trim()
      .transform((value) => value || null)
      .nullish(),
  })
  .refine((values) => values.end === undefined || values.end === null || values.start <= values.end, {
    message: "End time cannot be lower than start time.",
    path: ["end"],
  })
  .refine(
    (values) => {
      const newValues = {
        end: values.end || undefined,
        endNotes: values.endNotes || undefined,
      };

      const condition =
        (newValues.end !== undefined && newValues.endNotes !== undefined) ||
        (newValues.end !== undefined && newValues.endNotes === undefined) ||
        (newValues.end === undefined && newValues.endNotes === undefined);

      return condition;
    },
    {
      message: "Specify time before adding end time notes",
      path: ["end"],
    }
  )
  .refine(
    (values) => {
      const newValues = {
        start: values.start || undefined,
        startNotes: values.startNotes || undefined,
      };

      const condition =
        (newValues.start !== undefined && newValues.startNotes !== undefined) ||
        (newValues.start !== undefined && newValues.startNotes === undefined) ||
        (newValues.start === undefined && newValues.startNotes === undefined);

      return condition;
    },
    {
      message: "Specify time before adding start time notes",
      path: ["start"],
    }
  );

export const ExceptionReferrerSchema = z
  .string()
  .regex(/^lists_\d+_\d{4}-\d{2}-\d{2}$/)
  .optional();
