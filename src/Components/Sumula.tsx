'use client'
import Image from 'next/image'
import '../app/globals.css'
import React, { useRef } from 'react'
import Time_um from './Time_um';
import Gols from './Gols';
import TableUm from './TableUm';
import TableDois from './TableDois';
import Time_dois from './Time_dois';
import html2pdf from 'html2pdf.js';




export default function Home() {
  
    const equipes={
        "time1": {
            "nome": "Time Vasco FC",
            "escudo": "caminho/do/escudo.png",
            "tecnico": "José da Silva",
            "jogadores": [
                {
                    "nome": "Jogador 1",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 2",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 3",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 4",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 5",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 6",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 7",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 8",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 9",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 10",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 11",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 12",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 13",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 14",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 15",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 16",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 17",
                    "registro": "123456789"
                },

            ]
        },
        "time2": {
            "nome": "Time Flamengo FC",
            "escudo": "caminho/do/escudo.png",
            "tecnico": "João Carlos",
            "jogadores": [
                {
                    "nome": "Jogador 1",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 2",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 3",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 4",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 5",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 6",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 7",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 8",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 9",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 10",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 11",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 12",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 13",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 14",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 15",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 16",
                    "registro": "123456789"
                },
                {
                    "nome": "Jogador 17",
                    "registro": "123456789"
                },
            ]
        }
    }
    // const ref = useRef(null);
    const ref = useRef<HTMLDivElement>(null);
    
    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-content');
        if (!element) {
            console.error('Element with id "pdf-content" not found.');
            return;
          }
        // const opt = {
        //   margin: 0.5,
        //   filename: 'sumula_angulo.pdf',
        //   image: { type: 'png', quality: 1 },
        //   html2canvas: { scale: 3 },
        //   jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        // };
      
        // const handleDownloadPDF = () => {
            // const element = document.getElementById('pdf-content');
    
            const opt = {
                margin: 0.5,
                filename: 'sumula_angulo.pdf',
                image: { type: 'png', quality: 1 },
                html2canvas: { scale: 3},
                jsPDF: { unit: 'in', format: 'a4', orientation:'portrait' },
            };
    
        html2pdf(element, opt).from(element).set(opt).save();
    //   };
    
    
          
    }


        // import('html2pdf.js').then((html2pdf) => {
        //     html2pdf.default(element,opt).from(element).set(opt).save();

        // });

// html2pdf.default(element,opt).from(document.getElementById('pdf-content')).outputPdf('datauristring').then((data: string) => {
    //   // print the base64 string, call save instead of outputPdf if you just want to save it.    
    // });


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
        <div>        
            <main className=' flex flex-col ' id='pdf-content' ref={ref}>            
                <div className='flex justify-center' >
                    <h1 className="text-xl font-semibold">COPA ANGULO DE FUTSAL</h1>
                </div>
                <header className='flex justify-center '>
                    <div className=' flex items-center'>
                        <Image
                            src='/imagens/vasco.png'
                            alt='vasco'
                            width={50}
                            height={50}
                        />                        
                        {/* <input type="text" className='border border-black text-center  ' value={equipes.time1.nome}   /> */}
                        <div className='border border-black  pb-3 text-xs  w-44 '>
                            <h4 className=' uppercase pr-10  pl-2 font-bold'>{equipes.time1.nome}</h4>
                        </div>
                        <input type="text" className='rounded-full border border-black w-8 h-8 -ml-[10px]' />
                    </div>
                    <div className='flex  items-center '>
                        <input type="text" className='rounded-full border border-black  w-6 h-6 mt-6'/>
                        <h2 className='items-center'>X</h2>
                        <input type="text" className='rounded-full border border-black w-6 h-6 mt-6'/>
                    </div>
                    <div className='flex items-center '>
                        <input type="text" className='rounded-full border border-black w-8 h-8 -mr-[10px] relative' />
                        {/* <input type="text" className='border border-black  text-center ' value={equipes.time2.nome}  /> */}
                        <div className='border border-black pb-3  text-xs w-44 '> 
                            <h4 className=' pl-10 pr-2 uppercase font-bold'>{equipes.time2.nome}</h4>
                        </div>
                        <Image
                            src='/imagens/flamengo.png'
                            alt='flamengo'
                            width={50}
                            height={50}
                        />
                    </div>
                </header>
                <TableUm/>
                <TableDois/>
                <Time_um/>
                <Gols/>
                <Time_dois />
                <Gols/>
            </main>
            <div className='m-2'>
                <button className='border border-black rounded-lg p-2 px-4 bg-gray-300 font-bold hover:bg-gray-400 transition-all'  onClick={handleDownloadPDF}> GERAR PDF</button>
            </div>
        </div>
    )
}
