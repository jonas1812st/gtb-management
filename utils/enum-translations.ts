import { ListStudentNotes } from "@prisma/client";

export const listStudentNotesTranslation: Record<ListStudentNotes, string> = {
  NONE: "Nicht anzeigen",
  MARKED: "Als Markierung",
  SHORTENED: "Gekürzt",
  FULL: "Volle Länge",
};
