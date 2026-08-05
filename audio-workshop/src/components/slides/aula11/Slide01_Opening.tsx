import { motion } from 'framer-motion';
import { slide01Notes } from './notes';
export { slide01Notes };

export const Slide01_Opening: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/sound-reinforcement.jpg" alt="Sistema de som" className="w-full h-full object-cover opacity-35 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
      Workshop Áudio sem Mistério — Aula 11
    </motion.div>
    <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <span className="text-sm md:text-base uppercase tracking-widest text-purple-400 font-semibold mb-4 block">Aula 11</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Montando um Sistema de Áudio do Zero</span>
        </h1>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl md:text-2xl font-bold text-white drop-shadow-lg max-w-3xl">
        Do microfone às caixas de som
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-2 text-lg text-slate-300 font-light max-w-2xl">
        Aprenda a montar, conectar e testar um sistema completo de áudio.
      </motion.p>
    </div>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
      className="relative z-10 w-full max-w-3xl">
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3">
        <span className="text-purple-400 text-lg">"</span>
        Montar bem é metade do sucesso de uma operação de áudio.
        <span className="text-purple-400 text-lg">"</span>
      </div>
    </motion.div>
  </div>
);


