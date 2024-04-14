"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const DeleteButton = (params: {
  action: (userId: number) => Promise<{
    success: boolean;
    message: string;
  }>;
  userId: number;
  url: string;
}) => {
  const router = useRouter();
  const onDelete = async () => {
    const response = await params.action(params.userId);
    if (response.success) {
      toast.success("Erfolgreich gelöscht");
      router.push(params.url);
    }
  };

  return (
    <Button type="submit" variant={"destructive"} onClick={onDelete}>
      Endgültig löschen
    </Button>
  );
};
