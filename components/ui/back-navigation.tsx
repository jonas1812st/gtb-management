import Link from "next/link";
import { Button } from "./button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export const BackNavigation = ({ href, title }: { href: string; title: string }) => (
  <div className="flex space-x-4 items-center">
    <Link href={href}>
      <Button size={"icon"} className="rounded-full" variant={"outline"}>
        <Icon size={0.8} path={mdiArrowLeft} />
      </Button>
    </Link>
    <h2 className="text-2xl font-semibold">{title}</h2>
  </div>
);
