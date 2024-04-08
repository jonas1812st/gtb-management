"use client";

import { SearchStudentsInput } from "@/components/form/search";
import { Td, Th, Tr, Table } from "@/components/form/table";
import { Button } from "@/components/ui/button";
import { mdiInformationOutline, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

type Students = Prisma.StudentGetPayload<{}>[];

export function StudentList({ students }: { students: Students }) {
  const [filteredStudents, setFilteredStudents] = useState(students);
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <Link href={"/students/create"}>
          <Button
            className="flex items-center space-x-2"
            size={"sm"}
            variant={"secondary"}
          >
            <Icon size={0.7} path={mdiPlus} />
            <span>Neuer Schüler</span>
          </Button>
        </Link>
        <SearchStudentsInput
          students={students}
          setFiltered={(ids) =>
            setFilteredStudents(
              students.filter((student) => ids.includes(student.id)),
            )
          }
        />
      </div>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Klasse</Th>
          </Tr>
        </thead>
        <tbody>
          {students.length === 0 && (
            <Tr>
              {/* should span the whole table */}
              <Td colSpan={100}>
                <div className="flex items-center justify-center text-gray-500">
                  <span className="font-medium">Keine Schüler existieren</span>
                </div>
              </Td>
            </Tr>
          )}
          {filteredStudents.map((student, index) => (
            <Tr key={index + "_student"}>
              <Td>
                <Link href={"/students/" + student.id}>
                  {student.firstName} {student.lastName}
                </Link>
              </Td>
              <Td>
                {student.grade}
                {student.className}
              </Td>
              <Td>
                <Link
                  href={"/students/" + student.id}
                  className="text-gray-600 h-full w-full"
                >
                  <Icon size={0.8} path={mdiInformationOutline} />
                </Link>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
