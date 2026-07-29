import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Radio, Headphones, Film, Ear, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SelectorItem {
  situation: string;
  icon: React.ReactNode;
  recommendation: string;
  reason: string;
}

const data: SelectorItem[] = [
  { situation: 'Show ao vivo', icon: <Mic className="w-5 h-5" />, recommendation: 'Dinâmico', reason: 'Resistente, suporta altos volumes e rejeita ruído da plateia.' },
  { situation: 'Podcast', icon: <Radio className="w-5 h-5" />, recommendation: 'Condensador', reason: 'Capta detalhes da voz com clareza e riqueza.' },
  { situation: 'Entrevista', icon: <Ear className="w-5 h-5" />, recommendation: 'Lapela', reason: 'Mãos livres, discreto e consistente.' },
  { situation: 'Palestra', icon: <Headphones className="w-5 h-5" />, recommendation: 'Headset', reason: 'Posição fixa perto da boca, libera as mãos.' },
  { situation: 'Cinema/Externo', icon: <Film className="w-5 h-5" />, recommendation: 'Shotgun', reason: 'Capta apenas o que está na frente, rejeita ruído ambiente.' },
];

export const MicrophoneSelector: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-2">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <button
              onClick={() => setActive(active === idx ? null : idx)}
              className={`w-full flex items-center gap-3 p-3.5 md:p-4 rounded-2xl border transition-all text-left ${
                active === idx
                  ? 'border-blue-500 bg-blue-500/10 shadow-lg'
                  : 'border-slate-800 bg-slate-900/80 hover:border-blue-500/40'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${active === idx ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-bold text-white block">{item.situation}</span>
                <span className="text-xs text-blue-400 font-semibold">{item.recommendation}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
            </button>

            <AnimatePresence>
              {active === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start gap-2.5 p-3.5 ml-2 border-l-2 border-blue-500/50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-300 leading-relaxed">{item.reason}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
