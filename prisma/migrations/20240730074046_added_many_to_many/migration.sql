/*
  Warnings:

  - You are about to drop the column `appointmentId` on the `Appointment` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "AppointmentOnClient" (
    "clientId" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("clientId", "appointmentId"),
    CONSTRAINT "AppointmentOnClient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AppointmentOnClient_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startIso" TEXT NOT NULL,
    "endIso" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
INSERT INTO "new_Appointment" ("color", "endIso", "id", "startIso") SELECT "color", "endIso", "id", "startIso" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
