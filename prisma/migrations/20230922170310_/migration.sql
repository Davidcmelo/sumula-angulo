/*
  Warnings:

  - You are about to drop the column `jogos_cumprido` on the `campeonatos_suspensao` table. All the data in the column will be lost.
  - You are about to drop the column `jogos_punido` on the `campeonatos_suspensao` table. All the data in the column will be lost.
  - Added the required column `jogos_cumpridos` to the `campeonatos_suspensao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jogos_punidos` to the `campeonatos_suspensao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campeonatos_suspensao" DROP COLUMN "jogos_cumprido",
DROP COLUMN "jogos_punido",
ADD COLUMN     "jogos_cumpridos" INTEGER NOT NULL,
ADD COLUMN     "jogos_punidos" INTEGER NOT NULL;
