import { Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { BsFillFileFill } from 'react-icons/bs';
import { BiFootball } from 'react-icons/bi';

export default function Estatisticas({ dados }: any) {
    const renderIconesEstatisticas = (estatisticas: any) => {
        const icones = [];

        // Verificar cartões amarelos
        if (estatisticas?.amarelo > 0) {
            for (let i = 0; i < estatisticas.amarelo; i++) {
                icones.push(
                    <BsFillFileFill
                        key={`amarelo_${i}`}
                        className="  text-yellow-500"
                    />,
                );
            }
        }

        // Verificar cartão vermelho
        if (estatisticas?.vermelho > 0) {
            icones.push(
                <BsFillFileFill key="vermelho" className="  text-red-500" />,
            );
        }

        // Verificar gols marcados
        if (estatisticas?.gols_pro > 0) {
            icones.push(
                <div key="gols" className="flex items-center ">
                    <BiFootball className="md:text-base" />
                    <span className="">({estatisticas?.gols_pro})</span>
                </div>,
            );
        }
        // Verificar gols contra
        if (estatisticas?.gols_contra > 0) {
            icones.push(
                <BiFootball
                    key="gols_contra"
                    className=" text-red-500 md:text-base"
                />,
                <span className="text-red-500">
                    ({estatisticas?.gols_contra})
                </span>,
            );
        }

        return icones;
    };

    const jogadores = dados?.sumula?.timeCasa?.campeonatos_atletas || [];
    const jogadoresVisitantes =
        dados?.sumula?.timeVisitante?.campeonatos_atletas || [];

    // Dividir jogadores em "red" e "não red"
    const jogadoresRed = jogadores.filter(
        (atleta: any) =>
            atleta?.atleta?.estatisticas?.find(
                (est: any) => est.jogo_id === dados.sumula.id,
            )?.suspenso === 'S',
    );
    const jogadoresNaoRed = jogadores.filter(
        (atleta: any) =>
            atleta?.atleta?.estatisticas?.find(
                (est: any) => est.jogo_id === dados.sumula.id,
            )?.suspenso !== 'S',
    );
    const jogadoresReds = jogadoresVisitantes.filter(
        (atleta: any) =>
            atleta?.atleta?.estatisticas?.find(
                (est: any) => est.jogo_id === dados.sumula.id,
            )?.suspenso === 'S',
    );
    const jogadoresNaoReds = jogadoresVisitantes.filter(
        (atleta: any) =>
            atleta?.atleta?.estatisticas?.find(
                (est: any) => est.jogo_id === dados.sumula.id,
            )?.suspenso !== 'S',
    );

    // Concatenar as duas listas com jogadores "não red" primeiro
    const jogadoresOrganizados = jogadoresNaoRed.concat(jogadoresRed);
    const jogadoresOrganizadosVisitantes =
        jogadoresNaoReds.concat(jogadoresReds);

    return (
        <div className=" -mt-44 h-full">
            <Typography className=" text-center text-2xl text-white md:pt-5">
                Estatísticas
            </Typography>

            <div className="flex justify-around gap-1 sm:flex-row sm:gap-5 sm:p-10   ">
                <div className="flex w-full flex-col justify-center gap-5 p-5 sm:w-full md:flex-row">
                    <table className="w-full rounded-md bg-white  shadow-md shadow-gray-400 md:w-1/3   md:shadow-xl">
                        <thead className=" ">
                            <tr>
                                <th
                                    colSpan={2}
                                    className="flex items-center gap-3 border-b-2 p-3 text-base sm:text-lg"
                                >
                                    <Image
                                        src="/imagens/vasco.png"
                                        alt={'escudo time 1'}
                                        width={30}
                                        height={30}
                                    />
                                    {dados?.sumula?.timeCasa?.sigla}{' '}
                                    {/* <BsFillFileFill className="ml-2 text-yellow-500" />
                                    <BsFillFileFill className="ml-2 text-red-500" />
                                    <BiFootball /> */}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {jogadoresOrganizados.map(
                                (atleta: any, index: any) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-gray-100'
                                        }
                                    >
                                        <td
                                            className={`flex items-center gap-3 px-3 text-[10px] uppercase md:text-[14px] ${
                                                atleta?.atleta?.estatisticas?.find(
                                                    (est: any) =>
                                                        est.jogo_id ===
                                                        dados.sumula.id,
                                                )?.suspenso === 'S'
                                                    ? 'text-red-500'
                                                    : ''
                                            }`}
                                            colSpan={3}
                                        >
                                            <span className="flex w-10 justify-center rounded-sm bg-[#1878E8] p-0 text-[12px] text-white">
                                                {atleta.atleta.posicao}
                                            </span>
                                            {atleta.atleta.nome}
                                            {atleta?.atleta?.estatisticas?.find(
                                                (est: any) =>
                                                    est.jogo_id ===
                                                    dados.sumula.id,
                                            )?.suspenso === 'S' && (
                                                <span className=" text-red-500">
                                                    (Suspenso)
                                                </span>
                                            )}
                                            {renderIconesEstatisticas(
                                                atleta.atleta.estatisticas.find(
                                                    (est: any) =>
                                                        est.jogo_id ===
                                                        dados.sumula.id,
                                                ),
                                            )}
                                        </td>
                                        <td>01</td>
                                    </tr>
                                ),
                            )}
                            <tr className="border-t-2 ">
                                <td
                                    colSpan={3}
                                    className="pl-3 text-[10px] md:text-[12px]"
                                >
                                    {dados?.sumula?.timeCasa?.responsavel?.nome}
                                </td>
                            </tr>
                            <tr className=" text-gray-500">
                                <td
                                    colSpan={3}
                                    className="pl-3 text-[10px] md:text-[12px]"
                                >
                                    Técnico
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full rounded-md bg-white  shadow-md shadow-gray-400 md:w-1/3   md:shadow-xl">
                        {' '}
                        <thead className=" ">
                            <tr>
                                <th
                                    colSpan={2}
                                    className="flex items-center gap-3 border-b-2 p-3 text-base sm:text-lg"
                                >
                                    <Image
                                        src="/imagens/vasco.png"
                                        alt={'escudo time 1'}
                                        width={30}
                                        height={30}
                                    />
                                    {dados?.sumula?.timeVisitante?.sigla}{' '}
                                    {/* <BsFillFileFill className="ml-2 text-yellow-500" />
                                    <BsFillFileFill className="ml-2 text-red-500" />
                                    <BiFootball /> */}
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {jogadoresOrganizadosVisitantes.map(
                                (atleta: any, index: any) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-gray-100'
                                        }
                                    >
                                        <td
                                            className={`flex items-center gap-3 px-3 text-[10px] uppercase md:text-[14px] ${
                                                atleta?.atleta?.estatisticas?.find(
                                                    (est: any) =>
                                                        est.jogo_id ===
                                                        dados.sumula.id,
                                                )?.suspenso === 'S'
                                                    ? 'text-red-500'
                                                    : ''
                                            }`}
                                            colSpan={3}
                                        >
                                            <span className="flex w-10 justify-center rounded-sm bg-[#1878E8] p-0 text-[12px] text-white">
                                                {atleta.atleta.posicao}
                                            </span>
                                            {atleta.atleta.nome}
                                            {atleta?.atleta?.estatisticas?.find(
                                                (est: any) =>
                                                    est.jogo_id ===
                                                    dados.sumula.id,
                                            )?.suspenso === 'S' && (
                                                <span className=" text-red-500">
                                                    (Suspenso)
                                                </span>
                                            )}
                                            {renderIconesEstatisticas(
                                                atleta.atleta.estatisticas.find(
                                                    (est: any) =>
                                                        est.jogo_id ===
                                                        dados.sumula.id,
                                                ),
                                            )}
                                        </td>
                                        <td>01</td>
                                    </tr>
                                ),
                            )}
                            <tr className="border-t-2 ">
                                <td
                                    colSpan={3}
                                    className="pl-3 text-[10px] md:text-[12px]"
                                >
                                    {dados?.sumula?.timeCasa?.responsavel?.nome}
                                </td>
                            </tr>
                            <tr className=" text-gray-500">
                                <td
                                    colSpan={3}
                                    className="pl-3 text-[10px] md:text-[12px]"
                                >
                                    Técnico
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className="h-[30%] rounded-md bg-white ">
                        <div className="flex items-center gap-3 border-b-2 p-3 text-base sm:text-lg">
                            <Typography className="text-xl">
                                Informações sobre o jogo
                            </Typography>
                        </div>
                        <div className="mt-2 p-2">
                            <Typography className=" text-sm">
                                José Maria sampaio
                            </Typography>
                            <Typography className="text-sm text-gray-500">
                                Árbitro principal
                            </Typography>
                        </div>
                        <div className="mt-2 p-2">
                            <Typography className=" text-sm">
                                Carlitão
                            </Typography>
                            <Typography className="text-sm text-gray-500">
                                Assistente
                            </Typography>
                        </div>
                        <div className="mt-2 p-2">
                            <Typography className=" text-sm">
                                Anderson Daronco
                            </Typography>
                            <Typography className="text-sm text-gray-500">
                                Delegado
                            </Typography>
                        </div>
                        <div className="mt-2 p-2">
                            <Typography className=" text-sm">
                                {dados?.sumula?.local}
                            </Typography>
                            <Typography className="text-sm text-gray-500">
                                Estádio
                            </Typography>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
