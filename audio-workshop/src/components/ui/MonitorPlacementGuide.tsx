import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export const MonitorPlacementGuide: React.FC = () => {
  const [correct, setCorrect] = useState(true);

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4">
        <button onClick={() => setCorrect(true)}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${correct ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 inline mr-1" />Posição Correta
        </button>
        <button onClick={() => setCorrect(false)}
          className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${!correct ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400'}`}
        >
          <XCircle className="w-3.5 h-3.5 inline mr-1" />Posição Incorreta
        </button>
      </div>

      <motion.div key={String(correct)} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="relative p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm"
      >
        <svg viewBox="0 0 300 200" className="w-full">
          <rect x="0" y="160" width="300" height="40" fill="#1E293B" rx="4" />

          <rect x="45" y="50" width="18" height="34" rx="9" fill={correct ? '#10B981' : '#EF4444'} opacity="0.9" />
          <rect x="48" y="84" width="12" height="50" rx="3" fill="#64748B" />

          <path d="M 54 45 Q 80 15 120 25" fill="none" stroke={correct ? '#10B981' : '#EF4444'} strokeWidth="1.5" opacity="0.4" />

          {correct ? (
            <>
              <rect x="140" y="120" width="40" height="30" rx="5" fill="#8B5CF6" opacity="0.9" />
              <polygon points="140,120 125,115 125,135" fill="#8B5CF6" opacity="0.7" />
              <path d="M 105 130 Q 125 130 140 128" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,3" opacity="0.3" />
              <text x="160" y="140" textAnchor="middle" fill="#A78BFA" fontSize="8" fontWeight="bold">Monitor</text>
              <path d="M 100 145 Q 100 130 105 130" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2,2" />
              <text x="95" y="145" textAnchor="end" fill="#10B981" fontSize="8" fontWeight="bold">Zona de</text>
              <text x="95" y="154" textAnchor="end" fill="#10B981" fontSize="8" fontWeight="bold">rejeição ✓</text>
            </>
          ) : (
            <>
              <rect x="70" y="100" width="40" height="30" rx="5" fill="#EF4444" opacity="0.7" />
              <polygon points="70,100 55,95 55,115" fill="#EF4444" opacity="0.5" />
              <path d="M 63 110 Q 70 80 54 45" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,3" />
              <text x="90" y="120" textAnchor="middle" fill="#FCA5A5" fontSize="8" fontWeight="bold">Monitor</text>
              <motion.path d="M 60 90 C 30 80 30 40 60 60" fill="none" stroke="#EF4444" strokeWidth="1.5"
                animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }}
              />
              <text x="15" y="50" fill="#EF4444" fontSize="8" fontWeight="bold">Feedback!</text>
            </>
          )}
          <circle cx="90" cy="185" r="12" fill="#475569" opacity="0.6" />
          <circle cx="90" cy="185" r="6" fill="#64748B" />
        </svg>
      </motion.div>
    </div>
  );
};
