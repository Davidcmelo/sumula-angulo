import React from 'react';
import '@/app/styles.css';

export function Gols({ dados }: any) {
    return (
        <div className=" sumula-futsal flex items-center justify-center  ">
            <table className="sumula-futsal flex justify-center border text-center">
                <tbody className="sumula-futsal">
                    <tr className=" sumula-futsal">
                        <td
                            rowSpan={6}
                            className=" sumula-futsal text-xs font-extrabold"
                        >
                            GOLS
                        </td>
                        {Array.from({ length: 20 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="border border-black">
                                    {index * 1 + 1}
                                </td>
                                <td className="border border-black">&nbsp;</td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 20 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="border border-black">Ass.</td>
                                <td className="w-7">&nbsp;</td>
                            </React.Fragment>
                        ))}
                    </tr>
                    {/* <tr>
                        {Array.from({ length: 20 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td>{index * 1 + 15}</td>
                                <td></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 20 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="">Ass.</td>
                                <td className="w-6"></td>
                            </React.Fragment>
                        ))}
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}
