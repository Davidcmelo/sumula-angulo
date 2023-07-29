
import ".././app/globals.css"

export default function TimeUm(){
    
    const equipes={
        "time1": {
            "nome": "Time Futebol FC",
            "escudo": "caminho/do/escudo.png",
            "tecnico": "José da Silva",
            "capitao": "Jogador 10",
            "jogadores": [
                {
                    "nome": "Jogador 1",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 2",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 3",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 4",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 5",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 6",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 7",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 8",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 9",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 10",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 11",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 12",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 13",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 14",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 15",
                    "registro": "123456789"
                },


            ]
        },
        "time2": {
            "nome": "Time Dois FC",
            "escudo": "caminho/do/escudo.png",
            "tecnico": "João Carlos",
            "capitao": "Jogador 10",
            "jogadores": [
                {
                    "nome": "Jogador 1",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 2",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 3",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 4",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 5",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 6",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 7",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 8",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 9",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 10",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 11",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 12",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 13",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 14",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 15",
                    "registro": "123456789"
                },

            ]
        }
    }
    return(
        <main>
            <div className='flex justify-center m-2  border-b-0'>
                <table className=' text-[8px] w-1/2 timeum'>
                    <thead>
                        <tr >
                            <td className='font-bold uppercase '>TIME: {equipes.time1.nome}</td>
                            <td className='font-bold uppercase '>TÉCNICO: {equipes.time1.tecnico}</td>
                            <td className='font-bold uppercase '>CAPITAO: {equipes.time1.capitao}</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className=' flex justify-center '  >
                <table className=' w-full text-[8px] timeum border-r-0'>
                    <thead className='bg-gray-300 '>
                        <tr>
                            <th className='w-1/6  '>REGISTRO</th>
                            <th className='w-6/12'>JOGADORES</th>
                            <th>Nº</th>
                            <th>I</th>
                            <th >C AMAR.</th>
                            <th >C VERM.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipes.time1.jogadores.map((jogador, index) => (
                            <tr key={index}>
                                <td className='text-center'>{jogador.registro}</td>
                                <td>{jogador.nome}</td>
                                <td className='w-10'></td>
                                <td className='w-10'></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td colSpan={1}>TÉCNICO:</td>
                            <td colSpan={4}>AUXILIR 1:</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={1}>MÉDICO / FISIOTERAPEUTA:</td>
                            <td colSpan={4}>AUXILIAR 2:</td>
                        </tr>
                    </tbody>
                </table>
                <div className='border border-black border-t-0 border-l-0 flex flex-col ' >
                    <table className='text-[8px]'  >
                        <thead >
                            <tr>
                                <th colSpan={6}  className='bg-gray-300 '>ACUMULADAS</th>
                            </tr>
                        </thead>
                        <tbody className='text-center' >
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
                                <td colSpan={6} className='bg-gray-300' >PEDIDOS DE TEMPO</td>
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

                    <div className="h-full flex items-center justify-center">
                        <table className="text-[9px] -rotate-90 flex flex-col justify-center items-center border-none">
                            <tbody>
                                <tr className="">
                                    <td className="whitespace-nowrap pb-6 border-none ">
                                    ASSINATURA DO TÉCNICO
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="whitespace-nowrap pb-5 h-full w-full border-none ">
                                    ASSINATURA DO CAPITÃO
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}


