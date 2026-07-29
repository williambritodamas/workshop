import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { ChannelStrip } from '../../ui/ChannelStrip';
import { slide04Notes } from './notes';
export { slide04Notes };

const channels = [
  { number: 1, source: 'Microfone' },
  { number: 2, source: 'Violão' },
  { number: 3, source: 'Notebook' },
  { number: 4, source: 'Palestrante' },
];

export const Slide04_Channel: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1774967550630-ce20e84afecb?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="O que é um canal?" subtitle="Cada fonte sonora precisa de seu próprio espaço" badge="Canais" />
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6 my-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {channels.map((ch) => (
            <button key={ch.number} onClick={() => setActive(ch.number)} className="cursor-pointer">
              <ChannelStrip {...ch} active={active === ch.number} delay={ch.number * 0.1} color={['blue', 'emerald', 'purple', 'amber'][ch.number - 1]} />
            </button>
          ))}
        </div>
        <motion.div
          key={active ?? 'none'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm max-w-xl text-center"
        >
          {active ? (
            <p className="text-slate-300 text-sm">
              <span className="text-blue-400 font-bold">Canal {active}</span> —{' '}
              {channels.find((c) => c.number === active)?.source}. Cada fonte tem seu próprio canal com controles independentes.
            </p>
          ) : (
            <p className="text-slate-500 text-sm">Clique em um canal para ver a explicação.</p>
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm max-w-lg"
        >
          <p className="text-slate-300 text-sm">
            <span className="text-blue-400 font-bold">💡 Comparação:</span> É como cada pessoa ter sua própria faixa em uma avenida — sem misturar, sem bagunça.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
