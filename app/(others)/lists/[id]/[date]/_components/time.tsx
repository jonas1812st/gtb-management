import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteVisitation, updateVisitation } from "../_methods/visit";
import { InputSchema } from "../_methods/timeSchema";
import { Prisma, RecordTime } from "@prisma/client";
import { timeToString } from "@/utils/time";
import { ErrorMessage, FormLabel } from "@/components/form/form";
import { AnimatePresence, motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";

export default function EditTimeDialog({
  studentId,
  listId,
  date,
  open,
  closeDialog,
  visitation,
  recordTime,
  isMainList,
}: {
  studentId: number | null;
  listId: number;
  date: Date;
  open: boolean;
  closeDialog: () => void;
  visitation: Prisma.VisitationGetPayload<{}> | undefined;
  recordTime: RecordTime;
  isMainList: boolean;
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
                isMainList={isMainList}
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
  isMainList,
}: {
  studentId: number;
  listId: number;
  date: Date;
  closeDialog: () => void;
  visitation: Prisma.VisitationGetPayload<{}> | undefined;
  recordTime: RecordTime;
  isMainList: boolean;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
    defaultValues: {
      start: timeToString(visitation?.start),
      end: timeToString(visitation?.end || undefined),
      startNotes: visitation?.startNotes ?? undefined,
      endNotes: visitation?.endNotes ?? undefined,
      hasHomework: visitation?.hasHomework ?? undefined,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    await updateVisitation(
      studentId,
      {
        start: data.start,
        end: data.end,
        startNotes: data.startNotes,
        endNotes: data.endNotes,
        hasHomework: data.hasHomework,
      },
      listId,
      date
    ).then(closeDialog);
  };

  return (
    <form className="grid grid-cols-2 gap-x-2 gap-y-4" onSubmit={handleSubmit(onSubmit)}>
      {isMainList && (
        <div className="col-span-full flex space-x-2 items-center">
          <FormLabel htmlFor="has-homework">Hausaufgaben</FormLabel>
          <Controller
            control={control}
            name="hasHomework"
            render={({ field: { value, onChange } }) => (
              <Checkbox checked={value} onCheckedChange={(checked) => onChange(checked)} id="has-homework" className="block" />
            )}
          />
        </div>
      )}

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

      <div className="col-span-full">
        <FormLabel htmlFor="start-time">Notizen</FormLabel>
        <Tabs defaultValue="start-time" id="time-notes">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="start-time">Startzeit</TabsTrigger>
            <TabsTrigger value="end-time" disabled={recordTime !== "START_END"}>
              Endzeit
            </TabsTrigger>
          </TabsList>
          <TabsContent value="start-time">
            <Textarea spellCheck={false} {...register("startNotes")} id="start-notes-input" placeholder="Notizen zur Startzeit" />
            <ErrorMessage>{errors.startNotes?.message}</ErrorMessage>
          </TabsContent>
          <TabsContent value="end-time">
            <Textarea spellCheck={false} {...register("endNotes")} id="end-notes-input" placeholder="Notizen zur Endzeit" />
            <ErrorMessage>{errors.endNotes?.message}</ErrorMessage>
          </TabsContent>
        </Tabs>
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
