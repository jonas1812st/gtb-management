"use client";

import { ErrorMessage, FormLabel, InputDescription } from "@/components/form/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateGroupInputSchema } from "@/utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { mdiContentSave, mdiLoading, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { FormProvider, SubmitHandler, useForm, useFormContext } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const useGroupFormContext = () => useFormContext<z.infer<typeof CreateGroupInputSchema>>();

export default function GroupForm(
  params: (
    | { action: "create" }
    | {
      action: "edit";
      values: z.infer<typeof CreateGroupInputSchema>;
      id: number;
    }
  ) & {
    actionMethod: (
      data: z.infer<typeof CreateGroupInputSchema>,
      id: number
    ) => Promise<{
      message: string;
      success: boolean;
    }>;
  }
) {
  const methods = useForm<z.infer<typeof CreateGroupInputSchema>>({
    resolver: zodResolver(CreateGroupInputSchema),
    defaultValues:
      params.action === "edit"
        ? {
          ...params.values,
        }
        : {
          name: "",
        },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    getValues,
    reset,
  } = methods;

  const onSubmit: SubmitHandler<z.infer<typeof CreateGroupInputSchema>> = async (data) => {
    const response = await params.actionMethod(data, params.action === "edit" ? params.id : 0);

    if (response.success) {
      if (params.action === "create") {
        reset();
        toast.success("Gruppe erstellt");
      } else {
        toast.success("Gruppe aktualisiert");
      }
    } else {
      toast.error("Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, (data) => console.log("error", data, getValues()))} className="flex flex-col space-y-10">
        <MetaInput />

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

const MetaInput = () => {
  const {
    register,
    formState: { errors },
  } = useGroupFormContext();

  return (
    <div className="grid md:grid-cols-2 gap-2">
      <h2 className="col-span-full font-semibold text-xl">Metadaten</h2>
      <div>
        <FormLabel htmlFor="name">Gruppenname</FormLabel>
        <Input
          id="name"
          {...register("name", {
            setValueAs: (value) => value || undefined,
          })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>
      <div>
        <FormLabel htmlFor="color">Gruppenfarbe</FormLabel>
        <Input
          type="color"
          id="color"
          {...register("color", {
            setValueAs: (value) => value || undefined,
          })}
        />
        <ErrorMessage>{errors.color?.message}</ErrorMessage>
      </div>
    </div>
  );
};

const ListInput = () => {
  const {
    register,
    formState: { errors },
  } = useGroupFormContext();

  return (
    <div className="grid md:grid-cols-2 gap-2">
      <h2 className="col-span-full font-semibold text-xl">Metadaten</h2>
      <div>
        <FormLabel htmlFor="name">Gruppenname</FormLabel>
        <Input
          id="name"
          {...register("name", {
            setValueAs: (value) => value || undefined,
          })}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </div>
      <div>
        <FormLabel htmlFor="color">Gruppenfarbe</FormLabel>
        <Input
          type="color"
          id="color"
          {...register("color", {
            setValueAs: (value) => value || undefined,
          })}
        />
        <ErrorMessage>{errors.color?.message}</ErrorMessage>
      </div>
    </div>
  );
};
