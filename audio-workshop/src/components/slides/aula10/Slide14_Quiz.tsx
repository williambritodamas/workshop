import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { FeedbackQuiz } from '../../ui/FeedbackQuiz';
import { slide14Notes } from './notes';
export { slide14Notes };

export const Slide14_Quiz: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/169720/pexels-photo-169720.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Estrada" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Quiz: Microfonia" subtitle="Teste seus conhecimentos" badge="Quiz" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <FeedbackQuiz />
    </motion.div>
  </div>
);
