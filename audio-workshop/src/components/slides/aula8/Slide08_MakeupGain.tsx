import { motion } from 'framer-motion';
import { ArrowUpCircle, ArrowDownCircle, Gauge } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide08Notes } from './notes';
export { slide08Notes };

export const Slide08_MakeupGain: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Make-up Gain" subtitle="Recuperando o nível após a compressão" badge="Make-up Gain" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5 text-slate-400" />
            <span className="text-white font-bold text-sm">1. Antes da compressão</span>
          </div>
          <div className="flex gap-1 items-end h-10">
            {[30, 90, 25, 95, 20, 85, 28].map((v, i) => (
              <div key={i} className="flex-1 bg-slate-600 rounded-t" style={{ height: `${v * 0.6}%` }} />
            ))}
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <ArrowDownCircle className="w-5 h-5 text-red-400" />
            <span className="text-white font-bold text-sm">2. Depois da compressão</span>
          </div>
          <div className="flex gap-1 items-end h-10">
            {[18, 55, 15, 58, 12, 52, 17].map((v, i) => (
              <div key={i} className="flex-1 bg-red-400/60 rounded-t" style={{ height: `${v * 0.6}%` }} />
            ))}
          </div>
          <span className="text-red-400 text-[10px] font-bold mt-1 block">Picos reduzidos, mas nível geral caiu</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <ArrowUpCircle className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-bold text-sm">3. Depois do Make-up Gain</span>
          </div>
          <div className="flex gap-1 items-end h-10">
            {[40, 77, 37, 80, 34, 74, 39].map((v, i) => (
              <div key={i} className="flex-1 bg-emerald-400/60 rounded-t" style={{ height: `${v * 0.6}%` }} />
            ))}
          </div>
          <span className="text-emerald-400 text-[10px] font-bold mt-1 block">Nível recuperado, picos ainda controlados</span>
        </div>
        <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center">
          <p className="text-purple-300 text-sm font-bold">Primeiro controlamos. Depois compensamos.</p>
        </div>
      </motion.div>
    </div>
  </div>
);

