import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { AnimatedArrow } from '../../ui/AnimatedArrow';
import { Mic, Ear, Waves } from 'lucide-react';
import { slide04Notes } from './notes';

export { slide04Notes };
export const Slide04_Definition: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Conceito Fundamental"
        subtitle="Como o som realmente viaja do emissor até quem ouve"
        badge="Definição"
      />

      {/* Ilustração Interativa da Propagação */}
      <div className="w-full max-w-5xl my-auto flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
        {/* Estágio 1: Pessoa Falando */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center group"
        >
          <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-4 group-hover:scale-110 transition-transform">
            <Mic className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <span className="text-xl font-bold text-white">Pessoa falando</span>
          <span className="text-sm text-slate-400 mt-1">Origem do som</span>
        </motion.div>

        {/* Conector + Animação de Ondas no Ar */}
        <AnimatedArrow direction="right" label="Vibração" delay={0.2} />

        {/* Estágio 2: Ondas no Ar com Partículas Animadas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center text-center relative p-6 rounded-2xl bg-slate-800/80 border border-blue-500/40 min-w-[240px]"
        >
          <div className="flex items-center justify-center gap-1 mb-4 text-blue-400">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scaleY: [1, 2.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.15,
                }}
                className="w-1.5 h-8 bg-blue-400 rounded-full"
              />
            ))}
          </div>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <Waves className="w-5 h-5 text-blue-400" /> Ondas no ar
          </span>
          <span className="text-sm text-slate-400 mt-1">Moléculas em movimento</span>
        </motion.div>

        {/* Conector */}
        <AnimatedArrow direction="right" label="Recepção" delay={0.4} />

        {/* Estágio 3: Ouvido */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center text-center group"
        >
          <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
            <Ear className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <span className="text-xl font-bold text-white">Ouvido</span>
          <span className="text-sm text-slate-400 mt-1">Receptor do sinal</span>
        </motion.div>
      </div>

      {/* Explicação Simples e Direta */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 border border-blue-500/30 text-center"
      >
        <p className="text-2xl md:text-3xl font-extrabold text-white">
          "Som é uma <span className="text-blue-400 underline decoration-cyan-400">vibração</span> que se propaga pelo ar."
        </p>
      </motion.div>
    </div>
  );
};
