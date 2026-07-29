import { motion } from 'framer-motion';

interface FrequencyGraphProps {
  low?: number;
  mid?: number;
  high?: number;
  label?: string;
  color?: string;
}

export const FrequencyGraph: React.FC<FrequencyGraphProps> = ({ low = 50, mid = 50, high = 50, label, color = '#3b82f6' }) => {
  const points = 60;
  const pts: { x: number; y: number }[] = [];

  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * 100;
    const t = i / (points - 1);
    const bassCurve = Math.exp(-t * 4) * (low - 50) * 0.6;
    const midCurve = Math.exp(-Math.abs(t - 0.5) * 6) * (mid - 50) * 0.6;
    const trebleCurve = Math.exp(-(1 - t) * 4) * (high - 50) * 0.6;
    const y = 50 - (bassCurve + midCurve + trebleCurve);
    pts.push({ x, y: Math.max(5, Math.min(95, y)) });
  }

  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-xs">
      {label && <span className="text-xs font-bold text-slate-400 uppercase">{label}</span>}
      <div className="relative w-full h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <motion.polyline
            fill="none" stroke={color} strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
            points={pts.map((p) => `${p.x},${p.y}`).join(' ')}
          />
          <line x1="0" y1="50" x2="100" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
      </div>
      <div className="flex justify-between w-full text-[8px] text-slate-600">
        <span>20 Hz</span>
        <span>1 kHz</span>
        <span>20 kHz</span>
      </div>
    </div>
  );
};
