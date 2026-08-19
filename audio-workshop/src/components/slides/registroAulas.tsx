import type { ReactNode } from 'react';
import { Music, Mic, Sliders, Sparkles, Waves, Gauge, SlidersHorizontal } from 'lucide-react';
import type { PresenterNote } from '../../types/presentation';
import { aula1 } from './aula1';
import { aula2 } from './aula2';
import { aula3 } from './aula3';
import { aula4 } from './aula4';
import { aula5 } from './aula5';
import { aula6 } from './aula6';
import { aula7 } from './aula7';
import { aula8 } from './aula8';
import { aula9 } from './aula9';
import { aula10 } from './aula10';
import { aula11 } from './aula11';
import { aula12 } from './aula12';

export interface RegistroAula {
  id: number;
  titulo: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  icon: ReactNode;
  slides: ReactNode[];
  notes: PresenterNote[];
  titles: string[];
}

type MetadadosVisuais = Omit<RegistroAula, 'id' | 'slides' | 'notes' | 'titles'>;

const metadadosVisuais: Record<number, MetadadosVisuais> = {
  1: {
    titulo: 'O que é Som?',
    subtitle: 'Conceitos fundamentais de acústica e eletroacústica',
    description: 'Entenda o que é o som, como ele se propaga, e conheça os princípios básicos de microfones, alto-falantes e o fluxo de sinal.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    icon: <Music className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
  },
  2: {
    titulo: 'Conhecendo os Equipamentos',
    subtitle: 'Microfones, mesas, cabos e caixas de som',
    description: 'Explore cada equipamento de um sistema de áudio profissional: do microfone à caixa de som, passando por mesas, cabos, DI boxes e amplificadores.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    icon: <Sliders className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-500',
  },
  3: {
    titulo: 'O Caminho do Som',
    subtitle: 'Fluxo completo do sinal de áudio',
    description: 'Entenda como o som percorre todo o sistema — da voz aos alto-falantes — e aprenda a identificar falhas em cada etapa do fluxo.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    icon: <Waves className="w-8 h-8" />,
    color: 'from-amber-500 to-orange-500',
  },
  4: {
    titulo: 'Microfones',
    subtitle: 'A porta de entrada do som',
    description: 'Conheça os tipos de microfone, padrões polares, posicionamento correto e como escolher o microfone ideal para cada situação.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop',
    icon: <Mic className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
  },
  5: {
    titulo: 'Mesas de Som',
    subtitle: 'O cérebro do sistema',
    description: 'Descubra como funciona uma mesa de som, seus canais, controles, caminho do sinal e as diferenças entre mesas analógicas e digitais.',
    image: 'https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Sliders className="w-8 h-8" />,
    color: 'from-green-600 to-teal-500',
  },
  6: {
    titulo: 'Gain, Volume e Clip',
    subtitle: 'O segredo do som profissional',
    description: 'Entenda de uma vez por todas a diferença entre Gain e Fader, o que é Clip, Headroom e como ajustar corretamente o nível de cada canal.',
    image: 'https://images.pexels.com/photos/11884526/pexels-photo-11884526.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Gauge className="w-8 h-8" />,
    color: 'from-amber-500 to-orange-500',
  },
  7: {
    titulo: 'Equalização',
    subtitle: 'Moldando o Som',
    description: 'Aprenda a equilibrar graves, médios e agudos. Entenda o HPF, como ouvir as diferenças e por que cortar frequências é melhor que aumentar.',
    image: 'https://images.pexels.com/photos/34068712/pexels-photo-34068712.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <SlidersHorizontal className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-500',
  },
  8: {
    titulo: 'Compressão',
    subtitle: 'Controlando a Dinâmica do Som',
    description: 'Entenda o que é um compressor, como usar Threshold, Ratio, Attack, Release e Make-up Gain. Aprenda na prática com simulador interativo e quiz.',
    image: '/images/dbx-compressors.jpg',
    icon: <Waves className="w-8 h-8" />,
    color: 'from-purple-600 to-pink-500',
  },
  9: {
    titulo: 'Fase e Polaridade',
    subtitle: 'Quando dois sons trabalham juntos... ou contra você',
    description: 'Entenda o que é fase, polaridade, como ondas se somam ou se cancelam, e por que dois microfones podem causar cancelamento de fase.',
    image: '/images/interference-waves.png',
    icon: <Waves className="w-8 h-8" />,
    color: 'from-indigo-600 to-violet-500',
  },
  10: {
    titulo: 'Microfonia',
    subtitle: 'O inimigo nº 1 do áudio ao vivo',
    description: 'Entenda o que causa a microfonia, como evitá-la, como resolvê-la rapidamente e como posicionar caixas e microfones corretamente.',
    image: '/images/microphone.jpg',
    icon: <Waves className="w-8 h-8" />,
    color: 'from-red-600 to-rose-500',
  },
  11: {
    titulo: 'Montando um Sistema Completo',
    subtitle: 'Do microfone às caixas de som',
    description: 'Aprenda a montar um sistema de áudio do zero: planejamento, conexões, organização de cabos, sequência de energização e diagnóstico de problemas.',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop',
    icon: <Sliders className="w-8 h-8" />,
    color: 'from-emerald-600 to-teal-500',
  },
  12: {
    titulo: 'Desafio Final',
    subtitle: 'Agora você é o operador de áudio',
    description: 'A última aula do workshop. Coloque em prática tudo o que aprendeu em situações reais: cenários, diagnóstico de problemas, quiz final, missão e certificado.',
    image: '/images/wall-of-sound.jpg',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-yellow-500 to-amber-500',
  },
};

const aulas = [aula1, aula2, aula3, aula4, aula5, aula6, aula7, aula8, aula9, aula10, aula11, aula12];

export const aulasOrdenadas: RegistroAula[] = aulas.map((aula) => ({
  ...metadadosVisuais[aula.id],
  id: aula.id,
  slides: aula.slides,
  notes: aula.notes,
  titles: aula.titles,
}));

export const registroAulas: Record<number, RegistroAula> = Object.fromEntries(
  aulasOrdenadas.map((aula) => [aula.id, aula]),
) as Record<number, RegistroAula>;