import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Mic, Speaker, Move, Volume2, Gauge, SlidersHorizontal } from 'lucide-react';

type Status = 'stable' | 'warning' | 'feedback';

export const FeedbackSimulator: React.FC = () => {
  const [distance, setDistance] = useState(60);
  const [gain, setGain] = useState(30);
  const [volume, setVolume] = useState(40);
  const [eq, setEq] = useState(50);

  const status: Status = useMemo(() => {
    const risk = (100 - distance) * 0.4 + gain * 0.35 + volume * 0.2 + Math.abs(eq - 50) * 0.05;
    if (risk > 70) return 'feedback';
    if (risk > 40) return 'warning';
    return 'stable';
  }, [distance, gain, volume, eq]);

  const statusConfig = {
    stable: { emoji: '🟢', text: 'Sistema estável', color: 'text-emerald-400', bg: 'bg-emerald-500/15 border-emerald-500/30' },
    warning: { emoji: '🟡', text: 'Próximo da microfonia', color: 'text-amber-400', bg: 'bg-amber-500/15 border-amber-500/30' },
    feedback: { emoji: '🔴', text: 'Feedback detectado!', color: 'text-red-400', bg: 'bg-red-500/15 border-red-500/30' },
  };

  const s = statusConfig[status];

  const micX = 80;
  const speakerX = 80 + distance * 2.2;

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <Speaker className="w-5 h-5 text-amber-400" />
        <span className="text-white font-bold text-sm">Simulador de Feedback</span>
      </div>

      <div className="relative h-36 mb-5 rounded-2xl bg-slate-950/60 border border-slate-800 overflow-hidden">
        <svg viewBox="0 0 400 140" className="w-full h-full">
          <Mic className="absolute" style={{ left: micX, top: 50 }} />
          <rect x={micX - 12} y={40} width="24" height="40" rx="12" fill="#3B82F6" opacity="0.8" />
          <rect x={micX - 4} y={80} width="8" height="20" rx="2" fill="#64748B" />
          <rect x={speakerX - 20} y={30} width="40" height="50" rx="6" fill="#F59E0B" opacity="0.8" />
          <rect x={speakerX - 14} y={25} width="28" height="10" rx="3" fill="#92400E" />

          <motion.path d={`M ${micX + 15} 60 Q ${(micX + speakerX) / 2} ${20 + (100 - distance) * 0.5} ${speakerX - 20} 55`}
            fill="none" stroke={status === 'feedback' ? '#EF4444' : status === 'warning' ? '#FBBF24' : '#3B82F6'}
            strokeWidth="2" strokeDasharray="4,3"
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: status === 'feedback' ? 0.5 : 2 }}
          />
          <motion.path d={`M ${speakerX - 20} 55 Q ${(speakerX + micX) / 2} ${100 - (100 - distance) * 0.5} ${micX + 15} 60`}
            fill="none" stroke={status === 'feedback' ? '#EF4444' : '#475569'} strokeWidth="2" strokeDasharray="4,3"
            animate={status === 'feedback' ? { opacity: [0.3, 1, 0.3] } : {}}
            transition={status === 'feedback' ? { repeat: Infinity, duration: 0.5 } : {}}
          />
        </svg>
      </div>

      <motion.div className={`p-3 rounded-2xl border text-center mb-5 ${s.bg}`}
        animate={{ scale: status === 'feedback' ? [1, 1.02, 1] : 1 }}
        transition={status === 'feedback' ? { repeat: Infinity, duration: 0.8 } : {}}
      >
        <span className={`text-sm font-black ${s.color}`}>{s.emoji} {s.text}</span>
      </motion.div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Move className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-slate-400">Distância Microfone-Caixa</span>
            <span className="text-white font-bold text-xs ml-auto">{distance}%</span>
          </div>
          <input type="range" min={0} max={100} value={distance} onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full accent-blue-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Gauge className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-slate-400">Ganho (Gain)</span>
            <span className="text-white font-bold text-xs ml-auto">{gain}%</span>
          </div>
          <input type="range" min={0} max={100} value={gain} onChange={(e) => setGain(Number(e.target.value))}
            className="w-full accent-amber-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-slate-400">Volume</span>
            <span className="text-white font-bold text-xs ml-auto">{volume}%</span>
          </div>
          <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-emerald-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <SlidersHorizontal className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-slate-400">EQ (agudos)</span>
            <span className="text-white font-bold text-xs ml-auto">{eq}%</span>
          </div>
          <input type="range" min={0} max={100} value={eq} onChange={(e) => setEq(Number(e.target.value))}
            className="w-full accent-purple-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
