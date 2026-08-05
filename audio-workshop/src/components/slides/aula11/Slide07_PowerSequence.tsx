import { useState } from 'react';
import { motion } from 'framer-motion';
import { Power, ArrowUp, ArrowDown } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { StartupSequence } from '../../ui/StartupSequence';
import { slide07Notes } from './notes';
export { slide07Notes };

export const Slide07_PowerSequence: React.FC = () => {
  const [mode, setMode] = useState<'startup' | 'shutdown'>('startup');

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="/images/audio-mixer-faders.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Sequência de Energia" subtitle="Ligar e desligar na ordem certa protege o sistema" badge="Energia" />
      <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center gap-4">
        <div className="flex gap-3">
          <motion.button whileTap={{ scale: 0.95 }}
            onClick={() => setMode('startup')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${mode === 'startup' ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400' : 'bg-slate-900/60 border border-slate-800 text-slate-400'}`}
          >
            <Power className="w-4 h-4" /> Ligar <ArrowUp className="w-3 h-3" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }}
            onClick={() => setMode('shutdown')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${mode === 'shutdown' ? 'bg-red-500/20 border border-red-500/40 text-red-400' : 'bg-slate-900/60 border border-slate-800 text-slate-400'}`}
          >
            <Power className="w-4 h-4" /> Desligar <ArrowDown className="w-3 h-3" />
          </motion.button>
        </div>
        <StartupSequence mode={mode} />
      </div>
    </div>
  );
};

