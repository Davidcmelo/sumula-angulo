import '@/app/styles.css';
import { format } from 'date-fns';

export function TableUm({ dados }: any) {
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
        <div className="flex justify-center ">
            <table className="tabela-um  w-full text-center ">
                <thead className="">
                    <tr className="">
                        <th rowSpan={4}>DATA</th>
                        <th>HORÁRIO</th>
                        <th className="sm:w-10">INÍCIO</th>
                        <th>TÉRMINO</th>
                        <th colSpan={4}>CONTAGENS</th>
                        <th colSpan={2} rowSpan={2}>
                            PROTOCOLO Nº
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={4} className="w-1/6 text-[16px]">
                            {formataData(dados?.sumula?.data_hora)}
                            <div className=" text-[12px]">
                                {formataHora(dados?.sumula?.data_hora)}
                            </div>

                            <div className="text-[10px]">
                                {dados?.sumula?.local}
                            </div>
                        </td>
                        <td>1º PERÍODO:</td>
                        <td></td>
                        <td></td>
                        <td>1º PERÍODO:</td>
                        <td className="w-16"></td>
                        <td className="w-16 text-center">X</td>
                        <td className="w-16"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2º PERÍODO:</td>
                        <td></td>
                        <td></td>
                        <td>2º PERÍODO:</td>
                        <td></td>
                        <td className="text-center">X</td>
                        <td></td>
                        <td className="text-start">
                            ENTROU EM: ______/______/______
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>3º PERÍODO:</td>
                        <td></td>
                        <td></td>
                        <td>PERÍODO EXTRA:</td>
                        <td></td>
                        <td className="text-center">X</td>
                        <td></td>
                        <td className="text-start">HORA:</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>FINAL:</td>
                        <td></td>
                        <td className="text-center">X</td>
                        <td></td>
                        <td className="text-start">RECEBIDO POR:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
