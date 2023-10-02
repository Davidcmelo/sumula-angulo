/*
  Warnings:

  - Added the required column `campeonato_id` to the `campeonatos_classificacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "campeonatos_classificacao" ADD COLUMN     "campeonato_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "campeonatos_classificacao" ADD CONSTRAINT "campeonatos_classificacao_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
