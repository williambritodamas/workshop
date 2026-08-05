import { motion } from 'framer-motion';
import { Award, Sparkles, ArrowRight } from 'lucide-react';
import { slide16Notes } from './notes';
export { slide16Notes };

export const Slide16_Closing: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Operador ajustando compressor" className="w-full h-full object-cover opacity-25 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
      Aula 8 Concluída
    </motion.div>
    <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-6">
          <Award className="w-12 h-12 md:w-16 md:h-16" />
        </div>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl"
      >
        Compressão{' '}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dominada</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-2xl"
      >
        Você aprendeu a controlar a dinâmica do som com precisão e equilíbrio.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3 max-w-2xl"
      >
        <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
        <span>"O melhor compressor é aquele que resolve o problema sem chamar atenção."</span>
      </motion.div>
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      className="relative z-10 text-slate-500 text-xs flex items-center gap-2"
    >
      <span>Próxima aula: Fase e Polaridade</span>
      <ArrowRight className="w-3 h-3" />
    </motion.div>
  </div>
);


