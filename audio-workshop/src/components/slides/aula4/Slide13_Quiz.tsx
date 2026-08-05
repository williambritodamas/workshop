import { SlideTitle } from '../../ui/SlideTitle';
import { QuizMicrophone } from '../../ui/QuizMicrophone';
import { slide13Notes } from './notes';
export { slide13Notes };

const questions = [
  { image: 'https://upload.wikimedia.org/wikipedia//images/sm58-beta58a.jpg', options: ['Dinâmico', 'Condensador', 'Shotgun', 'Lapela'], correct: 0, hint: 'É o mais comum em palcos e shows ao vivo — robusto, não precisa de phantom power.' },
  { image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=600&auto=format&fit=crop', options: ['Condensador', 'Dinâmico', 'Headset', 'Lapela'], correct: 0, hint: 'Muito usado em estúdios e podcasts — requer phantom power (+48V).' },
  { image: 'https://images.pexels.com/photos/7658202/pexels-photo-7658202.jpeg?auto=compress&cs=tinysrgb&w=600', options: ['Lapela', 'Headset', 'Shotgun', 'Dinâmico'], correct: 1, hint: 'Usado na cabeça com um arco — mãos livres e posição fixa. Comum em palestras e teatros.' },
  { image: 'https://upload.wikimedia.org/wikipedia//images/boya-lavalier.png', options: ['Headset', 'Shotgun', 'Lapela', 'Condensador'], correct: 2, hint: 'Pequeno microfone preso na roupa — discreto, usado em TV e entrevistas.' },
  { image: 'https://images.pexels.com/photos/14704969/pexels-photo-14704969.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop&h=600', options: ['Dinâmico', 'Condensador', 'Lapela', 'Shotgun'], correct: 3, hint: 'Formato tubular longo e direcional — isolado o som à frente. Usado em cinema e gravação externa.' },
];

export const Slide13_Quiz: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="Quiz rápido" subtitle="Consegue identificar o microfone pela foto?" badge="Quiz" />
    <div className="w-full max-w-3xl my-auto">
      <QuizMicrophone questions={questions} />
    </div>
  </div>
);
