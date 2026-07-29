import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { PresenterNote } from '../../../types/presentation';
import { Sparkles, ArrowRight, Waves, Sliders, Gauge, LogIn, LogOut } from 'lucide-react';

export const slide15Notes: PresenterNote = {
  explanation: 'Finalize a Aula 2 parabenizando os participantes e deixando um teaser instigante sobre a Aula 3 (onde aprenderão na prática como o som viaja, como regular o Ganho para não distorcer e como usar entradas e saídas).',
  practicalExamples: [
    'Convide a turma para apertar o botão de celebração no final do slide.',
  ],
  audienceQuestions: [
    'Prontos para aprenderem a regular o ganho sem queimar as caixas na Aula 3?',
  ],
};

export const Slide15_Closing2: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const nextClassTopics = [
    { title: 'Como o Som Viaja', icon: <Waves className="w-5 h-5 text-blue-400" /> },
    { title: 'Fluxo de Sinal', icon: <Sliders className="w-5 h-5 text-cyan-400" /> },
    { title: 'Estrutura de Ganho', icon: <Gauge className="w-5 h-5 text-yellow-400" /> },
    { title: 'Controle de Volume', icon: <Sliders className="w-5 h-5 text-purple-400" /> },
    { title: 'Entradas (Inputs)', icon: <LogIn className="w-5 h-5 text-emerald-400" /> },
    { title: 'Saídas (Outputs)', icon: <LogOut className="w-5 h-5 text-pink-400" /> },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-12 overflow-hidden">
      {/* Background Operador de Áudio */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1920&auto=format&fit=crop"
          alt="Operador de áudio trabalhando em evento"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
      </div>

      {/* Conteúdo Superior */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center mt-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-3"
        >
          <Sparkles className="w-4 h-4" /> Parabéns por concluir a Aula 2!
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base text-slate-400 uppercase tracking-widest font-semibold"
        >
          Na próxima aula...
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-white tracking-tight mt-1"
        >
          Operação Prática & <span className="text-blue-500">Fluxo de Sinal</span>
        </motion.h2>
      </div>

      {/* Grid com Tópicos da Próxima Aula */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-5xl my-auto">
        {nextClassTopics.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 text-center shadow-lg"
          >
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 mb-2">
              {item.icon}
            </div>
            <span className="text-xs md:text-sm font-bold text-slate-200">
              {item.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Frase de Fechamento */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-4"
      >
        <div
          onClick={triggerConfetti}
          className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-blue-900/60 border border-blue-500/40 text-slate-200 text-base md:text-lg font-medium shadow-2xl cursor-pointer hover:border-blue-400 transition-colors"
        >
          "Antes de apertar qualquer botão, <span className="text-white font-extrabold underline decoration-blue-500">descubra para onde o som está indo</span>."
        </div>

        <button
          onClick={triggerConfetti}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 hover:scale-105"
        >
          <span>Celebrar Conclusão da Aula 2</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
