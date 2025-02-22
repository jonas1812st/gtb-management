import dayjs from "dayjs";
import "dayjs/locale/de";
import weekday from "dayjs/plugin/weekday";
import { Prisma } from "@prisma/client";
dayjs.locale("de");
dayjs.extend(weekday);

export const studentByWeekDayAndListIdPrismaQuery = (listId: number, date: Date): Prisma.StudentWhereInput => {
  const weekDay = dayjs(date).weekday();

  return {
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
      {
        // check if student as an exception rule for the given weekday and listId. The student has to be present.
        Exception: {
          some: {
            presence: "PRESENT",
            end: {
              not: null,
            },
            ...exceptionByListIdAndDatePrismaQuery(listId, date),
          },
        },
      },
    ],
  };
};

export const exceptionByListIdAndDatePrismaQuery = (listId: number, date: Date): Prisma.ExceptionWhereInput => {
  return {
    ExceptionsOnLists: {
      some: {
        listId,
      },
    },
    OR: [
      {
        startDate: null,
        endDate: null,
        SpecificDates: {
          some: {
            date: dayjs(date).toISOString(),
          },
        },
      },
      {
        startDate: {
          lte: dayjs(date).toISOString(),
        },
        endDate: {
          gte: dayjs(date).toISOString(),
        },
        SpecificDates: {
          none: {},
        },
      },
    ],
  };
};
