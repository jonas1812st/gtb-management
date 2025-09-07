import { ActionButton } from "@/components/form/actionBtn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { PropsWithChildren, createContext, useContext, useState, useTransition } from "react";
import { deleteStudents } from "../methods/deleteStudent";
import { cn } from "@/lib/utils";
import { ApiResponseMessage } from "@/types/global";
import { updateStudentGrades } from "../methods/updateGrades";
import { mdiStar } from "@mdi/js";
import toast from "react-hot-toast";

const ModalOpenContext = createContext<{ value: boolean; setValue: (value: boolean) => void }>({
  value: false,
  setValue: () => {},
});

const useOpenModal = () => useContext(ModalOpenContext);

export function ModalComponent({ trigger, children }: PropsWithChildren<{ trigger: React.ReactNode }>) {
  const [open, setOpen] = useState(false);

  return (
    <ModalOpenContext value={{ value: open, setValue: setOpen }}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </ModalOpenContext>
  );
}

export function StudentActionsModalContent({
  students,
  callBackOnSuccess,
}: {
  students: number[];
  callBackOnSuccess?: () => void;
}) {
  const actions: {
    id: string;
    action: () => Promise<ApiResponseMessage>;
    label: string;
  }[] = [
    {
      id: "grade-up",
      action: () => updateStudentGrades(students, 1),
      label: "Klassenstufe erhöhen",
    },
    {
      id: "grade-down",
      action: () => updateStudentGrades(students, -1),
      label: "Klassenstufe verringern",
    },
  ];

  const multiple = students.length > 1;
  const { setValue: setOpen } = useOpenModal();

  const [isPending, startTransition] = useTransition();
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const onAction = () =>
    startTransition(async () => {
      const studentAction = actions.find((action) => action.id === selectedAction);
      if (studentAction) {
        const response = await studentAction.action();

        if (response.success) {
          toast.success("Erfolgreich ausgeführt");

          setOpen(false);

          callBackOnSuccess?.();
        }
        if (!response.success) {
          toast.success("Es ist ein Fehler aufgetreten");
        }
      }
    });

  return (
    <>
      <DialogHeader>
        <DialogTitle>Aktionen ausführen</DialogTitle>
        <DialogDescription>Führe Aktionen für {multiple ? "die" : "den"} ausgewählten Schüler aus.</DialogDescription>
      </DialogHeader>
      <div className="grid gap-2">
        {actions.map((action) => {
          const selected = action.id === selectedAction;
          return (
            <button
              key={action.id}
              className={cn(
                "p-2 flex items-center space-x-2 text-sm text-left font-medium rounded-md outline outline-2 transition-all",
                !selected ? "text-muted-foreground outline-muted" : "outline-primary"
              )}
              onClick={() => setSelectedAction(action.id)}
            >
              <input
                checked={action.id === selectedAction}
                type="radio"
                id={action.id + "_action-radio"}
                name="action-radio"
                readOnly
              />
              <span className="cursor-pointer">{action.label}</span>
            </button>
          );
        })}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Abbrechen
          </Button>
        </DialogClose>
        <Button
          disabled={!selectedAction}
          loading={isPending}
          type="submit"
          icon={{ path: mdiStar }}
          onClick={onAction}
        >
          Aktion ausführen
        </Button>
      </DialogFooter>
    </>
  );
}

export function RemoveStudentsModalContent({
  students,
  callBackOnSuccess,
}: {
  students: number[];
  callBackOnSuccess?: () => void;
}) {
  const multiple = students.length > 1;
  const { setValue: setOpen } = useOpenModal();

  return (
    <>
      <DialogHeader>
        <DialogTitle>Möchtest du {multiple ? "diese" : "diesen"} Schüler löschen?</DialogTitle>
        <DialogDescription>
          Diese Aktion kann nicht rückgängig gemacht werden. {multiple ? "Die" : "Der"} Schüler und{" "}
          {multiple ? "ihre" : "seine"} Daten werden permanent von diesem System gelöscht.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="outline">
            Abbrechen
          </Button>
        </DialogClose>
        <ActionButton
          callBack={{
            onSuccess: () => {
              callBackOnSuccess?.();
              setOpen(false);
            },
          }}
          action={() => deleteStudents(students)}
        />
      </DialogFooter>
    </>
  );
}
