import { useState } from 'react';
import { motion } from 'framer-motion';
import { Waves, VolumeX, Mic, Disc3, Volume2, AlertTriangle, Users } from 'lucide-react';
import { SystemSimulator } from '../../ui/SystemSimulator';
import { slide07Notes } from './notes';
export { slide07Notes };

interface Problem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  priority: number;
}

const problems: Problem[] = [
  { id: 'feedback', label: 'Microfonia', icon: <Waves className="w-5 h-5" />, color: 'rose', priority: 1 },
  { id: 'no-audio', label: 'Notebook sem áudio', icon: <VolumeX className="w-5 h-5" />, color: 'red', priority: 2 },
  { id: 'mic-off', label: 'Microfone desligado', icon: <Mic className="w-5 h-5" />, color: 'amber', priority: 3 },
  { id: 'wrong-channel', label: 'Canal errado', icon: <Disc3 className="w-5 h-5" />, color: 'purple', priority: 4 },
  { id: 'low-voice', label: 'Voz baixa', icon: <Volume2 className="w-5 h-5" />, color: 'blue', priority: 5 },
  { id: 'noise', label: 'Ruído', icon: <AlertTriangle className="w-5 h-5" />, color: 'cyan', priority: 6 },
];

export const Slide07_PublicArrived: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [resolved, setResolved] = useState<string[]>([]);

  const handleResolve = (id: string) => {
    setResolved((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wall_of_Sound_%28QuadFest%29.jpg/1280px-Wall_of_Sound_%28QuadFest%29.jpg" alt="Público" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-medium">
        <Users className="w-4 h-4" /> Ao Vivo
      </motion.div>
      <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">O público chegou...</h2>
      <p className="relative z-10 text-slate-400 text-sm mt-1">Problemas surgem — qual você resolve primeiro?</p>
      <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="flex flex-wrap gap-3 justify-center">
          {problems.map((p, i) => (
            <motion.button key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              onClick={() => { setSelected(selected === p.id ? null : p.id); handleResolve(p.id); }}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl border backdrop-blur-sm transition-all cursor-pointer ${
                resolved.includes(p.id)
                  ? `bg-${p.color}-500/10 border-${p.color}-500/30 text-${p.color}-300`
                  : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-600'
              }`}
            >
              <span className={`p-1.5 rounded-lg bg-${p.color}-500/10 text-${p.color}-400`}>{p.icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold">{p.label}</span>
                <span className="text-[10px] text-slate-500">Prioridade {p.priority}</span>
              </div>
              {resolved.includes(p.id) && <span className="text-xs text-emerald-400 ml-2">✓</span>}
            </motion.button>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <SystemSimulator />
        </motion.div>
      </div>
    </div>
  );
};
