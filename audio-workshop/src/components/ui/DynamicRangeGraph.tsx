import { motion } from 'framer-motion';

interface DynamicRangeGraphProps {
  before?: number[];
  after?: number[];
  label?: string;
}

export const DynamicRangeGraph: React.FC<DynamicRangeGraphProps> = ({ before, after, label }) => {
  const defaultBefore = [10, 15, 80, 20, 12, 90, 18, 8, 85, 14, 10, 88, 16, 9, 82, 11];
  const defaultAfter = [20, 25, 55, 28, 22, 60, 27, 18, 58, 24, 20, 62, 26, 19, 56, 21];

  const b = before ?? defaultBefore;
  const a = after ?? defaultAfter;
  const pointsBefore = b.map((v, i) => `${(i / (b.length - 1)) * 100},${100 - v}`).join(' ');
  const pointsAfter = a.map((v, i) => `${(i / (a.length - 1)) * 100},${100 - v}`).join(' ');

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md">
      {label && <span className="text-xs font-bold text-slate-400 uppercase">{label}</span>}
      <div className="relative w-full h-28 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline fill="none" stroke="#ef4444" strokeWidth="1.5" strokeOpacity={0.5}
            points={pointsBefore} />
          <motion.polyline fill="none" stroke="#22c55e" strokeWidth="2"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
            points={pointsAfter} />
        </svg>
        <span className="absolute top-1 left-2 text-[8px] text-slate-600">Picos</span>
        <span className="absolute bottom-1 left-2 text-[8px] text-slate-600">Base</span>
      </div>
      <div className="flex justify-center gap-6 text-[10px] font-bold">
        <span className="flex items-center gap-1 text-red-400"><span className="w-2 h-0.5 bg-red-400" /> Original</span>
        <span className="flex items-center gap-1 text-emerald-400"><span className="w-2 h-0.5 bg-emerald-400" /> Comprimido</span>
      </div>
    </div>
  );
};
