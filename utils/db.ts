import { unstable_cacheTag as cacheTag } from "next/cache";
import prisma from "./prisma";
import dayjs from "dayjs";

export const getUsers = async () => {
  "use cache";
  cacheTag("users");

  const data = await prisma.user.findMany();

  return data;
};

export const getUserById = async (id: number) => {
  "use cache";
  cacheTag("users", id.toString());

  const data = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return data;
};

export const getStudents = async () => {
  "use cache";
  cacheTag("students", "all");

  const data = await prisma.student.findMany();

  return data;
};

export const getStudentsByWeekDay = async (weekDay: number) => {
  "use cache";
  cacheTag("students", "all");

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
  cacheTag("students", id.toString());

  const data = await prisma.student.findUnique({
    where: {
      id,
    },
    include: {
      attendances: true,
      visitations: {
        orderBy: {
          date: "desc",
        },
      },
    },
  });

  return data;
};

export const getListById = async (id: number) => {
  "use cache";
  cacheTag("lists", id.toString());

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

export const getLists = async () => {
  "use cache";
  cacheTag("lists");

  const data = await prisma.list.findMany({
    include: {
      activations: true,
      Group: true,
    },
  });

  return data;
};

export const getGroups = async () => {
  "use cache";
  cacheTag("groups");

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
  cacheTag("groups", id.toString());

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
  cacheTag("students");

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
  cacheTag("lists");

  const lists = await prisma.list.findMany({
    where: {
      activations: {
        some: {
          day: weekDay,
        },
      },
    },
    include: {
      activations: {
        where: {
          day: weekDay,
        },
      },
      Group: true,
    },
  });

  return lists;
}
