import { z } from "zod";

export const InputSchema = z
  .object({
    password: z.string().min(6).max(30),
    passwordConfirm: z.string().min(6).max(30),
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });
