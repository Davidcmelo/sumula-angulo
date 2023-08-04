
import ".././app/styles.css"

export function TableDois(){
    return(
        <div className='flex justify-center pt-2'>
            <table className='text-[8px] w-full '>
                <tbody >
                    <tr >
                        <td>ÁRBITRO PRINCIPAL:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>ÁRBITRO AUXILIAR:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>ANOTADOR:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>CRONOMETRISTA:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>DELEGADO(A):</td>
                        <td>ASSINATURA:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}