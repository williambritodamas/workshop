import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { EqualizerVisualizer } from '../../ui/EqualizerVisualizer';
import { FrequencyGraph } from '../../ui/FrequencyGraph';
import { slide07Notes } from './notes';
export { slide07Notes };

type Band = 'low' | 'mid' | 'high';

const bands: { id: Band; label: string; desc: string; color: string }[] = [
  { id: 'low', label: 'LOW', desc: 'Controla os graves', color: 'border-blue-500/40 bg-blue-500/10 text-blue-400' },
  { id: 'mid', label: 'MID', desc: 'Controla os médios', color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' },
  { id: 'high', label: 'HIGH', desc: 'Controla os agudos', color: 'border-amber-500/40 bg-amber-500/10 text-amber-400' },
];

export const Slide07_EQMixer: React.FC = () => {
  const [activeBand, setActiveBand] = useState<Band | null>(null);

  const graphColor = activeBand === 'low' ? '#3b82f6' : activeBand === 'mid' ? '#22c55e' : activeBand === 'high' ? '#f59e0b' : '#3b82f6';

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="O Equalizador da Mesa" subtitle="LOW, MID, HIGH e HPF" badge="EQ na Mesa" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 space-y-3">
          {bands.map((b) => (
            <motion.button key={b.id} onClick={() => setActiveBand(activeBand === b.id ? null : b.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all cursor-pointer ${
                activeBand === b.id ? b.color : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeBand === b.id ? 'bg-black/20' : 'bg-slate-800'}`}>
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className={`text-sm font-bold ${activeBand === b.id ? '' : 'text-white'}`}>{b.label}</span>
                <p className="text-[10px] text-slate-400 mt-0.5">{b.desc}</p>
              </div>
              {activeBand === b.id && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                </motion.div>
              )}
            </motion.button>
          ))}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center">
            <span className="text-xs text-slate-400">
              <span className="text-blue-400 font-bold">HPF</span> — Filtro Passa-Alta (remover graves)
            </span>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col items-center gap-6"
        >
          <EqualizerVisualizer
            low={activeBand === 'low' ? 80 : 50}
            mid={activeBand === 'mid' ? 80 : 50}
            high={activeBand === 'high' ? 80 : 50}
            activeBand={activeBand}
          />
          <FrequencyGraph
            low={activeBand === 'low' ? 80 : 50}
            mid={activeBand === 'mid' ? 80 : 50}
            high={activeBand === 'high' ? 80 : 50}
            color={graphColor}
            label={activeBand ? `Banda ${activeBand.toUpperCase()} destacada` : 'Resposta plana'}
          />
        </motion.div>
      </div>
    </div>
  );
};
