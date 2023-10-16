import React from 'react';
import '@/app/styles.css';
import { Typography } from '@mui/material';

export function Gols({ dados }: any) {
    return (
        <div className=" flex  items-center justify-center ">
            <table className=" sumula-futsal justify-center text-center">
                <thead>
                    <tr className=" bg-zinc-200">
                        <th colSpan={11} className="">
                            <p className="text-[10px] font-bold">GOLS</p>
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="">
                        {/* <td>GOLS</td> */}
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">{index * 1 + 1}</td>
                                <td>&nbsp;</td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">Ass.</td>
                                <td className="w-7">&nbsp;</td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">{index * 1 + 6}</td>
                                <td></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">Ass.</td>
                                <td className="w-6"></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">{index * 1 + 11}</td>
                                <td></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">Ass.</td>
                                <td className="w-6"></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">{index * 1 + 16}</td>
                                <td></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">Ass.</td>
                                <td className="w-6"></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">{index * 1 + 21}</td>
                                <td></td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        {Array.from({ length: 5 }, (_, index) => (
                            <React.Fragment key={index}>
                                <td className="text-[7px]">Ass.</td>
                                <td className="w-6"></td>
                            </React.Fragment>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
