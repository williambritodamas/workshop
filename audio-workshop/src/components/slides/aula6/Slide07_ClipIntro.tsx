import { motion } from 'framer-motion';
import { AlertTriangle, Waves } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { ClipVisualizer } from '../../ui/ClipVisualizer';
import { slide07Notes } from './notes';
export { slide07Notes };

export const Slide07_ClipIntro: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que é Clip?" subtitle="O inimigo número 1 de um som limpo" badge="Clip" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-white font-bold text-sm">O que significa?</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Clip (clipping) é a <span className="text-red-400 font-bold">distorção</span> que acontece quando o sinal ultrapassa o limite máximo que o equipamento suporta.
          </p>
        </div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Waves className="w-5 h-5 text-slate-400" />
            <span className="text-white font-bold text-sm">O que acontece com a onda?</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            A forma de onda é <span className="text-red-400 font-bold">"achatada"</span> no topo e na base. O som perde a dinâmica natural e fica distorcido.
          </p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 flex flex-col items-center gap-4"
      >
        <ClipVisualizer clip={false} />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
          <ClipVisualizer clip={true} />
        </motion.div>
      </motion.div>
    </div>
  </div>
);
