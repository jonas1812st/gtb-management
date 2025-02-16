"use client";

import { FormLabel } from "@/components/form/form";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import { Combobox } from "@/components/ui/combobox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { CreateExceptionInputSchema } from "@/utils/zodSchema";
import { mdiCog, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import useListsByStudentsQuery from "@/components/queries/listsbyStudentId";
import Loader from "@/components/navigation/loading";
import { Checkbox } from "@/components/ui/checkbox";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/de";
import Error from "@/components/navigation/error";
import { useEffect } from "react";
dayjs.locale("de");
dayjs.extend(weekday);

const useExceptionForm = () => useFormContext<z.infer<typeof CreateExceptionInputSchema>>();

export default function ExceptionForm({ students }: { students: Prisma.StudentGetPayload<{}>[] }) {
  // helper functions
  const toStudentId = (studentId: number) => {
    const student = students.find((student) => student.id === studentId);

    if (!student) return "";
    return studentId + "-" + student?.firstName + " " + student?.lastName;
  };
  const idToStudent = (id: string) => students.find((student) => toStudentId(student.id) === id);

  // form methods
  const methods = useForm<z.infer<typeof CreateExceptionInputSchema>>({
    defaultValues: {
      mode: "multiple",
    },
  });
  const { control, watch } = methods;

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col space-y-3">
        <div className="flex flex-col">
          <FormLabel htmlFor="student-input">Schüler auswählen</FormLabel>
          <Controller
            control={control}
            name="studentId"
            render={({ field: { value, onChange } }) => (
              <Combobox
                values={students.map((student) => ({
                  value: toStudentId(student.id),
                  label: student.firstName + " " + student.lastName,
                }))}
                id="student-input"
                placeholder={{ button: "Schüler auswählen", command: "Schüler suchen...", empty: "Keine Schüler gefunden." }}
                value={toStudentId(value)}
                setValue={(value) => onChange(value === "" ? null : idToStudent(value)?.id)}
              />
            )}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <CalendarInput />
          <div className="grow flex flex-col space-y-2">
            <ListSelect />
            <div>
              <FormLabel htmlFor="rules-input">Regeln festlegen</FormLabel>
              <div className="border rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{{ multiple: "Einzelne Tage", range: "Bereich" }[watch("mode")]}</h4>
                  <Button type="button" variant={"light"} className="flex items-center space-x-2 h-8 pe-3">
                    <span>Erstellen</span>
                    <Icon path={mdiPlus} size={0.7} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

const CalendarInput = () => {
  const { control, watch } = useExceptionForm();

  const calendarProps: CalendarProps = {
    id: "dates-input",
    weekStartsOn: 1,
  };

  return (
    <div>
      <div className="flex space-x-1 justify-between">
        <FormLabel htmlFor="dates-input">Tage auswählen</FormLabel>
        <Popover>
          <PopoverTrigger asChild>
            <Button size={"icon"} variant={"ghost"} className="h-6 w-6">
              <Icon path={mdiCog} size={0.7} className="text-slate-400" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit" side="left">
            <div className="flex space-x-1 items-center justify-center text-sm">
              <span>Einzeln</span>
              <Controller
                control={control}
                name="mode"
                render={({ field: { value, onChange } }) => (
                  <Switch
                    className="scale-[83%]"
                    checked={value === "range"}
                    onCheckedChange={(checked) => (checked ? onChange("range") : onChange("multiple"))}
                  />
                )}
              />
              <span>Bereich</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="border rounded-lg">
        <Controller
          control={control}
          name="dates"
          render={({ field: { value, onChange } }) =>
            watch("mode") === "range" ? (
              <Calendar
                {...calendarProps}
                mode="range"
                selected={
                  value && value.length <= 2
                    ? {
                        from: value[0],
                        to: value[value.length - 1],
                      }
                    : undefined
                }
                onSelect={(dates) => dates && onChange(Object.values(dates))}
                max={7 * 4} // 4 weeks
              />
            ) : (
              <Calendar {...calendarProps} mode="multiple" selected={value} onSelect={(dates) => dates && onChange(dates)} max={7} />
            )
          }
        />
      </div>
    </div>
  );
};

const ListSelect = () => {
  const { watch, setValue, control } = useExceptionForm();

  const studentId = watch("studentId");
  const dates = watch("dates");
  const mode = watch("mode");

  // reset selected lists if the student or the date changes
  useEffect(() => {
    setValue("lists", []);
  }, [studentId, dates, mode]);

  const listsQuery = useListsByStudentsQuery(studentId);

  {
    /* Filter for lists that are in the given dates */
  }
  const filterList = (list: Prisma.ListGetPayload<{ include: { activations: true } }>) =>
    list.activations.some((activation) => {
      if (dates) {
        if (mode === "multiple") {
          return dates.some((date) => dayjs(date).weekday() === activation.day);
        } else if (mode === "range" && dates.length === 2 && dates[0] && dates[1]) {
          // check if the range of dates is in the activation range; the activation range is from the first day of the week to the last day of the week
          const difference = dayjs(dates[1]).diff(dayjs(dates[0]), "days");

          // get all weekdays in difference and remove duplicates
          const weekdays = [...new Set(Array.from({ length: difference + 1 }, (_, i) => dayjs(dates[0]).add(i, "day").weekday()))];

          return weekdays.some((weekday) => weekday === activation.day);
        }
      }
    });
  return (
    <div className="flex flex-col">
      <FormLabel htmlFor="list-input">Liste auswählen</FormLabel>
      <div className="border rounded-lg p-3">
        {listsQuery.isLoading ? (
          <div className="flex justify-center">
            <Loader size="sm" />
          </div>
        ) : listsQuery.isPending ? (
          <i>Wähle zuerst einen Schüler aus</i>
        ) : listsQuery.isError ? (
          <Error error="Es ist ein Fehler bei der Anfrage aufgetreten" />
        ) : listsQuery.data.filter(filterList).length === 0 ? (
          <i>Keine Liste verfügbar</i>
        ) : (
          <table className="w-full border-collapse">
            <tbody>
              {listsQuery.data.filter(filterList).map((list) => (
                <tr key={list.id + "_list_select_option"}>
                  <td className="p-0.5">
                    <div className="flex items-center h-full">
                      <Controller
                        control={control}
                        name="lists"
                        render={({ field: { value: selectedLists, onChange } }) => (
                          <Checkbox
                            id={list.id + "checkbox_select"}
                            checked={selectedLists.includes(list.id)}
                            onCheckedChange={(checked) =>
                              checked
                                ? onChange([...selectedLists, list.id])
                                : onChange(selectedLists.filter((selectedList) => selectedList !== list.id))
                            }
                          />
                        )}
                      />
                    </div>
                  </td>
                  <td className="p-0.5">
                    <label className="cursor-pointer select-none" htmlFor={list.id + "checkbox_select"}>
                      {list.name}
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
