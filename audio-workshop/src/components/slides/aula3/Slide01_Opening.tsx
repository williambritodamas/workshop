import { motion } from 'framer-motion';
import { slide01Notes } from './notes';

export { slide01Notes };

export const Slide01_Opening: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
          alt="Operador controlando show"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
      >
        <span>Workshop Áudio sem Mistério — Aula 3</span>
      </motion.div>

      <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-sm md:text-base uppercase tracking-widest text-blue-400 font-semibold mb-4 block">
            Aula 03
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
            O Caminho do{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Som</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-2xl"
        >
          Como sua voz chega até as caixas de som?
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-4"
      >
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3">
          <span className="text-blue-400 text-lg">"</span>
          <span>Todo problema de áudio acontece em algum ponto do caminho.</span>
          <span className="text-blue-400 text-lg">"</span>
        </div>
      </motion.div>
    </div>
  );
};

