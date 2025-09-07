"use client";

import { Button } from "@/components/ui/button";
import { ApiResponseMessage } from "@/types/global";
import { mdiDelete } from "@mdi/js";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

export const ActionButton = (params: {
  action: () => Promise<ApiResponseMessage>;
  /** only use if you really want to redirect right after deleting */
  redirectUrl?: string;
  callBack?: {
    /** executed only on success */
    onSuccess?: () => void;
    /** executed only on error */
    onError?: () => void;
    /** executed either way */
    onAction?: () => void;
  };
  toast?: {
    success?: string;
    error?: string;
  };
  label?: string;
}) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const onAction = () =>
    startTransition(async () => {
      const response = await params.action();

      if (params.callBack?.onAction) params.callBack.onAction();

      if (response.success) {
        toast.success(params.toast?.success ?? "Erfolgreich gelöscht");

        if (params.callBack?.onSuccess) params.callBack.onSuccess();

        if (params.redirectUrl) router.push(params.redirectUrl);
      }
      if (!response.success) {
        if (params.callBack?.onError) params.callBack.onError();

        toast.success(params.toast?.error ?? "Es ist ein Fehler aufgetreten");
      }
    });

  return (
    <Button loading={isPending} type="submit" variant={"destructive"} onClick={onAction} icon={{ path: mdiDelete }}>
      {params.label || "Endgültig löschen"}
    </Button>
  );
};
