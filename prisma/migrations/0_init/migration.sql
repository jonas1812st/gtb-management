-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `notes` TEXT NULL,
    `grade` INTEGER NOT NULL,
    `className` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `day` INTEGER NOT NULL,
    `end` INTEGER NOT NULL,
    `status` ENUM('PRESENT', 'ABSENT') NOT NULL DEFAULT 'PRESENT',
    `studentId` INTEGER NOT NULL,
    `listId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Visitation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `start` INTEGER NOT NULL,
    `end` INTEGER NULL,
    `studentId` INTEGER NOT NULL,
    `listId` INTEGER NOT NULL,
    `startNotes` TEXT NULL,
    `endNotes` TEXT NULL,
    `hasHomework` BOOLEAN NULL,

    UNIQUE INDEX `Visitation_date_studentId_listId_key`(`date`, `studentId`, `listId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` ENUM('OWNER', 'ADMIN', 'DEFAULT') NOT NULL DEFAULT 'DEFAULT',
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Group` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NULL,
    `listId` INTEGER NULL,
    `isMainGroup` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GroupsOnStudents` (
    `studentId` INTEGER NOT NULL,
    `groupId` INTEGER NOT NULL,

    PRIMARY KEY (`studentId`, `groupId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `List` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `isMainList` BOOLEAN NOT NULL DEFAULT false,
    `recordTime` ENUM('START', 'START_END') NOT NULL,
    `manageTime` ENUM('LIST', 'STUDENT') NOT NULL DEFAULT 'STUDENT',
    `studentName` BOOLEAN NOT NULL,
    `className` BOOLEAN NOT NULL,
    `time` BOOLEAN NOT NULL,
    `notes` ENUM('NONE', 'MARKED', 'SHORTENED', 'FULL') NOT NULL,
    `groupColor` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DayNotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `listId` INTEGER NOT NULL,
    `notes` TEXT NOT NULL,

    UNIQUE INDEX `DayNotes_date_listId_key`(`date`, `listId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ListActivation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `day` INTEGER NOT NULL,
    `startTime` INTEGER NOT NULL,
    `startBuffer` INTEGER NOT NULL,
    `endTime` INTEGER NOT NULL,
    `endBuffer` INTEGER NOT NULL,
    `listId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExceptionsOnLists` (
    `exceptionId` INTEGER NOT NULL,
    `listId` INTEGER NOT NULL,

    PRIMARY KEY (`exceptionId`, `listId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exception` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `startDate` DATETIME(3) NULL,
    `endDate` DATETIME(3) NULL,
    `studentId` INTEGER NOT NULL,
    `presence` ENUM('PRESENT', 'ABSENT') NOT NULL,
    `end` INTEGER NULL,
    `notes` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SpecificDate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `exceptionId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Visitation` ADD CONSTRAINT `Visitation_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Visitation` ADD CONSTRAINT `Visitation_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupsOnStudents` ADD CONSTRAINT `GroupsOnStudents_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GroupsOnStudents` ADD CONSTRAINT `GroupsOnStudents_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DayNotes` ADD CONSTRAINT `DayNotes_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ListActivation` ADD CONSTRAINT `ListActivation_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExceptionsOnLists` ADD CONSTRAINT `ExceptionsOnLists_exceptionId_fkey` FOREIGN KEY (`exceptionId`) REFERENCES `Exception`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ExceptionsOnLists` ADD CONSTRAINT `ExceptionsOnLists_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exception` ADD CONSTRAINT `Exception_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SpecificDate` ADD CONSTRAINT `SpecificDate_exceptionId_fkey` FOREIGN KEY (`exceptionId`) REFERENCES `Exception`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

