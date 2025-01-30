import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function AttendanceWarningDialog({ open, closeDialog, confirm }: { open: boolean; closeDialog: () => void; confirm: () => void }) {
  return (
    <Dialog open={open} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Für diese Liste gibt es keine Endzeiten</DialogTitle>
          <DialogDescription>Das Bestätigen dieses Pop-Ups wird die Start-Zeit löschen. Bist du sicher, dass dies geschehen soll?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button variant="outline">Schließen</Button>
          </DialogClose>
          <Button
            onClick={() => {
              confirm();
            }}
          >
            Bestätigen
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
