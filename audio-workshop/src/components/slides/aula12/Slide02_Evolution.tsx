import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slide02Notes } from './notes';
export { slide02Notes };

const aulas = [
  { num: 1, title: 'O que é Som' },
  { num: 2, title: 'Equipamentos' },
  { num: 3, title: 'Fluxo do Áudio' },
  { num: 4, title: 'Microfones' },
  { num: 5, title: 'Mesa de Som' },
  { num: 6, title: 'Gain' },
  { num: 7, title: 'Equalização' },
  { num: 8, title: 'Compressão' },
  { num: 9, title: 'Fase' },
  { num: 10, title: 'Microfonia' },
  { num: 11, title: 'Montagem' },
  { num: 12, title: 'Você é o Operador' },
];

const STEP = 3;
const INTERVAL = 2600;
const totalSteps = Math.ceil(aulas.length / STEP);

export const Slide02_Evolution: React.FC = () => {
  const [revealed, setRevealed] = useState(STEP);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealed((prev) => (prev < aulas.length ? prev + STEP : prev));
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const currentStep = Math.min(Math.ceil(revealed / STEP), totalSteps);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Sound_reinforcement_system.jpg?width=1920" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
        Sua Jornada
      </motion.div>
      <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Evolução</h2>

      <div className="relative z-10 flex-1 w-full max-w-5xl flex items-center justify-center py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          {aulas.map((a, i) => {
            const isRevealed = i < revealed;
            const isCurrent = i >= revealed - STEP && i < revealed && i < aulas.length;
            return (
              <motion.div
                key={a.num}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.18, y: 24, scale: 0.9 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`relative flex items-center gap-2.5 p-3 rounded-2xl border transition-colors duration-500 ${
                  isCurrent
                    ? 'bg-purple-500/10 border-purple-500/50 shadow-lg shadow-purple-500/10'
                    : isRevealed
                    ? 'bg-slate-900/60 border-slate-700'
                    : 'bg-slate-900/30 border-slate-800'
                }`}
              >
                {isCurrent && (
                  <motion.span layoutId="stageDot"
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
                    animate={{ scale: [1, 1.6, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  />
                )}
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  isCurrent ? 'bg-purple-500 text-white' : isRevealed ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-600'
                }`}>
                  {a.num}
                </span>
                <span className={`text-sm font-bold leading-tight ${isRevealed ? 'text-slate-200' : 'text-slate-600'}`}>{a.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl space-y-2">
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${(revealed / aulas.length) * 100}%` }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"
          />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>{Math.min(revealed, aulas.length)} de {aulas.length} aulas</span>
          <span>Etapa {currentStep} de {totalSteps}</span>
        </div>
      </div>
    </div>
  );
};