import Image from 'next/image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PlaceIcon from '@mui/icons-material/Place';
import { Typography } from '@mui/material';

export default function Time({ dados }: any) {
    const equipes = {
        time1: {
            nome: 'Vasco FC',
            escudo: '/imagens/vasco.png',
            tecnico: 'José da Silva',
            capitao: 'Bebé',
            jogadores: [
                {
                    nome: 'Bebé',
                    registro: '123456789',
                    posicao: 'gol',
                },
                {
                    nome: 'João Matos',
                    registro: '123456789',
                    posicao: 'gol',
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
            capitao: 'André Coelho',
            jogadores: [
                {
                    nome: 'André Coelho',
                    registro: '123456789',
                    posicao: 'gol',
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
                    posicao: 'Gol',
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
        <div className=" bg  uppercase">
            <div className="p-5 text-center text-xl font-bold text-white sm:text-3xl ">
                <Typography>Escalação</Typography>
            </div>

            <div className="flex flex-col justify-around gap-1 sm:flex-row sm:gap-5 sm:p-10   ">
                <div className="flex flex-col justify-center gap-5 sm:w-full sm:flex-row ">
                    <table className="table rounded-t-md bg-white text-xs sm:w-1/2  ">
                        <thead className="">
                            <tr>
                                <th
                                    colSpan={2}
                                    className="text-base sm:text-lg"
                                >
                                    {dados?.sumula?.timeCasa?.nome}
                                </th>
                            </tr>
                            <tr className="">
                                <th className="w-28 text-start ">Posição</th>
                                <th colSpan={3} className="text-start ">
                                    Atleta
                                </th>
                                <th className="">Gol</th>
                                <th title="Faltas" className="">
                                    fa
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-xs ">
                            {dados?.sumula?.timeCasa?.campeonatos_atletas.map(
                                (atleta: any, index: any) => (
                                    <tr key={index}>
                                        <td className="">
                                            {atleta.atleta.posicao}
                                        </td>
                                        <td className="" colSpan={3}>
                                            {atleta.atleta.nome}
                                        </td>
                                        <td className="text-center ">0</td>
                                        <td className="text-center ">0</td>
                                    </tr>
                                ),
                            )}
                            <tr className="text-center font-bold">
                                <td colSpan={3}>Técnico</td>
                                <td colSpan={3}>Capitão</td>
                            </tr>
                            <tr className="text-center">
                                <td colSpan={3}>
                                    {dados?.sumula?.timeCasa?.responsavel?.nome}
                                </td>
                                <td colSpan={3}>{equipes.time1.capitao}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table rounded-t-md bg-white text-xs sm:w-1/2 ">
                        <thead className="">
                            <tr>
                                <th colSpan={2} className="text-xs sm:text-lg">
                                    {dados?.sumula?.timeVisitante?.nome}
                                </th>
                            </tr>
                            <tr className="">
                                <th className="w-28 text-start">Posição</th>
                                <th colSpan={3} className="text-start">
                                    Atleta
                                </th>
                                <th>Gol</th>
                                <th title="Faltas">fa</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs">
                            {dados?.sumula?.timeVisitante?.campeonatos_atletas.map(
                                (atleta: any, index: any) => (
                                    <tr key={index}>
                                        <td>{atleta.atleta.posicao}</td>
                                        <td className="" colSpan={3}>
                                            {atleta.atleta.nome}
                                        </td>
                                        <td className="text-center">0</td>
                                        <td className="text-center">0</td>
                                    </tr>
                                ),
                            )}
                            <tr className="text-center font-bold">
                                <td colSpan={3}>Técnico</td>
                                <td colSpan={3}>Capitão</td>
                            </tr>
                            <tr className="text-center ">
                                <td colSpan={3}>
                                    {
                                        dados?.sumula?.timeVisitante
                                            ?.responsavel?.nome
                                    }
                                </td>
                                <td colSpan={3}>{equipes.time2.capitao}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className=" rounded-md bg-white  p-2 sm:w-1/4">
                    <div className=" flex flex-col items-center justify-center p-2 sm:h-52 sm:p-10">
                        <Image
                            src={'/imagens/logo-angulo.png'}
                            alt={'escudo time 1'}
                            width={150}
                            height={100}
                        />
                        <Typography className="text-xs font-bold text-gray-700">
                            {dados?.sumula?.campeonato?.nome} -{' '}
                            {dados?.sumula?.campeonato?.modalidade}
                        </Typography>
                    </div>

                    <div className="flex  justify-around text-center sm:flex-col sm:gap-2 sm:p-4 ">
                        <Typography className="flex items-center border-b-2 text-xs sm:p-2">
                            <CalendarMonthIcon className="text-[#08559C]" />{' '}
                            <div>{formataData(dados?.sumula?.data_hora)}</div>
                        </Typography>
                        <Typography className="flex items-center border-b-2 text-xs sm:p-2">
                            <ScheduleIcon className="text-[#08559C]" />{' '}
                            <div>{formataHora(dados?.sumula?.data_hora)}</div>
                        </Typography>
                        <Typography className="flex items-center border-b-2 text-xs sm:p-2">
                            <PlaceIcon className="text-[#08559C]" />{' '}
                            <div>{dados?.sumula?.local}</div>
                        </Typography>
                    </div>
                    <div>
                        <Typography className="text-xs font-bold text-gray-700">
                            ÁRBITROS/OFICIAIS
                        </Typography>
                    </div>
                    <div>
                        <table className="table w-full rounded-md text-[10px]  ">
                            <thead>
                                <tr>
                                    <th>OFICIAL</th>
                                    <th>FUNÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>EDNEY BARBOSA</td>
                                    <td>Principal</td>
                                </tr>
                                <tr>
                                    <td>FÁBIO FLISCH CAMILLO BIBIANO</td>
                                    <td>Anotador</td>
                                </tr>
                                <tr>
                                    <td>FRANCIS RODRIGUES DO NASCIMENTO</td>
                                    <td>Áuxiliar</td>
                                </tr>
                                <tr>
                                    <td>GISLAINE DE MEDEIROS BACIANO</td>
                                    <td>Cronometrista</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
