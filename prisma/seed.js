const { PrismaClient } = require("@prisma/client");
const { faker, simpleFaker } = require("@faker-js/faker");
const prisma = new PrismaClient();

const load = async () => {
  try {
    const userExists = prisma.user.findUnique({
      where: {
        username: "admin",
      },
    });

    if (!userExists) {
      await prisma.user.create({
        data: {
          username: "admin",
          password: "$2a$12$3p1JNy2E1F5X2wGvMkSBr.Nwbce0uJHzaEPhhOBO1pcEpwbiEgpJi",
          role: "OWNER",
        },
      });
    }

    await prisma.student.createMany({
      data: Array.from({ length: 10 }).map((_) => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        grade: simpleFaker.number.int(12),
        className: simpleFaker.helpers.arrayElement(["A", "B", "C", "D", "E"]),
        notes: faker.person.bio(),
      })),
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
