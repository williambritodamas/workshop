import { motion } from 'framer-motion';
import { slide01Notes } from './notes';
export { slide01Notes };

export const Slide01_Opening: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som com faders" className="w-full h-full object-cover opacity-35 scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium">
      Workshop Áudio sem Mistério — Aula 6
    </motion.div>
    <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <span className="text-sm md:text-base uppercase tracking-widest text-amber-400 font-semibold mb-4 block">Aula 06</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
          Gain, <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Volume</span> e Clip
        </h1>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 text-xl md:text-2xl font-bold text-white drop-shadow-lg max-w-2xl">
        O segredo de um som profissional começa aqui.
      </motion.p>
    </div>
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
      className="relative z-10 w-full max-w-3xl">
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3">
        <span className="text-amber-400 text-lg">"</span>
        Quem controla bem o ganho resolve metade dos problemas de um sistema de áudio.
        <span className="text-amber-400 text-lg">"</span>
      </div>
    </motion.div>
  </div>
);
