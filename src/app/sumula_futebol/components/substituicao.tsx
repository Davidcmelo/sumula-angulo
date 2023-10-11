import { Typography } from '@mui/material';
import React from 'react';

export default function Substituicao() {
    return (
        <div>
            <table className="border-1 sumula-futsal">
                <thead>
                    <tr className=" bg-zinc-200">
                        <th colSpan={12}>
                            <Typography className="text-[8px] font-bold">
                                substituição
                            </Typography>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Typography className="text-[6px] font-bold">
                                ENTRA
                            </Typography>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Typography className="text-[6px] font-bold">
                                SAI
                            </Typography>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            <Typography className="text-[6px] font-bold">
                                PARADA
                            </Typography>
                        </td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                        <td className="w-6"></td>
                    </tr>
                </tbody>
            </table>

            <div className="flex h-1/2 flex-col gap-10 border-t border-black ">
                <div>
                    <h2 className="  text-center text-[6px] uppercase">
                        Assinatura do técnico
                    </h2>
                </div>
                <div>
                    <h2 className="mt-2 text-center text-[6px] uppercase">
                        Assinatura do capitão
                    </h2>
                </div>
            </div>
        </div>
    );
}
