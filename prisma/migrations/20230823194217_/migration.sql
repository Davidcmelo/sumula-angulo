/*
  Warnings:

  - The `genero` column on the `campeonatos_categorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `mata_mata` column on the `campeonatos_categorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tipo_campeonato` column on the `campeonatos_categorias` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `is_classificatoria` column on the `fases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `is_mata_mata` column on the `fases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `is_grupo` column on the `fases` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "campeonatos_genero" AS ENUM ('M', 'F', 'X');

-- CreateEnum
CREATE TYPE "initial_mata_mata" AS ENUM ('oitavas', 'quartas', 'semi', 'final');

-- CreateEnum
CREATE TYPE "simOuNao" AS ENUM ('S', 'N');

-- CreateEnum
CREATE TYPE "tipo_campeonato" AS ENUM ('PM', 'GM', 'PC', 'MM');

-- AlterTable
ALTER TABLE "campeonatos_categorias" DROP COLUMN "genero",
ADD COLUMN     "genero" "campeonatos_genero",
DROP COLUMN "mata_mata",
ADD COLUMN     "mata_mata" "initial_mata_mata",
DROP COLUMN "tipo_campeonato",
ADD COLUMN     "tipo_campeonato" "tipo_campeonato";

-- AlterTable
ALTER TABLE "fases" DROP COLUMN "is_classificatoria",
ADD COLUMN     "is_classificatoria" "simOuNao" NOT NULL DEFAULT 'N',
DROP COLUMN "is_mata_mata",
ADD COLUMN     "is_mata_mata" "simOuNao" NOT NULL DEFAULT 'N',
DROP COLUMN "is_grupo",
ADD COLUMN     "is_grupo" "simOuNao" NOT NULL DEFAULT 'N';

-- DropEnum
DROP TYPE "campeonatos_categorias_genero";

-- DropEnum
DROP TYPE "campeonatos_categorias_mata_mata";

-- DropEnum
DROP TYPE "campeonatos_categorias_tipo_campeonato";

-- DropEnum
DROP TYPE "fases_is_classificatoria";

-- DropEnum
DROP TYPE "fases_is_grupo";

-- DropEnum
DROP TYPE "fases_is_mata_mata";
