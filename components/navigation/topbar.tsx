"use client";

import { cn } from "@/lib/utils";
import { mdiAccount, mdiCog, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { signOut } from "next-auth/react";
import { PopoverClose } from "@radix-ui/react-popover";

export default function TopBar() {
  const pathname = usePathname();

  return (
    <nav className="p-3 shadow-md bg-[#4d7c8a] flex justify-center">
      <div className="flex justify-between items-center w-[1024px]">
        <div className="flex items-center space-x-10">
          <div>
            <h1 className="text-white text-2xl font-bold">GTB</h1>
          </div>
          <div className="flex space-x-2">
            {[
              { label: "Liste", url: "/list" },
              { label: "Schüler", url: "/students" },
            ].map((element, index) => (
              <Link
                href={element.url}
                className={cn(
                  "font-medium py-2 px-3 rounded-md transition duration-100 text-white",
                  pathname === element.url
                    ? "bg-[#5d97a8]"
                    : "hover:bg-[#578a99]"
                )}
                key={index + "_top_bar_element"}
              >
                {element.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="justify-self-end">
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-white flex items-center justify-center rounded-full p-2 bg-[#578a99] transition duration-100 hover:bg-[#5d97a8]">
                <Icon size={1} path={mdiAccount} />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-1.5">
              <div className="flex flex-col">
                <PopoverBtn onClick="/users/me">
                  <Icon size={0.8} path={mdiAccount} />
                  <span>Profil</span>
                </PopoverBtn>
                <PopoverBtn onClick={"/manage"}>
                  <Icon size={0.8} path={mdiCog} />
                  <span>Verwaltung</span>
                </PopoverBtn>
                <PopoverBtn
                  onClick={async () => {
                    await signOut();
                  }}
                >
                  <Icon size={0.8} path={mdiLogout} />
                  <span>Abmelden</span>
                </PopoverBtn>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
}

const PopoverBtn = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: (() => void) | string;
}) => {
  if (typeof onClick !== "string")
    return (
      <PopoverClose
        className="p-2 transition hover:bg-gray-100 rounded-md text-left flex items-center space-x-2"
        onClick={onClick}
      >
        {children}
      </PopoverClose>
    );
  else
    return (
      <Link href={onClick}>
        <PopoverClose className="p-2 transition hover:bg-gray-100 rounded-md text-left flex items-center space-x-2 w-full">
          {children}
        </PopoverClose>
      </Link>
    );
};
