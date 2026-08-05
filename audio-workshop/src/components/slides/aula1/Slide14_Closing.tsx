import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, Mic, Sliders, Cable, Speaker } from 'lucide-react';
import { slide14Notes } from './notes';

export { slide14Notes };
export const Slide14_Closing: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const nextTopics = [
    { title: 'Microfones', icon: <Mic className="w-6 h-6 text-blue-400" />, img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400&auto=format&fit=crop' },
    { title: 'Mesa Analógica', icon: <Sliders className="w-6 h-6 text-cyan-400" />, img: 'https://images.pexels.com/photos/164927/pexels-photo-164927.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Mesa Digital', icon: <Sliders className="w-6 h-6 text-indigo-400" />, img: 'https://images.pexels.com/photos/34228403/pexels-photo-34228403.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Cabos & Conectores', icon: <Cable className="w-6 h-6 text-yellow-400" />, img: 'https://images.pexels.com/photos/7513422/pexels-photo-7513422.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { title: 'Caixas de Som', icon: <Speaker className="w-6 h-6 text-emerald-400" />, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center text-center p-8 md:p-12 overflow-y-auto">
      {/* Background de Palco com Iluminação */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
          alt="Palco e iluminação"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
      </div>

      {/* Título de Encerramento e Teaser */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center mt-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4"
        >
          <Sparkles className="w-4 h-4" /> Parabéns por concluir a Aula 1!
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
          Conhecendo os <span className="text-blue-500">Equipamentos de Áudio</span>
        </motion.h2>
      </div>

      {/* Grid de Pequenas Imagens dos Próximos Equipamentos */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl my-auto">
        {nextTopics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center p-3 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 overflow-y-auto shadow-xl"
          >
            <div className="w-full h-24 rounded-xl overflow-y-auto mb-3 relative">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-200 text-center">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Frase Final de Impacto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-4"
      >
        <div
          onClick={triggerConfetti}
          className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-blue-900/60 border border-blue-500/40 text-slate-200 text-lg md:text-xl font-medium shadow-2xl cursor-pointer hover:border-blue-400 transition-colors"
        >
          "Quem entende o caminho do som, <span className="text-white font-extrabold underline decoration-blue-500">nunca mais aperta botões sem saber o motivo</span>."
        </div>

        <button
          onClick={triggerConfetti}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
        >
          <span>Celebrar Conclusão da Aula 1</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};

