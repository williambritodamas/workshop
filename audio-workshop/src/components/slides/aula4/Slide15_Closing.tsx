import { motion } from 'framer-motion';
import { slide15Notes } from './notes';
import { Mic, ChevronRight, Sparkles } from 'lucide-react';
export { slide15Notes };

export const Slide15_Closing: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <motion.div
      animate={{ scale: [1, 1.1, 1], rotate: [0, 3, -3, 0] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] text-slate-800/10 pointer-events-none select-none font-black"
    >
      🎤
    </motion.div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
      Workshop Áudio sem Mistério — Fim da Aula 4
    </motion.div>
    <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Microfones</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-slate-300 mt-2">Fim da aula! 🎉</p>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl">
        Agora você sabe escolher, posicionar e cuidar de microfones como um profissional.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 flex items-center gap-3 p-3 px-5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-sm">
        <Sparkles className="w-5 h-5 text-yellow-400" />
        Na próxima aula: Mesas de Som
        <ChevronRight className="w-4 h-4 text-blue-400" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8">
        <p className="text-xs text-slate-600">Pressione N para ver as notas do apresentador • M para menu</p>
      </motion.div>
    </div>
  </div>
);
