import { z } from "zod";
import { PasswordSchema } from "@/utils/zodSchema";

export const InputSchema = z
  .object({
    password: PasswordSchema,
    passwordConfirm: PasswordSchema,
  })
  .refine((values) => values.password === values.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });
