"use client";

import { ErrorMessage, FormLabel } from "@/components/form/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { mdiContentSave, mdiLoading, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { InputSchema } from "../methods/schema";
import toast from "react-hot-toast";

export default function UserForm(
  params: (
    | { action: "create" }
    | {
        action: "edit";
        values: z.infer<typeof InputSchema>;
        id: number;
      }
  ) & {
    actionMethod: (
      data: z.infer<typeof InputSchema>,
      id: number
    ) => Promise<{
      message: string;
      success: boolean;
    }>;
  }
) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
    reset,
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    values:
      params.action === "edit"
        ? params.values
        : {
            username: "",
            role: "DEFAULT",
          },
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    const response = await params.actionMethod(data, params.action === "edit" ? params.id : 0);

    if (response.success) {
      if (params.action === "create") {
        reset();
        toast.success("Benutzer erstellt");
      } else {
        toast.success("Benutzer aktualisiert");
      }
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <FormLabel htmlFor="username">Benutzername</FormLabel>
          <Input
            {...register("username", {
              setValueAs: (value) => value || undefined,
            })}
            id="username"
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </div>
        <div>
          <FormLabel htmlFor="role">Rolle</FormLabel>
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, value } }) => (
              <Select onValueChange={onChange} value={value}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="DEFAULT">Standard</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <ErrorMessage>{errors.role?.message}</ErrorMessage>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="flex items-center space-x-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <Icon size={0.8} path={mdiLoading} className="animate-spin" />
          ) : (
            <Icon size={0.8} path={params.action === "create" ? mdiPlus : mdiContentSave} />
          )}
          <span>{params.action === "create" ? "Erstellen" : "Speichern"}</span>
        </Button>
      </div>
    </form>
  );
}
