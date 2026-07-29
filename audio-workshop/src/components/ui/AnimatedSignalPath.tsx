import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, SlidersHorizontal, Waves, Volume2, ArrowDown } from 'lucide-react';

const stages = [
  { id: 'input', label: 'Entrada', icon: <Zap className="w-5 h-5" />, color: 'bg-blue-500' },
  { id: 'gain', label: 'Gain', icon: <SlidersHorizontal className="w-5 h-5" />, color: 'bg-emerald-500' },
  { id: 'eq', label: 'Equalizador', icon: <Waves className="w-5 h-5" />, color: 'bg-purple-500' },
  { id: 'aux', label: 'Auxiliares', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/></svg>, color: 'bg-amber-500' },
  { id: 'pan', label: 'Pan', icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg>, color: 'bg-cyan-500' },
  { id: 'fader', label: 'Fader', icon: <Volume2 className="w-5 h-5" />, color: 'bg-red-500' },
  { id: 'output', label: 'Saída', icon: <ArrowDown className="w-5 h-5" />, color: 'bg-green-500' },
];

export const AnimatedSignalPath: React.FC<{ autoPlay?: boolean }> = ({ autoPlay = true }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
    }, 1200);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-md mx-auto">
      {stages.map((stage, i) => (
        <div key={stage.id} className="flex flex-col items-center w-full">
          <motion.div
            animate={{
              scale: activeIndex === i ? 1.08 : 1,
              borderColor: activeIndex >= i ? stage.color.replace('bg-', 'rgb(').replace(')', ', 0.6)') : '#334155',
            }}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-3 w-full p-3 rounded-xl border transition-colors duration-500 ${
              activeIndex >= i ? `${stage.color}/20 border-${stage.color.replace('bg-', '')}/40` : 'bg-slate-900/60 border-slate-800'
            }`}
          >
            <div className={`p-2 rounded-lg ${activeIndex >= i ? stage.color : 'bg-slate-800'} text-white transition-all duration-500`}>
              {stage.icon}
            </div>
            <span className={`text-sm font-bold transition-all duration-500 ${activeIndex >= i ? 'text-white' : 'text-slate-500'}`}>
              {stage.label}
            </span>
            {activeIndex === i && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                <div className="flex gap-1">
                  {[0,1,2].map((j) => (
                    <div key={j} className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" style={{ animationDelay: `${j * 0.2}s` }} />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
          {i < stages.length - 1 && (
            <motion.div
              animate={{ backgroundColor: activeIndex > i ? stage.color.replace('bg-', '#').replace(')', '') : '#334155' }}
              className="w-0.5 h-5 transition-colors duration-500"
            />
          )}
        </div>
      ))}
      {autoPlay && (
        <button onClick={() => setActiveIndex(0)} className="mt-4 px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs hover:bg-slate-700 transition-all cursor-pointer">
          Reiniciar animação
        </button>
      )}
    </div>
  );
};
