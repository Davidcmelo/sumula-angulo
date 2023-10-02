/*
  Warnings:

  - You are about to drop the column `categoria_id` on the `campeonatos_grupos` table. All the data in the column will be lost.
  - Added the required column `fase_id` to the `campeonatos_grupos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "campeonatos_grupos" DROP CONSTRAINT "campeonatos_grupos_categoria_id_fkey";

-- AlterTable
ALTER TABLE "campeonatos_grupos" DROP COLUMN "categoria_id",
ADD COLUMN     "fase_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "campeonatos_grupos" ADD CONSTRAINT "campeonatos_grupos_fase_id_fkey" FOREIGN KEY ("fase_id") REFERENCES "fases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
