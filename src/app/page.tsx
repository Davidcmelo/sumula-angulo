'use client';
import '@/app/styles.css';
import React, { useEffect, useState } from 'react';
import SumulaFutsal from './sumula_futsal/sumula-futsal';
import SumulaFutebol from './sumula_futebol/sumula-futebol';

interface Equipes {
    sumula: any;
}
export default function Home() {
    // console.log('dados condição', dados);
    // console.log('dados camp', dados?.sumula?.campeonato?.nome);
    const [dados, setDados] = useState<Equipes>();

    useEffect(() => {
        async function getTimes() {
            try {
                const res = await fetch(`/api/sumula`);
                const data = await res.json();
                setDados(data);
            } catch (error) {
                console.error('Erro na requisição', error);
            }
        }
        getTimes();
    }, []);
    return (
        <main>
            <div>
                <h1>{dados?.sumula?.campeonato?.modalidade}</h1>
            </div>
            {dados?.sumula?.campeonato?.modalidade === 'FB' ? (
                <SumulaFutebol dados={dados} />
            ) : dados?.sumula?.campeonato?.modalidade === 'FS' ? (
                <SumulaFutsal dados={dados} />
            ) : null}
        </main>
    );
}
