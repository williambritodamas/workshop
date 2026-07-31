import { SlideTitle } from '../../ui/SlideTitle';
import { PolarPatternAnimation } from '../../ui/PolarPatternAnimation';
import { slide08Notes } from './notes';
export { slide08Notes };

const patterns = [
  { name: 'Omnidirecional', emoji: '🌐', description: 'Capta igualmente de todos os lados. Ideal para ambientes naturais, corais e captação ambiente.' },
  { name: 'Cardioide', emoji: '❤️', description: 'Capta mais na frente, rejeita atrás. O padrão mais usado no mundo — palco, voz, gravadores.' },
  { name: 'Supercardioide', emoji: '🎯', description: 'Mais direcional que o cardioide. Rejeita mais dos lados, mas capta um pouco atrás.' },
  { name: 'Hipercardioide', emoji: '⚡', description: 'Ainda mais direcional que o supercardioide, com um pequeno lóbulo traseiro. Usado em ambientes muito ruidosos.' },
  { name: 'Bidirecional (Figura 8)', emoji: '↔️', description: 'Capta igualmente da frente e de trás, rejeita os lados. Usado em entrevistas frente a frente e gravação em dupla.' },
];

export const Slide08_PolarPatterns: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="Padrões Polares" subtitle='Como cada microfone "enxerga" o som ao redor' badge="Padrões" />
    <div className="w-full max-w-6xl my-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <PolarPatternAnimation />
      <div className="flex flex-col gap-3 justify-center">
        {patterns.map((p, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-white font-extrabold text-sm">{p.emoji} {p.name}</span>
            <p className="text-slate-400 text-xs mt-0.5">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
