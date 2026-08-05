import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { Gamepad2, CheckCircle2, RefreshCw } from 'lucide-react';

export const slide12Notes: PresenterNote = {
  explanation: 'Este é um exercício de associação ao vivo com a plateia. Peça aos participantes para levantarem a mão e responderem qual equipamento faz cada uma das 5 funções vitais.',
  practicalExamples: [
    'Função CAPTAR = Microfone.',
    'Função CONTROLAR = Mesa de Som.',
    'Função TRANSPORTAR = Cabos e Direct Box.',
    'Função AMPLIFICAR = Amplificador de Potência.',
    'Função REPRODUZIR = Caixa de Som.',
  ],
  audienceQuestions: [
    'Quem quer tentar acertar o equipamento que faz a função de TRANSPORTAR o sinal?',
  ],
};

export const Slide12_MatchingGame: React.FC = () => {
  const items = [
    { action: 'Captar', answer: 'Microfone', desc: 'Transforma voz em sinal elétrico' },
    { action: 'Controlar', answer: 'Mesa de Som', desc: 'Mistura e ajusta volumes dos canais' },
    { action: 'Transportar', answer: 'Cabos & DI Box', desc: 'Conduz o sinal com segurança' },
    { action: 'Amplificar', answer: 'Amplificador', desc: 'Fornece a potência necessária' },
    { action: 'Reproduzir', answer: 'Caixa de Som', desc: 'Emite o som final no ambiente' },
  ];

  const [revealed, setRevealed] = useState<number[]>([]);

  const toggleReveal = (index: number) => {
    if (revealed.includes(index)) {
      setRevealed(revealed.filter((i) => i !== index));
    } else {
      setRevealed([...revealed, index]);
    }
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Vamos brincar?"
        subtitle="Qual equipamento executa cada uma das funções vitais do áudio?"
        badge="Desafio Interativo"
      />

      {/* Grid do Jogo de Correspondência */}
      <div className="w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, idx) => {
          const isRevealed = revealed.includes(idx);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => toggleReveal(idx)}
              className={`p-6 rounded-3xl border cursor-pointer transition-all flex flex-col justify-between h-48 relative overflow-y-auto group ${
                isRevealed
                  ? 'bg-blue-500/20 border-blue-500 shadow-xl shadow-blue-500/20'
                  : 'bg-slate-900/80 border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold text-blue-400 tracking-wider">
                  Função #{idx + 1}
                </span>
                <div className="p-2 rounded-full bg-slate-950 text-slate-400">
                  <Gamepad2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-3xl font-black text-white">{item.action}</h3>

              {isRevealed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-1 p-3 rounded-xl bg-slate-950 border border-blue-400"
                >
                  <span className="text-sm font-extrabold text-blue-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item.answer}
                  </span>
                  <span className="text-[11px] text-slate-400">{item.desc}</span>
                </motion.div>
              ) : (
                <span className="text-xs text-slate-400 font-semibold group-hover:text-blue-300 flex items-center gap-1">
                  Clique para revelar a resposta ➔
                </span>
              )}
            </motion.div>
          );
        })}

        {/* Botão de resetar todos */}
        <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/60 border border-dashed border-slate-800 text-center">
          <button
            onClick={() => setRevealed(revealed.length === items.length ? [] : [0, 1, 2, 3, 4])}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-blue-600 text-white text-xs font-bold transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{revealed.length === items.length ? 'Ocultar Todos' : 'Revelar Todos'}</span>
          </button>
        </div>
      </div>

      {/* Dica */}
      <p className="mt-4 text-slate-400 text-sm text-center">
        Clique nos cartões para verificar se a plateia acertou cada uma das funções!
      </p>
    </div>
  );
};

