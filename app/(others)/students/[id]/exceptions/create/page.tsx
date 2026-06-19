import dayjs from "dayjs";
import ExceptionFormWrapper from "../_components/FormWrapper";
import { createException } from "../_methods/createException";
import {
  ExceptionReferrerSchema,
  ExceptionDateModeSchema,
  ExceptionDatesSchema,
  ExceptionListsSchema,
} from "@/utils/zodSchema";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ mode: string; dates: string; lists: string; referrer: string }>;
}) {
  const search = await searchParams;

  let parsedData = null;
  try {
    const mode = ExceptionDateModeSchema.parse(search.mode);
    const dates = ExceptionDatesSchema.parse(JSON.parse(search.dates).map((date: string) => dayjs(date).toDate()));
    const listIds = ExceptionListsSchema.parse(JSON.parse(search.lists));
    const referrer = ExceptionReferrerSchema.parse(search.referrer);
    parsedData = { mode, dates, listIds, referrer };
  } catch (error) {
    // Fallback to rendering without defaults
  }

  if (parsedData) {
    return (
      <ExceptionFormWrapper
        props={{
          action: "create",
          actionMethod: createException,
          defaultValues: {
            dates: parsedData.dates,
            mode: parsedData.mode,
            lists: parsedData.listIds,
          },
          referrer: parsedData.referrer,
        }}
        params={params}
      />
    );
  }

  return (
    <ExceptionFormWrapper
      props={{
        action: "create",
        actionMethod: createException,
      }}
      params={params}
    />
  );
}
