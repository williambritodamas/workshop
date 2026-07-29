import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { CheckCircle2, Award } from 'lucide-react';
import { slide13Notes } from './notes';

export { slide13Notes };
export const Slide13_Review: React.FC = () => {
  const points = [
    'Som é vibração.',
    'Vibração gera ondas.',
    'Microfone transforma som em eletricidade.',
    'Alto-falante transforma eletricidade em som.',
    'Todo sistema de áudio começa com uma fonte sonora.',
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Revisão dos Aprendizados"
        subtitle="Os 5 pilares fundamentais dominados na Aula 1"
        badge="Resumo da Aula"
      />

      {/* Cartões Grandes de Revisão */}
      <div className="w-full max-w-4xl my-auto flex flex-col gap-4">
        {points.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all shadow-lg group"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {point}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Selo de Conclusão */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-6 flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold text-sm md:text-base"
      >
        <Award className="w-5 h-5 text-yellow-400" />
        <span>Fundamentos básicos da acústica e eletroacústica estabelecidos!</span>
      </motion.div>
    </div>
  );
};
