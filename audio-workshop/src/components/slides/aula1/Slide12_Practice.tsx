import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { CheckCircle2, Circle, Sparkles, HelpCircle } from 'lucide-react';
import { slide12Notes } from './notes';

export { slide12Notes };
export const Slide12_Practice: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const tasks = [
    'Bata palmas.',
    'Bata na mesa.',
    'Assobie.',
    'Fale próximo ao microfone.',
    'Afaste o microfone.',
  ];

  const toggleCheck = (index: number) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((i) => i !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Demonstração Prática"
        subtitle="Hora de experimentar e sentir a física do som em ação"
        badge="Exercício Interativo"
      />

      {/* Checklist Interativo */}
      <div className="w-full max-w-4xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Lista de Ações */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {tasks.map((task, idx) => {
            const isChecked = checkedItems.includes(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => toggleCheck(idx)}
                className={`flex items-center gap-4 p-4 md:p-5 rounded-2xl border cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-blue-500/20 border-blue-500 text-white shadow-lg'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                <div className="shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-7 h-7 text-blue-400" />
                  ) : (
                    <Circle className="w-7 h-7 text-slate-500" />
                  )}
                </div>
                <span className="text-lg md:text-xl font-bold">{task}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Pergunta de Reflexão em Destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-950 border border-blue-500/40 text-center shadow-2xl relative overflow-y-auto"
        >
          <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 mb-4">
            <HelpCircle className="w-12 h-12" />
          </div>

          <h3 className="text-3xl font-extrabold text-white mb-2">
            "O que mudou?"
          </h3>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Observe a variação no volume, no timbre e na resposta do ambiente a cada movimento.
          </p>

          {checkedItems.length === tasks.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" /> Todas as práticas concluídas!
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Instrução adicional */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-slate-400 text-sm md:text-base text-center"
      >
        Clique nos itens acima para marcar os exercícios concluídos na aula!
      </motion.p>
    </div>
  );
};

