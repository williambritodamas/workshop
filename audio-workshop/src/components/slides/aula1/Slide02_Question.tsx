import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { slide02Notes } from './notes';

export { slide02Notes };
export const Slide02_Question: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-hidden">
      {/* Imagem de Fundo de Ondas Sonoras */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1920&auto=format&fit=crop"
          alt="Ondas sonoras"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      {/* Círculos pulsantes visuais em segundo plano */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[400px] h-[400px] rounded-full border border-blue-500/20 animate-wave" />
        <div className="w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-wave delay-500" />
      </div>

      {/* Pergunta Principal Gigante */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6"
        >
          <HelpCircle className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-lg"
        >
          O que é <span className="text-blue-500">SOM?</span>
        </motion.h1>

        {/* Texto Provocativo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl max-w-2xl text-slate-300 text-xl md:text-2xl font-light leading-relaxed shadow-2xl"
        >
          <p className="text-slate-400">Antes de falar de equipamentos...</p>
          <p className="mt-2 text-white font-medium">
            precisamos entender o que estamos tentando controlar.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
