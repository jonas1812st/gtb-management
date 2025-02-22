import dayjs from "dayjs";
import ExceptionFormWrapper from "../_components/FormWrapper";
import { createException } from "../_methods/createException";
import { ExceptionDateModeSchema, ExceptionDatesSchema, ExceptionListsSchema } from "@/utils/zodSchema";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ mode: string; dates: string; lists: string }>;
}) {
  const search = await searchParams;

  try {
    const mode = ExceptionDateModeSchema.parse(search.mode);
    const dates = ExceptionDatesSchema.parse(JSON.parse(search.dates).map((date: string) => dayjs(date).toDate()));
    const listIds = ExceptionListsSchema.parse(JSON.parse(search.lists));

    return (
      <ExceptionFormWrapper
        props={{
          action: "create",
          actionMethod: createException,
          defaultValues: {
            dates,
            mode,
            lists: listIds,
          },
        }}
        params={params}
      />
    );
  } catch (error) {
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
}
