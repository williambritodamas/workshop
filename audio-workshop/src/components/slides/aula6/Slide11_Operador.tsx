import { motion } from 'framer-motion';
import { Mic, Volume2, SlidersHorizontal, Eye, Gauge, AlertTriangle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
export { slide11Notes };

const steps = [
  { icon: <Mic className="w-4 h-4" />, text: 'Peça para a pessoa falar normalmente', color: 'text-blue-400' },
  { icon: <Volume2 className="w-4 h-4" />, text: 'Ajuste o Gain até o LED verde acender', color: 'text-emerald-400' },
  { icon: <Eye className="w-4 h-4" />, text: 'Observe: nenhum LED vermelho nos picos', color: 'text-amber-400' },
  { icon: <SlidersHorizontal className="w-4 h-4" />, text: 'Agora suba o Fader para o volume ideal', color: 'text-purple-400' },
  { icon: <Gauge className="w-4 h-4" />, text: 'Repita para cada microfone/canal', color: 'text-cyan-400' },
];

export const Slide11_Operador: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Operador por um Minuto" subtitle="Exercício prático: ajuste um canal do zero!" badge="Mão na massa" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col lg:flex-row gap-6 items-start">
      <div className="w-full lg:w-1/2 space-y-2">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
          >
            <span className={s.color}>{s.icon}</span>
            <span className="text-slate-300 text-xs font-bold">{s.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
        className="w-full lg:w-1/2 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 font-bold text-sm">Cenário</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Você é o operador de som. A plateia está cheia. O microfone do palestrante está ligado mas o som está baixo e com ruído.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          <span className="text-amber-400 font-bold">Pergunta:</span> O que você faz primeiro — aumenta o Gain ou o Fader?
        </p>
        <p className="text-slate-500 text-xs mt-3 italic">Voluntários são bem-vindos para demonstrar.</p>
      </motion.div>
    </div>
  </div>
);
