/*
  Warnings:

  - A unique constraint covering the columns `[Nombre]` on the table `Fecha` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Fecha_Nombre_key" ON "Fecha"("Nombre");
