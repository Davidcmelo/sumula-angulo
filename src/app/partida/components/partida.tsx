'use client';
import Image from 'next/image';
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';

export default function Partida({ dados }: any) {
    console.log('dados partida', dados);
    const equipes = {
        time1: {
            nome: 'Vasco FC',
            escudo: '/imagens/vasco.png',
            tecnico: 'José da Silva',
            capitao: 'Ricardinho',
            jogadores: [
                {
                    nome: 'Bebé',
                    registro: '123456789',
                    posicao: 'goleiro',
                },
                {
                    nome: 'João Matos',
                    registro: '123456789',
                    posicao: 'goleiro',
                },
                {
                    nome: '	Bruno Coelho',
                    registro: '123456789',
                    posicao: 'ala ',
                },
                {
                    nome: 'Ricardinho',
                    registro: '123456789',
                    posicao: 'ala',
                },
                {
                    nome: 'Fábio Cecílio',
                    registro: '123456789',
                    posicao: 'fixo',
                },
                {
                    nome: 'Alan Brandi',
                    registro: '123456789',
                    posicao: 'fixo',
                },
                {
                    nome: 'Santi Basile',
                    registro: '123456789',
                    posicao: 'pivo',
                },
                {
                    nome: 'Jose leme',
                    registro: '123456789',
                    posicao: 'pivo',
                },
            ],
        },
        time2: {
            nome: 'Flamengo FC',
            escudo: '/imagens/flamengo.png',
            tecnico: 'João Carlos',
            capitao: 'Pany Varela',
            jogadores: [
                {
                    nome: 'André Coelho',
                    registro: '123456789',
                    posicao: 'goleiro',
                },
                {
                    nome: 'Erick Mendonça',
                    registro: '123456789',
                    posicao: 'Ala',
                },
                {
                    nome: 'Pany Varela',
                    registro: '123456789',
                    posicao: 'Ala',
                },
                {
                    nome: '	Matías Edelstein',
                    registro: '123456789',
                    posicao: 'Fixo',
                },
                {
                    nome: 'JZicky Té',
                    registro: '123456789',
                    posicao: 'Fixo',
                },
                {
                    nome: 'Kiki Vaporaki',
                    registro: '123456789',
                    posicao: 'Goleiro',
                },
                {
                    nome: 'Damián Stazzone',
                    registro: '123456789',
                    posicao: 'Pivo',
                },
                {
                    nome: 'Felipe massa',
                    registro: '123456789',
                    posicao: 'Pivo',
                },
            ],
        },
    };
    const formataData = (data: Date | null) => {
        const dataHora = data ? new Date(data) : null;
        const dt = dataHora
            ? dataHora.toLocaleDateString('pt-BR', {
                  year: '2-digit',
                  month: '2-digit',
                  day: '2-digit',
              })
            : '';
        return dt;
    };
    const formataHora = (data: Date | null) => {
        const dataHora = data ? new Date(data) : null;
        const dt = dataHora
            ? dataHora.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
              })
            : '';
        return dt;
    };

    return (
        <div
            className={`quadra ${
                dados?.sumula?.campeonato?.modalidade === 'FS'
                    ? 'modalidade-fs'
                    : 'modalidade-fb'
            } h-[600px]`}
        >
            <div className=" flex  justify-center p-6 font-bold text-white sm:text-6xl   ">
                <Typography className="text-xl md:text-3xl">
                    {dados?.sumula?.campeonato?.nome} -{' '}
                    {dados?.sumula?.campeonato?.modalidade}
                </Typography>
            </div>

            <div className="flex  justify-center text-white md:p-6     ">
                <div className="flex w-1/4 flex-col items-center  ">
                    <Image
                        src={equipes.time2.escudo}
                        alt={'escudo time 1'}
                        width={100}
                        height={100}
                    />

                    <Typography className="text-xs font-semibold md:text-3xl">
                        {dados?.sumula?.timeCasa?.nome}
                    </Typography>
                </div>

                <div className="flex flex-col items-center  justify-center gap-2 ">
                    <div className="flex items-center justify-center  ">
                        <Typography className="text-xl font-bold md:p-3 md:text-4xl">
                            {dados?.sumula?.gols_casa}
                        </Typography>
                        <Typography className="text-xl font-bold md:p-3 md:text-3xl">
                            :
                        </Typography>
                        <Typography className="text-xl font-bold md:p-3 md:text-4xl">
                            {dados?.sumula?.gols_visitante}
                        </Typography>
                    </div>
                    <div className=" flex items-center justify-center text-white">
                        {dados?.sumula?.status === 'F' ? (
                            <>
                                <Typography className="text-xs uppercase text-red-500 ">
                                    Encerrado
                                </Typography>
                            </>
                        ) : dados?.sumula?.status === 'A' ? (
                            <>
                                {/* <CircleIcon className="mr-1 text-xs text-green-500" />{' '} */}
                                <Typography className="text-xs uppercase text-green-500 md:text-xl">
                                    Agendado
                                </Typography>
                            </>
                        ) : null}
                    </div>

                    <div className="flex flex-col p-6 text-center text-white  ">
                        <Typography className="text-xs">
                            Rodada {dados?.sumula?.rodada?.numero} -{' '}
                            {dados?.sumula?.campeonato?.categorias[0]?.nome}
                        </Typography>
                        <Typography className="text-xs">
                            {dados?.sumula?.local}
                        </Typography>
                        <Typography className="text-xs">
                            {formataData(dados?.sumula?.data_hora)} -{' '}
                            {formataHora(dados?.sumula?.data_hora)}
                        </Typography>
                    </div>
                    <div className="   flex justify-center rounded-md bg-white  text-[#2e5f97] sm:gap-20">
                        <Link href={'/sumula'}>
                            <div className=" flex  w-full items-center justify-center rounded-md border border-[#adadad88] p-1 hover:bg-[#08549c2f] md:w-40">
                                <div className="">
                                    Súmula <DescriptionIcon className=" " />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex w-1/4 flex-col items-center   ">
                    <Image
                        src={equipes.time1.escudo}
                        alt={'escudo time 1'}
                        width={100}
                        height={100}
                    />

                    <Typography className="font-semibold sm:text-3xl">
                        {dados?.sumula?.timeVisitante?.nome}
                    </Typography>
                </div>
            </div>

            {/* <div className="flex justify-center text-white items-center"><CircleIcon className="text-yellow-500 text-xs"/> Em andamento</div>
            <div className="flex justify-center text-white items-center"><CircleIcon className="text-red-500 text-xs"/> Encerrado</div> */}
        </div>
    );
}
