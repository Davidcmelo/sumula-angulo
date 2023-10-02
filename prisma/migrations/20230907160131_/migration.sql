/*
  Warnings:

  - You are about to drop the column `dataHora` on the `campeonatos_jogos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "campeonatos_jogos" DROP COLUMN "dataHora",
ADD COLUMN     "data_hora" TIMESTAMP(3),
ADD COLUMN     "grupo_id" INTEGER;

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "campeonatos_grupos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
