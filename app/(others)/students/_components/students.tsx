"use client";

import AddItem from "@/components/form/dataTableAddItem";
import { DataTableComp } from "@/components/form/dataTableComp";
import { Checkbox } from "@/components/ui/checkbox";
import { useTable } from "@/lib/useTable";
import { Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, ButtonVariants } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiClose, mdiDelete, mdiStar } from "@mdi/js";
import useScrollUp from "@/lib/useScrollUp";
import { FormLabel } from "@/components/form/form";
import { ModalComponent, RemoveStudentsModalContent, SimpleModalContent } from "./actionModals";
import { deleteStudents } from "../methods/deleteStudent";

type Students = Prisma.StudentGetPayload<{}>[];

export function StudentList({ students }: { students: Students }) {
  const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

  const columns: ColumnDef<Prisma.StudentGetPayload<{}>>[] = [
    {
      accessorKey: "checkbox",
      header: "",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => (
        <div className="relative">
          <Checkbox
            checked={selectedStudents.findIndex((selected) => selected === student.id) !== -1}
            onCheckedChange={(checked) =>
              checked
                ? setSelectedStudents([...selectedStudents, student.id])
                : setSelectedStudents(selectedStudents.filter((selected) => selected !== student.id))
            }
            className="absolute top-1/2 left-1/2 -translate-y-1/2"
          />
        </div>
      ),
      enableSorting: false,
    },
    {
      accessorKey: "fullName",
      header: "Name",
      accessorFn: (student) => student.firstName + " " + student.lastName,
      cell: ({ row: { original: student } }) => (
        <Link href={"/students/" + student.id} className="flex space-x-2 items-center">
          <span>
            {student.firstName} {student.lastName}
          </span>
        </Link>
      ),
    },
    {
      accessorKey: "class",
      header: "Klasse",
      accessorFn: (student) => student.grade + student.className,
    },
  ];

  const { table } = useTable({
    data: students,
    columns,
  });

  return (
    <div>
      <AddItem
        table={table}
        filter={{ column: "fullName", placeholder: "Suche" }}
        addItemBtn={{ type: "url", label: "Neuer Schüler", url: "/students/create" }}
      />
      <ActionBar students={students} setSelectedStudents={setSelectedStudents} selectedStudents={selectedStudents} />
      <DataTableComp columns={columns} table={table} />
    </div>
  );
}

const ActionBar = ({
  students,
  selectedStudents,
  setSelectedStudents,
}: {
  students: Students;
  selectedStudents: number[];
  setSelectedStudents: (value: number[]) => void;
}) => {
  const { show, topReached } = useScrollUp();

  return (
    <AnimatePresence>
      {selectedStudents.length !== 0 && (
        <motion.div
          className="overflow-hidden sticky top-2 z-10"
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
            translateY: show && !topReached ? 64 : 0,
            overflow: "hidden",
            transition: {
              ease: "easeInOut",
            },
            transitionEnd: {
              overflow: "visible",
            },
          }}
          exit={{
            opacity: 0,
            height: 0,
            overflow: "hidden",
          }}
        >
          <div className="pb-4">
            <div className="w-full p-2 px-4 border-2 border-navigation rounded-full bg-background text-foreground flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  // className="bg-navigation"
                  checked={selectedStudents.length === students.length}
                  onCheckedChange={(checked) =>
                    checked ? setSelectedStudents(students.map((student) => student.id)) : setSelectedStudents([])
                  }
                />
                <FormLabel htmlFor="select-all">
                  Alle auswählen ({selectedStudents.length}/{students.length})
                </FormLabel>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <div className="flex items-center space-x-2">
                  {(
                    [
                      {
                        id: "actions",
                        variant: "default",
                        icon: mdiStar,
                        dialogContent: <></>,
                      },
                      {
                        id: "remove",
                        variant: "destructive",
                        icon: mdiDelete,
                        dialogContent: (
                          <>
                            <RemoveStudentsModalContent
                              students={students.map((student) => student.id)}
                              callBackOnSuccess={() => setSelectedStudents([])}
                              action={() => {
                                return deleteStudents(selectedStudents);
                              }}
                            />
                          </>
                        ),
                      },
                    ] satisfies {
                      id: string;
                      variant: ButtonVariants;
                      icon: string;
                      dialogContent: React.ReactNode;
                    }[]
                  ).map((action) => (
                    <ModalComponent
                      key={action.id}
                      trigger={
                        <Button
                          variant={action.variant}
                          size={"icon"}
                          className="flex items-center justify-center h-7 w-7 rounded-full"
                        >
                          <Icon path={action.icon} size={0.9} />
                        </Button>
                      }
                    >
                      {action.dialogContent}
                    </ModalComponent>
                  ))}
                </div>
                <div className="border-e-2 h-6"></div>
                <Button
                  variant={"light"}
                  size={"icon"}
                  className="flex items-center justify-center h-7 w-7 rounded-full"
                  onClick={() => setSelectedStudents([])} // reset selected students
                >
                  <Icon path={mdiClose} size={0.7} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
