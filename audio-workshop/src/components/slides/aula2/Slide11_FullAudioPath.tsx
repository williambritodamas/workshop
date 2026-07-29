import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { User, Mic, Cable, Sliders, Zap, Speaker, Ear, Award } from 'lucide-react';

export const slide11Notes: PresenterNote = {
  explanation: 'Este é o momento de amarração de todo o conhecimento da Aula 2. Apresente cada etapa sequencialmente. O aluno deve entender que, quando o som falha, ele deve testar etapa por etapa do início ao fim.',
  practicalExamples: [
    'Simule um problema: "Se a caixa não está saindo som, onde você olha primeiro? Na tomada, no cabo ou na mesa?"',
    'Mencione a Audio Engineering Society (AES) como a entidade global de normas em engenharia de áudio.',
  ],
  audienceQuestions: [
    'O que acontece se quebrarmos o elo número 3 (Cabo)? O som chega na mesa?',
  ],
};

export const Slide11_FullAudioPath: React.FC = () => {
  const steps = [
    { title: 'Pessoa', icon: <User className="w-6 h-6 text-blue-400" />, desc: 'Vibração Vocal' },
    { title: 'Microfone', icon: <Mic className="w-6 h-6 text-cyan-400" />, desc: 'Transdução Entrada' },
    { title: 'Cabo / DI', icon: <Cable className="w-6 h-6 text-indigo-400" />, desc: 'Transporte Limpo' },
    { title: 'Mesa', icon: <Sliders className="w-6 h-6 text-purple-400" />, desc: 'Mistura e Controle' },
    { title: 'Amplificador', icon: <Zap className="w-6 h-6 text-yellow-400" />, desc: 'Potência Elétrica' },
    { title: 'Caixa', icon: <Speaker className="w-6 h-6 text-emerald-400" />, desc: 'Transdução Saída' },
    { title: 'Ouvido', icon: <Ear className="w-6 h-6 text-pink-400" />, desc: 'Recepção Humana' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Caminho do Som (Fluxo de Sinal)"
        subtitle="A jornada completa da vibração vocal até a percepção no ouvido"
        badge="Fundamento AES"
      />

      {/* Fluxograma Animado de 7 Etapas */}
      <div className="w-full max-w-6xl my-auto flex flex-col md:flex-row items-center justify-between gap-2 p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-md w-28 md:w-32 text-center group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-slate-900 group-hover:scale-110 transition-transform mb-2">
                {step.icon}
              </div>
              <span className="text-xs md:text-sm font-bold text-white leading-tight">
                {step.title}
              </span>
              <span className="text-[9px] uppercase font-semibold text-slate-400 mt-1">
                {step.desc}
              </span>
            </motion.div>

            {idx < steps.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.1 }}
                className="hidden md:inline text-blue-400 font-bold text-sm"
              >
                ➔
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Destaque Final e Citação da AES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-4 flex flex-col md:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center md:text-left"
      >
        <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white">Todo sistema de som segue um caminho lógico.</h4>
          <p className="text-xs text-slate-300">
            "Esse conceito de fluxo de sinal é um dos fundamentos da operação de sistemas de sonorização." — <span className="text-blue-400 font-bold">Audio Engineering Society (AES)</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
