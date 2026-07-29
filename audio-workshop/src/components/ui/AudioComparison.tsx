import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const presets = [
  { id: 'original', label: 'Original', color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400', graph: [50, 50, 50] },
  { id: 'no-bass', label: 'Sem Graves', color: 'bg-blue-500/20 border-blue-500/40 text-blue-400', graph: [10, 50, 50] },
  { id: 'no-mid', label: 'Sem Médios', color: 'bg-purple-500/20 border-purple-500/40 text-purple-400', graph: [50, 10, 50] },
  { id: 'no-high', label: 'Sem Agudos', color: 'bg-amber-500/20 border-amber-500/40 text-amber-400', graph: [50, 50, 10] },
];

export const AudioComparison: React.FC = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  const preset = presets[active];

  return (
    <div className="w-full max-w-lg mx-auto space-y-3">
      {presets.map((p, i) => (
        <button key={p.id} onClick={() => { setActive(i); setPlaying(true); }}
          className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all ${i === active ? p.color : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'}`}
        >
          <div className={`p-2 rounded-xl ${i === active ? 'bg-black/20' : 'bg-slate-800'}`}>
            {i === active && playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </div>
          <span className={`text-sm font-bold ${i === active ? '' : 'text-slate-300'}`}>{p.label}</span>
          {i === active && (
            <motion.div className="ml-auto flex gap-0.5 items-end h-4">
              {p.graph.map((v, j) => (
                <motion.div key={j} initial={{ height: 0 }} animate={{ height: `${v}%` }}
                  className="w-1.5 bg-current rounded-sm" transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          )}
        </button>
      ))}
      <AnimatePresence>
        {playing && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-center"
          >
            <p className="text-slate-400 text-xs italic">
              {preset.id === 'original' && 'Áudio original — todas as frequências presentes.'}
              {preset.id === 'no-bass' && 'Graves removidos — o som perde peso e corpo.'}
              {preset.id === 'no-mid' && 'Médios removidos — a voz perde clareza e presença.'}
              {preset.id === 'no-high' && 'Agudos removidos — o som fica abafado, sem brilho.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
