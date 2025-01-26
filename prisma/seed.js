const { PrismaClient } = require("@prisma/client");
const { faker, simpleFaker } = require("@faker-js/faker");

const prisma = new PrismaClient();

const load = async () => {
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        username: process.env.ADMIN_USER,
      },
    });

    if (!userExists) {
      await prisma.user.create({
        data: {
          username: process.env.ADMIN_USER,
          password: process.env.ADMIN_PASS,
          role: "OWNER",
        },
      });
    }

    const mainList = await prisma.list.findFirst({
      where: {
        isMainList: true,
      },
    });

    if (!mainList) {
      await prisma.list.create({
        data: {
          Group: {
            create: {
              isMainGroup: true,
              name: process.env.MAIN_GROUP_NAME,
              color: process.env.MAIN_GROUP_COLOR,
            },
          },

          isMainList: true,
          name: process.env.MAIN_LIST_NAME,

          // --- table options ---
          notes: "MARKED",
          time: true,
          className: true,
          studentName: true,
          groupColor: false,

          // --- list options ---
          recordTime: "START_END",
          manageTime: "STUDENT",
        },
      });
    }

    /*
    Seed fake students

    await prisma.student.createMany({
      data: Array.from({ length: 10 }).map((_) => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        grade: simpleFaker.number.int(12),
        className: simpleFaker.helpers.arrayElement(["A", "B", "C", "D", "E"]),
        notes: faker.person.bio(),
      })),
    });
    */
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
