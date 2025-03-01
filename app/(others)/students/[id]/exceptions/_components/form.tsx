"use client";

import { ErrorMessage, FormLabel } from "@/components/form/form";
import { Button } from "@/components/ui/button";
import { Calendar, CalendarProps } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { CreateExceptionInputSchema, ExceptionReferrerSchema } from "@/utils/zodSchema";
import { mdiCog, mdiContentSave, mdiLoading, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { ExceptionPresence, Prisma } from "@prisma/client";
import { Controller, FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import "dayjs/locale/de";
import { BackNavigation } from "@/components/ui/back-navigation";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { stringToTime, timeToString } from "@/utils/time";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

dayjs.locale("de");
dayjs.extend(weekday);

const useExceptionForm = () => useFormContext<z.infer<typeof CreateExceptionInputSchema>>();

export default function ExceptionForm(
  params: (
    | { action: "create"; defaultValues?: Partial<z.infer<typeof CreateExceptionInputSchema>> }
    | { action: "edit"; values: z.infer<typeof CreateExceptionInputSchema>; id: number }
  ) & {
    student: Prisma.StudentGetPayload<{}>;
    lists: Prisma.ListGetPayload<{ include: { activations: true } }>[];
    actionMethod: (
      data: z.infer<typeof CreateExceptionInputSchema>,
      id: number
    ) => Promise<{
      message: string;
      success: boolean;
    }>;
    referrer?: z.infer<typeof ExceptionReferrerSchema>;
  }
) {
  const { student, lists } = params;
  const backUrl = !params.referrer ? `/students/${student.id}` : `/${params.referrer.replaceAll("_", "/")}`;

  const router = useRouter();

  // form methods
  const methods = useForm<z.infer<typeof CreateExceptionInputSchema>>({
    resolver: zodResolver(CreateExceptionInputSchema),
    defaultValues: {
      ...(params.action === "edit"
        ? params.values
        : {
            mode: "multiple",
            rule: {
              presence: "ABSENT",
            },
            ...params.defaultValues,
          }),
      studentId: student.id,
    },
  });

  const { reset, handleSubmit, control } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const response = await params.actionMethod(data, params.action === "edit" ? params.id : 0);

    if (response.success) {
      if (params.action === "create") {
        reset();
        toast.success("Ausnahme erstellt");
      } else {
        toast.success("Ausnahme aktualisiert");
      }

      // redirect back to the previous page
      router.push(backUrl);
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  });

  return (
    <div className="flex flex-col space-y-4">
      <BackNavigation href={backUrl} title={"Ausnahme für " + student.firstName + " " + student.lastName} />
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="flex flex-col space-y-3">
          <div className="grid sm:grid-cols-5 gap-3">
            <div className="sm:col-span-2">
              <CalendarInput />
            </div>
            <div className="sm:col-span-3 flex flex-col space-y-3">
              <Controller
                control={control}
                name="dates"
                render={({ field: { value } }) => (
                  <div>
                    <FormLabel htmlFor="dates-list">Ausgewählte Tage</FormLabel>
                    {value === undefined || value.length === 0 ? (
                      <div className="border rounded-lg p-3">
                        <i>Keine Tage ausgewählt</i>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {value.map((date) => (
                          <span key={date.toString() + "_date_element"} className="text-sm p-1.5 border rounded-md">
                            {dayjs(date).format("DD.MM.YYYY")}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              />
              <ListSelect lists={lists} />
            </div>
          </div>

          <RuleSelectWrapper>
            <RuleSelect />
          </RuleSelectWrapper>

          <div className="flex justify-end">
            <Button className="flex items-center space-x-2" disabled={methods.formState.isSubmitting}>
              {methods.formState.isSubmitting ? (
                <Icon size={0.8} path={mdiLoading} className="animate-spin" />
              ) : (
                <Icon size={0.8} path={params.action === "create" ? mdiPlus : mdiContentSave} />
              )}
              <span>{params.action === "create" ? "Erstellen" : "Speichern"}</span>
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

const CalendarInput = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useExceptionForm();

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
                render={({ field: { value, onChange } }) => {
                  const updateValue = (newValue: typeof value) => {
                    onChange(newValue);

                    // reset lists if mode is changed
                    setValue("lists", []);
                  };

                  return (
                    <Switch
                      className="scale-[83%]"
                      checked={value === "range"}
                      onCheckedChange={(checked) => (checked ? updateValue("range") : updateValue("multiple"))}
                    />
                  );
                }}
              />
              <span>Bereich</span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="border rounded-lg flex justify-center">
        <Controller
          control={control}
          name="dates"
          render={({ field: { value, onChange } }) => {
            const updateValue = (newValue: typeof value) => {
              onChange(newValue);

              // reset lists if mode is changed
              setValue("lists", []);
            };

            return watch("mode") === "range" ? (
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
                onSelect={(dates) => dates && updateValue(Object.values(dates).filter((date): date is Date => !!date))}
                max={7 * 4} // 4 weeks
              />
            ) : (
              <Calendar {...calendarProps} mode="multiple" selected={value} onSelect={(dates) => dates && updateValue(dates)} max={7} />
            );
          }}
        />
      </div>
      <ErrorMessage>{errors.dates?.message}</ErrorMessage>
    </div>
  );
};

const ListSelect = ({ lists }: { lists: Prisma.ListGetPayload<{ include: { activations: true } }>[] }) => {
  const {
    watch,
    control,
    formState: { errors },
  } = useExceptionForm();

  const dates = watch("dates");
  const mode = watch("mode");

  /* Filter for lists that are in the given dates */
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
        {lists.filter(filterList).length === 0 ? (
          <i>Keine Liste verfügbar</i>
        ) : (
          <table className="w-full border-collapse">
            <tbody>
              {lists.filter(filterList).map((list) => (
                <tr key={list.id + "_list_select_option"}>
                  <td className="p-0.5">
                    <div className="flex items-center h-full">
                      <Controller
                        control={control}
                        name="lists"
                        render={({ field: { value: selectedLists, onChange } }) => (
                          <Checkbox
                            id={list.id + "_checkbox_select"}
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
                    <label className="cursor-pointer select-none" htmlFor={list.id + "_checkbox_select"}>
                      {list.name}
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ErrorMessage>{errors.lists?.message}</ErrorMessage>
    </div>
  );
};

export const RuleSelectWrapper = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <FormLabel htmlFor="rules-input">Regel festlegen</FormLabel>
      {children}
    </div>
  );
};

export const RuleSelect = ({
  className,
  disabled,
}: {
  className?: string;
  disabled?: Partial<{
    presence?: boolean;
    time?: boolean;
    notes?: boolean;
  }>;
}) => {
  const {
    watch,
    register,
    control,
    formState: { errors },
  } = useExceptionForm();

  return (
    <>
      <div className={cn("border rounded-lg p-3 grid grid-cols-2 gap-2", className)}>
        <div>
          <FormLabel htmlFor="rule-present">Anwesenheit</FormLabel>
          <Controller
            control={control}
            name={`rule.presence`}
            render={({ field: { value, onChange } }) => (
              <Select
                disabled={disabled?.presence}
                value={value}
                onValueChange={(value) => {
                  const selectedPresence = value as ExceptionPresence;

                  onChange(selectedPresence);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Anwesenheit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRESENT">Anwesend</SelectItem>
                  <SelectItem value="ABSENT">Nicht anwesend</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          <ErrorMessage>{errors.rule?.presence?.message}</ErrorMessage>
        </div>
        <div>
          <FormLabel htmlFor="rule-time">Endzeit</FormLabel>
          {watch(`rule.presence`) === "ABSENT" ? (
            <Input type="time" disabled={true} />
          ) : (
            <Controller
              control={control}
              name="rule.time"
              render={({ field: { value, onChange } }) => (
                <Input
                  value={timeToString(value) ?? ""}
                  onChange={(e) => onChange(stringToTime(e.target.value))}
                  type="time"
                  id="rule-time"
                  disabled={watch(`rule.presence`) === "ABSENT" || disabled?.time}
                />
              )}
            />
          )}

          <ErrorMessage>{errors.rule?.time?.message}</ErrorMessage>
        </div>
        <div className="col-span-full">
          <FormLabel htmlFor="rule-description">Beschreibung (optional)</FormLabel>
          <Textarea
            {...register(`rule.notes`, {
              setValueAs: (value) => value || undefined,
            })}
            id="rule-description"
            spellCheck={false}
            disabled={disabled?.notes}
          />
          <ErrorMessage>{errors.rule?.notes?.message}</ErrorMessage>
        </div>
      </div>
      <ErrorMessage>{errors.rule?.message}</ErrorMessage>
    </>
  );
};
