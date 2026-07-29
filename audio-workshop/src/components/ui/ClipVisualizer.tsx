import { motion } from 'framer-motion';

interface ClipVisualizerProps {
  clip: boolean;
}

export const ClipVisualizer: React.FC<ClipVisualizerProps> = ({ clip }) => {
  const points = 60;
  const generateWave = (clipped: boolean) => {
    const p: { x: number; y: number }[] = [];
    for (let i = 0; i < points; i++) {
      const x = (i / (points - 1)) * 100;
      let y: number;
      if (clipped) {
        const raw = Math.sin((i / points) * Math.PI * 4) * 50;
        y = 50 - Math.max(-40, Math.min(40, raw));
      } else {
        y = 50 - Math.sin((i / points) * Math.PI * 4) * 35;
      }
      p.push({ x, y });
    }
    return p;
  };

  const cleanWave = generateWave(false);
  const clippedWave = generateWave(true);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative h-32 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <polyline fill="none" stroke="#22c55e" strokeWidth="1.5" strokeOpacity={clip ? 0.3 : 1}
            points={cleanWave.map((p) => `${p.x},${p.y}`).join(' ')} />
          {clip && (
            <motion.polyline fill="none" stroke="#ef4444" strokeWidth="1.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }}
              points={clippedWave.map((p) => `${p.x},${p.y}`).join(' ')} />
          )}
        </svg>
        {clip && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-red-500 font-black text-lg tracking-widest bg-slate-950/80 px-4 py-1 rounded">CLIP</span>
          </motion.div>
        )}
      </div>
      <div className="flex justify-center gap-6 mt-2 text-xs font-bold">
        <span className={`flex items-center gap-1 ${!clip ? 'text-emerald-400' : 'text-slate-600'}`}>
          <span className={`w-2 h-2 rounded-full ${!clip ? 'bg-emerald-400' : 'bg-slate-700'}`} /> Som limpo
        </span>
        <span className={`flex items-center gap-1 ${clip ? 'text-red-400' : 'text-slate-600'}`}>
          <span className={`w-2 h-2 rounded-full ${clip ? 'bg-red-400' : 'bg-slate-700'}`} /> Clipado
        </span>
      </div>
    </div>
  );
};
