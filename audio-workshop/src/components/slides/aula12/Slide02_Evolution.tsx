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
  const [dotCur, setDotCur] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCur((prev) => (prev < aulas.length - 1 ? prev + 1 : prev));
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const revealed = Math.min(Math.ceil((dotCur + 1) / STEP) * STEP, aulas.length);
  const currentStep = Math.floor(dotCur / STEP) + 1;
  const currentIndex = Math.min(dotCur, aulas.length - 1);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="/images/sound-reinforcement.jpg" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
        Sua Jornada
      </motion.div>
      <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Evolução</h2>

      <div className="relative z-10 flex-1 w-full max-w-5xl flex items-center justify-center py-4">
        <div className="relative grid grid-flow-col grid-rows-3 grid-cols-4 gap-3 w-full max-h-[300px]">
          {aulas.map((a, i) => {
            const isRevealed = i < revealed;
            const isCurrent = i === currentIndex;
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
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  isCurrent ? 'bg-purple-500 text-white' : isRevealed ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-600'
                }`}>
                  {a.num}
                </span>
                <span className={`text-sm font-bold leading-tight ${isRevealed ? 'text-slate-200' : 'text-slate-600'}`}>{a.title}</span>
              </motion.div>
            );
          })}
          <motion.div
            className="pointer-events-none absolute z-20 w-3 h-3"
            animate={{ top: `${(currentIndex % STEP) * 33.33 + 8}%`, left: `${Math.floor(currentIndex / STEP) * 25 + 3}%` }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          >
            <motion.span
              className="block w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl space-y-2">
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-y-auto">
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
