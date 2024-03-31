export const stringToTime = (value: string | undefined) => {
  if (!value) return undefined;
  const hours = parseInt(value.split(":")[0], 10);
  const minutes = parseInt(value.split(":")[1], 10);

  return hours * 60 + minutes;
};
