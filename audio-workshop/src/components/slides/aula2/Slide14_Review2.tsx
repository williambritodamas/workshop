import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { CheckCircle2, Award } from 'lucide-react';

export const slide14Notes: PresenterNote = {
  explanation: 'Estes 5 pontos resumem a aula inteira em frases diretas de uma linha. Leia uma por uma em voz alta com a turma.',
  practicalExamples: [
    'Sublinhe a complementaridade: Microfone capta -> Cabos transportam -> Mesa controla -> Amplificador empurra -> Caixa emite.',
  ],
  audienceQuestions: [
    'Ficou alguma dúvida sobre a diferença entre o que o Microfone faz e o que a Caixa de Som faz?',
  ],
};

export const Slide14_Review2: React.FC = () => {
  const points = [
    'Microfone capta o som.',
    'Mesa controla o áudio.',
    'Cabos transportam o sinal.',
    'Amplificador fornece potência.',
    'Caixa transforma eletricidade em som.',
  ];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Revisão da Aula 2"
        subtitle="Os 5 pilares dos equipamentos de sonorização profissional"
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
        <span>Todos os equipamentos básicos foram identificados com sucesso!</span>
      </motion.div>
    </div>
  );
};

