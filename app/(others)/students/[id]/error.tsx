"use client";

import { mdiInformationOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex items-center space-x-2">
      <Icon size={1} path={mdiInformationOutline} className="text-red-600" />
      <span className="font-medium text-red-600">{error.message}</span>
    </div>
  );
}
