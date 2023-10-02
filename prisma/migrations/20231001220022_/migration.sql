-- DropForeignKey
ALTER TABLE "campeonatos_classificacao" DROP CONSTRAINT "campeonatos_classificacao_campeonato_id_fkey";

-- DropForeignKey
ALTER TABLE "campeonatos_classificacao" DROP CONSTRAINT "campeonatos_classificacao_grupo_id_fkey";

-- DropForeignKey
ALTER TABLE "campeonatos_grupos" DROP CONSTRAINT "campeonatos_grupos_fase_id_fkey";

-- DropForeignKey
ALTER TABLE "campeonatos_rodadas" DROP CONSTRAINT "campeonatos_rodadas_fase_id_fkey";

-- AddForeignKey
ALTER TABLE "campeonatos_grupos" ADD CONSTRAINT "campeonatos_grupos_fase_id_fkey" FOREIGN KEY ("fase_id") REFERENCES "fases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_rodadas" ADD CONSTRAINT "campeonatos_rodadas_fase_id_fkey" FOREIGN KEY ("fase_id") REFERENCES "fases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_classificacao" ADD CONSTRAINT "campeonatos_classificacao_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "campeonatos_grupos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_classificacao" ADD CONSTRAINT "campeonatos_classificacao_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_classificacao" ADD CONSTRAINT "campeonatos_classificacao_fase_id_fkey" FOREIGN KEY ("fase_id") REFERENCES "fases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
