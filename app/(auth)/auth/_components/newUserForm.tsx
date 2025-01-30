"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mdiKey } from "@mdi/js";
import Icon from "@mdi/react";
import { Label } from "../_components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputSchema } from "../new-user/methods/schema";
import { setPassword } from "../new-user/methods/setPassword";
import { ErrorMessage } from "@/components/form/form";
import { useRouter } from "next/navigation";
import { authenticate } from "@/lib/actions";
import { Session } from "next-auth";

export default function Form(params: { session: Session | null }) {
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
    const response = await setPassword(data);

    if (!response.success) {
      setError("root", {
        message: response.message,
      });
    } else {
      if (params.session && params.session.user) {
        const response = await authenticate({
          callbackUrl: "/active",
          username: params.session?.user?.username,
          password: data.password,
        });
        setError("root", {
          message: response,
        });
      } else {
        setError("root", {
          message: "Session Error: Please check if you are logged in.",
        });
      }
      router.push("/active");
    }
  };

  return (
    <form className="w-full max-w-sm border rounded-lg pb-8 pt-3 px-8 flex flex-col space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-1">
        <h2 className="text-2xl font-semibold">Erster Login</h2>
        <p className="text-sm text-gray-600">Gib ein starkes Passwort ein, um dich zu registrieren.</p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <Label htmlFor="password">Passwort</Label>
          <Input id="password" type="password" autoComplete={"off"} {...register("password")} />
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
          <Icon size={0.7} path={mdiKey} />
          <span>Passwort setzen</span>
        </Button>
      </div>
    </form>
  );
}
