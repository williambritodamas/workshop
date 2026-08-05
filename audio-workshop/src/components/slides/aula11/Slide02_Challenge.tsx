import { motion } from 'framer-motion';
import { Mic, Disc3, Cable, Speaker, Monitor, Laptop, Music, HelpCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide02Notes } from './notes';
export { slide02Notes };

const equipmentIcons = [
  { icon: <Mic className="w-8 h-8" />, label: 'Microfone', color: 'text-blue-400', border: 'border-blue-500/30 bg-blue-500/10' },
  { icon: <Disc3 className="w-8 h-8" />, label: 'Mesa', color: 'text-purple-400', border: 'border-purple-500/30 bg-purple-500/10' },
  { icon: <Cable className="w-8 h-8" />, label: 'Cabos', color: 'text-amber-400', border: 'border-amber-500/30 bg-amber-500/10' },
  { icon: <Speaker className="w-8 h-8" />, label: 'Caixas', color: 'text-red-400', border: 'border-red-500/30 bg-red-500/10' },
  { icon: <Music className="w-8 h-8" />, label: 'Stands', color: 'text-emerald-400', border: 'border-emerald-500/30 bg-emerald-500/10' },
  { icon: <Monitor className="w-8 h-8" />, label: 'Monitores', color: 'text-cyan-400', border: 'border-cyan-500/30 bg-cyan-500/10' },
  { icon: <Laptop className="w-8 h-8" />, label: 'Notebook', color: 'text-pink-400', border: 'border-pink-500/30 bg-pink-500/10' },
];

export const Slide02_Challenge: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/sound-reinforcement.jpg" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O Desafio" subtitle="Palco vazio vs Pilha de equipamentos — como transformar um no outro?" badge="Desafio" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-2 gap-6 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm text-center"
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-800/80 border-2 border-dashed border-slate-700 flex items-center justify-center">
          <HelpCircle className="w-10 h-10 text-slate-600" />
        </div>
        <p className="text-2xl font-black text-slate-500">Palco Vazio</p>
        <p className="text-sm text-slate-600 mt-1">Nada conectado</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
        className="p-8 rounded-2xl bg-slate-900/60 border border-amber-500/20 backdrop-blur-sm"
      >
        <div className="grid grid-cols-4 gap-3 mb-4">
          {equipmentIcons.map((eq, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.05 }}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl border backdrop-blur-sm ${eq.border}`}
            >
              <span className={eq.color}>{eq.icon}</span>
              <span className="text-[10px] font-bold text-slate-300">{eq.label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-amber-400 text-sm font-bold text-center">+ cabos, conectores e energia</p>
      </motion.div>
    </div>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      className="relative z-10 mt-4 text-slate-400 text-sm font-medium"
    >
      Objetivo: transformar esta pilha em um sistema funcionando
    </motion.p>
  </div>
);
