import { motion } from 'framer-motion';

interface LimiterDemoProps {
  active: boolean;
}

export const LimiterDemo: React.FC<LimiterDemoProps> = ({ active }) => {
  const points = 60;
  const beforeWave: { x: number; y: number }[] = [];
  const afterWave: { x: number; y: number }[] = [];
  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * 100;
    const raw = Math.sin((i / points) * Math.PI * 6) * 40 + Math.sin((i / points) * Math.PI * 2) * 20;
    const clipped = Math.max(-50, Math.min(50, raw));
    beforeWave.push({ x, y: 50 - raw });
    afterWave.push({ x, y: 50 - clipped });
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-md">
      <div className="w-full">
        <span className="text-[10px] font-bold text-slate-500 mb-1 block">Antes do Limiter</span>
        <div className="w-full h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#ef4444" strokeWidth="1.5" strokeOpacity={0.6}
              points={beforeWave.map((p) => `${p.x},${p.y}`).join(' ')} />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <motion.div animate={{ scale: active ? 1.05 : 0.95 }}
          className={`px-4 py-2 rounded-full text-xs font-bold ${active ? 'bg-red-500/20 border border-red-500/40 text-red-400' : 'bg-slate-800 text-slate-500'}`}
        >
          Limiter {active ? 'Ativo' : 'Inativo'}
        </motion.div>
      </div>
      <div className="w-full">
        <span className="text-[10px] font-bold text-slate-500 mb-1 block">Depois do Limiter</span>
        <div className="w-full h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            {active ? (
              <motion.polyline fill="none" stroke="#22c55e" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
                points={afterWave.map((p) => `${p.x},${p.y}`).join(' ')} />
            ) : (
              <polyline fill="none" stroke="#64748b" strokeWidth="1.5" opacity={0.4}
                points={beforeWave.map((p) => `${p.x},${p.y}`).join(' ')} />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
