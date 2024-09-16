import dayjs from "dayjs";

export function stringToTime<T extends string | undefined>(value: T): T extends string ? number : undefined {
  if (!value && typeof value !== "string") return undefined;
  const hours = parseInt(value.split(":")[0], 10);
  const minutes = parseInt(value.split(":")[1], 10);

  return hours * 60 + minutes;
}

export const timeToString = (value: number | undefined) => {
  if (!value) return undefined;

  return dayjs().hour(0).minute(value).format("HH:mm");
};
