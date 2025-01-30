import { Prisma } from "@prisma/client";

export const studentByWeekDayAndListIdPrismaQuery = (listId: number, weekDay: number): Prisma.StudentWhereInput => ({
  OR: [
    {
      AND: [
        // check if student is in a group which is connected to the listId
        {
          GroupsOnStudents: {
            some: {
              group: {
                listId,
              },
            },
          },
        },
        // check if student has no db record in attendances for the given weekday and listId
        {
          attendances: {
            none: {
              day: weekDay,
              listId,
            },
          },
        },
      ],
    },
    // check if student has a db record in attendances for the given weekday and listId and is marked as present
    {
      attendances: {
        some: {
          day: weekDay,
          listId,
          status: "PRESENT",
        },
      },
    },
  ],
});
