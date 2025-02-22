import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteVisitation, updateVisitation } from "../_methods/visit";
import { InputSchema } from "../_methods/timeSchema";
import { Prisma, RecordTime } from "@prisma/client";
import { timeToString } from "@/utils/time";
import { ErrorMessage, FormLabel } from "@/components/form/form";
import { AnimatePresence, motion } from "framer-motion";

export default function EditTimeDialog({
  studentId,
  listId,
  date,
  open,
  closeDialog,
  visitation,
  recordTime,
}: {
  studentId: number | null;
  listId: number;
  date: Date;
  open: boolean;
  closeDialog: () => void;
  visitation: Prisma.VisitationGetPayload<{}> | undefined;
  recordTime: RecordTime;
}) {
  return (
    <Dialog open={open} onOpenChange={(open) => (open === false ? closeDialog() : {})}>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Anwesenheit bearbeiten</DialogTitle>
          <DialogDescription>Passe die Start- und Endzeit an oder lösche den Eintrag vollständig.</DialogDescription>
        </DialogHeader>
        <AnimatePresence>
          {studentId && (
            <motion.div
              variants={{ open: { opacity: 1 }, close: { opacity: 0, transition: { delay: 1 } } }}
              initial="open"
              animate="open"
              exit="close"
            >
              <EditTimeDialogContent
                recordTime={recordTime}
                closeDialog={closeDialog}
                listId={listId}
                date={date}
                studentId={studentId}
                visitation={visitation}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

const EditTimeDialogContent = ({
  studentId,
  listId,
  date,
  closeDialog,
  visitation,
  recordTime,
}: {
  studentId: number;
  listId: number;
  date: Date;
  closeDialog: () => void;
  visitation: Prisma.VisitationGetPayload<{}> | undefined;
  recordTime: RecordTime;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      start: timeToString(visitation?.start),
      end: timeToString(visitation?.end || undefined),
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    await updateVisitation(
      studentId,
      {
        start: data.start,
        end: data.end,
      },
      listId,
      date
    ).then(closeDialog);
  };

  return (
    <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit(onSubmit)}>
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
          disabled={recordTime !== "START_END"}
        />
        <ErrorMessage>{errors.end?.message}</ErrorMessage>
      </div>
      <div className="mt-4 col-span-full flex justify-end space-x-2 items-center">
        <Button variant={"destructive"} type="button" onClick={() => deleteVisitation(studentId, listId, date).then(closeDialog)}>
          Löschen
        </Button>
        <Button type="submit">Speichern</Button>
      </div>
    </form>
  );
};
