-- CreateEnum
CREATE TYPE "status_suspensao" AS ENUM ('P', 'S', 'C');

-- CreateTable
CREATE TABLE "campeonatos_suspensao" (
    "id" SERIAL NOT NULL,
    "campeonato_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "amarelo" INTEGER NOT NULL,
    "vermelho" INTEGER NOT NULL,
    "jogos_punido" INTEGER NOT NULL,
    "jogos_cumprido" INTEGER NOT NULL,
    "status" "status_suspensao" NOT NULL DEFAULT 'P',
    "automatico" "simOuNao" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_suspensao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campeonatos_suspensao" ADD CONSTRAINT "campeonatos_suspensao_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_suspensao" ADD CONSTRAINT "campeonatos_suspensao_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_suspensao" ADD CONSTRAINT "campeonatos_suspensao_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "atletas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
