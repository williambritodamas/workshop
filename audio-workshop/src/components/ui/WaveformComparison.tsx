import { motion } from 'framer-motion';

interface WaveformComparisonProps {
  side: 'clean' | 'clipped';
  label: string;
  delay?: number;
}

export const WaveformComparison: React.FC<WaveformComparisonProps> = ({ side, label, delay = 0 }) => {
  const points = 80;
  const isClipped = side === 'clipped';
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * 100;
    let raw = Math.sin((i / points) * Math.PI * 6) * 40;
    if (isClipped) raw = Math.max(-25, Math.min(25, raw));
    pts.push({ x, y: 50 - raw });
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
      className="flex flex-col items-center gap-2"
    >
      <span className={`text-xs font-bold uppercase tracking-wider ${isClipped ? 'text-red-400' : 'text-emerald-400'}`}>
        {label}
      </span>
      <div className="relative w-full h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <motion.polyline
            fill="none" stroke={isClipped ? '#ef4444' : '#22c55e'} strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay }}
            points={pts.map((p) => `${p.x},${p.y}`).join(' ')}
          />
        </svg>
      </div>
    </motion.div>
  );
};
