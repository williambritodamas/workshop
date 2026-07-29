import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music } from 'lucide-react';
import { slide01Notes } from './notes';

export { slide01Notes };
export const Slide01_Intro: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
      {/* Background Image com Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1920&auto=format&fit=crop"
          alt="Palco iluminado"
          className="w-full h-full object-cover opacity-35 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      {/* Cabeçalho superior */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
      >
        <Music className="w-4 h-4" />
        <span>Workshop de Introdução ao Audiovisual</span>
      </motion.div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
            Áudio sem <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mistério</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-2xl"
        >
          Desmistificando os conceitos fundamentais para quem está começando do zero.
        </motion.p>
      </div>

      {/* Rodapé e Citação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-4"
      >
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
          <span>"Todo grande operador de áudio começou apertando o botão errado."</span>
        </div>

        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Aula 1 — O que é Som?
        </span>
      </motion.div>
    </div>
  );
};
