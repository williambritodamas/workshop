import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle, ArrowUp } from 'lucide-react';

interface Pattern {
  id: string;
  name: string;
  description: string;
  useCase: string;
  svg: React.ReactNode;
}

const patterns: Pattern[] = [
  {
    id: 'omni',
    name: 'Omnidirecional',
    description: 'Capta o som igualmente de todas as direções.',
    useCase: 'Ideal para captar ambiente, corais ou múltiplas fontes ao redor.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <circle cx="60" cy="60" r="45" fill="none" stroke="#3B82F6" strokeWidth="2" opacity={0.3} />
        <circle cx="60" cy="60" r="45" fill="rgba(59,130,246,0.08)" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
        <circle cx="60" cy="60" r="25" fill="none" stroke="#3B82F6" strokeWidth="1" opacity={0.15} />
      </svg>
    ),
  },
  {
    id: 'cardioide',
    name: 'Cardioide',
    description: 'Capta principalmente da frente, rejeita o fundo.',
    useCase: 'Padrão mais comum para vocais ao vivo e palestras.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60 8 C80 8 105 30 105 60 C105 75 95 90 80 100 C70 108 60 112 60 112 C60 112 15 90 15 60 C15 30 40 8 60 8Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    id: 'supercardioide',
    name: 'Supercardioide',
    description: 'Mais direcional que o cardioide, com rejeição lateral.',
    useCase: 'Indicado para palcos com monitores e ambientes ruidosos.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60 6 C85 6 108 35 108 60 C108 75 98 88 88 96 C78 103 65 114 60 114 C55 114 42 103 32 96 C22 88 12 75 12 60 C12 35 35 6 60 6Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    id: 'hipercardioide',
    name: 'Hipercardioide',
    description: 'Altamente direcional, capta apenas o que está na frente.',
    useCase: 'Usado em cinema e gravações externas para isolar a fonte.',
    svg: (
      <svg viewBox="0 0 120 120" className="w-28 h-28 md:w-36 md:h-36">
        <path d="M60 4 C90 4 110 40 110 60 C110 72 100 82 90 88 C80 94 65 116 60 116 C55 116 40 94 30 88 C20 82 10 72 10 60 C10 40 30 4 60 4Z" fill="rgba(59,130,246,0.12)" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="60" cy="60" r="4" fill="#3B82F6" />
      </svg>
    ),
  },
];

export const PolarPatternAnimation: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6">
      {/* Seletor de padrões */}
      <div className="flex flex-wrap justify-center gap-2">
        {patterns.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActive(idx)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              active === idx ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Diagrama + descrição */}
      <AnimatePresence mode="wait">
        <motion.div
          key={patterns[active].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-xl w-full"
        >
          <div className="shrink-0 flex items-center justify-center">
            {patterns[active].svg}
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
              <h3 className="text-lg font-extrabold text-white">{patterns[active].name}</h3>
            </div>
            <p className="text-sm text-slate-300 mb-2">{patterns[active].description}</p>
            <div className="flex items-start gap-2">
              <ArrowUp className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-400 italic">{patterns[active].useCase}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
