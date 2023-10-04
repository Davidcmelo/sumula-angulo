'use client';
import Image from 'next/image';
import '@/app/styles.css';
import React, { useEffect, useRef, useState } from 'react';
import { TableDois } from './components/tableDois';
import { TableUm } from './components/tableUm';
import { TimeUm } from './components/time_um';
import { Gols } from './components/gols';
import { TimeDois } from './components/time_dois';

interface Equipes {
    sumula: any;
}
export default function SumulaFutsal({ dados }: any) {
    const ref = useRef(null);

    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-content');
        if (!element) {
            console.error('Element with id "pdf-content" not found.');
            return;
        }
        const opt = {
            margin: 0.2,
            filename: 'sumula_angulo_futsal.pdf',
            image: { type: 'png', quality: 1 },
            html2canvas: { scale: 5, letterRendering: true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        };

        import('html2pdf.js').then((html2pdf) => {
            html2pdf.default(element, opt).from(element).set(opt).save();
        });
    };

    // html2pdf.default(element,opt).from(document.getElementById('pdf-content')).outputPdf('datauristring').then((data: string) => {
    //       // print the base64 string, call save instead of outputPdf if you just want to save it.
    //     });

    // // Verifica se o código está sendo executado no lado do cliente antes de importar a biblioteca
    // if (typeof window !== 'undefined') {
    //   // @ts-ignore
    //   import('html2pdf.js').then((html2pdf) => {
    //     html2pdf.default(element,opt).from(element).set(opt).save();
    //   });
    // } else {
    //   console.error('HTML2PDF.js can only be used in the browser environment.');
    // }

    return (
        <div className="flex flex-col items-center justify-center">
            <main className=" flex flex-col " id="pdf-content" ref={ref}>
                <div className=" flex justify-center">
                    <h1 className="font-semibold  uppercase sm:text-base">
                        {dados?.sumula?.campeonato?.nome}
                    </h1>
                </div>
                <header className=" flex justify-center">
                    <div className=" flex items-center">
                        <Image
                            src="/imagens/flamengo.png"
                            alt="flamengo  "
                            width={50}
                            height={50}
                        />

                        {/* <input type="text" className='border border-black text-center  ' value={equipes.time1.nome}   /> */}
                        <div className="border border-black  pb-3  sm:w-44  ">
                            <h4 className=" pl-2 pr-10  text-[6px] text-xs font-bold uppercase">
                                {dados?.sumula?.timeCasa?.nome}
                            </h4>
                        </div>
                        <input
                            type="text"
                            className="-ml-[10px] h-8 w-8 rounded-full border border-black"
                        />
                    </div>
                    <div className="flex  items-center ">
                        <input
                            type="text"
                            className="mt-6 h-6 w-6  rounded-full border border-black"
                        />
                        <h2 className="items-center">X</h2>
                        <input
                            type="text"
                            className="mt-6 h-6 w-6 rounded-full border border-black"
                        />
                    </div>
                    <div className="flex items-center ">
                        <input
                            type="text"
                            className="relative -mr-[10px] h-8 w-8 rounded-full border border-black"
                        />
                        {/* <input type="text" className='border border-black  text-center ' value={equipes.time2.nome}  /> */}
                        <div className="w-44 border border-black pb-3 text-[6px] text-xs ">
                            <h4 className="pl-10 pr-2 text-end font-bold uppercase">
                                {dados?.sumula?.timeVisitante?.nome}
                            </h4>
                        </div>
                        <Image
                            src="/imagens/vasco.png"
                            alt="vasco"
                            width={50}
                            height={50}
                        />
                    </div>
                </header>
                <TableUm dados={dados} />
                <TableDois dados={dados} />
                <TimeUm dados={dados} />

                <TimeDois dados={dados} />
            </main>
            <div className="m-2">
                <button
                    className="rounded-lg border border-black bg-gray-300 px-4 text-[10px] font-bold transition-all hover:bg-gray-400"
                    onClick={handleDownloadPDF}
                >
                    GERAR PDF
                </button>
            </div>
        </div>
    );
}
