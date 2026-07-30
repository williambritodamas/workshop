import { motion } from 'framer-motion';
import { Crosshair, Gauge, Move, SlidersHorizontal, Monitor, AlertTriangle, Mic as MicIcon } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
export { slide15Notes };

const items = [
  { icon: <Crosshair className="w-5 h-5" />, text: 'Microfonia é feedback — som que realimenta o sistema', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <Gauge className="w-5 h-5" />, text: 'Ganho excessivo é a causa mais comum', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { icon: <Move className="w-5 h-5" />, text: 'Posicionamento: use a zona nula do cardioidal', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { icon: <SlidersHorizontal className="w-5 h-5" />, text: 'EQ cirúrgico: corte estreito na frequência exata', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <Monitor className="w-5 h-5" />, text: 'Monitores na zona de rejeição do microfone', color: 'border-blue-400/30 bg-blue-400/10 text-blue-400' },
  { icon: <AlertTriangle className="w-5 h-5" />, text: 'Não entre em pânico: siga a sequência PARAR → IDENTIFICAR → REDUZIR → CORRIGIR', color: 'border-amber-400/30 bg-amber-400/10 text-amber-400' },
  { icon: <MicIcon className="w-5 h-5" />, text: 'Microfones dinâmicos são menos propensos a feedback que condensadores', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
];

export const Slide15_Review: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Microfone" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Revisão" subtitle="Os 7 pilares do controle de microfonia" badge="Recapitulando" />
    <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className={`flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-sm ${item.color}`}
        >
          <span className="shrink-0 mt-0.5">{item.icon}</span>
          <p className="text-xs font-bold leading-relaxed text-slate-200">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
