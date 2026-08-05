import { motion } from 'framer-motion';
import { slide01Notes } from './notes';
export { slide01Notes };

export const Slide01_Opening: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Microfone profissional" className="w-full h-full object-cover opacity-35 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
      Workshop Áudio sem Mistério — Aula 10
    </motion.div>
    <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <span className="text-sm md:text-base uppercase tracking-widest text-purple-400 font-semibold mb-4 block">Aula 10</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Microfonia</span>
        </h1>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl md:text-2xl font-bold text-white drop-shadow-lg max-w-3xl">
        O famoso "apito" que todo operador precisa aprender a controlar
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-2 text-lg text-slate-300 font-light max-w-2xl">
        Como evitar, identificar e resolver feedback em segundos.
      </motion.p>
    </div>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
      className="relative z-10 w-full max-w-3xl">
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3">
        <span className="text-purple-400 text-lg">"</span>
        Microfonia não é azar. Ela sempre tem uma causa.
        <span className="text-purple-400 text-lg">"</span>
      </div>
    </motion.div>
  </div>
);

