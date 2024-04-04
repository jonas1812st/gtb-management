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
import {
  AttendanceCreateWithoutStudentInputSchema,
  StudentCreateWithoutAttendancesInputSchema,
} from "@/prisma/generated/zod";
import { stringToTime } from "@/utils/time";
import { createStudent } from "./methods/createStudent";
import { Prisma } from "@prisma/client";
import { editStudent } from "./methods/editStudent";
import dayjs from "dayjs";

const InputSchema = z.object({
  student: StudentCreateWithoutAttendancesInputSchema,
  attendances: z.array(AttendanceCreateWithoutStudentInputSchema.optional()),
});

export default function StudentForm(
  params:
    | { action: "create" }
    | { action: "edit"; values: z.infer<typeof InputSchema>; id: number },
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
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues:
      params.action === "edit"
        ? {
          student: params.values.student,
          attendances: Array.from(
            { length: 5 },
            (_, index) =>
              params.values.attendances.find((el) => el?.day === index) ||
              undefined,
          ),
        }
        : {
          student: {
            lastName: "",
            firstName: "",
            grade: undefined,
            notes: "",
            className: "",
          },
          attendances: Array.from({ length: 5 }).map((_, index) => ({
            day: index,
            end: 0,
          })),
        },
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    const actionMethod =
      params.action === "create" ? createStudent : editStudent;
    const response = await actionMethod(
      {
        student: {
          firstName: data.student.firstName,
          lastName: data.student.lastName,
          grade: data.student.grade,
          notes: data.student.notes || null,
          className: data.student.className,
        },
        attendances: data.attendances.filter(
          (
            attendance,
          ): attendance is Prisma.AttendanceCreateWithoutStudentInput =>
            !!attendance,
        ),
      },
      params.action === "edit" ? params.id : 0,
    );

    if (response.success) {
      if (params.action === "create") {
        reset();
        toast.success("Schüler erstellt");
      } else {
        toast.success("Schüler bearbeitet");
      }
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (data) =>
        console.log("error", data, getValues()),
      )}
      className="flex flex-col space-y-3"
    >
      <div className="grid grid-cols-2 gap-2">
        <div>
          <FormLabel htmlFor="firstName">Vorname</FormLabel>
          <Input
            id="firstName"
            {...register("student.firstName", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.student?.firstName?.message}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor="lastName">Nachname</FormLabel>
          <Input
            id="lastName"
            {...register("student.lastName", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.student?.lastName?.message}</ErrorMessage>
        </div>
      </div>

      <div>
        <FormLabel htmlFor="notes">Anmerkungen (optional)</FormLabel>
        <Textarea
          id="notes"
          {...register("student.notes", {
            setValueAs: (value) => value || null,
          })}
        />
        <ErrorMessage>{errors.student?.notes?.message}</ErrorMessage>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <FormLabel htmlFor="grade">Klassenstufe</FormLabel>
          <Input
            id="grade"
            {...register("student.grade", {
              setValueAs: (value) => parseInt(value, 10) || undefined,
            })}
            type="number"
          />
          <ErrorMessage>{errors.student?.grade?.message}</ErrorMessage>
        </div>

        <div>
          <FormLabel htmlFor="className">Klassenbuchstabe</FormLabel>
          <Input
            id="className"
            {...register("student.className", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.student?.className?.message}</ErrorMessage>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-2">
          {["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"].map(
            (day, index) => (
              <div
                key={index + "_day_input_wrapper"}
                className="flex flex-col space-y-1"
              >
                <div className="flex space-x-2 items-center">
                  <input
                    id={"checkbox-day-" + index}
                    type="checkbox"
                    // @ts-expect-error
                    checked={watch("attendances." + index) !== undefined}
                    onChange={(e) =>
                      setValue(
                        // @ts-expect-error
                        "attendances." + index,
                        e.target.checked ? { day: index, end: 0 } : undefined,
                      )
                    }
                  />
                  <FormLabel htmlFor={"checkbox-day-" + index}>{day}</FormLabel>
                </div>
                {
                  // @ts-expect-error
                  watch("attendances." + index) !== undefined ? (
                    <Controller
                      control={control}
                      // @ts-expect-error
                      name={"attendances." + index}
                      render={({ field: { onChange, value } }) => (
                        <Input
                          type="time"
                          id={"day-" + index}
                          min={"06:00"}
                          value={
                            value
                              ? dayjs()
                                .hour(0)
                                // @ts-expect-error
                                .minute(value.end)
                                .format("HH:mm")
                              : ""
                          }
                          onChange={(e) =>
                            onChange(
                              e.target.value !== ""
                                ? {
                                  day: index,
                                  end: stringToTime(e.target.value!),
                                }
                                : undefined,
                            )
                          }
                        />
                      )}
                    />
                  ) : null
                }
                <ErrorMessage>
                  {errors.attendances !== undefined
                    ? errors.attendances[index]?.end?.message
                    : ""}
                </ErrorMessage>
              </div>
            ),
          )}
        </div>

        <ErrorMessage>
          {errors.attendances !== undefined ? errors.attendances.message : ""}
        </ErrorMessage>
      </div>

      <div className="flex justify-end">
        <Button className="flex items-center space-x-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <Icon size={0.8} path={mdiLoading} className="animate-spin" />
          ) : (
            <Icon
              size={0.8}
              path={params.action === "create" ? mdiPlus : mdiContentSave}
            />
          )}
          <span>{params.action === "create" ? "Erstellen" : "Speichern"}</span>
        </Button>
      </div>
    </form>
  );
}

export const FormLabel = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => (
  <label htmlFor={htmlFor} className="text-gray-600 font-medium text-sm">
    {children}
  </label>
);

export const ErrorMessage = ({
  children,
}: {
  children: React.ReactNode | undefined;
}) => <span className="text-xs font-medium text-red-500">{children}</span>;
