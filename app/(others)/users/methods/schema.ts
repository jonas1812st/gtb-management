import { Role } from "@prisma/client";
import { z } from "zod";

export const InputSchema = z.object({
  username: z.string().min(3).max(50),
  // @ts-expect-error types correct
  role: z.enum(Object.keys(Role)),
});
