import { motion } from 'framer-motion';
import { Clock, CircuitBoard, Mic, Ruler, Volume2, Minimize2, ToggleLeft } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
export { slide15Notes };

const items = [
  { icon: <Clock className="w-5 h-5" />, text: 'Fase = posição da onda no tempo', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { icon: <CircuitBoard className="w-5 h-5" />, text: 'Polaridade = inversão elétrica do sinal', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <Volume2 className="w-5 h-5" />, text: 'Soma construtiva: ondas em fase = mais volume', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { icon: <Minimize2 className="w-5 h-5" />, text: 'Cancelamento: ondas opostas = som some', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { icon: <Mic className="w-5 h-5" />, text: '2 microfones próximos = potencial problema de fase', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <Ruler className="w-5 h-5" />, text: 'Regra 3:1 para posicionar microfones', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { icon: <ToggleLeft className="w-5 h-5" />, text: 'Botão Ø resolve casos específicos, não reposicionamento', color: 'border-pink-500/30 bg-pink-500/10 text-pink-400' },
];

export const Slide15_Review: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784169/pexels-photo-3784169.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Revisão" subtitle="Resumo dos conceitos de Fase e Polaridade" badge="Recapitulando" />
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
