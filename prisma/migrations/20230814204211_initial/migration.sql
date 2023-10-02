-- CreateEnum
CREATE TYPE "campeonatos_modalidade" AS ENUM ('FB', 'FS');

-- CreateEnum
CREATE TYPE "campeonatos_categorias_genero" AS ENUM ('M', 'F', 'X');

-- CreateEnum
CREATE TYPE "fases_is_classificatoria" AS ENUM ('S', 'N');

-- CreateEnum
CREATE TYPE "campeonatos_categorias_mata_mata" AS ENUM ('oitavas', 'quartas', 'semi', 'final');

-- CreateEnum
CREATE TYPE "fases_is_mata_mata" AS ENUM ('S', 'N');

-- CreateEnum
CREATE TYPE "fases_is_grupo" AS ENUM ('S', 'N');

-- CreateEnum
CREATE TYPE "campeonatos_categorias_tipo_campeonato" AS ENUM ('PM', 'GM', 'PC', 'MM');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "posicao" AS ENUM ('GOL', 'ZAG', 'LD', 'LE', 'VOL', 'MC', 'PE', 'PD', 'ATA', 'FIXO', 'ALA', 'PIVO');

-- CreateTable
CREATE TABLE "atletas" (
    "id" SERIAL NOT NULL,
    "external_id" VARCHAR(30) NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "apelido" VARCHAR(30),
    "foto" VARCHAR(40),
    "rg" VARCHAR(11),
    "posicao" "posicao",
    "data_nascimento" DATE,
    "time_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atletas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atletas_times_categorias" (
    "id" SERIAL NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "atletas_times_categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos" (
    "id" SERIAL NOT NULL,
    "external_id" VARCHAR(30) NOT NULL,
    "nome" VARCHAR(60) NOT NULL,
    "modalidade" "campeonatos_modalidade" NOT NULL,
    "data_inicio" DATE NOT NULL,
    "tem_categoria" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos_categorias" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30),
    "campeonato_id" INTEGER NOT NULL,
    "genero" "campeonatos_categorias_genero" NOT NULL,
    "mata_mata" "campeonatos_categorias_mata_mata",
    "qtd_times" INTEGER NOT NULL,
    "qtd_grupos" INTEGER,
    "tipo_campeonato" "campeonatos_categorias_tipo_campeonato" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos_atletas" (
    "id" SERIAL NOT NULL,
    "campeonato_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "atleta_id" INTEGER NOT NULL,
    "time_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_atletas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos_times" (
    "time_id" INTEGER NOT NULL,
    "campeonato_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campeonatos_times_pkey" PRIMARY KEY ("campeonato_id","time_id")
);

-- CreateTable
CREATE TABLE "fases" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30),
    "categoria_id" INTEGER NOT NULL,
    "is_classificatoria" "fases_is_classificatoria" NOT NULL DEFAULT 'N',
    "is_mata_mata" "fases_is_mata_mata" NOT NULL DEFAULT 'N',
    "is_grupo" "fases_is_grupo" NOT NULL DEFAULT 'N',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moderador" (
    "id" SERIAL NOT NULL,
    "campeonato_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moderador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responsavel" (
    "id" SERIAL NOT NULL,
    "external_id" VARCHAR(30) NOT NULL,
    "nome" VARCHAR(60),
    "email" VARCHAR(60) NOT NULL,
    "celular" VARCHAR(15),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "password" TEXT,
    "time_id" INTEGER,

    CONSTRAINT "responsavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" SERIAL NOT NULL,
    "external_id" VARCHAR(30) NOT NULL,
    "nome" VARCHAR(50) NOT NULL,
    "escudo" VARCHAR(40),
    "sigla" VARCHAR(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times_categorias" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "time_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "times_categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "external_id" VARCHAR(30) NOT NULL,
    "name" VARCHAR(50),
    "username" VARCHAR(50),
    "password" TEXT NOT NULL,
    "email" VARCHAR(60),
    "emailVerified" TIMESTAMP(3),
    "image" VARCHAR(50),
    "role" "user_role" NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Atletas_external_id_key" ON "atletas"("external_id");

-- CreateIndex
CREATE INDEX "atletas_time_id_idx" ON "atletas"("time_id");

-- CreateIndex
CREATE INDEX "atletas_times_categorias_categoria_id_idx" ON "atletas_times_categorias"("categoria_id");

-- CreateIndex
CREATE UNIQUE INDEX "atletas_times_categorias_atleta_id_categoria_id_key" ON "atletas_times_categorias"("atleta_id", "categoria_id");

-- CreateIndex
CREATE UNIQUE INDEX "Campeonatos_external_id_key" ON "campeonatos"("external_id");

-- CreateIndex
CREATE INDEX "campeonatos_user_id_idx" ON "campeonatos"("user_id");

-- CreateIndex
CREATE INDEX "campeonatos_categorias_campeonato_id_idx" ON "campeonatos_categorias"("campeonato_id");

-- CreateIndex
CREATE UNIQUE INDEX "campeonatos_atletas_categoria_id_atleta_id_key" ON "campeonatos_atletas"("categoria_id", "atleta_id");

-- CreateIndex
CREATE INDEX "campeonatos_times_time_id_idx" ON "campeonatos_times"("time_id");

-- CreateIndex
CREATE INDEX "fases_categoria_id_idx" ON "fases"("categoria_id");

-- CreateIndex
CREATE INDEX "moderador_campeonato_id_idx" ON "moderador"("campeonato_id");

-- CreateIndex
CREATE INDEX "moderador_user_id_idx" ON "moderador"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Responsavel_external_id_key" ON "responsavel"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "Responsavel_email_key" ON "responsavel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "responsavel_time_id_key" ON "responsavel"("time_id");

-- CreateIndex
CREATE UNIQUE INDEX "Times_external_id_key" ON "times"("external_id");

-- CreateIndex
CREATE INDEX "times_categorias_time_id_idx" ON "times_categorias"("time_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_external_id_key" ON "user"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "atletas" ADD CONSTRAINT "atletas_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atletas_times_categorias" ADD CONSTRAINT "atletas_times_categorias_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "atletas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atletas_times_categorias" ADD CONSTRAINT "atletas_times_categorias_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "times_categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos" ADD CONSTRAINT "campeonatos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_categorias" ADD CONSTRAINT "campeonatos_categorias_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_atletas" ADD CONSTRAINT "campeonatos_atletas_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_atletas" ADD CONSTRAINT "campeonatos_atletas_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_atletas" ADD CONSTRAINT "campeonatos_atletas_atleta_id_fkey" FOREIGN KEY ("atleta_id") REFERENCES "atletas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_atletas" ADD CONSTRAINT "campeonatos_atletas_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_times" ADD CONSTRAINT "campeonatos_times_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_times" ADD CONSTRAINT "campeonatos_times_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fases" ADD CONSTRAINT "fases_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "campeonatos_categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderador" ADD CONSTRAINT "moderador_campeonato_id_fkey" FOREIGN KEY ("campeonato_id") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderador" ADD CONSTRAINT "moderador_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responsavel" ADD CONSTRAINT "responsavel_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "times_categorias" ADD CONSTRAINT "times_categorias_time_id_fkey" FOREIGN KEY ("time_id") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
