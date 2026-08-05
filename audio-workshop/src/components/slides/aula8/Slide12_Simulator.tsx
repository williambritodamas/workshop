import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { CompressorSimulator } from '../../ui/CompressorSimulator';
import { slide12Notes } from './notes';
export { slide12Notes };

export const Slide12_Simulator: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Simulador de Compressor" subtitle="Experimente cada parâmetro e veja o resultado" badge="Interativo" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <CompressorSimulator />
    </motion.div>
  </div>
);

