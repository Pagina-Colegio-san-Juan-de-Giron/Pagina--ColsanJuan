/*
  Warnings:

  - Added the required column `Nombre` to the `Fecha` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fecha" ADD COLUMN     "Nombre" TEXT NOT NULL,
ALTER COLUMN "Fecha" SET DATA TYPE TEXT;
