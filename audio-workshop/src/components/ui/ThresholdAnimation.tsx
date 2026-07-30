import { motion } from 'framer-motion';

interface ThresholdAnimationProps {
  threshold: number;
  signal: number;
  active: boolean;
}

export const ThresholdAnimation: React.FC<ThresholdAnimationProps> = ({ threshold, signal, active }) => {
  const points = 50;
  const wave: { x: number; y: number }[] = [];
  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * 100;
    const raw = Math.sin((i / points) * Math.PI * 6) * signal;
    wave.push({ x, y: 50 - raw });
  }

  const thresholdY = 50 - threshold;

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md">
      <div className="relative w-full h-28 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline fill="none" stroke={active ? '#f59e0b' : '#64748b'} strokeWidth="1.5"
            points={wave.map((p) => `${p.x},${p.y}`).join(' ')} />
          <line x1="0" y1={thresholdY} x2="100" y2={thresholdY}
            stroke={active ? '#ef4444' : '#334155'} strokeWidth="1.5" strokeDasharray="4,3" />
          {active && (
            <motion.rect x="0" y="0" width="100" height={thresholdY}
              fill="#ef4444" fillOpacity={0.1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          )}
        </svg>
        <span className="absolute top-1 right-2 text-[8px] text-slate-600">Threshold</span>
      </div>
      <div className="flex justify-between w-full text-[10px] text-slate-600 font-bold px-1">
        <span>Sinal {active ? 'acima do Threshold' : 'abaixo do Threshold'}</span>
      </div>
    </div>
  );
};
