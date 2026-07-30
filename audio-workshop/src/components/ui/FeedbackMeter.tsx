import { motion } from 'framer-motion';

interface FeedbackMeterProps {
  level: number;
}

export const FeedbackMeter: React.FC<FeedbackMeterProps> = ({ level }) => {
  const clamped = Math.min(100, Math.max(0, level));
  const filledHeight = (clamped / 100) * 100;

  const getColor = (v: number) => {
    if (v <= 33) return 'bg-emerald-400';
    if (v <= 66) return 'bg-amber-400';
    return 'bg-red-500';
  };

  const segments = Array.from({ length: 10 }).map((_, i) => {
    const segTop = i * 10;
    const filled = clamped >= segTop + 10 ? 100 : Math.max(0, ((clamped - segTop) / 10) * 100);
    const isRed = segTop >= 70;
    const isYellow = segTop >= 30 && !isRed;
    const color = isRed ? 'bg-red-500' : isYellow ? 'bg-amber-400' : 'bg-emerald-400';
    return { i, filled, color };
  });

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-8 h-48 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0">
          {segments.map((seg) => (
            <motion.div
              key={seg.i}
              className={`w-full ${seg.color}`}
              style={{ height: '10%' }}
              animate={{ opacity: seg.filled > 0 ? 1 : 0.15 }}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col-reverse">
          {segments.map((seg) => (
            <div key={`bg-${seg.i}`} className="w-full flex-1 border-b border-slate-800/50 last:border-0" />
          ))}
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0"
          animate={{ height: `${filledHeight}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 15 }}
        >
          <div className={`w-full h-full rounded-b-2xl ${getColor(clamped)}`} style={{ opacity: 0.6 }} />
        </motion.div>
      </div>

      <div className="flex items-center gap-1.5">
        {clamped <= 33 && <span className="text-emerald-400 text-xs font-bold">Baixo risco</span>}
        {clamped > 33 && clamped <= 66 && <span className="text-amber-400 text-xs font-bold">Risco médio</span>}
        {clamped > 66 && <span className="text-red-400 text-xs font-bold">Risco alto!</span>}
        <span className="text-slate-500 text-[10px] font-bold">{clamped}%</span>
      </div>
    </div>
  );
};
