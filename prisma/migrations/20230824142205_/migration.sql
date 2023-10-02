-- CreateTable
CREATE TABLE "campeonatos_classificacao" (
    "id" SERIAL NOT NULL,
    "fase_id" INTEGER NOT NULL,
    "grupo_id" INTEGER,
    "time_id" INTEGER,
    "pontos" INTEGER NOT NULL DEFAULT 0,
    "jogos" INTEGER NOT NULL DEFAULT 0,
    "vitorias" INTEGER NOT NULL DEFAULT 0,
    "empates" INTEGER NOT NULL DEFAULT 0,
    "derrotas" INTEGER NOT NULL DEFAULT 0,
    "golsPro" INTEGER NOT NULL DEFAULT 0,
    "golsContra" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_classificacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campeonatos_classificacao" ADD CONSTRAINT "campeonatos_classificacao_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "campeonatos_grupos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_classificacao" ADD CONSTRAINT "campeonatos_classificacao_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE SET NULL ON UPDATE CASCADE;
