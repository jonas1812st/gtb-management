import { Prisma } from "@prisma/client";
import dayjs from "dayjs";

export function formatDatesCreate({
  singleDates,
  mode,
}: {
  singleDates: Date[];
  mode: "range" | "multiple";
}): Omit<Partial<Prisma.ExceptionCreateArgs["data"]>, "Student"> {
  if (mode === "range" && singleDates.length >= 2) {
    return {
      startDate: dayjs(singleDates[0]).startOf("day").toDate(),
      endDate: dayjs(singleDates[1]).endOf("day").toDate(),
    };
  } else {
    return {
      SpecificDates: {
        create: singleDates.map((date) => ({ date })),
      },
    };
  }
}

export function formatDatesEdit({
  singleDates,
  mode,
}: {
  singleDates: Date[];
  mode: "range" | "multiple";
}): Omit<Partial<Prisma.ExceptionUpdateArgs["data"]>, "Student"> {
  if (mode === "range" && singleDates.length >= 2) {
    return {
      startDate: dayjs(singleDates[0]).startOf("day").toDate(),
      endDate: dayjs(singleDates[1]).endOf("day").toDate(),
      SpecificDates: {
        deleteMany: {},
      },
    };
  } else {
    return {
      startDate: null,
      endDate: null,
      SpecificDates: {
        deleteMany: {},
        create: singleDates.map((date) => ({ date })),
      },
    };
  }
}
