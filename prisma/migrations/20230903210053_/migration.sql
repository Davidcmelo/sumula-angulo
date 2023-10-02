/*
  Warnings:

  - Made the column `numero` on table `campeonatos_rodadas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "campeonatos_rodadas" ALTER COLUMN "numero" SET NOT NULL;
