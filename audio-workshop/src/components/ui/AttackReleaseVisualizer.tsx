import { motion } from 'framer-motion';

interface AttackReleaseVisualizerProps {
  attack: number;
  release: number;
  triggered: boolean;
}

export const AttackReleaseVisualizer: React.FC<AttackReleaseVisualizerProps> = ({ attack, release, triggered }) => {
  const points = 80;
  const wave: { x: number; y: number }[] = [];
  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * 100;
    let env = 0;
    if (triggered) {
      const attackSamples = Math.floor((attack / 100) * 30);
      const releaseSamples = Math.floor((release / 100) * 30);
      if (i < attackSamples) {
        env = (i / attackSamples) * 100;
      } else if (i > points - 1 - releaseSamples) {
        const ri = i - (points - 1 - releaseSamples);
        env = 100 - (ri / releaseSamples) * 100;
      } else {
        env = 100;
      }
    }
    const raw = Math.sin((i / points) * Math.PI * 4) * 30 + 50;
    const compressed = triggered ? 50 + (raw - 50) * (1 - env / 200) : raw;
    wave.push({ x, y: compressed });
  }

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-md">
      <div className="relative w-full h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {!triggered && (
            <polyline fill="none" stroke="#64748b" strokeWidth="1.5"
              points={wave.map((p) => `${p.x},${p.y}`).join(' ')} />
          )}
          {triggered && (
            <motion.polyline fill="none" stroke="#22c55e" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
              points={wave.map((p) => `${p.x},${p.y}`).join(' ')} />
          )}
        </svg>
        {triggered && (
          <>
            <motion.div initial={{ width: 0 }} animate={{ width: `${attack}%` }}
              className="absolute top-0 left-0 h-1 bg-amber-400 rounded-full" style={{ maxWidth: '40%' }} />
            <motion.div initial={{ width: 0 }} animate={{ width: `${release}%` }}
              className="absolute bottom-0 right-0 h-1 bg-blue-400 rounded-full" style={{ maxWidth: '40%' }} />
          </>
        )}
      </div>
      <div className="flex justify-between w-full text-[10px] text-slate-600 font-bold">
        <span className="text-amber-400">Attack: {attack}ms</span>
        <span className="text-blue-400">Release: {release}ms</span>
      </div>
    </div>
  );
};
