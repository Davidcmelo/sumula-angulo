import '@/app/styles.css';

export function TableDois({ dados }: any) {
    return (
        <div className="flex justify-center">
            <table className="sumula-futsal w-1/2 w-full  ">
                <tbody>
                    <tr className="border border-black">
                        <td>ÁRBITRO PRINCIPAL:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr className="border border-black">
                        <td>ÁRBITRO AUXILIAR:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr className="border border-black">
                        <td>ANOTADOR:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr className="border border-black">
                        <td>CRONOMETRISTA:</td>
                        <td>ASSINATURA:</td>
                    </tr>
                    <tr className="border border-black">
                        <td>DELEGADO(A):</td>
                        <td>ASSINATURA:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
