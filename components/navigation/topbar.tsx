import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex p-2 bg-navigation text-navigation-foreground">
      {[
        { label: "Home", url: "/" },
        { label: "Liste", url: "/list" },
        { label: "Neuer Schüler", url: "/students/create" },
        { label: "Schüler verwalten", url: "/students" },
      ].map((element, index) => (
        <Link
          href={element.url}
          className="text-lg font-semibold p-3 rounded-full transition hover:bg-blue-700"
          key={index + "_top_bar_element"}
        >
          {element.label}
        </Link>
      ))}
    </div>
  );
}
