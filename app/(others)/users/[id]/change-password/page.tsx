import PasswordForm from "../../_components/passwordForm";
import { changePassword } from "../../methods/changePassword";
import Error from "@/components/navigation/error";
import { auth } from "@/auth";
import NotAllowed from "@/components/navigation/not-allowed";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = parseInt(id) || 0;

  // Check if user ID is valid
  if (id === "" || userId === 0) return <Error error="Id not valid." btnLabel="Zur Übersicht" url="/users" />;

  const session = await auth();
  if (!session || !session.user || session.user.userId !== userId) {
    return <NotAllowed url={`/users/${userId}`} label="Zurück zum Profil" />;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 items-center">
        <Link href={"/users/" + userId}>
          <Button size={"icon"} className="rounded-full" variant={"outline"}>
            <Icon size={0.8} path={mdiArrowLeft} />
          </Button>
        </Link>
        <h2 className="text-2xl font-semibold">Passwort ändern</h2>
      </div>
      <PasswordForm userId={userId} action={changePassword} />
    </div>
  );
}
