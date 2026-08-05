import { motion } from 'framer-motion';
import { ProblemPanel } from '../../ui/ProblemPanel';
import { AudioEscapeRoom } from '../../ui/AudioEscapeRoom';
import { slide06Notes } from './notes';
export { slide06Notes };

export const Slide06_NoSound: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/mixing-console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
      Diagnóstico
    </motion.div>
    <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">O sistema não funciona</h2>
    <p className="relative z-10 text-slate-400 text-sm mt-1">Não sai som — siga o checklist para diagnosticar</p>
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <ProblemPanel />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <AudioEscapeRoom />
      </motion.div>
    </div>
  </div>
);
