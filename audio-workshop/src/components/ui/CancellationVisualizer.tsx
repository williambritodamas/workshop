import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Minimize2 } from 'lucide-react';

function wavePoints(offset: number, invert: boolean): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const rad = (i / 120) * Math.PI * 4 + (offset * Math.PI / 180);
    const y = invert ? 50 + Math.sin(rad) * 30 : 50 - Math.sin(rad) * 30;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

function combinedWavePoints(offset: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const rad = (i / 120) * Math.PI * 4;
    const w1 = Math.sin(rad);
    const w2 = Math.sin(rad + (offset * Math.PI / 180));
    const sum = (w1 + w2) * 30;
    const y = 50 - Math.min(60, Math.max(-60, sum));
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const CancellationVisualizer: React.FC = () => {
  const [offset, setOffset] = useState(0);

  const isAligned = offset === 0;
  const isCancelling = offset === 180;

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <Minimize2 className="w-5 h-5 text-red-400" />
        <span className="text-white font-bold text-sm">Cancelamento de Fase</span>
      </div>

      <div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Onda 1</span>
        <div className="relative h-16 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-2">
          <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#3B82F6" strokeWidth="1.5" points={wavePoints(0, false)} />
          </svg>
        </div>
      </div>

      <div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Onda 2</span>
        <div className="relative h-16 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-3">
          <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#f59e0b" strokeWidth="1.5" points={wavePoints(offset, false)} />
          </svg>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 mb-3">
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Resultado (soma)</span>
        <div className="relative h-16 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
            <motion.polyline
              fill="none"
              stroke={isCancelling ? '#ef4444' : isAligned ? '#22c55e' : '#f59e0b'}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
              points={combinedWavePoints(offset)}
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-2">
        <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
        <input
          type="range" min={0} max={360} value={offset}
          onChange={(e) => setOffset(Number(e.target.value))}
          className="w-full accent-red-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer"
        />
        <span className="text-xs text-white font-bold w-10 text-right">{offset}°</span>
      </div>

      <div className="flex justify-between text-[10px] text-slate-600 mb-3">
        <span>0°</span>
        <span>90°</span>
        <span>180°</span>
        <span>270°</span>
        <span>360°</span>
      </div>

      <div className={`p-3 rounded-xl text-center text-xs font-bold ${isCancelling ? 'bg-red-500/20 border border-red-500/40 text-red-400' : isAligned ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400' : 'bg-amber-500/20 border border-amber-500/40 text-amber-400'}`}>
        {isAligned
          ? '🔊 Ondas em fase — soma total'
          : isCancelling
            ? '🔇 Cancelamento total — ondas opostas'
            : `🔉 Cancelamento parcial — amplitude reduzida`}
      </div>
    </div>
  );
};
