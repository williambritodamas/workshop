import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, User, Ruler } from 'lucide-react';

function wavePoints(offset: number, inverted: boolean): string {
  const pts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const x = (i / 80) * 100;
    const rad = (i / 80) * Math.PI * 4 + offset;
    const y = inverted ? 50 + Math.sin(rad) * 30 : 50 - Math.sin(rad) * 30;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const MicrophoneDistanceDemo: React.FC = () => {
  const [distance, setDistance] = useState(0);
  const phaseOffset = (distance / 100) * Math.PI * 2;

  const status =
    distance < 20
      ? { label: 'Alinhado', color: 'text-emerald-400', dot: '🟢' }
      : distance < 60
        ? { label: 'Parcialmente defasado', color: 'text-amber-400', dot: '🟡' }
        : { label: 'Cancelamento severo', color: 'text-red-400', dot: '🔴' };

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <Ruler className="w-5 h-5 text-blue-400" />
        <span className="text-white font-bold text-sm">Distância entre Microfones</span>
      </div>

      <div className="flex items-center justify-center gap-6 mb-6">
        <div className="flex flex-col items-center gap-1">
          <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
            <Mic className="w-6 h-6" />
          </div>
          <span className="text-[10px] text-slate-500 font-bold">Mic 1</span>
        </div>

        <motion.div
          animate={{ x: distance * 1.5 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flex flex-col items-center gap-1"
        >
          <div className="p-2 rounded-full bg-slate-700/50 text-slate-400">
            <User className="w-5 h-5" />
          </div>
          <span className="text-[10px] text-slate-500">Fonte</span>
        </motion.div>

        <motion.div
          animate={{ x: distance * 3 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="flex flex-col items-center gap-1"
        >
          <div className={`p-3 rounded-full ${distance > 60 ? 'bg-red-500/20 text-red-400' : distance > 20 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
            <Mic className="w-6 h-6" />
          </div>
          <span className="text-[10px] text-slate-500 font-bold">Mic 2</span>
        </motion.div>
      </div>

      <div className="relative h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-3">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity={0.4} points={wavePoints(0, false)} />
          <motion.polyline
            fill="none"
            stroke={distance > 60 ? '#ef4444' : distance > 20 ? '#f59e0b' : '#22c55e'}
            strokeWidth="1.5"
            animate={{ opacity: 1 }}
            points={wavePoints(phaseOffset, true)}
          />
        </svg>
      </div>

      <span className={`text-sm font-bold ${status.color}`}>{status.dot} {status.label}</span>

      <div className="flex items-center gap-3 mt-3">
        <span className="text-xs text-slate-500 shrink-0">Distância</span>
        <input
          type="range" min={0} max={100} value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="w-full accent-blue-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer"
        />
        <span className="text-xs text-white font-bold w-8 text-right">{distance}</span>
      </div>
    </div>
  );
};
