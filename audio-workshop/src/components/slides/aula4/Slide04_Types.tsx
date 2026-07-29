import { SlideTitle } from '../../ui/SlideTitle';
import { MicrophoneCard } from '../../ui/MicrophoneCard';
import { slide04Notes } from './notes';
import { Mic, Radio, Headphones, Ear, Film } from 'lucide-react';
export { slide04Notes };

const mics = [
  { name: 'Dinâmico', icon: <Mic className="w-4 h-4" />, image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop', application: 'Shows, eventos, voz ao vivo', sensitivity: 2, environment: ['Palco', 'Igrejas', 'Eventos'], details: 'Resistente, suporta altos volumes, menos sensível a ruídos.', color: 'blue' },
  { name: 'Condensador', icon: <Radio className="w-4 h-4" />, image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=600&auto=format&fit=crop', application: 'Podcast, estúdio, locução', sensitivity: 4, environment: ['Estúdio', 'Podcast', 'Instrumentos'], details: 'Muito sensível, capta detalhes, requer Phantom Power (48V).', color: 'cyan', phantom: true },
  { name: 'Headset', icon: <Headphones className="w-4 h-4" />, image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop', application: 'Palestras, teatro, apresentações', sensitivity: 3, environment: ['Palestras', 'Teatro', 'Apresentações'], details: 'Mãos livres, posição fixa perto da boca.', color: 'purple' },
  { name: 'Lapela', icon: <Ear className="w-4 h-4" />, image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop', application: 'Entrevistas, TV, vídeos', sensitivity: 3, environment: ['TV', 'Entrevistas', 'YouTube'], details: 'Discreto, preso na roupa, mãos livres.', color: 'emerald' },
  { name: 'Shotgun', icon: <Film className="w-4 h-4" />, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', application: 'Cinema, gravação externa', sensitivity: 4, environment: ['Cinema', 'Externo', 'Documentário'], details: 'Altamente direcional, capta apenas o que está na frente.', color: 'amber' },
];

export const Slide04_Types: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="Principais tipos de microfone" subtitle="Cada um tem seu melhor uso" badge="Tipos" />
    <div className="w-full max-w-6xl my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {mics.map((m, i) => <MicrophoneCard key={i} {...m} delay={i * 0.1} />)}
    </div>
  </div>
);
