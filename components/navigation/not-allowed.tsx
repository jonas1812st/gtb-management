import Link from "next/link";
import { Button } from "../ui/button";

export default function NotAllowed() {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-lg font-semibold">Zugriff verweigert!</h1>
      <Link href={"/list"}>
        <Button size={"sm"}>Zur Startseite</Button>
      </Link>
    </div>
  );
}
