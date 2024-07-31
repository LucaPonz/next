/*
  Warnings:

  - Made the column `userId` on table `Client` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startIso" TEXT NOT NULL,
    "endIso" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    CONSTRAINT "Appointment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "profession" TEXT NOT NULL,
    "updatedAt" DATETIME,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Client" ("clientEmail", "createdAt", "dateOfBirth", "id", "name", "phone", "profession", "surname", "updatedAt", "userId") SELECT "clientEmail", "createdAt", "dateOfBirth", "id", "name", "phone", "profession", "surname", "updatedAt", "userId" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_userId_key" ON "Client"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
