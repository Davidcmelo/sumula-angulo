/*
  Warnings:

  - Made the column `nome` on table `fases` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "fases" ALTER COLUMN "nome" SET NOT NULL;
