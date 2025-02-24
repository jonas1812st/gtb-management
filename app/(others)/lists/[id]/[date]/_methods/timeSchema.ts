import { stringToTime } from "@/utils/time";
import { z } from "zod";

export const InputSchema = z
  .object({
    start: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g, "Error: Input does not match the required format."),
    end: z
      .string()
      .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g, "Error: Input does not match the required format.")
      .optional(),
    hasHomework: z.boolean().optional(),
    startNotes: z.string().trim().optional(),
    endNotes: z.string().trim().optional(),
  })
  .refine((values) => values.end === undefined || stringToTime(values.start)! <= stringToTime(values.end)!, {
    message: "End time cannot be lower than start time.",
    path: ["end"],
  })
  .refine(
    (values) =>
      (values.end !== undefined && values.endNotes !== undefined) ||
      (values.end !== undefined && values.endNotes === undefined) ||
      (values.end === undefined && values.endNotes === undefined),
    {
      message: "Specify time before adding end time notes",
      path: ["end"],
    }
  )
  .refine(
    (values) =>
      (values.start !== undefined && values.startNotes !== undefined) ||
      (values.start !== undefined && values.startNotes === undefined) ||
      (values.start === undefined && values.startNotes === undefined),
    {
      message: "Specify time before adding start time notes",
      path: ["start"],
    }
  );
