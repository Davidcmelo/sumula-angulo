'use client'
import ".././app/globals.css"

export default function TableUm(){
    return(
        <div className='flex justify-center '>
            <table className='w-full text-[8px] tabela-um text-center' >
                <thead className='text-[8px] ' >
                    <tr >
                        <th rowSpan={4}>DATA</th>
                        <th  >HORÁRIO</th>
                        <th className='w-16 '>INÍCIO</th>
                        <th>TÉRMINO</th>
                        <th colSpan={4}>CONTAGENS</th>
                        <th colSpan={2} rowSpan={2}>PROTOCOLO Nº</th>
                    </tr>
                </thead>
                <tbody  >
                    <tr >
                        <td rowSpan={4} className="text-lg w-1/6">___/___/___</td>
                        <td>1º PERÍODO:</td>
                        <td ></td>
                        <td></td>
                        <td>1º PERÍODO:</td>
                        <td className='w-16'></td>
                        <td className='w-16 text-center'>X</td>
                        <td className='w-16'></td>
                        <td></td>
                    </tr>
                    <tr >
                        <td>2º PERÍODO:</td>
                        <td ></td>
                        <td ></td>
                        <td>2º PERÍODO:</td>
                        <td></td>
                        <td className="text-center">X</td>
                        <td></td>
                        <td className='text-start'>ENTROU EM: _____/_____/_____</td>
                    </tr>
                    <tr >
                        <td rowSpan={2}>3º PERÍODO:</td>
                        <td></td>
                        <td></td>
                        <td>PERÍODO EXTRA:</td>
                        <td></td>
                        <td className="text-center">X</td>
                        <td></td>
                        <td  className='text-start'>HORA:</td>
                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td>FINAL:</td>
                        <td></td>
                        <td className="text-center">X</td>
                        <td></td>
                        <td className='text-start'>RECEBIDO POR:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
        
    
}