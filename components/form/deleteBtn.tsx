"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const DeleteButton = (params: {
  action: () => Promise<{
    success: boolean;
    message: string;
  }>;
  redirectUrl: string;
  toast?: {
    success?: string;
    error?: string;
  };
  label?: string;
}) => {
  const router = useRouter();
  const onDelete = async () => {
    const response = await params.action();
    if (response.success) {
      toast.success(params.toast?.success ?? "Erfolgreich gelöscht");
      router.push(params.redirectUrl);
    }
    if (!response.success) {
      toast.success(params.toast?.error ?? "Es ist ein Fehler aufgetreten");
    }
  };

  return (
    <Button type="submit" variant={"destructive"} onClick={onDelete}>
      {params.label || "Endgültig löschen"}
    </Button>
  );
};
