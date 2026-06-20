import { cacheTag } from "next/cache";
import prisma from "./prisma";
import { exceptionByListIdAndDatePrismaQuery, studentByWeekDayAndListIdPrismaQuery } from "./db-prisma";
import dayjs from "dayjs";
import "dayjs/locale/de";
import weekday from "dayjs/plugin/weekday";
import { Prisma } from "@prisma/client";
dayjs.locale("de");
dayjs.extend(weekday);

export const getUsers = async () => {
  "use cache";
  cacheTag("users");

  const data = await prisma.user.findMany();

  return data;
};

export const getUserById = async (id: number) => {
  "use cache";
  cacheTag("users");

  const data = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return data;
};

export const getStudents = async () => {
  "use cache";
  cacheTag("students");

  const data = await prisma.student.findMany();

  return data;
};

export const getStudentsByWeekDay = async (weekDay: number) => {
  "use cache";
  cacheTag("students");

  const data = await prisma.student.findMany({
    where: {
      attendances: {
        some: {
          day: weekDay,
        },
      },
    },
    include: {
      visitations: {
        where: {
          date: {
            equals: dayjs().startOf("day").toISOString(),
          },
        },
      },
    },
  });

  return data;
};

export const getStudentById = async (id: number) => {
  "use cache";
  cacheTag("students", "groups");

  const includeDefault = Prisma.validator<Prisma.StudentInclude>()({
    attendances: true,
    Exception: {
      include: {
        SpecificDates: true,
        ExceptionsOnLists: {
          include: {
            list: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    },
    GroupsOnStudents: {
      include: {
        group: true,
      },
    },
    visitations: {
      orderBy: {
        date: "desc",
      },
    },
  });

  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    include: includeDefault,
  });

  return data;
};

export const getStudentListsById = async (id: number) => {
  "use cache";
  cacheTag("students", "groups", "lists");

  const data = await prisma.list.findMany({
    where: {
      Group: {
        some: {
          GroupsOnStudents: {
            some: {
              student: {
                id,
              },
            },
          },
        },
      },
    },
    include: {
      activations: true,
    },
  });

  return data;
};

export const getListById = async (id: number) => {
  "use cache";
  cacheTag("lists", "groups");

  const data = await prisma.list.findUnique({
    where: {
      id,
    },
    include: {
      activations: true,
      Group: true,
    },
  });

  return data;
};

export const getDayNotesByListIdAndDate = async (listId: number, date: Date) => {
  "use cache";
  cacheTag("day-notes", "lists");

  const data = await prisma.dayNotes.findUnique({
    where: {
      date_listId: {
        date: dayjs(date).startOf("day").toISOString(),
        listId,
      },
    },
  });

  return data;
};

export const getLists = async () => {
  "use cache";
  cacheTag("lists", "groups");

  const data = await prisma.list.findMany({
    include: {
      activations: true,
      Group: true,
    },
  });

  return data;
};

export const getMainList = async () => {
  "use cache";
  cacheTag("lists", "groups");

  const data = await prisma.list.findFirst({
    where: {
      isMainList: true,
    },
    include: {
      activations: true,
      Group: true,
    },
  });

  return data;
};

export const getGroups = async () => {
  "use cache";
  cacheTag("groups", "lists");

  const data = await prisma.group.findMany({
    include: {
      GroupsOnStudents: true,
      list: true,
    },
  });

  return data;
};

export const getGroupById = async (id: number) => {
  "use cache";
  cacheTag("groups", "lists", "students");

  const data = await prisma.group.findUnique({
    where: {
      id,
    },
    include: {
      GroupsOnStudents: true,
      list: true,
    },
  });

  return data;
};

export const getGroupStudentsById = async (id: number) => {
  "use cache";
  cacheTag("groups", "lists", "students");

  const data = await prisma.student.findMany({
    where: {
      GroupsOnStudents: {
        some: {
          group: {
            id,
          },
        },
      },
    },
  });

  return data;
};

export async function getGroupsByListId(listId: number) {
  "use cache";
  cacheTag("groups");

  const groups = await prisma.group.findMany({
    where: {
      listId,
    },
    include: {
      GroupsOnStudents: true,
    },
  });

  return groups;
}

export async function getStudentsByGroup(groupId: number) {
  "use cache";
  cacheTag("students", "groups");

  const students = await prisma.student.findMany({
    where: {
      GroupsOnStudents: {
        some: {
          groupId,
        },
      },
    },
  });

  return students;
}

export async function getListsByWeekDay(weekDay: number) {
  "use cache";
  cacheTag("lists", "groups");

  const lists = await prisma.list.findMany({
    where: {
      activations: {
        some: {
          day: weekDay,
        },
      },
    },
    include: {
      activations: true,
      Group: true,
    },
  });

  return lists;
}

export const getStudentsByWeekDayAndListId = async (date: Date, listId: number) => {
  "use cache";
  cacheTag("students", "lists", "groups");

  const data = await prisma.student.findMany({
    where: studentByWeekDayAndListIdPrismaQuery(listId, date),
    include: {
      attendances: {
        where: {
          day: dayjs(date).weekday(),
          listId,
        },
      },
      visitations: {
        where: {
          date: {
            equals: dayjs(date).toISOString(),
          },
          listId,
        },
      },
      Exception: {
        where: exceptionByListIdAndDatePrismaQuery(listId, date),
        include: {
          SpecificDates: true,
        },

        // only take the most recent created exception to avoid duplicates
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
      GroupsOnStudents: {
        where: {
          group: {
            listId,
          },
        },
        include: {
          group: true,
        },
      },
    },
  });

  return data;
};

export async function getExceptionById(id: number) {
  "use cache";
  cacheTag("lists", "students");

  const exceptions = await prisma.exception.findUnique({
    where: {
      id,
    },
    include: {
      SpecificDates: true,
      ExceptionsOnLists: true,
    },
  });

  return exceptions;
}

export async function getVisitationById(id: number) {
  "use cache";
  cacheTag("lists", "students");

  const visitation = await prisma.visitation.findUnique({
    where: {
      id,
    },
  });

  return visitation;
}
