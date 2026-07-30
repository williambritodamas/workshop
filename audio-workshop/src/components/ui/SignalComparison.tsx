import { motion } from 'framer-motion';

function alignedPoints(): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const y = 50 - Math.sin((i / 120) * Math.PI * 4) * 35;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

function cancelledPoints(): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const w1 = Math.sin((i / 120) * Math.PI * 4);
    const w2 = Math.sin((i / 120) * Math.PI * 4 + Math.PI);
    const y = 50 - (w1 + w2) * 35;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const SignalComparison: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-white font-bold text-sm">Comparação de Sinais</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2 text-center">
            Sinal Alinhado
          </span>
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-28 bg-slate-950 rounded-xl border border-emerald-500/30 overflow-hidden"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <motion.polyline
                fill="none" stroke="#22c55e" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                points={alignedPoints()}
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent pointer-events-none" />
          </motion.div>
          <p className="text-[10px] text-emerald-500/60 text-center mt-1">Ondas em fase — amplitude total</p>
        </div>

        <div>
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2 text-center">
            Sinal Cancelado
          </span>
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-28 bg-slate-950 rounded-xl border border-red-500/30 overflow-hidden"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <motion.polyline
                fill="none" stroke="#ef4444" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                points={cancelledPoints()}
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent pointer-events-none" />
          </motion.div>
          <p className="text-[10px] text-red-500/60 text-center mt-1">Ondas em oposição — silêncio</p>
        </div>
      </div>
    </div>
  );
};
