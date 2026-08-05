import React from 'react';
import { motion } from 'framer-motion';
import type { PresenterNote } from '../../../types/presentation';
import { Sparkles, Sliders } from 'lucide-react';

export const slide01Notes: PresenterNote = {
  explanation: 'Esta aula apresenta individualmente cada peça do quebra-cabeça de um sistema de som. O objetivo não é fazer os alunos decorarem especificações técnicas, mas sim reconhecerem visualmente cada equipamento e entenderem seu papel principal.',
  practicalExamples: [
    'Mostre um microfone real ou um cabo XLR e passe entre a plateia para desmistificar o contato.',
    'Associe cada equipamento a elementos do corpo humano (Mic = Ouvido, Mesa = Cérebro, Caixa = Voz).',
  ],
  audienceQuestions: [
    'Quem aqui já ficou com medo de encostar em uma mesa cheia de botões?',
    'Quem consegue nomear pelo menos 3 equipamentos de som de cabeça?',
  ],
  liveDemos: [
    'Ligue um microfone em uma caixa e faça uma fala simples para que todos vejam o resultado imediato.',
  ],
};

export const Slide01_Intro2: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16">
      {/* Background Image com Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1920&auto=format&fit=crop"
          alt="Mesa de som em evento"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      {/* Tag de topo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium"
      >
        <Sliders className="w-4 h-4" />
        <span>Workshop Áudio sem Mistério — Aula 2</span>
      </motion.div>

      {/* Conteúdo Central */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
            Conhecendo os <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Equipamentos</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-2xl"
        >
          Do microfone às caixas: identifique e entenda a função de cada elemento.
        </motion.p>
      </div>

      {/* Rodapé e Frase */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-4"
      >
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 backdrop-blur-md text-slate-300 text-sm md:text-base italic flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
          <span>"Quem conhece cada equipamento perde o medo de operar qualquer sistema."</span>
        </div>

        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Aula 2 — Conhecendo os Equipamentos de Áudio
        </span>
      </motion.div>
    </div>
  );
};

