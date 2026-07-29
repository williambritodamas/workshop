import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { AnimatedArrow } from '../../ui/AnimatedArrow';
import type { PresenterNote } from '../../../types/presentation';
import { Guitar, Box, Sliders, ArrowRightLeft } from 'lucide-react';

export const slide09Notes: PresenterNote = {
  explanation: 'A Direct Box (DI Box) é um pequeno dispositivo mágico para quem toca instrumentos no palco. Ela pega o sinal de alta impedância desbalanceado (cabo P10 do violão ou teclado) e converte em sinal balanceado (cabo XLR), permitindo passar cabos longos até a mesa sem ruidos.',
  practicalExamples: [
    'Use a metáfora do "tradutor de idiomas": a guitarra fala uma língua e a entrada de microfone da mesa fala outra. A DI Box traduz entre elas.',
  ],
  audienceQuestions: [
    'O que acontece se ligarmos um violão com um cabo de 20 metros direto na mesa sem DI Box? (Surge chiado/ruído e perda de graves).',
  ],
};

export const Slide09_DiBox: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Direct Box (DI Box)"
        subtitle="O adaptador e protetor do sinal de instrumentos musicais"
        badge="Adaptador de Sinal"
      />

      {/* Fluxo de conversão e imagem */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Imagem do DI Box em destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 h-72 md:h-96 rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop"
            alt="Instrumento e caixa de som"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <Box className="w-4 h-4 text-blue-400" /> DI Box (Direct Box)
            </span>
            <p className="text-xs text-slate-400 mt-1">Geralmente é uma caixinha metálica preta no chão do palco.</p>
          </div>
        </motion.div>

        {/* Diagrama Horizontal: Violão -> DI Box -> Mesa */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            {/* Violão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-950 border border-slate-800 w-32"
            >
              <Guitar className="w-8 h-8 text-yellow-400 mb-2" />
              <span className="text-sm font-bold text-white">Violão</span>
              <span className="text-[10px] text-slate-400">Sinal P10</span>
            </motion.div>

            <AnimatedArrow direction="right" label="Cabo P10" delay={0.2} />

            {/* DI Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-blue-500/20 border border-blue-500/40 w-36 shadow-lg shadow-blue-500/10"
            >
              <Box className="w-8 h-8 text-blue-400 mb-2 animate-pulse" />
              <span className="text-sm font-bold text-white">DI Box</span>
              <span className="text-[10px] text-blue-300 font-semibold">Converte & Limpa</span>
            </motion.div>

            <AnimatedArrow direction="right" label="Cabo XLR" delay={0.4} />

            {/* Mesa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-950 border border-slate-800 w-32"
            >
              <Sliders className="w-8 h-8 text-cyan-400 mb-2" />
              <span className="text-sm font-bold text-white">Mesa</span>
              <span className="text-[10px] text-slate-400">Entrada Mic</span>
            </motion.div>
          </div>

          {/* Comparação da Analogia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-5 rounded-2xl bg-slate-900 border border-blue-500/30 flex items-start gap-4"
          >
            <ArrowRightLeft className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <strong className="text-white text-base md:text-lg">"É como um tradutor entre equipamentos."</strong>
              <p className="text-slate-300 text-xs md:text-sm mt-1">
                A DI Box adapta o sinal elétrico do instrumento para que ele viaje limpo, sem ruídos e na voltagem ideal até a mesa de som.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Frase simples */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-slate-400 text-sm text-center"
      >
        Indispensável para teclados, baixos e violões conectados direto no palco.
      </motion.p>
    </div>
  );
};
