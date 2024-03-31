"use client";

import { Input } from "@/components/ui/input";
import { Prisma } from "@prisma/client";
import { useState } from "react";

type Students = Prisma.StudentCreateWithoutAttendancesInput[];

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
      <div className="flex space-x-2">
        <Input
          type="text"
          onChange={(e) => filterStudents(e.target.value)}
          placeholder="Filtern"
        />
      </div>
      <StudentTable students={filteredStudents} />
    </div>
  );
}

const StudentTable = ({ students }: { students: Students }) => (
  <table className="w-full border-collapse">
    <thead>
      <tr>
        {["Anwesend", "Name", "Klasse"].map((header, index) => (
          <th className="p-3 text-left" key={index + "_header_element"}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {students.map((student, index) => (
        <tr key={index + "_student"} className="border-b last:border-b-0">
          <Td>
            <input type="checkbox" />
          </Td>
          <Td>
            {student.firstName} {student.lastName}
          </Td>
          <Td>
            {student.grade}
            {student.className}
          </Td>
        </tr>
      ))}
    </tbody>
  </table>
);
const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="p-3">{children}</td>
);
