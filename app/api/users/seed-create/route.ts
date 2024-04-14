import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function POST() {
  const user = await prisma.user.create({
    data: {
      username: "admin",
      password: "$2a$12$VflaX/Mvv01R7u5Yqva4Je.s0oitHTHV9Bja5zfDpPivRpsNVdURK",
      role: "ADMIN",
    },
  });
  return NextResponse.json({ data: user });
}
