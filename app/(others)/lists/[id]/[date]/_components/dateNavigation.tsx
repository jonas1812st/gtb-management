"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { mdiCalendar, mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export const DateNavigationCalendar = ({ date: initialDate, listId }: { date: string; listId: number }) => {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} className="rounded-xl" variant={"light"}>
          <Icon path={mdiCalendar} size={0.8} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={dayjs(initialDate).toDate()}
          onSelect={(date) => router.replace(`/lists/${listId}/${dayjs(date).format("YYYY-MM-DD")}`)}
          className="rounded-md border"
          weekStartsOn={1}
        />
      </PopoverContent>
    </Popover>
  );
};

export const DateNavigationForward = ({ date, listId }: { date: string; listId: number }) => {
  const dateBackward = dayjs(date).add(1, "day").format("YYYY-MM-DD");

  return (
    <DateNavigationLink href={`/lists/${listId}/${dateBackward}`}>
      <Icon path={mdiChevronRight} size={0.8} />
    </DateNavigationLink>
  );
};

export const DateNavigationBackward = ({ date, listId }: { date: string; listId: number }) => {
  const dateBackward = dayjs(date).subtract(1, "day").format("YYYY-MM-DD");

  return (
    <DateNavigationLink href={`/lists/${listId}/${dateBackward}`}>
      <Icon path={mdiChevronLeft} size={0.8} />
    </DateNavigationLink>
  );
};

const DateNavigationLink = ({ href, children }: PropsWithChildren<{ href: string }>) => (
  <Link href={href} className="text-muted-foreground transition hover:text-foreground p-2 bg-primary/10 hover:bg-primary/30 rounded-xl">
    {children}
  </Link>
);
