import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { Mic, Disc, Lightbulb } from 'lucide-react';

export const slide03Notes: PresenterNote = {
  explanation: 'Reforce o conceito de transdutor visto na Aula 1: o microfone escuta as vibrações mecânicas da voz ou instrumentos e converte em eletricidade. Ele é a porta de entrada absoluta do sistema.',
  practicalExamples: [
    'Conecte um microfone e tampe a cápsula com a mão para mostrar como o som fica abafado.',
    'Explique por que colocamos o microfone perto da boca (ganho antes da realimentação/microfonia).',
  ],
  audienceQuestions: [
    'O que acontece se ligarmos o sistema de som inteiro mas esquecermos do microfone?',
  ],
};

export const Slide03_MicrophoneIntro: React.FC = () => {
  const sources = ['Voz', 'Violão', 'Bateria', 'Coral'];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Microfone"
        subtitle="A porta de entrada primária de todo sistema de áudio"
        badge="Captadores"
      />

      {/* Conteúdo com Imagem e Simulação de Ondas Chegando */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Imagem do Microfone com Ondas Animadas Chegando */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 h-72 md:h-96 rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop"
            alt="Microfone profissional de estúdio"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Animação Visual de Ondas Sonoras Chegando à Cápsula */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scaleY: [1, 2.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.12,
                }}
                className="w-1.5 h-12 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
              />
            ))}
          </div>
        </motion.div>

        {/* Informações e Exemplos */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-3 text-blue-400">
              <Mic className="w-8 h-8" />
              <span className="text-sm font-bold uppercase tracking-wider">Conceito Chave</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              "O microfone é a porta de entrada do áudio."
            </h3>
          </motion.div>

          {/* Exemplos de Fontes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-2"
          >
            <span className="text-sm font-bold uppercase text-slate-400 tracking-wider">
              Exemplos de Captação:
            </span>
            <div className="grid grid-cols-2 gap-3">
              {sources.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white font-bold"
                >
                  <Disc className="w-4 h-4 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curiosidade em Destaque */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm md:text-base font-semibold"
      >
        <Lightbulb className="w-5 h-5 text-yellow-400 shrink-0" />
        <span>Curiosidade: Sem microfone, a mesa nunca "ouve" ninguém.</span>
      </motion.div>
    </div>
  );
};
