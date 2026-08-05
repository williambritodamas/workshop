import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { VoiceEqualizerExercise } from '../../ui/VoiceEqualizerExercise';
import { slide12Notes } from './notes';
export { slide12Notes };

export const Slide12_VoiceEQ: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Equalizando uma Voz" subtitle="Desafio Ouvido de Ouro" badge="Interativo" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <VoiceEqualizerExercise />
    </motion.div>
  </div>
);

