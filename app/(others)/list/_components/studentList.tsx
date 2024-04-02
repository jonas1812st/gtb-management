"use client";

import { Table, Td, Th, Tr } from "@/components/form/table";
import { Input } from "@/components/ui/input";
import { mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

type Students = Prisma.StudentGetPayload<{}>[];

export default function StudentList({ students }: { students: Students }) {
  const [filteredStudents, setFilteredStudents] = useState(students);

  let filterTimeout: NodeJS.Timeout;

  const filterStudents = (inputValue: string) => {
    clearTimeout(filterTimeout);

    filterTimeout = setTimeout(() => {
      const filtered = students.filter((student) => {
        const name =
          student.firstName.toLowerCase() +
          " " +
          student.lastName.toLowerCase();

        if (name.includes(inputValue.toLowerCase())) return true;
      });

      if (inputValue === "") return setFilteredStudents(students);

      setFilteredStudents(filtered);
    }, 500);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2 items-center justify-end">
        <Input
          type="text"
          onChange={(e) => filterStudents(e.target.value)}
          placeholder="Suchen"
          className="w-[340px]"
        />
      </div>
      <div className="overflow-auto">
        <StudentTable students={filteredStudents} />
      </div>
    </div>
  );
}

const StudentTable = ({ students }: { students: Students }) => (
  <Table>
    <thead>
      <tr>
        {["Anwesend", "Name", "Klasse"].map((header, index) => (
          <Th key={index + "_header_element"}>{header}</Th>
        ))}
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <Tr key={index + "_student"}>
          <Td>
            <input type="checkbox" />
          </Td>
          <Td>
            <Link href={"/students/" + student.id}>
              {student.firstName} {student.lastName}
            </Link>
          </Td>
          <Td>
            {student.grade}
            {student.className}
          </Td>
          <td>
            <Link
              href={"/students/" + student.id}
              className="text-gray-600 h-full w-full"
            >
              <Icon size={0.8} path={mdiInformationOutline} />
            </Link>
          </td>
        </Tr>
      ))}
    </tbody>
  </Table>
);
