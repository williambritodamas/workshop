import { motion } from 'framer-motion';

interface SignalMeterProps {
  level: number;
  label?: string;
  showScale?: boolean;
}

export const SignalMeter: React.FC<SignalMeterProps> = ({ level, label, showScale = true }) => {
  const clamped = Math.min(100, Math.max(0, level));
  const segs = 10;
  const perSeg = 100 / segs;

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-xs">
      {label && <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>}
      <div className="flex gap-0.5 h-8">
        {Array.from({ length: segs }).map((_, i) => {
          const segStart = i * perSeg;
          const active = clamped > segStart;
          const isRedSeg = i >= segs - 2;
          const isYellowSeg = i >= segs - 4 && !isRedSeg;
          const color = active ? (isRedSeg ? 'bg-red-500' : isYellowSeg ? 'bg-amber-400' : 'bg-emerald-400') : 'bg-slate-800';
          return (
            <motion.div key={i}
              className={`flex-1 rounded-sm ${color} ${active ? '' : 'bg-slate-800'}`}
              animate={{ opacity: active ? 1 : 0.3 }}
              transition={{ duration: 0.1 }}
            />
          );
        })}
      </div>
      {showScale && (
        <div className="flex justify-between text-[10px] text-slate-600 font-bold">
          <span>-∞</span>
          <span>-20</span>
          <span>-10</span>
          <span>-5</span>
          <span>0</span>
          <span className="text-red-500">Clip</span>
        </div>
      )}
    </div>
  );
};
