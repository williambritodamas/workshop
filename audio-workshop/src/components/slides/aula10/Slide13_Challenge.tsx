import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { InteractiveStage } from '../../ui/InteractiveStage';
import { slide13Notes } from './notes';
export { slide13Notes };

export const Slide13_Challenge: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/1726050/pexels-photo-1726050.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Palco de evento" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Desafio: Encontre os Problemas" subtitle="Identifique os erros de posicionamento no palco" badge="Game" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-5xl my-auto">
      <InteractiveStage />
    </motion.div>
  </div>
);

