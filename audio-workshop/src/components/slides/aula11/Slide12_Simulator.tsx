import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { InteractiveRack } from '../../ui/InteractiveRack';
import { slide12Notes } from './notes';
export { slide12Notes };

export const Slide12_Simulator: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Audio_mixer_faders.jpg/1280px-Audio_mixer_faders.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Simulador de Rack" subtitle="Monte o rack na ordem correta arrastando os equipamentos" badge="Interativo" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <InteractiveRack />
    </motion.div>
  </div>
);
