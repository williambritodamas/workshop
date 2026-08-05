import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
import { User, Mic, Cable, Sliders, Waves, Zap, Speaker, Ear, Play, RotateCcw } from 'lucide-react';

export { slide11Notes };

const allSteps = [
  { id: 'pessoa', icon: <User className="w-5 h-5" />, label: 'Pessoa', color: 'text-blue-400', border: 'border-blue-500' },
  { id: 'microfone', icon: <Mic className="w-5 h-5" />, label: 'Microfone', color: 'text-cyan-400', border: 'border-cyan-500' },
  { id: 'cabo', icon: <Cable className="w-5 h-5" />, label: 'Cabo', color: 'text-indigo-400', border: 'border-indigo-500' },
  { id: 'mesa', icon: <Sliders className="w-5 h-5" />, label: 'Mesa', color: 'text-purple-400', border: 'border-purple-500' },
  { id: 'process', icon: <Waves className="w-5 h-5" />, label: 'Processamento', color: 'text-pink-400', border: 'border-pink-500' },
  { id: 'amp', icon: <Zap className="w-5 h-5" />, label: 'Amplificador', color: 'text-yellow-400', border: 'border-yellow-500' },
  { id: 'caixa', icon: <Speaker className="w-5 h-5" />, label: 'Caixa', color: 'text-emerald-400', border: 'border-emerald-500' },
  { id: 'ouvido', icon: <Ear className="w-5 h-5" />, label: 'Ouvido', color: 'text-red-400', border: 'border-red-500' },
];

export const Slide11_FullFlow: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimation = () => {
    setActiveIdx(-1);
    setIsPlaying(true);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setActiveIdx(i - 1);
      if (i >= allSteps.length) {
        clearInterval(timer);
        setIsPlaying(false);
      }
    }, 1500);
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="O Caminho Completo"
        subtitle="A voz percorre todo o sistema"
        badge="Fluxo Contínuo"
      />

      <div className="w-full max-w-5xl my-auto flex flex-col items-center gap-6">
        {/* Fluxo animado horizontal */}
        <div className="w-full flex flex-wrap items-center justify-center gap-1.5 md:gap-2">
          {allSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              animate={{
                scale: activeIdx >= idx ? 1 : 0.85,
                opacity: activeIdx >= idx ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col items-center p-2.5 md:p-3 rounded-xl border transition-all duration-300 ${
                activeIdx >= idx
                  ? `${step.border} bg-slate-800/80 shadow-lg`
                  : 'border-slate-800 bg-slate-900/50'
              } ${activeIdx === idx ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div className={activeIdx >= idx ? step.color : 'text-slate-600'}>
                {step.icon}
              </div>
              <span className={`text-[9px] md:text-[10px] font-bold mt-1 text-center ${
                activeIdx >= idx ? 'text-white' : 'text-slate-600'
              }`}>
                {step.label}
              </span>
              {activeIdx === idx && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-1 h-1 rounded-full bg-blue-400 mt-1"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Indicador de sinal passando */}
        <motion.div
          animate={isPlaying ? { opacity: [1, 0.5, 1] } : {}}
          transition={{ repeat: Infinity, duration: 1 }}
          className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30"
        >
          <motion.div
            animate={isPlaying || activeIdx >= 0 ? { x: [0, 100, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
          />
          <span className="text-sm font-bold text-blue-300">
            {activeIdx < 0
              ? 'Pressione "Iniciar" para ver o caminho'
              : activeIdx >= allSteps.length - 1
                ? 'Som chegou ao ouvido! ✓'
                : `Sinal passando por: ${allSteps[activeIdx].label}`}
          </span>
        </motion.div>

        {/* Controles */}
        <div className="flex items-center gap-3">
          {!isPlaying && activeIdx < 0 && (
            <button
              onClick={startAnimation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
            >
              <Play className="w-4 h-4" />
              Iniciar
            </button>
          )}
          {activeIdx >= 0 && !isPlaying && (
            <button
              onClick={startAnimation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Repetir
            </button>
          )}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-slate-400 text-xs md:text-sm text-center"
      >
        Cada equipamento acende quando o sinal passa por ele.
      </motion.p>
    </div>
  );
};

