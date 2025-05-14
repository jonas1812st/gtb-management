"use client";

import { Prisma } from "@prisma/client";
import { create } from "zustand";

type VisitationOptionsState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  closeOptions: () => void;
  visitation: Prisma.VisitationGetPayload<{}> | null;
  setVisitation: (
    visitation: Prisma.VisitationGetPayload<{}> | null,
    options?: { beforeUpdate?: (visitation: Prisma.VisitationGetPayload<{}>, open: boolean) => void }
  ) => void;
  clearVisitation: () => void;
};

export const useVisitationOptionsState = create<VisitationOptionsState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  closeOptions: () => set({ open: false }),
  visitation: null,
  setVisitation: (visitation, options) =>
    set((state) => {
      if (options?.beforeUpdate && state.visitation) {
        options.beforeUpdate(state.visitation, state.open);
      }

      return { visitation };
    }),
  clearVisitation: () => set({ visitation: null, open: false }),
}));
