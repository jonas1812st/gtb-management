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
import { useListsContext, useStudentsContext } from "./context";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/form/dataForm";

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

        <ListInput />

        <StudentsInput />

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
    formState: { errors },
    watch,
    setValue,
  } = useGroupFormContext();

  const lists = useListsContext();

  const columns: ColumnDef<
    Prisma.ListGetPayload<{
      include: {
        options: {
          include: {
            activations: true;
            ListTableInformation: true;
          };
        };
        Group: true;
      };
    }>
  >[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row: { original: list } }) => {
        return <label htmlFor={list.id + "_list_select"}>{list.name}</label>;
      },
    },
    {
      accessorKey: "isSelected",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: list } }) => {
        return (
          <div className="flex justify-center">
            <input id={list.id + "_list_select"} type="radio" checked={list.id === watch("listId")} onChange={() => setValue("listId", list.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="grid gap-2">
      <div>
        <h2 className="font-semibold text-xl">Liste</h2>
        <InputDescription>Wähle die Liste aus, dessen Eigenschaften übernommen werden sollen.</InputDescription>
      </div>
      <DataTable data={lists} columns={columns} />
      <ErrorMessage>{errors.listId?.message}</ErrorMessage>
    </div>
  );
};

const StudentsInput = () => {
  const {
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useGroupFormContext();

  const students = useStudentsContext();

  const columns: ColumnDef<Prisma.StudentGetPayload<{}>>[] = [
    {
      accessorKey: "name",
      header: "Name",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => {
        return (
          <label htmlFor={student.id + "_student_select"}>
            {student.firstName} {student.lastName}
          </label>
        );
      },
    },
    {
      accessorKey: "class",
      header: "Klasse",
      accessorFn: (student) => student.grade + student.className,
    },
    {
      accessorKey: "isSelected",
      header: "",
      enableSorting: false,
      cell: ({ row: { original: student } }) => {
        return (
          <div className="flex justify-center">
            <input
              type="checkbox"
              id={student.id + "_student_select"}
              checked={watch("studentIds") && watch("studentIds").includes(student.id)}
              onChange={(e) =>
                e.target.checked
                  ? setValue("studentIds", [...(getValues("studentIds") ?? []), student.id])
                  : setValue(
                      "studentIds",
                      (getValues("studentIds") ?? []).filter((studentId) => studentId !== student.id)
                    )
              }
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="mb-2">
        <h2 className="font-semibold text-xl">Schüler</h2>
        <InputDescription>Wähle Schüler aus, die der Gruppe angehören sollen.</InputDescription>
      </div>
      <DataTable
        className={{ tableContainer: "overflow-auto max-h-[430px]" }}
        data={students}
        filter={{ placeholder: "Suche Schüler...", column: "name" }}
        columns={columns}
      />
      <ErrorMessage>{errors.studentIds?.message}</ErrorMessage>
    </div>
  );
};
