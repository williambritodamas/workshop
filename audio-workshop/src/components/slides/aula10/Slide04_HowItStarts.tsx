import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { FeedbackMeter } from '../../ui/FeedbackMeter';
import { slide04Notes } from './notes';
export { slide04Notes };

export const Slide04_HowItStarts: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mixing_console.jpg/1280px-Mixing_console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Como a Microfonia Começa?" subtitle="O micrófono se aproxima da caixa e o risco cresce" badge="Entendendo" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-3/5">
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-4 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-green-500" />
              <span className="text-green-400 text-xs font-bold">Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-amber-500" />
              <span className="text-amber-400 text-xs font-bold">Atenção</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-red-500" />
              <span className="text-red-400 text-xs font-bold">Feedback</span>
            </div>
          </div>
          <FeedbackMeter level={65} />
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-full lg:w-2/5 space-y-3">
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
          <p className="text-green-400 text-xs font-bold">🟢 Zona Segura</p>
          <p className="text-slate-300 text-xs mt-1">Ganho adequado, posicionamento correto.</p>
        </div>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
          <p className="text-amber-400 text-xs font-bold">🟡 Pré-Feedback</p>
          <p className="text-slate-300 text-xs mt-1">O som começa a "cavar" — está no limite.</p>
        </div>
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <p className="text-red-400 text-xs font-bold">🔴 Feedback</p>
          <p className="text-slate-300 text-xs mt-1">Microfonia estabelecida. Ação imediata necessária.</p>
        </div>
      </motion.div>
    </div>
  </div>
);
