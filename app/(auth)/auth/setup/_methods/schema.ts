import { z } from "zod";

export const InputSchema = z // AWARE: This schema is almost the same as in /new-user/methods/schema.ts, but with the username. Changes should be made in both places if needed.
  .object({
    username: z.string().min(3).max(30).trim(),
    password: z.string().min(6).max(30),
    passwordConfirm: z.string().min(6).max(30),
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });
