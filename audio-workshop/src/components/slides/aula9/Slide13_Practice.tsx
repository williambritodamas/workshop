import { motion } from 'framer-motion';
import { Mic, Move, ToggleLeft, Ear, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide13Notes } from './notes';
export { slide13Notes };

const steps = [
  { icon: <Mic className="w-4 h-4" />, text: 'Posicione dois microfones lado a lado, mesma distância' },
  { icon: <Move className="w-4 h-4" />, text: 'Afaste um microfone gradualmente enquanto alguém fala' },
  { icon: <Ear className="w-4 h-4" />, text: 'Ouça a diferença no tom e no volume' },
  { icon: <ToggleLeft className="w-4 h-4" />, text: 'Aperte o botão Ø em um dos microfones' },
  { icon: <Move className="w-4 h-4" />, text: 'Varie a distância novamente com Ø ativado' },
  { icon: <Ear className="w-4 h-4" />, text: 'Compare as configurações e discuta o resultado' },
];

export const Slide13_Practice: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Prática com Microfones" subtitle="Checklist para teste ao vivo de fase e polaridade" badge="Mão na massa" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col lg:flex-row gap-6 items-start">
      <div className="w-full lg:w-1/2 space-y-2">
        {steps.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-300 text-xs font-bold">{s.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
        className="w-full lg:w-1/2 p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-bold text-sm">Pergunte à plateia</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Siga cada passo com dois microfones ao vivo.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed font-bold text-cyan-300">
          "O que mudou quando movemos o microfone?"
        </p>
        <div className="mt-3 flex items-center gap-2 text-slate-500 text-xs">
          <ArrowRight className="w-3 h-3" />
          <span className="italic">Compare o som com e sem Ø ativado.</span>
        </div>
      </motion.div>
    </div>
  </div>
);
