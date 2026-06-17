"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mdiAccountPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Label } from "../_components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createOwner } from "../setup/_methods/createOwner";
import { InputSchema } from "../setup/_methods/schema";
import { ErrorMessage } from "@/components/form/form";
import { useRouter } from "next/navigation";
import { authenticate } from "@/lib/actions";

export default function Form() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof InputSchema>>({
    resolver: zodResolver(InputSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof InputSchema>> = async (data) => {
    const response = await createOwner(data);

    if (!response.success) {
      setError("root", {
        message: response.message,
      });
    } else {
      // Automatically log in the newly created OWNER user
      const loginResponse = await authenticate({
        callbackUrl: "/active",
        username: data.username,
        password: data.password,
      });

      setError("root", {
        message: loginResponse,
      });

      router.push("/active");
    }
  };

  return (
    <form
      className="w-full max-w-sm border rounded-lg pb-8 pt-3 px-8 flex flex-col space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-semibold">System-Einrichtung</h2>
        <p className="text-sm text-gray-600">Erstelle das primäre Betreiberkonto (Owner) für dieses System.</p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="username">Benutzername</Label>
          <Input id="username" type="text" {...register("username")} />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </div>
        <div className="grid gap-1">
          <Label htmlFor="password">Passwort</Label>
          <Input id="password" type="password" {...register("password")} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className="grid gap-1">
          <Label htmlFor="passwordConfirm">Passwort bestätigen</Label>
          <Input id="passwordConfirm" type="password" {...register("passwordConfirm")} />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
        </div>
      </div>
      {errors.root?.message && <p className="text-red-600 font-medium text-sm">{errors.root?.message}</p>}
      <div>
        <Button type="submit" className="w-full flex justify-center space-x-2 items-center">
          <Icon size={0.7} path={mdiAccountPlus} />
          <span>System initialisieren</span>
        </Button>
      </div>
    </form>
  );
}
