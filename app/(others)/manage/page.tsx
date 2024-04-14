import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  return (
    <div className="grid grid-cols-2 gap-4">
      <ManageCard
        title="Schüler"
        description="Verwalte alle Schüler"
        links={{
          primary: { url: "/students", label: "Verwalten" },
          secondary: { url: "/students/create", label: "Neu erstellen" },
        }}
      />
      {session?.user?.role === "ADMIN" ? (
        <ManageCard
          title="Benutzer"
          description="Verwalte alle Benutzer"
          links={{
            primary: { url: "/users", label: "Verwalten" },
            secondary: { url: "/users/create", label: "Neu erstellen" },
          }}
        />
      ) : null}
    </div>
  );
}

const ManageCard = ({
  title,
  description,
  links: { primary, secondary },
}: {
  title: string;
  description: string;
  links: {
    primary: {
      url: string;
      label: string;
    };
    secondary: {
      url: string;
      label: string;
    };
  };
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter className="flex justify-end space-x-2">
      <Link href={secondary.url}>
        <Button variant={"secondary"} size={"sm"}>
          {secondary.label}
        </Button>
      </Link>
      <Link href={primary.url}>
        <Button size={"sm"}>{primary.label}</Button>
      </Link>
    </CardFooter>
  </Card>
);
