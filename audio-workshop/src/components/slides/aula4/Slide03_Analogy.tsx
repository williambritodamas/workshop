import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide03Notes } from './notes';
import { Ear, Mic, Volume2 } from 'lucide-react';
export { slide03Notes };

export const Slide03_Analogy: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="O microfone é como..." subtitle="Uma comparação com o nosso corpo" badge="Analogia" />
    <div className="w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-cyan-500/40 shadow-2xl">
        <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6"><Ear className="w-16 h-16" /></div>
        <h3 className="text-2xl font-extrabold text-white mb-2">👂 Ouvido humano</h3>
        <p className="text-slate-400 text-center text-sm">Escuta as vibrações do ar e o cérebro interpreta.</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-center p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-blue-500/40 shadow-2xl">
        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6"><Mic className="w-16 h-16" /></div>
        <h3 className="text-2xl font-extrabold text-white mb-2">🎤 Microfone</h3>
        <p className="text-slate-400 text-center text-sm">Escuta as vibrações e envia o sinal para os equipamentos.</p>
      </motion.div>
    </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 p-4 px-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center">
      <p className="text-lg md:text-xl font-bold text-white">
        "O microfone é o <span className="text-blue-400">ouvido</span> do sistema de áudio."
      </p>
    </motion.div>
  </div>
);
