import { motion } from 'framer-motion';
import { AlertTriangle, Speaker, Zap } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { WaveformComparison } from '../../ui/WaveformComparison';
import { slide08Notes } from './notes';
export { slide08Notes };

export const Slide08_ClipEffects: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Efeitos do Clip" subtitle="O que acontece quando o sinal clipa?" badge="Consequências" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-6">
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
        <WaveformComparison side="clean" label="Som limpo" delay={0} />
        <WaveformComparison side="clipped" label="Som clipado" delay={0.2} />
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
        className="w-full lg:w-1/2 space-y-3"
      >
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-bold text-sm">Distorção audível</span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            O som perde clareza, fica áspero e desagradável. Em sistemas digitais, o clip soa ainda pior.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Speaker className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm">Risco para equipamentos</span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Clip constante pode <span className="text-amber-400 font-bold">danificar alto-falantes</span> (principalmente tweeters) e sobrecarregar amplificadores.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-slate-400" />
            <span className="text-white font-bold text-sm">Sinal digital vs analógico</span>
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Clip <span className="text-red-400 font-bold">digital</span> é instantâneo, agressivo e irrecuperável. Clip <span className="text-amber-400 font-bold">analógico</span> pode ser mais gradual (saturação).
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
