import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { slide16Notes } from './notes';
import { Sparkles, Mic, Radio, Headphones, Film, Ear, ArrowRight } from 'lucide-react';

export { slide16Notes };

const nextTopics = [
  { title: 'Dinâmicos', icon: <Mic className="w-5 h-5" />, color: 'text-blue-400' },
  { title: 'Condensadores', icon: <Radio className="w-5 h-5" />, color: 'text-cyan-400' },
  { title: 'Headsets', icon: <Headphones className="w-5 h-5" />, color: 'text-purple-400' },
  { title: 'Shotguns', icon: <Film className="w-5 h-5" />, color: 'text-amber-400' },
  { title: 'Lapelas', icon: <Ear className="w-5 h-5" />, color: 'text-emerald-400' },
];

export const Slide16_Closing: React.FC = () => {
  const triggerConfetti = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1920&auto=format&fit=crop"
          alt="Mesa digital iluminada"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-4xl flex flex-col items-center mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4"
        >
          <Sparkles className="w-4 h-4" /> Aula 3 Concluída!
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 uppercase tracking-widest font-semibold"
        >
          Na próxima aula...
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-black text-white tracking-tight mt-2"
        >
          Conhecendo os{' '}
          <span className="text-blue-500">Microfones</span>
        </motion.h2>
      </div>

      {/* Grid dos próximos tópicos */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-4xl my-auto">
        {nextTopics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            whileHover={{ scale: 1.08, y: -5 }}
            className="flex flex-col items-center p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 overflow-hidden shadow-xl"
          >
            <div className={`p-3 rounded-xl bg-slate-800 ${item.color} mb-2`}>
              {item.icon}
            </div>
            <span className="text-xs font-bold text-white">{item.title}</span>
          </motion.div>
        ))}
      </div>

      {/* Frase final */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-4"
      >
        <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-blue-900/60 border border-blue-500/40 text-slate-200 text-base md:text-lg font-medium shadow-2xl max-w-2xl">
          "Quem entende o caminho do som consegue encontrar{' '}
          <span className="text-white font-extrabold underline decoration-blue-500">
            qualquer problema
          </span>."
        </div>

        <button
          onClick={triggerConfetti}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
        >
          <span>Celebrar Conclusão</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
