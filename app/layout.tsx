import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TopBar from "@/components/navigation/topbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "GTB Management",
  description: "Sichere Verwaltung des Ganztages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <Toaster />
        <TopBar />
        <main className="max-w-screen-md mx-auto py-3 px-2">{children}</main>
      </body>
    </html>
  );
}
