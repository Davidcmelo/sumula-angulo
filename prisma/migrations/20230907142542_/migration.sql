-- CreateEnum
CREATE TYPE "status_partida" AS ENUM ('A', 'F');

-- CreateEnum
CREATE TYPE "vencedor_partida" AS ENUM ('C', 'V', 'E');

-- CreateTable
CREATE TABLE "campeonatos_jogos" (
    "id" SERIAL NOT NULL,
    "dataHora" TIMESTAMP(3),
    "local" VARCHAR(50),
    "status" "status_partida" NOT NULL DEFAULT 'A',
    "rodada_id" INTEGER NOT NULL,
    "time_casa_id" INTEGER NOT NULL,
    "time_visitante_id" INTEGER NOT NULL,
    "gols_casa" INTEGER,
    "gols_visitante" INTEGER,
    "vencedor" "vencedor_partida",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_jogos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_rodada_id_fkey" FOREIGN KEY ("rodada_id") REFERENCES "campeonatos_rodadas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_time_casa_id_fkey" FOREIGN KEY ("time_casa_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_time_visitante_id_fkey" FOREIGN KEY ("time_visitante_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
