import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAccessRights } from "@/utils/accessRights";
import Link from "next/link";

export default async function Page() {
  const rights = await getAccessRights();

  return (
    <div className="grid grid-cols-2 gap-4">
      <ManageCard
        title="Schüler"
        description="Verwalte alle Schüler"
        links={{
          primary: { url: "/students", label: "Verwalten" },
          secondary: {
            url: "/students/create",
            label: "Neu erstellen",
          },
        }}
      />
      {rights.manageUsers ? (
        <ManageCard
          title="Benutzer"
          description="Verwalte alle Benutzer"
          links={{
            primary: { url: "/users", label: "Verwalten" },
            secondary: rights.createUser ? { url: "/users/create", label: "Neu erstellen" } : undefined,
          }}
        />
      ) : null}

      {rights.manageLists ? (
        <ManageCard
          title="Listen"
          description="Verwalte alle Listen"
          links={{
            primary: { url: "/lists", label: "Verwalten" },
            secondary: rights.createList ? { url: "/lists/create", label: "Neu erstellen" } : undefined,
          }}
        />
      ) : null}

      {rights.manageGroups ? (
        <ManageCard
          title="Gruppen"
          description="Verwalte alle Gruppen"
          links={{
            primary: { url: "/groups", label: "Verwalten" },
            secondary: rights.createGroup ? { url: "/groups/create", label: "Neu erstellen" } : undefined,
          }}
        />
      ) : null}
    </div>
  );
}

const ManageCard = ({
  title,
  description,
  links: { primary, secondary = undefined },
}: {
  title: string;
  description: string;
  links: {
    primary: {
      url: string;
      label: string;
    };
    secondary?:
      | {
          url: string;
          label: string;
        }
      | undefined;
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
      {secondary ? (
        <Link href={secondary.url}>
          <Button variant={"secondary"} size={"sm"}>
            {secondary.label}
          </Button>
        </Link>
      ) : null}
      <Link href={primary.url}>
        <Button size={"sm"}>{primary.label}</Button>
      </Link>
    </CardFooter>
  </Card>
);
