/* eslint-disable camelcase */
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function GET(request: NextRequest, { params }: any) {
    try {
        const sumula = await prisma.campeonatos_jogos.findUnique({
            where: {
                id: 33,
            },
            select: {
                id: true,
                grupo_id: true,
                rodada_id: true,
                data_hora: true,
                local: true,
                time_casa_id: true,
                time_visitante_id: true,
                status: true,
                gols_casa: true,
                gols_visitante: true,
                vencedor: true,
                campeonato: {
                    select: {
                        id: true,
                        nome: true,
                        categorias: true,
                        modalidade: true,
                    },
                },
                rodada: {
                    select: {
                        numero: true,
                    },
                },
                timeCasa: {
                    select: {
                        nome: true,
                        escudo: true,
                        sigla: true,
                        responsavel: {
                            select: {
                                nome: true,
                            },
                        },

                        campeonatos_atletas: {
                            select: {
                                atleta: {
                                    select: {
                                        nome: true,
                                        rg: true,
                                        id: true,
                                        posicao: true,
                                        suspensao: {
                                            select: {
                                                status: true,
                                            },
                                        },
                                        estatisticas: {
                                            select: {
                                                id: true,
                                                jogo_id: true,
                                                gols_pro: true,
                                                gols_contra: true,
                                                assistencia: true,
                                                amarelo: true,
                                                vermelho: true,
                                                suspenso: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                timeVisitante: {
                    select: {
                        nome: true,
                        escudo: true,
                        sigla: true,
                        responsavel: {
                            select: {
                                nome: true,
                            },
                        },

                        campeonatos_atletas: {
                            select: {
                                atleta: {
                                    select: {
                                        nome: true,
                                        rg: true,
                                        id: true,
                                        posicao: true,
                                        suspensao: {
                                            select: {
                                                status: true,
                                            },
                                        },
                                        estatisticas: {
                                            select: {
                                                id: true,
                                                jogo_id: true,
                                                gols_pro: true,
                                                gols_contra: true,
                                                assistencia: true,
                                                amarelo: true,
                                                vermelho: true,
                                                suspenso: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        console.log('sumula nova', sumula);
        // const suspensos = await prisma.campeonatos_suspensao.findMany({
        //     where: {
        //         status: 'S',
        //     },
        //     select: {
        //         atleta: {
        //             select: {
        //                 nome: true,
        //                 apelido: true,
        //                 id: true,
        //                 rg: true,
        //             },
        //         },
        //     },
        // });
        // console.log('jogaador suspenso', suspensos);
        return NextResponse.json({
            sumula,
        });
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                status: 'error',
                message: error.message,
            }),
            { status: 500 },
        );
    }
}
