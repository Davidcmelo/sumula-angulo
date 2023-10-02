/*
  Warnings:

  - You are about to drop the column `amarelo1` on the `estatisticas_jogos` table. All the data in the column will be lost.
  - You are about to drop the column `amarelo2` on the `estatisticas_jogos` table. All the data in the column will be lost.
  - The `vermelho` column on the `estatisticas_jogos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "estatisticas_jogos" DROP COLUMN "amarelo1",
DROP COLUMN "amarelo2",
ADD COLUMN     "amarelo" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "gols_pro" SET DEFAULT 0,
ALTER COLUMN "gols_contra" SET DEFAULT 0,
ALTER COLUMN "assistencia" SET DEFAULT 0,
DROP COLUMN "vermelho",
ADD COLUMN     "vermelho" INTEGER NOT NULL DEFAULT 0;
