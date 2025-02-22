import { ExceptionPresence, ListStudentNotes } from "@prisma/client";

export const listStudentNotesTranslation: Record<ListStudentNotes, string> = {
  NONE: "Nicht anzeigen",
  MARKED: "Als Markierung",
  SHORTENED: "Gekürzt",
  FULL: "Volle Länge",
};

export const studentExceptionPresence: Record<ExceptionPresence, string> = {
  PRESENT: "Anwesend",
  ABSENT: "Nicht anwesend",
};
