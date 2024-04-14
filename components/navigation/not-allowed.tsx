import Link from "next/link";
import { Button } from "../ui/button";

export default function NotAllowed({
  label = "Zur Startseite",
  url = "/list",
}: {
  label?: string;
  url?: string;
}) {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-lg font-semibold">Zugriff verweigert!</h1>
      <Link href={url}>
        <Button size={"sm"}>{label}</Button>
      </Link>
    </div>
  );
}
