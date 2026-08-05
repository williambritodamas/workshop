import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { RatioComparison } from '../../ui/RatioComparison';
import { slide06Notes } from './notes';
export { slide06Notes };

export const Slide06_Ratio: React.FC = () => {
  const [ratio, setRatio] = useState(2);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Ratio" subtitle="O quanto o sinal será comprimido" badge="Ratio" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2"
        >
          <RatioComparison ratio={ratio} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              O <span className="text-purple-400 font-bold">Ratio</span> define quantos dB passam para cada dB acima do Threshold.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-emerald-400 font-bold">2:1</span> — Compressão suave (voz natural)
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mt-1">
              <span className="text-amber-400 font-bold">4:1</span> — Compressão moderada (podcast)
            </p>
            <p className="text-slate-300 text-sm leading-relaxed mt-1">
              <span className="text-red-400 font-bold">∞:1</span> — Limiter (proteção)
            </p>
          </div>
          <div>
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Ratio</span>
              <span className="text-white font-bold">{ratio}:1</span>
            </div>
            <input type="range" min={1} max={8} step={1} value={ratio} onChange={(e) => setRatio(Number(e.target.value))}
              className="w-full accent-purple-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

