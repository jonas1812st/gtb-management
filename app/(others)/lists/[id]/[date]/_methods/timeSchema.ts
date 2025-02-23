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
  });
