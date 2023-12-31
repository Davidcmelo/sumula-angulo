import '@/app/styles.css';
import { Gols } from './gols';
import Substituicao from './substituicao';

export function TimeUm({ dados }: any) {
    const jogadores = dados?.sumula?.timeCasa?.campeonatos_atletas || [];

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

    // Concatenar as duas listas com jogadores "não red" primeiro
    const jogadoresOrganizados = jogadoresNaoRed.concat(jogadoresRed);

    // const equipes = {
    //     time1: {
    //         nome: 'Time Vasco FC',
    //         escudo: 'caminho/do/escudo.png',
    //         tecnico: 'José da Silva',
    //         jogadores: [
    //             {
    //                 nome: 'Jogador 1',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 2',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 3',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 4',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 5',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 6',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 7',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 8',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 9',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 10',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 11',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 12',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 13',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 14',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 15',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 16',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 17',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 18',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 19',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 20',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 21',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 22',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 23',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 24',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 25',
    //                 registro: '123456789',
    //             },
    //         ],
    //     },
    //     time2: {
    //         nome: 'Time Flamengo FC',
    //         escudo: 'caminho/do/escudo.png',
    //         tecnico: 'João Carlos',
    //         jogadores: [
    //             {
    //                 nome: 'Jogador 1',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 2',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 3',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 4',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 5',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 6',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 7',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 8',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 9',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 10',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 11',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 12',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 13',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 14',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 15',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 16',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 17',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 18',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 19',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 20',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 21',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 22',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 23',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 24',
    //                 registro: '123456789',
    //             },
    //             {
    //                 nome: 'Jogador 25',
    //                 registro: '123456789',
    //             },
    //         ],
    //     },
    // };

    return (
        <main>
            <div className="mt-[1px] flex justify-center  border-b-0">
                <table className=" sumula-futsal w-1/2 ">
                    <thead>
                        <tr>
                            <td className="font-bold uppercase ">
                                TIME: {dados?.sumula?.timeCasa?.nome}
                            </td>

                            <td className="font-bold uppercase ">
                                TÉCNICO:{' '}
                                {dados?.sumula?.timeCasa?.responsavel?.nome}
                            </td>
                            <td className=" font-bold uppercase">
                                CAPITAO: jogador 2
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className=" flex justify-center ">
                <table className=" timeum sumula-futsal w-full border-r-0 text-[10px]">
                    <thead className="bg-zinc-200 ">
                        <tr>
                            <th className="w-1/6  ">REGISTRO</th>
                            <th className="w-6/12">JOGADORES</th>
                            <th>Nº</th>
                            <th>I</th>
                            <th className="w-12">C AMAR.</th>
                            <th>C VERM.</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {jogadoresOrganizados.map((atleta: any, index: any) => {
                            const isSuspenso =
                                atleta?.atleta?.estatisticas?.find(
                                    (est: any) =>
                                        est.jogo_id === dados.sumula.id,
                                )?.suspenso === 'S';

                            return (
                                <tr key={index}>
                                    <td
                                        className={`flex items-center gap-3 px-3 text-[10px] uppercase md:text-[14px] ${
                                            isSuspenso
                                                ? 'italic text-gray-400'
                                                : ''
                                        }`}
                                    >
                                        <span
                                            className={
                                                isSuspenso
                                                    ? 'italic text-gray-400'
                                                    : ''
                                            }
                                        >
                                            {atleta.atleta.rg}
                                        </span>
                                    </td>
                                    <td>
                                        {isSuspenso ? (
                                            <span className="italic text-gray-400">
                                                {atleta.atleta.nome} (Suspenso)
                                            </span>
                                        ) : (
                                            atleta.atleta.nome
                                        )}
                                    </td>
                                    <td className="w-10"></td>
                                    <td className="w-10"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="flex flex-col border border-l-0 border-t-0 border-black ">
                    <Gols dados={dados} />
                    <Substituicao />
                </div>
            </div>
        </main>
    );
}
