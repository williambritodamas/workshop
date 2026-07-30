import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { FinalQuiz } from '../../ui/FinalQuiz';
import { slide10Notes } from './notes';
export { slide10Notes };

export const Slide10_FinalQuiz: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Quiz Final" subtitle="Teste seus conhecimentos de todas as aulas" badge="Quiz" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <FinalQuiz />
    </motion.div>
  </div>
);
