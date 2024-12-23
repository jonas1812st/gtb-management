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
dayjs.locale("de");
dayjs.extend(weekday);

export default async function Page() {
  await connection();

  // weekday is locale aware => for the german language this will be 0 for monday
  const weekDay = dayjs().weekday();

  const lists = await getListsByWeekDay(weekDay);

  return (
    <div>
      <h1 className="text-2xl font-bold">Aktivierte Listen</h1>
      <div className="flex flex-col space-y-3 mt-4">
        {lists.length !== 0 ? lists.map((list) => <ListItem key={list.id + "_list"} list={list} />) : <i>Aktuell sind keine Listen aktiv</i>}
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

  return (
    <Link href={`/lists/${list.id}/now`} className="px-4 py-2.5 rounded-lg border flex flex-col space-y-2">
      <div>
        <h2 className="text-xl font-bold mb-2">{list.name}</h2>
        <div className="h-[1px] bg-border" />
      </div>

      <div className="flex justify-between gap-2 flex-wrap">
        <div className="flex flex-wrap gap-3">
          {list.Group.map((group) => (
            <GroupItem key={group.id + "_group"} group={group} />
          ))}
        </div>

        <div className="flex items-center space-x-1">
          <Icon path={mdiClockOutline} size={0.7} />
          <span className="text-sm font-medium">
            {timeToString(list.activations[0].startTime)} - {timeToString(list.activations[0].endTime)}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-1">
        <Icon path={mdiAccountMultiple} size={0.7} />
        <span className="text-sm font-medium">
          <ListStudentsAmount groupIds={list.Group.map((group) => group.id)} date={date} />
        </span>
      </div>
    </Link>
  );
}

async function ListStudentsAmount({ groupIds, date }: { groupIds: number[]; date: string }) {
  // "use cache";
  // cacheTag("groups", "students", "lists");

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
              AND: [
                {
                  date,
                },
                {
                  NOT: {
                    end: null,
                  },
                },
              ],
            },
          },
        },
      ],
    },
  });

  return activeStudents + "/" + groupStudents;
}

function GroupItem({ group }: { group: Prisma.GroupGetPayload<{}> }) {
  return (
    <div className="flex items-center space-x-1">
      <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: group.color ?? "grey" }} />
      <span className="text-sm font-medium">{group.name}</span>
    </div>
  );
}
