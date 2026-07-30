import { useState } from 'react';
import { Waves, GripHorizontal } from 'lucide-react';

function wavePoints(offset: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * 100;
    const rad = ((i / 120) * Math.PI * 4) + (offset * Math.PI / 180);
    const y = 50 - Math.sin(rad) * 35;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const PhaseAlignmentSimulator: React.FC = () => {
  const [phase, setPhase] = useState(0);

  const status = phase === 0
    ? { label: 'Alinhado', color: 'text-emerald-400', dot: '🟢' }
    : phase >= 45 && phase <= 135
      ? { label: 'Atenção', color: 'text-amber-400', dot: '🟡' }
      : phase === 180
        ? { label: 'Cancelamento', color: 'text-red-400', dot: '🔴' }
        : phase > 135 && phase < 180
          ? { label: 'Próximo ao cancelamento', color: 'text-orange-400', dot: '🟠' }
          : phase > 180
            ? { label: 'Desalinhado', color: 'text-yellow-400', dot: '🟡' }
            : { label: 'Quase alinhado', color: 'text-lime-400', dot: '🟢' };

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <Waves className="w-5 h-5 text-blue-400" />
        <span className="text-white font-bold text-sm">Alinhamento de Fase</span>
      </div>

      <div className="relative h-28 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-4">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline fill="none" stroke="#3B82F6" strokeWidth="2" opacity={0.4} points={wavePoints(0)} />
          <polyline fill="none" stroke="#22c55e" strokeWidth="2" points={wavePoints(phase)} />
        </svg>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className={`text-sm font-bold ${status.color}`}>{status.dot} {status.label}</span>
        <span className="text-xs text-slate-500 ml-auto">{phase}°</span>
      </div>

      <div className="flex items-center gap-3">
        <GripHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
        <input
          type="range" min={0} max={360} value={phase}
          onChange={(e) => setPhase(Number(e.target.value))}
          className="w-full accent-blue-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-[10px] text-slate-600 mt-1">
        <span>0°</span>
        <span>90°</span>
        <span>180°</span>
        <span>270°</span>
        <span>360°</span>
      </div>
    </div>
  );
};
