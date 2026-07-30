import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { PhaseAlignmentSimulator } from '../../ui/PhaseAlignmentSimulator';
import { slide10Notes } from './notes';
export { slide10Notes };

export const Slide10_DemoVisual: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Demonstração Visual" subtitle="Controle o desalinhamento e veja o efeito em tempo real" badge="Interativo" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 w-full max-w-lg my-auto"
    >
      <PhaseAlignmentSimulator />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center"
      >
        <p className="text-slate-400 text-xs">
          Experimente diferentes valores:<br />
          <span className="text-emerald-400 font-bold">0°</span> — alinhado &nbsp;|&nbsp;
          <span className="text-amber-400 font-bold">90°</span> — parcial &nbsp;|&nbsp;
          <span className="text-red-400 font-bold">180°</span> — cancelamento total &nbsp;|&nbsp;
          <span className="text-amber-400 font-bold">270°</span> — parcial novamente
        </p>
      </motion.div>
    </motion.div>
  </div>
);
