import '@/app/styles.css';

export function TableDois({ dados }: any) {
    return (
        <div className="flex justify-center">
            <table className="w-1/2 w-full text-[10px] ">
                <tbody>
                    <tr>
                        <td>ÁRBITRO PRINCIPAL:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>ÁRBITRO ASSISTENTE 1:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>ÁRBITRO ASSISTENTE 2:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>4 ÁRBITRO:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr>
                        <td>DELEGADO(A):</td>
                        <td>ASSINATURA:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
