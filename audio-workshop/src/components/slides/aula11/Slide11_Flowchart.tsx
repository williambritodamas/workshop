import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { TroubleshootingFlowchart } from '../../ui/TroubleshootingFlowchart';
import { slide11Notes } from './notes';
export { slide11Notes };

export const Slide11_Flowchart: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Audio_mixer_faders.jpg/1280px-Audio_mixer_faders.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Fluxograma de Diagnóstico" subtitle="Siga as perguntas para encontrar a causa do problema" badge="Diagnóstico" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-3xl my-auto">
      <TroubleshootingFlowchart />
    </motion.div>
  </div>
);
