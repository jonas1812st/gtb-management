export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="flex justify-center p-10">{children}</main>;
}
