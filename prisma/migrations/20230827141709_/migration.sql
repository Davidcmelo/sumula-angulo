/*
  Warnings:

  - You are about to drop the column `campeonato_id` on the `campeonatos_classificacao` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "campeonatos_classificacao" DROP CONSTRAINT "campeonatos_classificacao_campeonato_id_fkey";

-- AlterTable
ALTER TABLE "campeonatos_classificacao" DROP COLUMN "campeonato_id";
