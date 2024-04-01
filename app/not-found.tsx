import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <h1 className="text-2xl font-bold">040</h1>
        <p>Seite nicht gefunden.</p>
      </div>
      <Link href="/">
        <Button variant={"secondary"} size={"sm"}>
          Zur Startseite
        </Button>
      </Link>
    </div>
  );
}
