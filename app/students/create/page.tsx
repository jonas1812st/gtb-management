"use client";
import { StudentInputSchema } from "@/utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createStudent } from "./methods/createStudent";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiLoading, mdiPlus } from "@mdi/js";
import toast from "react-hot-toast";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof StudentInputSchema>>({
    resolver: zodResolver(StudentInputSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof StudentInputSchema>> = async (
    data,
  ) => {
    const response = await createStudent(data);
    if (response.success) {
      reset();
      toast.success("Schüler erstellt");
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
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
          <FormLabel htmlFor="className">Klassen Buchstabe</FormLabel>
          <Input
            id="className"
            {...register("className", {
              setValueAs: (value) => value || undefined,
            })}
          />
          <ErrorMessage>{errors.className?.message}</ErrorMessage>
        </div>
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

const ErrorMessage = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-medium text-red-500">{children}</span>
);
