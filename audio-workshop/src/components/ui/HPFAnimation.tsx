import { motion } from 'framer-motion';

interface HPFAnimationProps {
  active: boolean;
}

export const HPFAnimation: React.FC<HPFAnimationProps> = ({ active }) => {
  const beforePoints = 40;
  const afterPoints = 40;
  const before: { x: number; y: number }[] = [];
  const after: { x: number; y: number }[] = [];

  for (let i = 0; i < beforePoints; i++) {
    const x = (i / (beforePoints - 1)) * 100;
    const raw = Math.sin((i / beforePoints) * Math.PI * 6) * 30 + Math.sin((i / beforePoints) * Math.PI * 2) * 15;
    before.push({ x, y: 50 - raw });
  }

  for (let i = 0; i < afterPoints; i++) {
    const x = (i / (afterPoints - 1)) * 100;
    const raw = Math.sin((i / afterPoints) * Math.PI * 6) * 30;
    after.push({ x, y: 50 - raw });
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <div>
          <span className="text-xs font-bold text-slate-500 mb-1 block">Antes do HPF</span>
          <div className="relative h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <polyline fill="none" stroke="#94a3b8" strokeWidth="1.5"
                points={before.map((p) => `${p.x},${p.y}`).join(' ')} />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <motion.div animate={{ scale: active ? 1 : 0.9 }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${active ? 'bg-blue-500/20 border border-blue-500/40 text-blue-400' : 'bg-slate-800 text-slate-500'}`}
          >
            HPF {active ? 'Ativo' : 'Inativo'}
          </motion.div>
        </div>
        <div>
          <span className="text-xs font-bold text-slate-500 mb-1 block">Depois do HPF</span>
          <div className="relative h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              {active ? (
                <motion.polyline fill="none" stroke="#22c55e" strokeWidth="1.5"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }}
                  points={after.map((p) => `${p.x},${p.y}`).join(' ')} />
              ) : (
                <polyline fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity={0.4}
                  points={before.map((p) => `${p.x},${p.y}`).join(' ')} />
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
