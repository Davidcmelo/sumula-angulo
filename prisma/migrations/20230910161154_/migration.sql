-- CreateTable
CREATE TABLE "estatisticas_jogos" (
    "id" SERIAL NOT NULL,
    "jogo_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,
    "gols_pro" INTEGER NOT NULL,
    "gols_contra" INTEGER NOT NULL,
    "assistencia" INTEGER NOT NULL,
    "amarelo1" BOOLEAN NOT NULL,
    "amarelo2" BOOLEAN NOT NULL,
    "vermelho" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "estatisticas_jogos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "estatisticas_jogos" ADD CONSTRAINT "estatisticas_jogos_jogo_id_fkey" FOREIGN KEY ("jogo_id") REFERENCES "campeonatos_jogos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estatisticas_jogos" ADD CONSTRAINT "estatisticas_jogos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estatisticas_jogos" ADD CONSTRAINT "estatisticas_jogos_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "atletas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estatisticas_jogos" ADD CONSTRAINT "estatisticas_jogos_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
