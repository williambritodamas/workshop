import { useState } from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard } from 'lucide-react';

export const PolarityToggle: React.FC = () => {
  const [inverted, setInverted] = useState(false);

  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const sin = Math.sin((i / 120) * Math.PI * 4) * 35;
    const y = inverted ? 50 + sin : 50 - sin;
    pts.push(`${x},${y}`);
  }
  const points = pts.join(' ');

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <CircuitBoard className="w-5 h-5 text-purple-400" />
        <span className="text-white font-bold text-sm">Polaridade</span>
      </div>

      <motion.div
        key={inverted ? 'inv' : 'norm'}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-28 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-4"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <motion.polyline
            fill="none"
            stroke={inverted ? '#a855f7' : '#22c55e'}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            points={points}
          />
        </svg>
      </motion.div>

      <div className="flex items-center justify-center mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${inverted ? 'bg-purple-500/20 text-purple-400 border border-purple-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'}`}>
          {inverted ? 'Polaridade Invertida' : 'Polaridade Normal'}
        </span>
      </div>

      <button
        onClick={() => setInverted(!inverted)}
        className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border-2 text-xl font-black transition-all cursor-pointer"
        style={{
          borderColor: inverted ? '#a855f7' : '#22c55e',
          color: inverted ? '#a855f7' : '#22c55e',
          background: inverted ? 'rgba(168,85,247,0.1)' : 'rgba(34,197,94,0.1)',
          boxShadow: inverted
            ? '0 0 20px rgba(168,85,247,0.3)'
            : '0 0 20px rgba(34,197,94,0.3)',
        }}
      >
        Ø
      </button>
    </div>
  );
};
