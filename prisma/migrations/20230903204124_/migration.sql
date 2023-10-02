-- CreateTable
CREATE TABLE "campeonatos_rodadas" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER,
    "fase_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_rodadas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campeonatos_rodadas" ADD CONSTRAINT "campeonatos_rodadas_fase_id_fkey" FOREIGN KEY ("fase_id") REFERENCES "fases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
