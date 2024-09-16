"use client";

import { Button } from "@/components/ui/button";
import { mdiArrowLeft, mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";

export default function Error({ error, url = "/students", btnLabel = "Zur Schülerübersicht" }: { error: string; btnLabel?: string; url?: string }) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2 p-4 rounded-xl bg-red-50 border-2 border-red-400">
        <Icon size={1} path={mdiInformationOutline} className="text-red-600" />
        <span className="font-medium text-red-600">{error}</span>
      </div>
      <div className="flex items-center space-x-2">
        <Link href={url}>
          <Button variant={"secondary"} className="flex space-x-2 items-center">
            <Icon path={mdiArrowLeft} size={0.8} />
            <span>{btnLabel}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
