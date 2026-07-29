import { motion } from 'framer-motion';

interface VUAnimationProps {
  level: number;
  label?: string;
}

export const VUAnimation: React.FC<VUAnimationProps> = ({ level, label }) => {
  const clamped = Math.min(100, Math.max(0, level));
  const isYellow = clamped > 60 && clamped <= 80;
  const isRed = clamped > 80;
  const clip = clamped >= 100;

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-xs">
      {label && <span className="text-xs font-bold text-slate-400 uppercase">{label}</span>}
      <div className="relative w-full h-6 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full transition-colors ${
            clip ? 'bg-red-500' : isRed ? 'bg-red-400' : isYellow ? 'bg-amber-400' : 'bg-emerald-400'
          }`}
          initial={{ width: '0%' }}
          animate={{ width: `${clamped}%` }}
          transition={{ duration: 0.15, ease: 'linear' }}
        />
      </div>
      <div className="flex justify-between w-full text-[10px] text-slate-600 font-bold">
        <span>-∞</span>
        <span>0 dB</span>
      </div>
      {clip && (
        <motion.span initial={{ scale: 0 }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.5 }}
          className="text-red-400 text-xs font-black tracking-widest"
        >
          CLIP!
        </motion.span>
      )}
    </div>
  );
};
