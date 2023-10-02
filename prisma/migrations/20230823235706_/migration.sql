/*
  Warnings:

  - You are about to drop the column `time_id` on the `campeonatos_grupos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "campeonatos_grupos" DROP CONSTRAINT "campeonatos_grupos_time_id_fkey";

-- AlterTable
ALTER TABLE "campeonatos_grupos" DROP COLUMN "time_id";
