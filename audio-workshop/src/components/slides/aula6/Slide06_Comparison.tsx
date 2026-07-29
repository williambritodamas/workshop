import { motion } from 'framer-motion';
import { Gauge, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide06Notes } from './notes';
export { slide06Notes };

const comparisons = [
  { icon: <Gauge className="w-5 h-5" />, label: 'Função', gain: 'Pré-amplificação (entrada)', fader: 'Volume (saída)' },
  { icon: <ArrowRight className="w-5 h-5" />, label: 'Posição no fluxo', gain: 'No início do canal', fader: 'No final do canal' },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Ajuste ideal', gain: 'Sinal forte sem clipar', fader: 'Mixagem equilibrada' },
  { icon: <XCircle className="w-5 h-5" />, label: 'Problema se errado', gain: 'Ruído ou distorção', fader: 'Desequilíbrio na mix' },
];

export const Slide06_Comparison: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Gain × Fader" subtitle="Qual a diferença na prática?" badge="Comparação" />
    <div className="relative z-10 w-full max-w-4xl my-auto">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="px-6 py-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-black text-lg">GAIN</div>
        <span className="text-slate-600 text-2xl font-bold">VS</span>
        <div className="px-6 py-3 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-blue-400 font-black text-lg">FADER</div>
      </div>
      <div className="space-y-2">
        {comparisons.map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="grid grid-cols-[40px_1fr_1fr] items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
          >
            <span className="text-slate-500">{c.icon}</span>
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <span className="text-amber-300 text-xs font-bold">{c.gain}</span>
            </div>
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-300 text-xs font-bold">{c.fader}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center"
      >
        <p className="text-slate-300 text-sm">
          <span className="text-amber-400 font-bold">Gain</span> controla a <span className="text-amber-400 font-bold">entrada</span> (captação) · <span className="text-blue-400 font-bold">Fader</span> controla a <span className="text-blue-400 font-bold">saída</span> (volume na mix)
        </p>
      </motion.div>
    </div>
  </div>
);
