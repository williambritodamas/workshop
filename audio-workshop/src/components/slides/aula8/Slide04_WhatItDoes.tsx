import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { DynamicRangeGraph } from '../../ui/DynamicRangeGraph';
import { slide04Notes } from './notes';
export { slide04Notes };

export const Slide04_WhatItDoes: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que faz o Compressor?" subtitle="Reduz os picos para equilibrar o volume" badge="Compressor" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <DynamicRangeGraph label="Antes vs Depois da compressão" />
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            O compressor <span className="text-purple-400 font-bold">reduz os picos mais altos</span> para deixar o volume mais uniforme.
          </p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <ArrowDown className="w-5 h-5 text-red-400" />
            <span className="text-white font-bold text-sm">Antes</span>
          </div>
          <div className="flex gap-1 items-end h-12 mb-2">
            {[10, 80, 15, 90, 12, 85, 18].map((v, i) => (
              <div key={i} className="flex-1 bg-red-400/60 rounded-t" style={{ height: `${v}%` }} />
            ))}
          </div>
          <span className="text-red-400 text-[10px] font-bold">Picos muito altos e vales muito baixos</span>
        </div>
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-3">
            <ArrowUp className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-bold text-sm">Depois</span>
          </div>
          <div className="flex gap-1 items-end h-12 mb-2">
            {[25, 55, 28, 60, 27, 58, 30].map((v, i) => (
              <div key={i} className="flex-1 bg-emerald-400/60 rounded-t" style={{ height: `${v}%` }} />
            ))}
          </div>
          <span className="text-emerald-400 text-[10px] font-bold">Picos reduzidos, volume mais uniforme</span>
        </div>
        <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center">
          <p className="text-purple-300 text-xs italic">É como um elevador que limita quantas pessoas entram para evitar sobrecarga.</p>
        </div>
      </motion.div>
    </div>
  </div>
);

