/*
  Warnings:

  - You are about to alter the column `endIso` on the `Appointment` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `startIso` on the `Appointment` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "startIso" DATETIME NOT NULL,
    "endIso" DATETIME NOT NULL,
    "color" TEXT NOT NULL
);
INSERT INTO "new_Appointment" ("color", "endIso", "id", "startIso") SELECT "color", "endIso", "id", "startIso" FROM "Appointment";
DROP TABLE "Appointment";
ALTER TABLE "new_Appointment" RENAME TO "Appointment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
