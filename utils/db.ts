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
      options: {
        include: {
          activations: true,
          ListTableInformation: true,
        },
      },
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
      options: {
        include: {
          activations: true,
          ListTableInformation: true,
        },
      },
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
