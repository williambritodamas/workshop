import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, Waves } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { WaveAnimation } from '../../ui/WaveAnimation';
import { slide03Notes } from './notes';
export { slide03Notes };

export const Slide03_SoundWave: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/1726050/pexels-photo-1726050.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Água ondulando" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que é uma Onda Sonora?" subtitle="Cristas, vales e o ciclo do som" badge="Conceito" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center gap-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <WaveAnimation color="#22d3ee" animate speed={1.5} />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm text-center"
        >
          <ArrowUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <span className="text-blue-300 font-extrabold text-sm">Crista</span>
          <p className="text-slate-400 text-[10px] mt-1">Ponto máximo da onda — compressão do ar</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm text-center"
        >
          <Waves className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
          <span className="text-emerald-300 font-extrabold text-sm">Ciclo</span>
          <p className="text-slate-400 text-[10px] mt-1">Uma volta completa da onda — 360°</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center"
        >
          <ArrowDown className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <span className="text-purple-300 font-extrabold text-sm">Vale</span>
          <p className="text-slate-400 text-[10px] mt-1">Ponto mínimo da onda — rarefação do ar</p>
        </motion.div>
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="text-slate-400 text-xs text-center max-w-xl"
      >
        A <span className="text-cyan-400 font-bold">fase</span> de uma onda indica em que ponto do ciclo ela está em um dado instante.
      </motion.p>
    </div>
  </div>
);

