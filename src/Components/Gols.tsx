export default function Gols(){
    return(
        <div className=' flex items-center justify-center '>
            <table className='text-[8px] text-center flex justify-center '>
                <tbody>
                <tr>
                    
                    <td rowSpan={6} className='-rotate-90 font-bold '>GOLS</td>
                    
                    {Array.from({ length: 14 }, (_, index) => (
                    <>
                        <td >{index * 1 + 1}</td>
                        <td >&nbsp;</td>
                    </>
                    ))}
                </tr>
                <tr>
                    {Array.from({ length: 14 }, (_, index) => (
                    <>
                        <td>Ass.</td>
                        <td >&nbsp;</td>
                    </>
                    ))}
                </tr>
                <tr>
                    <td colSpan={28} ></td>
                </tr>
                <tr>
                    {Array.from({ length: 14 }, (_, index) => (
                    <>
                        <td >{(index * 1) + 15}</td>
                        <td></td>
                    </>
                    ))}
                </tr>
                <tr>
                    {Array.from({ length: 14 }, (_, index) => (
                    <>
                        <td className=''>Ass.</td>
                        <td className='w-6' ></td>
                    </>
                    ))}
                </tr>
                
                </tbody>
            </table>
        </div>
    )
}