import Partida from './components/partida';
import Infos from './components/infos';
import Time from './components/time';
import Estatisticas from './components/estatisticas';

export default function PartidaAngulo({ dados }: any) {
    return (
        <main>
            <Partida dados={dados} />
            <Estatisticas dados={dados} />
            {/* <Infos dados={dados} /> */}
            {/* <Time dados={dados} /> */}
        </main>
    );
}
