import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { GoldenRules } from '../../ui/GoldenRules';
import { slide13Notes } from './notes';
export { slide13Notes };

export const Slide13_GoldenRules: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Sound_reinforcement_system.jpg?width=1920" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="As 10 Regras de Ouro" subtitle="Princípios para toda uma carreira no áudio" badge="Regras" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <GoldenRules />
    </motion.div>
  </div>
);
