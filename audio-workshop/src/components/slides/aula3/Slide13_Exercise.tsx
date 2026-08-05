import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide13Notes } from './notes';
import { Mic, Sliders, Speaker, Zap, Monitor, Cable, CheckCircle2, ArrowRight } from 'lucide-react';

export { slide13Notes };

const equipmentItems = [
  { id: 'mic', label: 'Microfone', icon: <Mic className="w-6 h-6" />, color: 'text-cyan-400', border: 'border-cyan-500' },
  { id: 'mesa', label: 'Mesa', icon: <Sliders className="w-6 h-6" />, color: 'text-purple-400', border: 'border-purple-500' },
  { id: 'caixa', label: 'Caixa', icon: <Speaker className="w-6 h-6" />, color: 'text-emerald-400', border: 'border-emerald-500' },
  { id: 'amp', label: 'Amplificador', icon: <Zap className="w-6 h-6" />, color: 'text-yellow-400', border: 'border-yellow-500' },
  { id: 'notebook', label: 'Notebook', icon: <Monitor className="w-6 h-6" />, color: 'text-indigo-400', border: 'border-indigo-500' },
  { id: 'cabo', label: 'Cabos', icon: <Cable className="w-6 h-6" />, color: 'text-slate-400', border: 'border-slate-500' },
];

const correctOrder = ['mic', 'cabo', 'mesa', 'amp', 'caixa'];

export const Slide13_Exercise: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);

  const toggleItem = (id: string) => {
    if (revealed) return;
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const checkOrder = () => {
    setRevealed(true);
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Organize os Equipamentos"
        subtitle="Coloque na ordem correta do fluxo de áudio"
        badge="Exercício"
      />

      <div className="w-full max-w-5xl my-auto flex flex-col items-center gap-6">
        {/* Grid de equipamentos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
          {equipmentItems.map((item, idx) => {
            const isSelected = selected.includes(item.id);
            const isInCorrectOrder = revealed && correctOrder.includes(item.id);
            const pos = correctOrder.indexOf(item.id);

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => toggleItem(item.id)}
                disabled={revealed}
                className={`flex flex-col items-center justify-center p-4 md:p-5 rounded-2xl border-2 transition-all ${
                  revealed
                    ? isInCorrectOrder
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-slate-800 bg-slate-900/50 opacity-50'
                    : isSelected
                      ? 'border-blue-500 bg-blue-500/10 shadow-lg'
                      : 'border-slate-800 bg-slate-900/80 hover:border-blue-500/40'
                }`}
              >
                <div className={`p-3 rounded-xl bg-slate-800 ${
                  revealed && isInCorrectOrder ? 'text-emerald-400' : item.color
                }`}>
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-white mt-2">{item.label}</span>
                {revealed && isInCorrectOrder && (
                  <span className="text-[10px] text-emerald-400 font-semibold mt-1">
                    #{pos + 1}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Botão de verificar */}
        {!revealed && selected.length > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={checkOrder}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
          >
            <CheckCircle2 className="w-4 h-4" />
            Verificar Ordem
          </motion.button>
        )}

        {/* Resposta revelada */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="w-full p-5 rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-emerald-900/40 border border-emerald-500/40 text-center"
            >
              <h4 className="text-lg font-extrabold text-white mb-3">
                Ordem Correta do Fluxo:
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {correctOrder.map((id, idx) => {
                  const item = equipmentItems.find((i) => i.id === id)!;
                  return (
                    <React.Fragment key={id}>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <span className={item.color}>{item.icon}</span>
                        <span className="text-xs font-bold text-white">{item.label}</span>
                      </div>
                      {idx < correctOrder.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-blue-400" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-slate-400 text-xs md:text-sm text-center"
      >
        Clique nos equipamentos na ordem que você acha que o som percorre!
      </motion.p>
    </div>
  );
};

