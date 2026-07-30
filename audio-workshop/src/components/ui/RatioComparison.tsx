import { motion } from 'framer-motion';

interface RatioComparisonProps {
  ratio: number;
}

const ratios = [
  { label: '1:1', desc: 'Sem compressão', color: 'text-slate-400' },
  { label: '2:1', desc: 'Compressão suave', color: 'text-emerald-400' },
  { label: '4:1', desc: 'Compressão moderada', color: 'text-amber-400' },
  { label: '8:1', desc: 'Compressão forte', color: 'text-orange-400' },
  { label: '∞:1', desc: 'Limiter', color: 'text-red-400' },
];

export const RatioComparison: React.FC<RatioComparisonProps> = ({ ratio }) => {
  const activeIdx = ratios.findIndex((r) => r.label.startsWith(String(ratio))) ?? 0;

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      {ratios.map((r, i) => {
        const isActive = i === activeIdx;
        const input = 80;
        const output = isActive ? Math.round(input / (ratio || 1)) : input;
        return (
          <motion.div key={i} animate={{ opacity: isActive ? 1 : 0.5 }}
            className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${isActive ? 'bg-blue-500/10 border-blue-500/40' : 'bg-slate-900/60 border-slate-800'}`}
          >
            <span className={`text-sm font-black w-10 ${isActive ? 'text-blue-400' : r.color}`}>{r.label}</span>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-4 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${input}%` }} />
              </div>
              <span className="text-[10px] text-slate-500">{input}</span>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="text-slate-600 text-xs mx-1">→</motion.div>
              <div className="flex-1 h-4 bg-slate-800 rounded-full overflow-hidden">
                <motion.div className="h-full bg-emerald-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${output}%` }} transition={{ duration: 0.4 }}
                />
              </div>
              <span className="text-[10px] text-emerald-400">{output}</span>
            </div>
            <span className={`text-[10px] w-20 text-right ${isActive ? 'text-blue-300' : 'text-slate-600'}`}>{r.desc}</span>
          </motion.div>
        );
      })}
    </div>
  );
};
