import { motion } from 'framer-motion';

interface HeadroomIllustrationProps {
  level: number;
  label: string;
  status: 'safe' | 'full' | 'overflow';
}

export const HeadroomIllustration: React.FC<HeadroomIllustrationProps> = ({ level, label, status }) => {
  const fillColor = status === 'overflow' ? 'bg-red-500' : status === 'full' ? 'bg-amber-400' : 'bg-blue-500';
  const borderColor = status === 'overflow' ? 'border-red-500' : status === 'full' ? 'border-amber-400' : 'border-blue-500';

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-40 rounded-2xl border-2 border-slate-700 bg-slate-950 overflow-hidden">
        <motion.div
          className={`absolute bottom-0 left-0 right-0 ${fillColor} ${borderColor}`}
          initial={{ height: '0%' }}
          animate={{ height: `${Math.min(100, level)}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 border-4 border-transparent" style={{ borderTopColor: 'rgba(239, 68, 68, 0.3)', borderTopWidth: '4px', top: '10%' }} />
      </div>
      <span className={`text-xs font-bold ${status === 'overflow' ? 'text-red-400' : status === 'full' ? 'text-amber-400' : 'text-blue-400'}`}>
        {label}
      </span>
      {status === 'overflow' && (
        <motion.span initial={{ scale: 0 }} animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-red-500 text-xs font-black"
        >
          TRANBORDOU!
        </motion.span>
      )}
    </div>
  );
};
