import { motion } from 'framer-motion';
import { Weight, Eye, Ear, SlidersHorizontal, Minus, Headphones } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
export { slide15Notes };

const items = [
  { icon: <Weight className="w-5 h-5" />, text: 'Graves dão peso e corpo ao som', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { icon: <Eye className="w-5 h-5" />, text: 'Médios trazem clareza e presença', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { icon: <Ear className="w-5 h-5" />, text: 'Agudos dão brilho e definição', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <SlidersHorizontal className="w-5 h-5" />, text: 'HPF remove graves desnecessários', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <Minus className="w-5 h-5" />, text: 'Equalização é equilíbrio, não exagero', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { icon: <Headphones className="w-5 h-5" />, text: 'Ouvir é mais importante do que olhar', color: 'border-rose-500/30 bg-rose-500/10 text-rose-400' },
];

export const Slide15_Review: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Revisão" subtitle="Os 6 pilares da Equalização" badge="Recapitulando" />
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

