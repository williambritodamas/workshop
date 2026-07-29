import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { HeadroomIllustration } from '../../ui/HeadroomIllustration';
import { slide09Notes } from './notes';
export { slide09Notes };

export const Slide09_Headroom: React.FC = () => {
  const [level, setLevel] = useState(40);

  const status = level >= 100 ? 'overflow' : level >= 80 ? 'full' : 'safe';

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Headroom" subtitle="A margem de segurança do sinal" badge="Headroom" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-blue-400 font-bold">Headroom</span> é o espaço de segurança entre o nível médio de operação e o ponto de clipping.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              Pense como um <span className="text-amber-400 font-bold">copo d'água</span>: você nunca enche até a borda se precisar andar com ele. Deixe espaço para os picos.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-emerald-400 font-bold">Regra prática:</span> mantenha o sinal médio em torno de <span className="text-white font-bold">-18 dBFS</span> (digital) ou <span className="text-white font-bold">0 dBVU</span> (analógico).
            </p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col items-center gap-6"
        >
          <div className="flex gap-6">
            <HeadroomIllustration level={level} label={`${level}%`} status={status} />
          </div>
          <div className="w-full max-w-xs">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>Nível do sinal</span>
              <span className={status === 'overflow' ? 'text-red-400 font-bold' : 'text-white'}>{level}%</span>
            </div>
            <input type="range" min={0} max={120} value={level} onChange={(e) => setLevel(Number(e.target.value))}
              className="w-full accent-amber-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
            <div className="flex justify-between text-[10px] text-slate-600 mt-1">
              <span>Silêncio</span>
              <span className="text-red-500">Clip</span>
            </div>
          </div>
          {status === 'overflow' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-center max-w-xs w-full"
            >
              <span className="text-red-400 text-sm font-black">SEM HEADROOM! Sinal clipado!</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
