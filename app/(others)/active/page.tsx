import { getListsByWeekDay } from "@/utils/db";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { connection } from "next/server";
import "dayjs/locale/de";
import weekday from "dayjs/plugin/weekday";
import { timeToString } from "@/utils/time";
import Icon from "@mdi/react";
import { mdiAccountMultiple, mdiClockOutline } from "@mdi/js";
import Link from "next/link";
import prisma from "@/utils/prisma";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { cn } from "@/lib/utils";
import { GroupLink, GroupLinkContainer } from "@/components/ui/group-link";
import { studentByWeekDayAndListIdPrismaQuery } from "@/utils/db-prisma";
import { getAccessRights } from "@/utils/accessRights";
dayjs.locale("de");
dayjs.extend(weekday);

// weekday is locale aware => for the german language this will be 0 for monday
const getWeekDay = () => dayjs().weekday();

export default async function Page() {
  await connection();

  const lists = await getListsByWeekDay(getWeekDay());

  return (
    <div>
      <div className="grid gap-4">
        {lists && lists.length !== 0 ? (
          lists?.map((list) => <ListItem key={list.id + "_list"} list={list} />)
        ) : (
          <i>Aktuell sind keine Listen aktiv</i>
        )}
      </div>
    </div>
  );
}

async function ListItem({
  list,
}: {
  list: Prisma.ListGetPayload<{
    include: {
      activations: true;
      Group: true;
    };
  }>;
}) {
  const date = dayjs().startOf("day").toISOString();
  const weekDay = getWeekDay();
  const access = await getAccessRights();

  const activationToday = list.activations.find((activation) => activation.day === weekDay)!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{list.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="grid md:grid-cols-2 gap-3">
          <GroupLinkContainer>
            {list.Group.map((group) => (
              <GroupLink key={group.id + "_group"} group={group} />
            ))}
          </GroupLinkContainer>

          <div className="flex items-start justify-end">
            <div className="flex gap-0.5 items-center">
              {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((weekDay, index) => (
                <div
                  className={cn(
                    "text-sm rounded-full border w-8 h-8 flex items-center justify-center",
                    list.activations.some((activation) => activation.day === index) ? "border-primary/40 bg-primary/20 border-2" : ""
                  )}
                  key={weekDay + "_weekDay_item"}
                >
                  <span>{weekDay}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2 flex-wrap">
          <div className="flex items-center space-x-1">
            <Icon path={mdiAccountMultiple} size={0.8} />
            <span>
              <ListStudentsAmount listId={list.id} date={date} /> Schüler anwesend
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon path={mdiClockOutline} size={0.8} />
            <span>
              {timeToString(activationToday.startTime)} - {timeToString(activationToday.endTime)}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end items-center space-x-2">
        {access.manageLists && (
          <Link href={`/lists/${list.id}`}>
            <Button variant={"secondary"}>Zur Liste</Button>
          </Link>
        )}
        <Link href={`/lists/${list.id}/today`}>
          <Button>Zu den Anwesenheiten</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

async function ListStudentsAmount({ listId, date }: { listId: number; date: string }) {
  "use cache";
  cacheTag("groups", "students", "lists");

  const weekDay = dayjs(date).weekday();

  const listStudentsForDay = await prisma.student.count({
    where: studentByWeekDayAndListIdPrismaQuery(listId, weekDay),
  });

  const activeStudentsForDay = await prisma.student.count({
    where: {
      AND: [
        {
          ...studentByWeekDayAndListIdPrismaQuery(listId, weekDay),
        },
        {
          visitations: {
            some: {
              date,
              end: null,
            },
          },
        },
      ],
    },
  });

  return <span className="px-2 py-0.5 rounded-xl bg-primary/20 text-sm">{activeStudentsForDay + " / " + listStudentsForDay}</span>;
}
