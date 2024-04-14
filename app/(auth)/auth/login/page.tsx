"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authenticate } from "@/lib/actions";
import { mdiLogin } from "@mdi/js";
import Icon from "@mdi/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label } from "../_components/form";

export default function Page() {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const handleSubmit = async (data: FormData) => {
    const response = await authenticate({
      callbackUrl: decodeURI(searchParams.get("callbackUrl") || "") || "/",
      username: data.get("username") as string,
      password: data.get("password") as string,
    });
    setErrorMessage(response);
  };

  return (
    <form
      action={handleSubmit}
      className="w-full max-w-sm border rounded-lg pb-8 pt-3 px-8 flex flex-col space-y-5"
    >
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="text-sm text-gray-600">
          Gib deinen Benutzernamen und dein Passwort ein, um dich einzuloggen.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="username">Benutzername</Label>
          <Input
            id="username"
            type="text"
            name="username"
            required
            autoComplete={"off"}
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="password">Passwort</Label>
          <Input id="password" type="password" name="password" required />
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-600 font-medium text-sm">{errorMessage}</p>
      )}
      <div>
        <Button
          type="submit"
          className="w-full flex justify-center space-x-2 items-center"
        >
          <Icon size={0.7} path={mdiLogin} />
          <span>Login</span>
        </Button>
      </div>
    </form>
  );
}
