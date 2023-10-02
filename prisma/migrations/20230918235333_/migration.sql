/*
  Warnings:

  - Made the column `campeonato_id` on table `campeonatos_jogos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoria_id` on table `campeonatos_jogos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "campeonatos_jogos" DROP CONSTRAINT "campeonatos_jogos_campeonato_id_fkey";

-- DropForeignKey
ALTER TABLE "campeonatos_jogos" DROP CONSTRAINT "campeonatos_jogos_categoria_id_fkey";

-- AlterTable
ALTER TABLE "campeonatos_jogos" ALTER COLUMN "campeonato_id" SET NOT NULL,
ALTER COLUMN "categoria_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
