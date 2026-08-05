import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cable, Mic, Zap, Speaker, Monitor, Laptop, SlidersHorizontal, Gauge, VolumeX, Waves, CheckCircle2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
export { slide09Notes };

const checklistItems = [
  { id: 'cables', label: 'Cabos conectados', icon: <Cable className="w-4 h-4" /> },
  { id: 'mics', label: 'Microfones funcionando', icon: <Mic className="w-4 h-4" /> },
  { id: 'phantom', label: 'Phantom Power só onde necessário', icon: <Zap className="w-4 h-4" /> },
  { id: 'speakers', label: 'Caixas funcionando', icon: <Speaker className="w-4 h-4" /> },
  { id: 'monitors', label: 'Monitores testados', icon: <Monitor className="w-4 h-4" /> },
  { id: 'notebook', label: 'Notebook conectado', icon: <Laptop className="w-4 h-4" /> },
  { id: 'eq', label: 'EQ revisado', icon: <SlidersHorizontal className="w-4 h-4" /> },
  { id: 'gain', label: 'Gain ajustado', icon: <Gauge className="w-4 h-4" /> },
  { id: 'clipping', label: 'Sem clipping', icon: <VolumeX className="w-4 h-4" /> },
  { id: 'feedback', label: 'Sem feedback', icon: <Waves className="w-4 h-4" /> },
];

export const Slide09_Checklist: React.FC = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (id: string) => {
    setChecked(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/audio-mixer-faders.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Checklist de Verificação" subtitle="Antes de começar, confira item por item" badge="Checklist" />
      <div className="relative z-10 w-full max-w-3xl my-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {checklistItems.map((item, i) => (
          <motion.button key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
            onClick={() => toggle(item.id)}
            className={`flex items-center gap-3 p-3 rounded-xl border backdrop-blur-sm text-left transition-all ${checked.includes(item.id) ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-slate-800 bg-slate-900/60 hover:border-slate-600'}`}
          >
            <span className={`shrink-0 ${checked.includes(item.id) ? 'text-emerald-400' : 'text-slate-500'}`}>
              {checked.includes(item.id) ? <CheckCircle2 className="w-5 h-5" /> : item.icon}
            </span>
            <span className={`text-xs font-bold ${checked.includes(item.id) ? 'text-emerald-300 line-through' : 'text-slate-300'}`}>
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="relative z-10 mt-4 text-slate-500 text-xs"
      >
        {checked.length}/{checklistItems.length} itens verificados
      </motion.div>
    </div>
  );
};
