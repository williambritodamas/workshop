import { motion } from 'framer-motion';
import { Minimize2, VolumeX } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { CancellationVisualizer } from '../../ui/CancellationVisualizer';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_WavesOutOfPhase: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/1726050/pexels-photo-1726050.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Água ondulando" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Ondas Fora de Fase" subtitle="Quando uma anula a outra" badge="Cancelamento" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col md:flex-row items-center gap-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full"
      >
        <CancellationVisualizer />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="flex-1 w-full max-w-sm p-6 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <Minimize2 className="w-6 h-6 text-red-400" />
          <VolumeX className="w-6 h-6 text-red-400" />
        </div>
        <h3 className="text-red-400 font-black text-lg mb-2">Resultado</h3>
        <ul className="space-y-2 text-xs">
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-red-400 mt-0.5">✗</span> Crista encontra vale = cancelamento
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-red-400 mt-0.5">✗</span> Em 180° o cancelamento é total
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-red-400 mt-0.5">✗</span> Som some ou fica muito fraco
          </li>
        </ul>
        <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <p className="text-slate-400 text-[10px] italic text-center">
            "Arraste o slider para ver como o desalinhamento progressivo reduz a amplitude."
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
