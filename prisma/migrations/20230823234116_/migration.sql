-- CreateTable
CREATE TABLE "campeonatos_grupos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "time_id" INTEGER,
    "categoria_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_grupos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "campeonatos_grupos" ADD CONSTRAINT "campeonatos_grupos_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_grupos" ADD CONSTRAINT "campeonatos_grupos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
