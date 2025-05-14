"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function usePageChangeEffect(open: boolean, callback: () => void) {
  const pathname = usePathname();
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    return () => {
      if (openRef.current) {
        callback();
      }
    };
  }, [pathname]); // Läuft nur, wenn sich der Pfad ändert
}
