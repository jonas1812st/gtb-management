"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiContentSave, mdiLoading, mdiMinus, mdiPencil, mdiPlus } from "@mdi/js";
import toast from "react-hot-toast";
import { stringToTime } from "@/utils/time";
import dayjs from "dayjs";
import { CreateListInputSchema } from "@/utils/zodSchema";
import { ErrorMessage, FormLabel, InputDescription } from "@/components/form/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import "dayjs/locale/de";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { DEFAULT_BUFFER } from "@/utils/constants";
dayjs.locale("de");

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
            recordTime: "START_END",
            table: {
              notes: "MARKED",
              className: true,
              time: true,
              studentName: true,
            },
            activations: Array.from({ length: 7 }).map((_, index) => ({
              day: index,
              startTime: 480,
              startBuffer: DEFAULT_BUFFER,
              endTime: 1020,
              endBuffer: DEFAULT_BUFFER,
            })),
          },
  });

  const onSubmit: SubmitHandler<z.infer<typeof CreateListInputSchema>> = async (data) => {
    const response = await params.actionMethod(
      {
        name: data.name,
        recordTime: data.recordTime,
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

  const listOptions = [
    {
      heading: "Optionen",
      options: [
        {
          value: (
            <>
              <FormLabel htmlFor="cycle">Zyklus</FormLabel>
              <InputDescription className="mb-1">Die Zeit, nach der sich eine Liste zurücksetzt.</InputDescription>
              <ErrorMessage>{errors.cycle?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="cycle"
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger id="cycle">
                    <SelectValue placeholder="Zyklus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DAILY">Täglich</SelectItem>
                    <SelectItem value="WEEKLY">Wöchentlich</SelectItem>
                    <SelectItem value="MONTHLY">Monatlich</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          ),
        },
        {
          value: (
            <>
              <FormLabel htmlFor="manage-time">Zeitverwaltung</FormLabel>
              <InputDescription className="mb-1">Zeiten können zentral oder individuell festgelegt werden.</InputDescription>

              <ErrorMessage>{errors.manageTime?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="manageTime"
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger id="manage-time">
                    <SelectValue placeholder="Zeitverwaltung" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="STUDENT">Individuell (pro Person)</SelectItem>
                    <SelectItem value="LIST">Zentral (Liste)</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          ),
        },
        {
          value: (
            <>
              <FormLabel htmlFor="record-time">Zeitaufnahme</FormLabel>
              <InputDescription className="mb-1">Bestimme welche Zeiten gespeichert werden sollen.</InputDescription>
              <ErrorMessage>{errors.recordTime?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="recordTime"
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger id="record-time">
                    <SelectValue placeholder="Zeitaufnahme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="START">Nur Startzeit</SelectItem>
                    <SelectItem value="START_END">Start- und Endzeit</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          ),
        },
      ],
    },
    {
      heading: "Tabelle",
      options: [
        {
          value: (
            <>
              <FormLabel htmlFor="table-notes">Weitere Informationen anzeigen</FormLabel>
              <ErrorMessage>{errors.table?.notes?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="table.notes"
              render={({ field: { value, onChange } }) => (
                <Select value={value} onValueChange={onChange}>
                  <SelectTrigger id="table-notes">
                    <SelectValue placeholder="Informationen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NONE">Nicht anzeigen</SelectItem>
                    <SelectItem value="MARKED">Markierung</SelectItem>
                    <SelectItem value="SHORTENED">Gekürzt</SelectItem>
                    <SelectItem value="FULL">Volle Länge</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          ),
        },
        {
          value: (
            <>
              <FormLabel htmlFor="table-class-name">Klasse anzeigen</FormLabel>
              <ErrorMessage>{errors.table?.className?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="table.className"
              render={({ field: { value, onChange } }) => <Switch id="table-class-name" checked={value} onCheckedChange={onChange} />}
            />
          ),
        },
        {
          value: (
            <>
              <FormLabel htmlFor="table-time">Zeiten anzeigen</FormLabel>
              <ErrorMessage>{errors.table?.time?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="table.time"
              render={({ field: { value, onChange } }) => <Switch id="table-time" checked={value} onCheckedChange={onChange} />}
            />
          ),
        },
        {
          value: (
            <>
              <FormLabel htmlFor="table-student-name">Schülername anzeigen</FormLabel>
              <ErrorMessage>{errors.table?.studentName?.message}</ErrorMessage>
            </>
          ),
          item: (
            <Controller
              control={control}
              name="table.studentName"
              render={({ field: { value, onChange } }) => <Switch id="table-student-name" checked={value} onCheckedChange={onChange} />}
            />
          ),
        },
      ],
    },
  ];

  // <div className="grid grid-cols-2 gap-2">
  //           {["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"].map((day, index) => (
  //             <div key={index + "_day_input_wrapper"} className="flex flex-col space-y-1">
  //               <div className="flex space-x-2 items-center">
  //                 <input
  //                   id={"checkbox-day-" + index}
  //                   type="checkbox"
  //                   checked={watch(`activations.${index}`) !== undefined}
  //                   onChange={(e) =>
  //                     setValue(
  //                       `activations.${index}`,
  //                       e.target.checked ? { day: index, endTime: 0, startTime: 0, endBuffer: 0, startBuffer: 0 } : undefined
  //                     )
  //                   }
  //                 />
  //                 <FormLabel htmlFor={"checkbox-day-" + index}>{day}</FormLabel>
  //               </div>
  //               {watch(`activations.${index}`) !== undefined ? (
  //                 <Controller
  //                   control={control}
  //                   name={`activations.${index}`}
  //                   render={({ field: { onChange, value } }) => (
  //                     <div className="flex items-center justify-between gap-2">
  //                       <Input
  //                         type="time"
  //                         id={"day-" + index + "-start"}
  //                         min={"06:00"}
  //                         value={value ? dayjs().hour(0).minute(value.startTime).format("HH:mm") : ""}
  //                         onChange={(e) =>
  //                           onChange(
  //                             e.target.value !== ""
  //                               ? {
  //                                   ...value,
  //                                   startTime: stringToTime(e.target.value),
  //                                 }
  //                               : undefined
  //                           )
  //                         }
  //                       />
  //                       <span>-</span>
  //                       <Input
  //                         type="time"
  //                         id={"day-" + index + "-end"}
  //                         min={"06:00"}
  //                         value={value ? dayjs().hour(0).minute(value.endTime).format("HH:mm") : ""}
  //                         onChange={(e) =>
  //                           onChange(
  //                             e.target.value !== ""
  //                               ? {
  //                                   ...value,
  //                                   endTime: stringToTime(e.target.value),
  //                                 }
  //                               : undefined
  //                           )
  //                         }
  //                       />
  //                     </div>
  //                   )}
  //                 />
  //               ) : null}
  //               <ErrorMessage>{errors.activations !== undefined ? errors.activations[index]?.root?.message : ""}</ErrorMessage>
  //             </div>
  //           ))}
  // </div>

  return (
    <form onSubmit={handleSubmit(onSubmit, (data) => console.log("error", data, getValues()))} className="flex flex-col space-y-3">
      <div>
        <FormLabel htmlFor="name">Name</FormLabel>
        <InputDescription className="mb-1">Dient der Sortierung der Liste.</InputDescription>
        <Input
          id="name"
          {...register("name", {
            setValueAs: (value) => value || undefined,
          })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>

      <div>
        <div className="flex justify-between">
          <div>
            <FormLabel htmlFor="activation">Aktivierung</FormLabel>
            <InputDescription className="mb-1">Bestimme, wann die Liste aktiviert wird.</InputDescription>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size={"icon"} type="button" className="rounded-full p-2 h-auto w-auto">
                  <Icon size={0.7} path={mdiPencil} />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Aktivierungszeiten aktualisieren</DialogTitle>
                  <DialogDescription>Ändere die Aktivierungszeiten dieser Liste je nach Tag</DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-3">
                  {Array.from({ length: 7 }).map((_, index) => {
                    const weekDayIndex = index + 1;
                    const weekDay = dayjs().day(weekDayIndex).format("dddd");

                    const activationItemIndex = watch(`activations`).findIndex((activation) => activation.day === index);
                    const activationItem = watch(`activations.${activationItemIndex}`);
                    const activationItemExists = !!activationItem;
                    return (
                      <div key={weekDay + "_day"}>
                        <div className="flex justify-between">
                          <p className="font-semibold">{weekDay}</p>
                          <button
                            type="button"
                            onClick={() => {
                              if (activationItemExists) {
                                setValue(
                                  `activations`,
                                  getValues("activations").filter((activation) => activation.day !== index)
                                );
                              } else {
                                setValue(`activations`, [
                                  ...getValues("activations"),
                                  {
                                    day: index,
                                    startTime: 480,
                                    startBuffer: DEFAULT_BUFFER,
                                    endTime: 1020,
                                    endBuffer: DEFAULT_BUFFER,
                                  },
                                ]);
                              }
                            }}
                          >
                            <Icon size={0.7} path={activationItemExists ? mdiMinus : mdiPlus} />
                          </button>
                        </div>
                        {activationItemExists && (
                          <div className="flex items-center space-x-2 justify-between">
                            <Controller
                              control={control}
                              name={`activations.${activationItemIndex}`}
                              render={({ field: { value, onChange } }) => (
                                <>
                                  <Input
                                    type="time"
                                    id={"day-" + index + "-start"}
                                    min={"06:00"}
                                    value={value ? dayjs().hour(0).minute(value.startTime).format("HH:mm") : ""}
                                    onChange={(e) =>
                                      onChange(
                                        e.target.value !== ""
                                          ? {
                                              ...value,
                                              startTime: stringToTime(e.target.value),
                                            }
                                          : undefined
                                      )
                                    }
                                  />

                                  <span>-</span>

                                  <Input
                                    type="time"
                                    id={"day-" + index + "-end"}
                                    min={"06:00"}
                                    value={value ? dayjs().hour(0).minute(value.endTime).format("HH:mm") : ""}
                                    onChange={(e) =>
                                      onChange(
                                        e.target.value !== ""
                                          ? {
                                              ...value,
                                              endTime: stringToTime(e.target.value),
                                            }
                                          : undefined
                                      )
                                    }
                                  />
                                </>
                              )}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button">Weiter</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 7 }).map((_, index) => {
            const weekDayIndex = index + 1;
            const weekDay = dayjs().day(weekDayIndex).format("dddd");

            const activationItem = watch(`activations`).find((activation) => activation.day === index);

            const formatToTime = (time: number, options?: { startBuffer?: number; endBuffer?: number }) =>
              dayjs()
                .hour(0)
                .minute(time + (options && options.startBuffer ? -options.startBuffer : options && options.endBuffer ? options.endBuffer : 0))
                .format("HH:mm");

            return (
              <div className="p-2 rounded-md border text-xs text-muted-foreground" key={weekDay + "_day"}>
                <h3 className="text-sm font-semibold text-foreground">{weekDay}</h3>
                {activationItem ? (
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td>Zeit</td>
                        <td className="text-right">
                          {formatToTime(activationItem.startTime)} - {formatToTime(activationItem.endTime)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <>
                    <p className="text-xs text-muted-foreground">Tag nicht ausgewählt</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>

      {listOptions.map((option, index) => (
        <section key={index + "_heading"}>
          <h2 className="text-xl font-semibold">{option.heading}</h2>
          <table className="w-full">
            <tbody>
              {option.options.map((option, index) => (
                <tr key={index + "_list_option"} className="border-t first:border-t-0">
                  <td className="p-3">{option.value}</td>
                  <td className="p-3 flex justify-end">{option.item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

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
