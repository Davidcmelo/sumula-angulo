import '@/app/styles.css';

export function TimeUm({ dados }: any) {
    const atletas = dados?.sumula?.timeCasa?.atletas || []; // Certifique-se de que atletas seja um array
    const atletasOrdenados = atletas.slice().sort((a: any, b: any) => {
        // Compare com base no status de suspensão ('S' vem por último)
        if (a.suspensao.some((suspensao: any) => suspensao.status === 'S')) {
            return 1; // 'a' é suspenso, coloque 'a' por último
        } else if (
            b.suspensao.some((suspensao: any) => suspensao.status === 'S')
        ) {
            return -1; // 'b' é suspenso, coloque 'b' por último
        } else {
            return 0; // Ambos não são suspensos, mantenha a ordem original
        }
    });

    return (
        <main>
            <div className="m-2 flex justify-center  border-b-0">
                <table className=" timeum w-1/2 text-[10px]">
                    <thead>
                        <tr>
                            <td className="font-bold uppercase ">
                                TIME: {dados?.sumula?.timeCasa?.nome}
                            </td>

                            <td className="font-bold uppercase ">CAPITAO:</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className=" flex justify-center ">
                <table className=" timeum w-full border-r-0 text-[10px]">
                    <thead className="bg-gray-300 ">
                        <tr>
                            <th className="w-1/6  ">REGISTRO</th>
                            <th className="w-6/12">JOGADORES</th>
                            <th>Nº</th>
                            <th>I</th>
                            <th>C AMAR.</th>
                            <th>C VERM.</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {atletasOrdenados.map((atleta: any, index: any) => {
                            const isSuspenso = atleta.suspensao.some(
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
                                                ? 'italic opacity-60'
                                                : ''
                                        } text-center`}
                                    >
                                        {atleta.rg}
                                    </td>
                                    <td
                                        className={`${
                                            isSuspenso
                                                ? 'italic opacity-60'
                                                : ''
                                        }`}
                                    >
                                        {isSuspenso
                                            ? `${atleta.nome} (suspenso)`
                                            : atleta.nome}
                                    </td>
                                    <td className="w-10"></td>
                                    <td className="w-10"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td></td>
                            <td colSpan={1}>
                                TÉCNICO:
                                {dados?.sumula?.timeCasa?.responsavel?.nome}
                            </td>
                            <td colSpan={4}>AUXILIAR 1:</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={1}>MÉDICO / FISIOTERAPEUTA:</td>
                            <td colSpan={4}>AUXILIAR 2:</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex flex-col border border-l-0 border-t-0 border-black ">
                    <table className="text-[8px]">
                        <thead>
                            <tr>
                                <th colSpan={6} className="bg-gray-300 ">
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
                                <td colSpan={6} className="bg-gray-300">
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

                    <div className="flex h-full items-center justify-center">
                        <table className="flex -rotate-90 flex-col items-center justify-center border-none text-[9px]">
                            <tbody>
                                <tr className="">
                                    <td className="whitespace-nowrap border-none pb-6 text-[4px]">
                                        ASSINATURA DO TÉCNICO
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="h-full w-full whitespace-nowrap border-none pb-5 text-[4px] ">
                                        ASSINATURA DO CAPITÃO
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
