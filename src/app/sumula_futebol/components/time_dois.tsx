import '@/app/styles.css';
import { Gols } from './gols';
import Substituicao from './substituicao';
export function TimeDois({ dados }: any) {
    const atletas = dados?.sumula?.timeVisitante?.campeonatos_atletas || []; // Certifique-se de que atletas seja um array
    const atletasOrdenados = atletas.slice().sort((a: any, b: any) => {
        // Compare com base no status de suspensão ('S' vem por último)
        if (
            a.atleta.suspensao?.some(
                (suspensao: any) => suspensao.status === 'S',
            )
        ) {
            return 1; // 'a' é suspenso, coloque 'a' por último
        } else if (
            b.atleta.suspensao?.some(
                (suspensao: any) => suspensao.status === 'S',
            )
        ) {
            return -1; // 'b' é suspenso, coloque 'b' por último
        } else {
            return 0; // Ambos não são suspensos, mantenha a ordem original
        }
    });
    const equipes = {
        time1: {
            nome: 'Time Vasco FC',
            escudo: 'caminho/do/escudo.png',
            tecnico: 'José da Silva',
            jogadores: [
                {
                    nome: 'Jogador 1',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 2',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 3',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 4',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 5',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 6',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 7',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 8',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 9',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 10',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 11',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 12',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 13',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 14',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 15',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 16',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 17',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 18',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 19',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 20',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 21',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 22',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 23',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 24',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 25',
                    registro: '123456789',
                },
            ],
        },
        time2: {
            nome: 'Time Flamengo FC',
            escudo: 'caminho/do/escudo.png',
            tecnico: 'João Carlos',
            jogadores: [
                {
                    nome: 'Jogador 1',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 2',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 3',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 4',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 5',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 6',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 7',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 8',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 9',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 10',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 11',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 12',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 13',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 14',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 15',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 16',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 17',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 18',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 19',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 20',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 21',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 22',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 23',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 24',
                    registro: '123456789',
                },
                {
                    nome: 'Jogador 25',
                    registro: '123456789',
                },
            ],
        },
    };
    return (
        <main>
            <div className="m-[1px] flex justify-center  border-b-0">
                <table className=" timeum w-1/2 text-[10px]">
                    <thead>
                        <tr>
                            <td className="font-bold uppercase ">
                                TIME: {dados?.sumula?.timeVisitante?.nome}
                            </td>

                            <td className="font-bold uppercase ">
                                TÉCNICO:
                                {
                                    dados?.sumula?.timeVisitante?.responsavel
                                        ?.nome
                                }
                            </td>
                            <td className=" font-bold uppercase ">
                                CAPITAO: jogador 2
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className=" flex justify-center ">
                <table className=" timeum w-full border-r-0 text-[10px]">
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
                        {atletasOrdenados.map((atleta: any, index: any) => {
                            const isSuspenso = atleta?.atleta?.suspensao?.some(
                                (suspensao: any) => suspensao.status === 'S',
                            );
                            // const nomeJogador = isSuspenso
                            //     ? `${atleta.nome} (suspenso)`
                            //     : atleta.nome;

                            return (
                                <tr key={index}>
                                    <td
                                        className={`${
                                            isSuspenso
                                                ? 'text-center italic opacity-60'
                                                : ''
                                        } text-center`}
                                    >
                                        {atleta.atleta.rg}
                                    </td>
                                    <td
                                        className={`${
                                            isSuspenso
                                                ? 'italic opacity-60'
                                                : ''
                                        }`}
                                    >
                                        {isSuspenso
                                            ? `${atleta.atleta.nome} (suspenso)`
                                            : atleta.atleta.nome}
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
