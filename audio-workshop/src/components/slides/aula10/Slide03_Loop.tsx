import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { FeedbackLoopAnimation } from '../../ui/FeedbackLoopAnimation';
import { slide03Notes } from './notes';
export { slide03Notes };

export const Slide03_Loop: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Ondas sonoras" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O Ciclo da Microfonia" subtitle="Como o som se realimenta" badge="Feedback Loop" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-3/5">
        <FeedbackLoopAnimation />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-full lg:w-2/5 space-y-3">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            Pessoa fala → <span className="text-purple-400">Microfone capta</span> → <span className="text-amber-400">Mixer amplifica</span> → <span className="text-red-400">Caixa reproduz</span> → Microfone capta de novo → <span className="text-red-500 font-bold">LOOP</span>
          </p>
        </div>
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            A cada ciclo, o som fica mais forte até o sistema saturar. O resultado é o <span className="text-red-400 font-bold">apito</span>.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
