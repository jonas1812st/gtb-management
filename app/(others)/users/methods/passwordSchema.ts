import { z } from "zod";
import { PasswordSchema } from "@/utils/zodSchema";

export const PasswordChangeSchema = z
  .object({
    currentPassword: z.string().min(1, "Aktuelles Passwort ist erforderlich"),
    newPassword: PasswordSchema,
    newPasswordConfirm: PasswordSchema,
  })
  .refine((values) => values.newPassword === values.newPasswordConfirm, {
    message: "Passwords don't match",
    path: ["newPasswordConfirm"],
  });
