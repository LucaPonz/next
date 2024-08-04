/*
  Warnings:

  - You are about to drop the `AppointmentOnClient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AppointmentOnClient";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_AppointmentToClient" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AppointmentToClient_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AppointmentToClient_B_fkey" FOREIGN KEY ("B") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToClient_AB_unique" ON "_AppointmentToClient"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToClient_B_index" ON "_AppointmentToClient"("B");
