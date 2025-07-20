"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiArrowULeftTop, mdiContentSave, mdiLoading, mdiPlus } from "@mdi/js";
import toast from "react-hot-toast";
import { stringToTime } from "@/utils/time";
import { CreateAttendanceInputSchema, CreateStudentInputSchema } from "@/utils/zodSchema";
import { ErrorMessage, FormLabel } from "@/components/form/form";
import dayjs from "dayjs";
import { Checkbox } from "@/components/ui/checkbox";
import { DAYS, DEFAULT_STUDENT_END_TIME } from "@/utils/constants";
import { ApiResponseMessage } from "@/types/global";

export default function StudentForm(
  params: (
    | {
        action: "create";
        mainList: {
          id: number;
          name: string;
          activeDays: number[];
        };
      }
    | {
        action: "edit";
        values: z.infer<typeof CreateStudentInputSchema>;
        id: number;
        lists: {
          id: number;
          name: string;
        }[];
      }
  ) & {
    actionMethod: (data: z.infer<typeof CreateStudentInputSchema>, id: number) => Promise<ApiResponseMessage>;
  }
) {
  const attendancesSortFunction = (
    a: z.infer<typeof CreateAttendanceInputSchema>,
    b: z.infer<typeof CreateAttendanceInputSchema>
  ) => {
    if (a.day < b.day) return -1;
    if (a.day > b.day) return 1;

    return 0;
  };

  const methods = useForm<z.infer<typeof CreateStudentInputSchema>>({
    resolver: zodResolver(CreateStudentInputSchema),
    defaultValues:
      params.action === "edit"
        ? {
            ...params.values,
            attendances: params.values.attendances.sort(attendancesSortFunction),
          }
        : {
            lastName: "",
            firstName: "",
            grade: undefined,
            notes: "",
            className: "",
            attendances: params.mainList.activeDays
              .map((day) => ({
                day,
                status: "DEFAULT" as const,
                listId: params.mainList.id,
                end: DEFAULT_STUDENT_END_TIME,
              }))
              .sort(attendancesSortFunction),
          },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = methods;

  const onSubmit: SubmitHandler<z.infer<typeof CreateStudentInputSchema>> = async (data) => {
    const response = await params.actionMethod(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        grade: data.grade,
        notes: data.notes || null,
        className: data.className,
        attendances: data.attendances.filter((attendance) => attendance.status !== "DEFAULT"),
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
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit, (data) => console.error("error", data, getValues()))}
        className="flex flex-col space-y-3"
      >
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

        <div className="flex flex-col space-y-2">
          {params.action === "create" ? (
            <ListAttendanceInput list={{ id: params.mainList.id, name: params.mainList.name }} />
          ) : params.action === "edit" ? (
            params.lists.map((list) => (
              <ListAttendanceInput key={list.id + "_list_attendance_input"} list={{ id: list.id, name: list.name }} />
            ))
          ) : null}
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
    </FormProvider>
  );
}

const ListAttendanceInput = ({ list }: { list: { id: number; name: string } }) => {
  const {
    watch,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<z.infer<typeof CreateStudentInputSchema>>();

  const listDays = getValues("attendances")
    .filter((attendance) => attendance.listId === list.id)
    .map((attendance) => DAYS[attendance.day]);

  return (
    <div className="p-3 rounded-lg border">
      <h1 className="mb-4 font-semibold">{list.name}</h1>
      <div className="grid grid-cols-4 gap-2">
        {listDays.map((day) => {
          const weekDayIndex = DAYS.findIndex((weekDay) => weekDay === day);
          const attendanceFieldIndex = getValues("attendances").findIndex(
            (attendance) => attendance?.day === weekDayIndex && attendance.listId === list.id
          );

          const attendanceField = watch(`attendances.${attendanceFieldIndex}`);

          return (
            <div key={weekDayIndex + "_day_input_wrapper_list_" + list.id} className="flex flex-col space-y-1">
              <div className="flex justify-between space-x-2">
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id={"checkbox-day-" + attendanceFieldIndex + "-list-" + list.id}
                    checked={
                      attendanceField.status === "PRESENT"
                        ? true
                        : attendanceField.status === "ABSENT"
                          ? false
                          : "indeterminate"
                    }
                    onCheckedChange={(checked) =>
                      setValue(`attendances.${attendanceFieldIndex}`, {
                        ...attendanceField,
                        status: checked ? "PRESENT" : "ABSENT",
                      })
                    }
                  />
                  <FormLabel
                    className="select-none"
                    htmlFor={"checkbox-day-" + attendanceFieldIndex + "-list-" + list.id}
                  >
                    {day}
                  </FormLabel>
                  {attendanceField?.status !== "DEFAULT" && (
                    <Button
                      type="button"
                      variant="light"
                      size="icon"
                      className="h-5 w-5 rounded-full"
                      onClick={() =>
                        setValue(`attendances.${attendanceFieldIndex}`, {
                          ...attendanceField,
                          status: "DEFAULT",
                          end: DEFAULT_STUDENT_END_TIME,
                        })
                      }
                    >
                      <Icon path={mdiArrowULeftTop} size={0.6} />
                    </Button>
                  )}
                </div>
              </div>
              {attendanceField?.status === "PRESENT" ? (
                <Controller
                  control={control}
                  name={`attendances.${attendanceFieldIndex}`}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="time"
                      id={"day-" + weekDayIndex + "-list-" + list.id}
                      min={"06:00"}
                      value={value ? dayjs().hour(0).minute(value.end).format("HH:mm") : ""}
                      onChange={(e) =>
                        onChange({
                          day: weekDayIndex,
                          end: e.target.value !== "" ? stringToTime(e.target.value) : DEFAULT_STUDENT_END_TIME,
                          listId: list.id,
                          status: "PRESENT",
                        })
                      }
                    />
                  )}
                />
              ) : null}
              <ErrorMessage>
                {errors.attendances !== undefined ? errors.attendances[attendanceFieldIndex]?.end?.message : ""}
              </ErrorMessage>
            </div>
          );
        })}
      </div>
    </div>
  );
};
