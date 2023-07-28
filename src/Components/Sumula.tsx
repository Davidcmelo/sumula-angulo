'use client'
import Image from 'next/image'
import '../app/globals.css'

import React, { useRef } from 'react'
import Time_um from './Time_um';
import Gols from './Gols';
import TableUm from './TableUm';
import TableDois from './TableDois';
import Time_dois from './Time_dois';
import NextImage from 'next/image';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js'
import jsPDF from 'jspdf';



export default function Home() {
  
    const equipes={
        "time1": {
            "nome": "Time Futebol FC",
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
            "nome": "Time Dois FC",
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

   
const contentRef = useRef(null);
const handleExportToPDF = () => {
    const content = contentRef.current;
    const opt = {
      margin: 0.5,
      filename: 'sumula_angulo.pdf',
      image: { type: 'png', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };
  
    html2pdf().from(content).set(opt).save();
  };

 

    return (
        <div>
            <main className=' flex flex-col' ref={contentRef} >
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
                            <input type="text" className='border border-black  text-center' value={equipes.time1.nome}   />
                            <input type="text" className='rounded-full border border-black w-8 h-8 -ml-[10px]' />
                        </div>
                        <div className='flex  items-center '>
                            <input type="text" className='rounded-full border border-black w-6 h-6 mt-6'/>
                            <h2>X</h2>
                            <input type="text" className='rounded-full border border-black w-6 h-6 mt-6'/>
                        </div>
                        <div className='flex items-center '>
                            <input type="text" className='rounded-full border border-black w-8 h-8 -mr-[10px] relative' />
                            <input type="text" className='border border-black  text-center' value={equipes.time2.nome}  />
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

            <div><button onClick={handleExportToPDF} >Gerar PDF</button></div>
            </div>

    )
   
}







