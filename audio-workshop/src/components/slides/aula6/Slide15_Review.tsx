import { motion } from 'framer-motion';
import { Gauge, SlidersHorizontal, AlertTriangle, Shield, Mic, Volume2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
export { slide15Notes };

const items = [
  { icon: <Gauge className="w-5 h-5" />, text: 'Gain controla a sensibilidade de entrada do microfone', color: 'bg-amber-500/10 border-amber-500/30 text-amber-400' },
  { icon: <SlidersHorizontal className="w-5 h-5" />, text: 'Fader controla o volume de saída do canal na mixagem', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
  { icon: <Volume2 className="w-5 h-5" />, text: 'Gain ≠ Volume: Gain é captação, Volume é mixagem', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
  { icon: <AlertTriangle className="w-5 h-5" />, text: 'Clip é a distorção causada por sinal acima do limite', color: 'bg-red-500/10 border-red-500/30 text-red-400' },
  { icon: <Shield className="w-5 h-5" />, text: 'Headroom é a margem de segurança antes do clip', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
  { icon: <Mic className="w-5 h-5" />, text: 'Ajuste: Gain primeiro → Fader depois → LED verde sempre', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
];

export const Slide15_Review: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Revisão" subtitle="Os 6 conceitos que você precisa lembrar" badge="Recapitulando" />
    <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-sm ${item.color}`}
        >
          <span className="shrink-0 mt-0.5">{item.icon}</span>
          <p className="text-xs font-bold leading-relaxed text-slate-200">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
