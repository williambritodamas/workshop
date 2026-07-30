import { motion } from 'framer-motion';
import { Mic, Volume2, CheckCircle2, Power, PowerOff, HelpCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide13Notes } from './notes';
export { slide13Notes };

const steps = [
  { icon: <Mic className="w-4 h-4" />, text: 'Pessoa falando normalmente' },
  { icon: <Volume2 className="w-4 h-4" />, text: 'Pessoa gritando (sem compressão)' },
  { icon: <Power className="w-4 h-4" />, text: 'Aplicar compressão' },
  { icon: <PowerOff className="w-4 h-4" />, text: 'Desligar compressão' },
  { icon: <Power className="w-4 h-4" />, text: 'Ligar novamente' },
];

export const Slide13_Practice: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Demonstração Prática" subtitle="Checklist para teste ao vivo com microfone" badge="Mão na massa" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col lg:flex-row gap-6 items-start">
      <div className="w-full lg:w-1/2 space-y-2">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-slate-300 text-xs font-bold">{s.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
        className="w-full lg:w-1/2 p-5 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-bold text-sm">Pergunte à plateia</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Siga cada passo do checklist com um microfone ao vivo.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed font-bold text-purple-300">
          "O que mudou?"
        </p>
        <p className="text-slate-500 text-xs mt-3 italic">
          Compare a sensação de ouvir sem e com compressão.
        </p>
      </motion.div>
    </div>
  </div>
);
