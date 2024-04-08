import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ErrorMessage, FormLabel } from "../../students/_components/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteVisitation, updateVisitation } from "../methods/visit";
import { InputSchema } from "./timeSchema";
import { Prisma } from "@prisma/client";
import { timeToString } from "@/utils/time";

export default function EditTimeDialog({
  studentId,
  open,
  closeDialog,
  visitation,
}: {
  studentId: number;
  open: boolean;
  closeDialog: () => void;
  visitation: Prisma.VisitationGetPayload<{}> | undefined;
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      start: timeToString(visitation?.start),
      end: timeToString(visitation?.end || undefined),
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    await updateVisitation(studentId, {
      start: data.start,
      end: data.end,
    }).then(closeDialog);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => (open === false ? closeDialog() : {})}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Anwesenheit bearbeiten</DialogTitle>
          <DialogDescription>
            Passe die Start- und Endzeit an oder lösche den Eintrag vollständig.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid grid-cols-2 gap-2"
          onSubmit={handleSubmit(onSubmit, (data) => console.error(data))}
        >
          <div>
            <FormLabel htmlFor="start-time-input">Startzeit</FormLabel>
            <Input
              {...register("start", {
                setValueAs: (value) => value || undefined,
              })}
              id="start-time-input"
              type="time"
            />
            <ErrorMessage>{errors.start?.message}</ErrorMessage>
          </div>
          <div>
            <FormLabel htmlFor="end-time-input">Endzeit (optional)</FormLabel>
            <Input
              {...register("end", {
                setValueAs: (value) => value || undefined,
              })}
              id="end-time-input"
              type="time"
            />
            <ErrorMessage>{errors.end?.message}</ErrorMessage>
          </div>
          <div className="mt-4 col-span-full flex justify-end space-x-2 items-center">
            <Button
              variant={"destructive"}
              type="button"
              onClick={() => deleteVisitation(studentId).then(closeDialog)}
            >
              Löschen
            </Button>
            <Button type="submit">Speichern</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
