"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiContentSave, mdiLoading, mdiPlus } from "@mdi/js";
import toast from "react-hot-toast";
import { stringToTime } from "@/utils/time";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { CreateListInputSchema } from "@/utils/zodSchema";
import { ErrorMessage, FormLabel } from "@/components/form/form";

export default function ListForm(
  params: (
    | { action: "create" }
    | {
      action: "edit";
      values: z.infer<typeof CreateListInputSchema>;
      id: number;
    }
  ) & {
    actionMethod: (
      data: z.infer<typeof CreateListInputSchema>,
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
    getValues,
    reset,
    control,
    watch,
    setValue,
  } = useForm<z.infer<typeof CreateListInputSchema>>({
    resolver: zodResolver(CreateListInputSchema),
    defaultValues:
      params.action === "edit"
        ? {
          ...params.values,
        }
        : {
          name: "",
          cycle: "DAILY",
          manageTime: "STUDENT",
          table: {
            notes: "MARKED",
            className: true,
            studentName: true,
          },
          startTime: true,
          endTime: true,
          activations: Array.from({ length: 5 }).map((_, index) => ({
            day: index,
            startTime: 480,
            startBuffer: 10,
            endTime: 1020,
            endBuffer: 10,
          })),
        },
  });

  const onSubmit: SubmitHandler<z.infer<typeof CreateListInputSchema>> = async (data) => {
    const response = await params.actionMethod(
      {
        name: data.name,
        startTime: data.startTime,
        endTime: data.endTime,
        manageTime: data.manageTime || null,
        cycle: data.cycle,
        table: data.table,
        activations: data.activations.filter((activation) => !!activation),
      },
      params.action === "edit" ? params.id : 0
    );

    if (response.success) {
      if (params.action === "create") {
        reset();
        toast.success("Liste erstellt");
      } else {
        toast.success("Liste aktualisiert");
      }
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, (data) => console.log("error", data, getValues()))} className="flex flex-col space-y-3">
      <div>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          {...register("name", {
            setValueAs: (value) => value || undefined,
          })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
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
