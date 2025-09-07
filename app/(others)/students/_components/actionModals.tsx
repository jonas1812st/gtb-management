import { DeleteButton } from "@/components/form/deleteBtn";
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
import { ApiResponseMessage } from "@/types/global";
import { PropsWithChildren, createContext, useContext, useState } from "react";

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

export function RemoveStudentsModalContent({
  students,
  action,
  callBackOnSuccess,
}: {
  students: number[];
  action: () => Promise<ApiResponseMessage>;
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
        <DeleteButton
          callBack={{
            onSuccess: () => {
              callBackOnSuccess?.();
              setOpen(false);
            },
          }}
          action={action}
        />
      </DialogFooter>
    </>
  );
}
