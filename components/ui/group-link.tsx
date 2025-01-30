import Link from "next/link";
import { PropsWithChildren } from "react";

export function GroupLinkContainer({ children }: PropsWithChildren<{}>) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export function GroupLink({ group }: { group: { id: number; name: string; color?: string | null } }) {
  return (
    <Link
      href={"/groups/" + group.id}
      className="px-2.5 py-0.5 bg-primary/20 transition hover:bg-primary/30 rounded-full flex space-x-1 items-center"
      key={group.id + "_group_link"}
    >
      <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: group.color ?? "grey" }} />
      <span>{group.name}</span>
    </Link>
  );
}
