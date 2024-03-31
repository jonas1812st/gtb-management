"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiLoading, mdiPlus } from "@mdi/js";
import toast from "react-hot-toast";
import {
  AttendanceCreateWithoutStudentInputSchema,
  StudentCreateWithoutAttendancesInputSchema,
} from "@/prisma/generated/zod";
import { stringToTime } from "@/utils/time";
import { createStudent } from "./methods/createStudent";
import { Prisma } from "@prisma/client";

const InputSchema = z.object({
  student: StudentCreateWithoutAttendancesInputSchema,
  attendances: z.array(AttendanceCreateWithoutStudentInputSchema.optional()),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      student: {
        lastName: "",
        firstName: "",
        grade: undefined,
        notes: "",
        className: "",
      },
      attendances: [],
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    const response = await createStudent({
      student: data.student,
      attendances: data.attendances.filter(
        (
          attendance,
        ): attendance is Prisma.AttendanceCreateWithoutStudentInput =>
          !!attendance,
      ),
    });
    console.log(data);
    if (response.success) {
      reset();
      toast.success("Schüler erstellt");
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
          <FormLabel htmlFor="className">Klassen Buchstabe</FormLabel>
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
          <div>
            <FormLabel htmlFor="monday">Montag</FormLabel>
            <Input
              type="time"
              id="monday"
              {...register("attendances.0", {
                setValueAs: (value: string) =>
                  value !== ""
                    ? {
                      day: 0,
                      end: stringToTime(value || undefined),
                    }
                    : undefined,
              })}
            />
            <ErrorMessage>
              {errors.attendances !== undefined
                ? errors.attendances[0]?.end?.message
                : ""}
            </ErrorMessage>
          </div>
          <div>
            <FormLabel htmlFor="tuesday">Dienstag</FormLabel>
            <Input
              type="time"
              id="tuesday"
              {...register("attendances.1", {
                setValueAs: (value: string) =>
                  value !== ""
                    ? {
                      day: 1,
                      end: stringToTime(value || undefined),
                    }
                    : undefined,
              })}
            />
            <ErrorMessage>
              {errors.attendances !== undefined
                ? errors.attendances[1]?.end?.message
                : ""}
            </ErrorMessage>
          </div>
          <div>
            <FormLabel htmlFor="wednesday">Mittwoch</FormLabel>
            <Input
              type="time"
              id="wednesday"
              {...register("attendances.2", {
                setValueAs: (value: string) =>
                  value !== ""
                    ? {
                      day: 2,
                      end: stringToTime(value || undefined),
                    }
                    : undefined,
              })}
            />
            <ErrorMessage>
              {errors.attendances !== undefined
                ? errors.attendances[2]?.end?.message
                : ""}
            </ErrorMessage>
          </div>
          <div>
            <FormLabel htmlFor="thursday">Donnerstag</FormLabel>
            <Input
              type="time"
              id="thursday"
              {...register("attendances.3", {
                setValueAs: (value: string) =>
                  value !== ""
                    ? {
                      day: 3,
                      end: stringToTime(value || undefined),
                    }
                    : undefined,
              })}
            />
            <ErrorMessage>
              {errors.attendances !== undefined
                ? errors.attendances[3]?.end?.message
                : ""}
            </ErrorMessage>
          </div>
          <div>
            <FormLabel htmlFor="friday">Freitag</FormLabel>
            <Input
              type="time"
              id="friday"
              {...register("attendances.4", {
                setValueAs: (value: string) =>
                  value !== ""
                    ? {
                      day: 4,
                      end: stringToTime(value || undefined),
                    }
                    : undefined,
              })}
            />
            <ErrorMessage>
              {errors.attendances !== undefined
                ? errors.attendances[4]?.end?.message
                : ""}
            </ErrorMessage>
          </div>
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
            <Icon size={0.8} path={mdiPlus} />
          )}
          <span>Erstellen</span>
        </Button>
      </div>
    </form>
  );
}

const FormLabel = ({
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

const ErrorMessage = ({
  children,
}: {
  children: React.ReactNode | undefined;
}) => <span className="text-xs font-medium text-red-500">{children}</span>;
