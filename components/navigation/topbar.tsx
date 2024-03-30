import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex justify-between p-2 bg-navigation text-navigation-foreground">
      {[{ label: "Home", url: "/" }].map((element, index) => (
        <Link
          href={element.url}
          className="text-lg font-semibold p-3 rounded-full transition hover:bg-blue-700"
        >
          {element.label}
        </Link>
      ))}
    </div>
  );
}
