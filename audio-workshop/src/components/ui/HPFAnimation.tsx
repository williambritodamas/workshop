import { motion } from 'framer-motion';

interface HPFAnimationProps {
  active: boolean;
}

const N = 80;

function wavePoints(includeLow: boolean, lowAmp: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= N; i++) {
    const x = (i / N) * 100;
    const high = Math.sin((i / N) * Math.PI * 8) * 28;
    const low = includeLow ? Math.sin((i / N) * Math.PI * 2) * lowAmp : 0;
    const y = 50 - (high + low);
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

function responsePoints(active: boolean): string {
  const pts: string[] = [];
  const fStart = 20;
  const fEnd = 20000;
  const cutoff = 150;
  const fMin = Math.log(fStart);
  const fMax = Math.log(fEnd);
  for (let i = 0; i <= N; i++) {
    const f = Math.exp(fMin + ((fMax - fMin) * i) / N);
    const x = (i / N) * 100;
    let gain = 0;
    if (active && f < cutoff) {
      const octavesBelow = Math.log2(cutoff / f);
      gain = -18 * octavesBelow;
      gain = Math.max(gain, -60);
    }
    const y = 20 - gain * 0.8;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const HPFAnimation: React.FC<HPFAnimationProps> = ({ active }) => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4">
      <div>
        <span className="text-xs font-bold text-slate-500 mb-1 block">Resposta do HPF (frequência)</span>
        <div className="relative h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="20" x2="100" y2="20" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="0" y1="84" x2="100" y2="84" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
            {active && (
              <motion.polyline
                fill="none" stroke="#3b82f6" strokeWidth="2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7 }}
                points={responsePoints(true)} />
            )}
            {!active && (
              <polyline fill="none" stroke="#64748b" strokeWidth="2" opacity={0.5}
                points={responsePoints(false)} />
            )}
          </svg>
          {active && (
            <span className="absolute top-1.5 right-2 text-[9px] font-bold text-blue-400">
              Graves atenuados −18 dB/oitava
            </span>
          )}
        </div>
      </div>

      <div>
        <span className="text-xs font-bold text-slate-500 mb-1 block">Antes do HPF</span>
        <div className="relative h-20 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polyline fill="none" stroke="#94a3b8" strokeWidth="1.5"
              points={wavePoints(true, 18)} />
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
                points={wavePoints(true, 4)} />
            ) : (
              <polyline fill="none" stroke="#94a3b8" strokeWidth="1.5" opacity={0.4}
                points={wavePoints(true, 18)} />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
