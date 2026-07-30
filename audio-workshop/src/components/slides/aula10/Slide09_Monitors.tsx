import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { MonitorPlacementGuide } from '../../ui/MonitorPlacementGuide';
import { slide09Notes } from './notes';
export { slide09Notes };

export const Slide09_Monitors: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Palco com monitores" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Monitores de Palco" subtitle="A maior fonte de microfonia ao vivo" badge="Monitores" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-3/5">
        <MonitorPlacementGuide />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-full lg:w-2/5 space-y-3">
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
          <p className="text-blue-400 text-xs font-bold">Zona Nula do Cardioidal</p>
          <p className="text-slate-300 text-xs mt-1">O microfone cardioidal rejeita som vindo de trás (180°). O monitor deve estar exatamente nessa zona.</p>
        </div>
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
          <p className="text-green-400 text-xs font-bold">Posição Ideal</p>
          <p className="text-slate-300 text-xs mt-1">Monitor na frente do cantor, apontado para o peito, com o microfone entre o cantor e o monitor.</p>
        </div>
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <p className="text-red-400 text-xs font-bold">Posição Crítica</p>
          <p className="text-slate-300 text-xs mt-1">Nunca coloque o monitor atrás do cantor ou apontado diretamente para a cápsula do microfone.</p>
        </div>
      </motion.div>
    </div>
  </div>
);
