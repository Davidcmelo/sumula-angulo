-- AlterTable
ALTER TABLE "campeonatos_jogos" ADD COLUMN     "campeonato_id" INTEGER,
ADD COLUMN     "categoria_id" INTEGER;

-- AlterTable
ALTER TABLE "estatisticas_jogos" ADD COLUMN     "suspenso" "simOuNao" NOT NULL DEFAULT 'N';

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_jogos" ADD CONSTRAINT "campeonatos_jogos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
