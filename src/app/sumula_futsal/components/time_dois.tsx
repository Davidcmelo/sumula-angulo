import '@/app/styles.css';
import { Gols } from '@/app/sumula_futebol/components/gols';
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

    return (
        <main>
            <div className="flex justify-center  ">
                <table className=" sumula-futsal m-[1px] w-full text-[10px]">
                    <thead>
                        <tr>
                            <td className="font-bold uppercase ">
                                TIME: {dados?.sumula?.timeVisitante?.nome}
                            </td>
                            <td className="font-bold uppercase ">
                                Técnico:{' '}
                                {
                                    dados?.sumula?.timeVisitante?.responsavel
                                        ?.nome
                                }
                            </td>
                            <td className="font-bold uppercase ">Auxiliar:</td>

                            <td className="font-bold uppercase ">CAPITAO:</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className=" flex justify-center">
                <table className="timeum sumula-futsal w-full border-r-0 text-[10px]">
                    <thead className="bg-zinc-200 ">
                        <tr>
                            <th className="w-1/6  ">REGISTRO</th>
                            <th className="w-6/12">JOGADORES</th>
                            <th>Nº</th>
                            <th>I</th>
                            <th className="">C AMAR.</th>
                            <th>C VERM.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {atletasOrdenados.map((atleta: any, index: any) => {
                            const isSuspenso = atleta?.atleta?.suspensao.some(
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
                                        } `}
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
                    <table className="sumula-futsal text-[10px] ">
                        <thead>
                            <tr>
                                <th colSpan={6} className="bg-zinc-200 ">
                                    ACUMULADAS
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td colSpan={6} className="bg-zinc-200">
                                    PEDIDOS DE TEMPO
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>1º PER.</td>
                                <td colSpan={3}>2º PER.</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>&#8203;</td>
                                <td colSpan={3}>&#8203;</td>
                            </tr>
                        </tbody>
                    </table>
                    <Gols />
                    <div className="flex h-full items-center justify-center">
                        <table className=" flex -rotate-90 flex-col items-center justify-center border-none text-[9px]">
                            <thead className="flex flex-col gap-10">
                                <tr className="">
                                    <td className="whitespace-nowrap border-none  text-[6px] ">
                                        ASSINATURA DO TÉCNICO
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="h-full w-full whitespace-nowrap border-none text-[6px] ">
                                        ASSINATURA DO CAPITÃO
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
