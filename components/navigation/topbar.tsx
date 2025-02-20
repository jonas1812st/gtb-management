"use client";

import { cn } from "@/lib/utils";
import { mdiAccount, mdiCog, mdiLogout } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { signOut } from "next-auth/react";
import { PopoverClose } from "@radix-ui/react-popover";
import { useAccess } from "../cache/accessProvider";
import { motion } from "framer-motion";
import useScrollUp from "@/lib/useScrollUp";

export default function TopBar() {
  const pathname = usePathname();
  const access = useAccess();

  const show = useScrollUp();

  return (
    <motion.nav
      animate={{ translateY: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 left-0 z-20 p-3 shadow-md bg-navigation flex justify-center"
    >
      <div className="flex justify-between items-center w-[1024px]">
        <div className="flex items-center space-x-10">
          <div>
            <h1 className="text-navigation-foreground text-2xl font-bold">GTB</h1>
          </div>
          <div className="flex space-x-2">
            {[
              { label: "Aktive Listen", url: "/active" },
              { label: "Schüler", url: "/students" },
              { label: "Listen", url: "/lists", enabled: access.manageLists },
              { label: "Gruppen", url: "/groups", enabled: access.manageGroups },
            ]
              .filter((element) => element.enabled !== false)
              .map((element, index) => (
                <Link
                  href={element.url}
                  className={cn(
                    "font-medium py-2 px-3 rounded-md transition duration-100 text-navigation-foreground",
                    pathname === element.url ? "bg-navigation-active" : "hover:bg-navigation-hover"
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
              <button className="text-navigation-foreground flex items-center justify-center rounded-full p-2 bg-navigation-hover transition duration-100 hover:bg-navigation-active">
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
    </motion.nav>
  );
}

const PopoverBtn = ({ children, onClick }: { children: React.ReactNode; onClick?: (() => void) | string }) => {
  if (typeof onClick !== "string")
    return (
      <PopoverClose className="p-2 transition hover:bg-muted rounded-md text-left flex items-center space-x-2" onClick={onClick}>
        {children}
      </PopoverClose>
    );
  else
    return (
      <Link href={onClick}>
        <PopoverClose className="p-2 transition hover:bg-muted rounded-md text-left flex items-center space-x-2 w-full">{children}</PopoverClose>
      </Link>
    );
};
