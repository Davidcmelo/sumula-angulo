
import React from "react";
import ".././app/styles.css"

export default function Gols() {
    return (
        <div className='flex items-center justify-center m-1'>
        <table className='text-[8px] text-center flex justify-center timeum'>
          <tbody>
            <tr>
              <td rowSpan={6} className='-rotate-90 font-extrabold border-none text-xs'>
                GOLS
              </td>
              {Array.from({ length: 14 }, (_, index) => (
                <React.Fragment key={index}>
                  <td>{index * 1 + 1}</td>
                  <td>&nbsp;</td>
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {Array.from({ length: 14 }, (_, index) => (
                <React.Fragment key={index}>
                  <td>Ass.</td>
                  <td>&nbsp;</td>
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {Array.from({ length: 14 }, (_, index) => (
                <React.Fragment key={index}>
                  <td>{index * 1 + 15}</td>
                  <td></td>
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {Array.from({ length: 14 }, (_, index) => (
                <React.Fragment key={index}>
                  <td className=''>Ass.</td>
                  <td className='w-6'></td>
                </React.Fragment>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


// export default function Gols(){
//     return(
//         <div className=' flex items-center justify-center m-1'>
//             <table className='text-[8px] text-center flex justify-center  timeum '>
//                 <tbody>
//                     <tr>
                        
//                         <td rowSpan={6} className='-rotate-90 font-extrabold border-none text-xs '>
//                             GOLS
//                         </td>
//                         {Array.from({ length: 14 }, (_, index) => (
//                             <>
//                                 <td >{index * 1 + 1}</td>
//                                 <td >&nbsp;</td>
//                             </>
//                         ))}
//                     </tr>
//                     <tr>
//                         {Array.from({ length: 14 }, (_, index) => (
//                             <>
//                                 <td>Ass.</td>
//                                 <td >&nbsp;</td>
//                             </>
//                         ))}
//                     </tr>

//                     <tr>
//                         {Array.from({ length: 14 }, (_, index) => (
//                             <>
//                                 <td >{(index * 1) + 15}</td>
//                                 <td></td>
//                             </>
//                         ))}
//                     </tr>
//                     <tr>
//                         {Array.from({ length: 14 }, (_, index) => (
//                             <>
//                                 <td className=''>Ass.</td>
//                                 <td className='w-6' ></td>
//                             </>
//                         ))}
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }