"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ApiResponseMessage, OptionalBy } from "@/types/global";
import { CreateDayNotesInputSchema } from "@/utils/zodSchema";
import { mdiText } from "@mdi/js";
import Icon from "@mdi/react";
import { Prisma } from "@prisma/client";
import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

export default function DayNotes({
  notes: initialNotes,
  onSave,
}: {
  notes: Omit<OptionalBy<Prisma.DayNotesGetPayload<{}>, "notes">, "id">;
  onSave: (notes: z.infer<typeof CreateDayNotesInputSchema> | null) => Promise<ApiResponseMessage>;
}) {
  const [notes, setNotes] = useState<string | null>(initialNotes?.notes ?? null);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button size={"icon"} className="rounded-xl" variant={"light"}>
          <Icon path={mdiText} size={0.8} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tägliche Notizen</DialogTitle>
          <DialogDescription>Gib hier Notizen für den Tag ein.</DialogDescription>
        </DialogHeader>

        <Textarea
          placeholder="Hier Notizen für den Tag eintragen."
          spellCheck={false}
          value={notes ?? ""}
          rows={5}
          onChange={(e) => setNotes(e.currentTarget.value || null)}
        />

        <DialogFooter>
          <Button
            onClick={async () => {
              const result = await onSave(
                notes !== null
                  ? {
                      ...initialNotes,
                      notes,
                    }
                  : null
              );

              if (result.success) {
                setOpen(false);
                toast.success("Notizen gespeichert");
              } else {
                toast.error("Fehler beim Speichern der Notizen");
              }
            }}
          >
            Speichern
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
