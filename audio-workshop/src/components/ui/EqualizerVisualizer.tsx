import { motion } from 'framer-motion';

interface EqualizerVisualizerProps {
  low?: number;
  mid?: number;
  high?: number;
  activeBand?: 'low' | 'mid' | 'high' | null;
}

export const EqualizerVisualizer: React.FC<EqualizerVisualizerProps> = ({ low = 50, mid = 50, high = 50, activeBand }) => {
  const bands = [
    { label: 'LOW', value: low, color: activeBand === 'low' ? 'from-blue-400 to-blue-600' : 'from-blue-500/50 to-blue-700/50', freq: '60 Hz' },
    { label: 'MID', value: mid, color: activeBand === 'mid' ? 'from-emerald-400 to-emerald-600' : 'from-emerald-500/50 to-emerald-700/50', freq: '1 kHz' },
    { label: 'HIGH', value: high, color: activeBand === 'high' ? 'from-amber-400 to-amber-600' : 'from-amber-500/50 to-amber-700/50', freq: '10 kHz' },
  ];
  const maxH = 120;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-end justify-center gap-4 h-40 px-4">
        {bands.map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <motion.div
              className={`w-12 rounded-t-xl bg-gradient-to-t ${b.color} border border-white/10`}
              initial={{ height: 0 }}
              animate={{ height: `${(b.value / 100) * maxH}px` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
            <span className={`text-[10px] font-bold uppercase tracking-wider ${activeBand === b.label.toLowerCase() ? 'text-white' : 'text-slate-500'}`}>
              {b.label}
            </span>
            <span className="text-[8px] text-slate-600">{b.freq}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-4 mt-2">
        <span className="text-[10px] text-slate-600">Graves</span>
        <span className="text-[10px] text-slate-600">Médios</span>
        <span className="text-[10px] text-slate-600">Agudos</span>
      </div>
    </div>
  );
};
