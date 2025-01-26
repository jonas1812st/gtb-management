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

  const activationToday = list.activations.find((activation) => activation.day === weekDay)!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{list.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-wrap gap-1.5">
            {list.Group.map((group) => (
              <GroupItem key={group.id + "_group"} group={group} />
            ))}
          </div>

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
              <ListStudentsAmount groupIds={list.Group.map((group) => group.id)} date={date} /> Schüler anwesend
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
        <Link href={`/lists/${list.id}`}>
          <Button variant={"secondary"}>Zur Liste</Button>
        </Link>
        <Link href={`/lists/${list.id}/today`}>
          <Button>Zur aktiven Liste</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

async function ListStudentsAmount({ groupIds, date }: { groupIds: number[]; date: string }) {
  "use cache";
  cacheTag("groups", "students", "lists");

  const groupStudents = await prisma.student.count({
    where: {
      GroupsOnStudents: {
        some: {
          groupId: {
            in: groupIds,
          },
        },
      },
    },
  });

  const activeStudents = await prisma.student.count({
    where: {
      AND: [
        {
          GroupsOnStudents: {
            some: {
              groupId: {
                in: groupIds,
              },
            },
          },
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

  return <span className="px-2 py-0.5 rounded-xl bg-primary/20 text-sm">{activeStudents + " / " + groupStudents}</span>;
}

function GroupItem({ group }: { group: Prisma.GroupGetPayload<{}> }) {
  return (
    <div className="flex items-center space-x-1 rounded-full bg-primary/20 px-2.5 py-0.5">
      <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: group.color ?? "grey" }} />
      <span>{group.name}</span>
    </div>
  );
}
