"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const DeleteButton = (params: {
  action: (studentId: number) => Promise<{
    success: boolean;
    message: string;
  }>;
  studentId: number;
}) => {
  const router = useRouter();
  const onDelete = async () => {
    const response = await params.action(params.studentId);
    if (response.success) {
      router.push("/students");
    }
  };

  return (
    <Button type="submit" variant={"destructive"} onClick={onDelete}>
      Endgültig löschen
    </Button>
  );
};
