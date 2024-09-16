const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.user.create({
      data: {
        username: "admin",
        password: "$2a$12$3p1JNy2E1F5X2wGvMkSBr.Nwbce0uJHzaEPhhOBO1pcEpwbiEgpJi",
        role: "OWNER",
      },
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
