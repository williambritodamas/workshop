import { motion } from 'framer-motion';

interface GainReductionMeterProps {
  reduction: number;
  label?: string;
}

export const GainReductionMeter: React.FC<GainReductionMeterProps> = ({ reduction, label }) => {
  const clamped = Math.min(100, Math.max(0, reduction));
  const segs = 10;

  return (
    <div className="flex flex-col gap-1 w-full max-w-xs">
      {label && <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</span>}
      <div className="flex gap-0.5 h-20 items-end">
        {Array.from({ length: segs }).map((_, i) => {
          const segVal = ((i + 1) / segs) * 100;
          const active = clamped >= segVal;
          const color = active ? (i >= segs - 2 ? 'bg-red-400' : i >= segs - 4 ? 'bg-amber-400' : 'bg-emerald-400') : 'bg-slate-800';
          return (
            <motion.div key={i} className={`flex-1 rounded-t-sm ${color}`}
              animate={{ height: active ? `${((i + 1) / segs) * 100}%` : '10%' }}
              transition={{ duration: 0.15 }}
            />
          );
        })}
      </div>
      <div className="flex justify-between text-[8px] text-slate-600 font-bold">
        <span>0 dB</span>
        <span className="text-red-500">{clamped > 80 ? `${Math.round(clamped)} dB` : ''}</span>
        <span>-{Math.round(clamped)} dB</span>
      </div>
    </div>
  );
};
