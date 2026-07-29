import { SlideTitle } from '../../ui/SlideTitle';
import { QuizMicrophone } from '../../ui/QuizMicrophone';
import { slide13Notes } from './notes';
export { slide13Notes };

const questions = [
  { image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop', options: ['Dinâmico', 'Condensador', 'Shotgun', 'Lapela'], correct: 0, hint: 'É o mais comum em palcos e shows ao vivo.' },
  { image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=600&auto=format&fit=crop', options: ['Condensador', 'Dinâmico', 'Headset', 'Lapela'], correct: 0, hint: 'Muito usado em estúdios e podcasts.' },
  { image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop', options: ['Lapela', 'Headset', 'Shotgun', 'Dinâmico'], correct: 1, hint: 'Mãos livres e posição fixa na cabeça.' },
  { image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=600&auto=format&fit=crop', options: ['Headset', 'Shotgun', 'Lapela', 'Condensador'], correct: 2, hint: 'Discreto, preso na roupa.' },
  { image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop', options: ['Dinâmico', 'Condensador', 'Lapela', 'Shotgun'], correct: 3, hint: 'Formato tubular, muito direcional.' },
];

export const Slide13_Quiz: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="Quiz rápido" subtitle="Consegue identificar o microfone pela foto?" badge="Quiz" />
    <div className="w-full max-w-3xl my-auto">
      <QuizMicrophone questions={questions} />
    </div>
  </div>
);
