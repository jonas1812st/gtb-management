import { Prisma } from "@prisma/client";
import { Input } from "../ui/input";

export const SearchStudentsInput = ({
  students,
  setFiltered,
}: {
  students: Prisma.StudentGetPayload<{}>[];
  setFiltered: (value: number[]) => void;
}) => {
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

      if (inputValue === "")
        return setFiltered(students.map((student) => student.id));

      setFiltered(filtered.map((student) => student.id));
    }, 500);
  };

  return (
    <Input
      type="text"
      onChange={(e) => filterStudents(e.target.value)}
      placeholder="Suchen"
      className="w-[340px]"
    />
  );
};
