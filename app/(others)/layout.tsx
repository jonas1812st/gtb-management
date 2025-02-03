import TopBar from "@/components/navigation/topbar";
import Provider from "@/components/provider";
import { Toaster } from "react-hot-toast";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster />
      <Provider>
        <TopBar />
        <main className="max-w-screen-md mx-auto py-3 px-2">{children}</main>
      </Provider>
    </>
  );
}
