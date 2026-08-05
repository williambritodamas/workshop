import { motion } from 'framer-motion';
import { Plus, Volume2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { WaveOverlay } from '../../ui/WaveOverlay';
import { slide04Notes } from './notes';
export { slide04Notes };

export const Slide04_WavesInPhase: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/1726050/pexels-photo-1726050.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Água ondulando" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Ondas em Fase" subtitle="Quando duas ondas caminham juntas" badge="Soma Construtiva" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col md:flex-row items-center gap-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full"
      >
        <WaveOverlay phaseOffset={0} />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="flex-1 w-full max-w-sm p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <Plus className="w-6 h-6 text-emerald-400" />
          <Volume2 className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-emerald-400 font-black text-lg mb-2">Resultado</h3>
        <ul className="space-y-2 text-xs">
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-emerald-400 mt-0.5">✓</span> Ondas alinhadas = amplitudes se somam
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-emerald-400 mt-0.5">✓</span> Som resultante mais forte
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-emerald-400 mt-0.5">✓</span> Timbre e frequência preservados
          </li>
        </ul>
        <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <p className="text-slate-400 text-[10px] italic text-center">
            "Cantar junto é um exemplo de ondas em fase — todos reforçam o som."
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

