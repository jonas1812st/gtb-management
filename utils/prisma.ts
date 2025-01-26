import { studentAddToMainGroupMiddleware } from "@/prisma/middlewares";
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  const client = new PrismaClient();

  client.$use(async (params, next) => {
    return await studentAddToMainGroupMiddleware(client, params, next);
  });

  return client;
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
