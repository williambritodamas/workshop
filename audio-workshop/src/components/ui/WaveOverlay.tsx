import { motion } from 'framer-motion';

interface WaveOverlayProps {
  phaseOffset?: number;
  inverted?: boolean;
}

function wavePoints(offset: number, invert: boolean): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const rad = (i / 120) * Math.PI * 4 + (offset * Math.PI / 180);
    const y = invert ? 50 + Math.sin(rad) * 35 : 50 - Math.sin(rad) * 35;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

function combinedPoints(offset: number, invert: boolean): string {
  const pts: string[] = [];
  const offsetRad = offset * Math.PI / 180;
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const rad = (i / 120) * Math.PI * 4;
    const w1 = Math.sin(rad);
    const w2 = Math.sin(rad + offsetRad) * (invert ? -1 : 1);
    const sum = (w1 + w2) * 35;
    const y = 50 - Math.min(70, Math.max(-70, sum));
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const WaveOverlay: React.FC<WaveOverlayProps> = ({ phaseOffset = 0, inverted = false }) => {
  const isAligned = phaseOffset === 0;
  const isCancelling = phaseOffset === 180;
  const combined = combinedPoints(phaseOffset, inverted);

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-white font-bold text-sm">Sobreposição de Ondas</span>
      </div>

      <div className="relative h-32 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity={0.35} points={wavePoints(0, false)} />
          <polyline fill="none" stroke="#a855f7" strokeWidth="1.5" opacity={0.35} points={wavePoints(phaseOffset, inverted)} />
          <motion.polyline
            fill="none"
            stroke={isCancelling ? '#ef4444' : isAligned ? '#22c55e' : '#f59e0b'}
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
            points={combined}
          />
        </svg>
      </div>

      <div className="flex items-center justify-center gap-4 mt-3">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 rounded bg-blue-500 opacity-60" />
          <span className="text-[10px] text-slate-500">Onda 1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 rounded bg-purple-500 opacity-60" />
          <span className="text-[10px] text-slate-500">Onda 2</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`w-3 h-0.5 rounded ${isCancelling ? 'bg-red-500' : isAligned ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          <span className="text-[10px] text-slate-500">Resultado</span>
        </div>
      </div>

      <div className="mt-3 text-center">
        <span className={`text-xs font-bold ${isCancelling ? 'text-red-400' : isAligned ? 'text-emerald-400' : 'text-amber-400'}`}>
          {isAligned ? '✅ Ondas em fase — soma construtiva' : isCancelling ? '❌ Cancelamento total — silêncio' : '⚠️ Cancelamento parcial'}
        </span>
      </div>
    </div>
  );
};
