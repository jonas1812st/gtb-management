import { connection } from "next/server";

export default async function ConnectionWrapper({ children }: { children: React.ReactNode }) {
  await connection();

  return children;
}
