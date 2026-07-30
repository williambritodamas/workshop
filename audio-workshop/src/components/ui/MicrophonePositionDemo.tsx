import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export const MicrophonePositionDemo: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto grid grid-cols-2 gap-4">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="p-5 rounded-3xl bg-slate-900/90 border border-red-500/40 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <X className="w-5 h-5 text-red-400" />
          <span className="text-red-400 text-sm font-bold">Risco alto</span>
        </div>
        <svg viewBox="0 0 180 160" className="w-full">
          <rect x="120" y="40" width="50" height="50" rx="6" fill="#F59E0B" opacity="0.9" />
          <rect x="130" y="35" width="30" height="8" rx="3" fill="#92400E" />
          <rect x="5" y="60" width="20" height="35" rx="10" fill="#EF4444" opacity="0.9" />
          <rect x="10" y="95" width="10" height="18" rx="2" fill="#7F1D1D" />

          <path d="M 25 77 Q 80 15 130 55" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,3" />
          <path d="M 50 20 Q 100 0 140 30" fill="rgba(239,68,68,0.08)" />
          <path d="M 50 20 Q 100 0 140 30" fill="none" stroke="#EF4444" strokeWidth="1.5" />

          <motion.ellipse cx="30" cy="75" rx="5" ry="12" fill="#EF4444" opacity="0.3"
            animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </svg>
        <p className="text-slate-400 text-xs mt-2 text-center">Microfone apontado para a caixa</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        className="p-5 rounded-3xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <Check className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-bold">Seguro</span>
        </div>
        <svg viewBox="0 0 180 160" className="w-full">
          <rect x="120" y="40" width="50" height="50" rx="6" fill="#F59E0B" opacity="0.9" />
          <rect x="130" y="35" width="30" height="8" rx="3" fill="#92400E" />
          <rect x="5" y="60" width="20" height="35" rx="10" fill="#10B981" opacity="0.9" />
          <rect x="10" y="95" width="10" height="18" rx="2" fill="#065F46" />

          <path d="M 25 77 Q 80 80 130 55" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,3" opacity="0.3" />
          <path d="M 40 40 Q 80 15 100 40" fill="rgba(16,185,129,0.08)" />
          <path d="M 40 40 Q 80 15 100 40" fill="none" stroke="#10B981" strokeWidth="1.5" />

          <motion.ellipse cx="100" cy="40" rx="5" ry="12" fill="#10B981" opacity="0.3"
            animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </svg>
        <p className="text-slate-400 text-xs mt-2 text-center">Microfone apontado para longe</p>
      </motion.div>
    </div>
  );
};
