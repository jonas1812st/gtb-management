import { z } from "zod";
import { PasswordSchema } from "@/utils/zodSchema";

export const InputSchema = z
  .object({
    username: z.string().min(3).max(30).trim(),
    password: PasswordSchema,
    passwordConfirm: PasswordSchema,
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });
