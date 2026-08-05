import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { CableOrganizer } from '../../ui/CableOrganizer';
import { slide06Notes } from './notes';
export { slide06Notes };

export const Slide06_Cables: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="/images/sound-reinforcement.jpg" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Organização de Cabos" subtitle="Cabos bagunçados vs cabos organizados" badge="Cabos" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-4xl my-auto">
      <CableOrganizer />
    </motion.div>
  </div>
);

