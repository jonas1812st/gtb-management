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
import { CreateStudentInputSchema } from "@/utils/zodSchema";
import { ErrorMessage, FormLabel } from "@/components/form/form";

export default function StudentForm(
  params: (
    | { action: "create" }
    | {
        action: "edit";
        values: z.infer<typeof CreateStudentInputSchema>;
        id: number;
      }
  ) & {
    actionMethod: (
      data: z.infer<typeof CreateStudentInputSchema>,
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
  } = useForm<z.infer<typeof CreateStudentInputSchema>>({
    resolver: zodResolver(CreateStudentInputSchema),
    defaultValues:
      params.action === "edit"
        ? {
            ...params.values,
            attendances: Array.from({ length: 5 }, (_, index) => params.values.attendances.find((el) => el?.day === index) || undefined),
          }
        : {
            lastName: "",
            firstName: "",
            grade: undefined,
            notes: "",
            className: "",
            attendances: Array.from({ length: 5 }).map((_, index) => ({
              day: index,
              end: 960,
            })),
          },
  });

  const onSubmit: SubmitHandler<z.infer<typeof CreateStudentInputSchema>> = async (data) => {
    const response = await params.actionMethod(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        grade: data.grade,
        notes: data.notes || null,
        className: data.className,
        attendances: data.attendances.filter((attendance): attendance is Prisma.AttendanceCreateWithoutStudentInput => !!attendance),
      },
      params.action === "edit" ? params.id : 0
    );

    if (response.success) {
      if (params.action === "create") {
        reset();
        toast.success("Schüler erstellt");
      } else {
        toast.success("Schüler aktualisiert");
      }
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, (data) => console.log("error", data, getValues()))} className="flex flex-col space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <FormLabel htmlFor="firstName">Vorname</FormLabel>
          <Input
            id="firstName"
            {...register("firstName", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor="lastName">Nachname</FormLabel>
          <Input
            id="lastName"
            {...register("lastName", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
        </div>
      </div>

      <div>
        <FormLabel htmlFor="notes">Anmerkungen (optional)</FormLabel>
        <Textarea
          spellCheck={false}
          id="notes"
          {...register("notes", {
            setValueAs: (value) => value || null,
          })}
        />
        <ErrorMessage>{errors.notes?.message}</ErrorMessage>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <FormLabel htmlFor="grade">Klassenstufe</FormLabel>
          <Input
            id="grade"
            {...register("grade", {
              setValueAs: (value) => parseInt(value, 10) || undefined,
            })}
            type="number"
          />
          <ErrorMessage>{errors.grade?.message}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor="className">Klassenbuchstabe</FormLabel>
          <Input
            id="className"
            {...register("className", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.className?.message}</ErrorMessage>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-2">
          {["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"].map((day, index) => (
            <div key={index + "_day_input_wrapper"} className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <input
                  id={"checkbox-day-" + index}
                  type="checkbox"
                  checked={watch(`attendances.${index}`) !== undefined}
                  onChange={(e) => setValue(`attendances.${index}`, e.target.checked ? { day: index, end: 0 } : undefined)}
                />
                <FormLabel htmlFor={"checkbox-day-" + index}>{day}</FormLabel>
              </div>
              {watch(`attendances.${index}`) !== undefined ? (
                <Controller
                  control={control}
                  name={`attendances.${index}`}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="time"
                      id={"day-" + index}
                      min={"06:00"}
                      value={value ? dayjs().hour(0).minute(value.end).format("HH:mm") : ""}
                      onChange={(e) =>
                        onChange(
                          e.target.value !== ""
                            ? {
                                day: index,
                                end: stringToTime(e.target.value!),
                              }
                            : undefined
                        )
                      }
                    />
                  )}
                />
              ) : null}
              <ErrorMessage>{errors.attendances !== undefined ? errors.attendances[index]?.end?.message : ""}</ErrorMessage>
            </div>
          ))}
        </div>

        <ErrorMessage>{errors.attendances !== undefined ? errors.attendances.message : ""}</ErrorMessage>
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
