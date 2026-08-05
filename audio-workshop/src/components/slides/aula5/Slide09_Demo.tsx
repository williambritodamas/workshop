import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
import { Volume2, ArrowDown, Bell, Ear, ArrowLeftRight, Waves } from 'lucide-react';
export { slide09Notes };

const steps = [
  { label: 'Aumentar apenas o Gain', detail: 'Perceba como o sinal fica mais forte e sensível.', icon: <Volume2 className="w-5 h-5" />, color: 'bg-blue-500' },
  { label: 'Baixar apenas o Fader', detail: 'O volume diminui sem afetar a qualidade do sinal.', icon: <ArrowDown className="w-5 h-5" />, color: 'bg-red-500' },
  { label: 'Acionar Mute', detail: 'O som corta completamente, independente do Fader.', icon: <Bell className="w-5 h-5" />, color: 'bg-red-500' },
  { label: 'Acionar Solo', detail: 'Apenas aquele canal é ouvido nos fones.', icon: <Ear className="w-5 h-5" />, color: 'bg-amber-500' },
  { label: 'Mover o Pan', detail: 'O som se desloca entre esquerda e direita.', icon: <ArrowLeftRight className="w-5 h-5" />, color: 'bg-cyan-500' },
  { label: 'Ajustar graves e agudos', detail: 'O timbre do som muda conforme a equalização.', icon: <Waves className="w-5 h-5" />, color: 'bg-purple-500' },
];

export const Slide09_Demo: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Demonstração prática" subtitle="Checklist passo a passo para o apresentador" badge="Prática" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {steps.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${s.color} text-white`}>{s.icon}</div>
            <span className="text-white font-bold text-sm">{s.label}</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">{s.detail}</p>
          <p className="mt-2 text-blue-400 text-xs italic">"O que vocês perceberam?"</p>
        </motion.div>
      ))}
    </div>
  </div>
);

