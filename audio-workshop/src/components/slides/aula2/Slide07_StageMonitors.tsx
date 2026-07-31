import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { HelpCircle, Ear, Volume2, UserCheck } from 'lucide-react';

export const slide07Notes: PresenterNote = {
  explanation: 'Esta é uma das maiores revelações para quem é totalmente leigo. Explique que o som das caixas principais (PA) que o público ouve viaja para a frente, enquanto o cantor precisa de um som exclusivo (monitor/retorno) apontado para ele.',
  practicalExamples: [
    'Explique o que acontece quando o cantor não se ouve: ele desafina ou força excessivamente a voz tentando se escutar.',
  ],
  audienceQuestions: [
    'Vocês já viram um cantor colocar a mão no ouvido durante o show? Por que ele faz isso?',
  ],
};

export const Slide07_StageMonitors: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Monitores de Palco"
        subtitle="A referência sonora indispensável para quem está se apresentando"
        badge="Retorno do Músico"
      />

      {/* Imagem de Singer / Artist on stage com retorno em destaque */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 h-72 md:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group"
        >
          <img
            src="https://images.pexels.com/photos/7715788/pexels-photo-7715788.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Cantor no palco com monitor no chão"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Tag indicativa do monitor no chão */}
          <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-blue-500/90 text-white font-bold text-xs md:text-sm border border-blue-400 backdrop-blur-md shadow-lg">
            🔊 Monitor de Chão (Side / Wedge)
          </div>
        </motion.div>

        {/* Pergunta e Explicação em 2 blocos */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-3xl bg-blue-500/10 border border-blue-500/30 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-yellow-400 font-bold">
              <HelpCircle className="w-6 h-6" />
              <span>Pergunta Reflexiva</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              "Por que o músico precisa dessa caixa apontada para ele?"
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-3">
              <Volume2 className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
              <div>
                <strong className="text-white">O público ouve uma coisa:</strong>
                <p className="text-xs text-slate-400 mt-1">A mistura completa do show vinda do PA frontal.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/40 flex items-start gap-3">
              <Ear className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
              <div>
                <strong className="text-white">O músico precisa ouvir outra:</strong>
                <p className="text-xs text-slate-400 mt-1">Sua própria voz e instrumento com afinação e tempo perfeitos.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Conclusão */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 flex items-center gap-2 text-slate-300 text-sm font-medium"
      >
        <UserCheck className="w-4 h-4 text-blue-400" />
        <span>Sem monitor, o músico toca 'no escuro' e perde a referência da própria voz.</span>
      </motion.div>
    </div>
  );
};
