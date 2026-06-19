"use client";

import { ErrorMessage, FormLabel } from "@/components/form/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { mdiContentSave } from "@mdi/js";
import { PasswordChangeSchema } from "../methods/passwordSchema";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ApiResponseMessage } from "@/types/global";

export default function PasswordForm({
  userId,
  action,
}: {
  userId: number;
  action: (id: number, data: z.infer<typeof PasswordChangeSchema>) => Promise<ApiResponseMessage>;
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof PasswordChangeSchema>>({
    resolver: zodResolver(PasswordChangeSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordConfirm: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof PasswordChangeSchema>> = async (data) => {
    const response = await action(userId, data);

    if (response.success) {
      toast.success("Passwort erfolgreich geändert");

      reset();
    } else {
      setError("root", {
        message: response.message,
      });
      toast.error("Passwortänderung fehlgeschlagen");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col space-y-1">
        <FormLabel htmlFor="currentPassword">Aktuelles Passwort</FormLabel>
        <Input id="currentPassword" type="password" {...register("currentPassword")} />
        <ErrorMessage>{errors.currentPassword?.message}</ErrorMessage>
      </div>

      <div className="flex flex-col space-y-1">
        <FormLabel htmlFor="newPassword">Neues Passwort</FormLabel>
        <Input id="newPassword" type="password" {...register("newPassword")} />
        <ErrorMessage>{errors.newPassword?.message}</ErrorMessage>
      </div>

      <div className="sm:col-start-2 flex flex-col space-y-1">
        <FormLabel htmlFor="newPasswordConfirm">Neues Passwort bestätigen</FormLabel>
        <Input id="newPasswordConfirm" type="password" {...register("newPasswordConfirm")} />
        <ErrorMessage>{errors.newPasswordConfirm?.message}</ErrorMessage>
      </div>

      <div className="sm:col-start-2 flex flex-col items-end space-y-2">
        <Button loading={isSubmitting} icon={{ path: mdiContentSave, size: 0.8 }}>
          Passwort speichern
        </Button>
        <ErrorMessage>{errors.root?.message}</ErrorMessage>
      </div>
    </form>
  );
}
