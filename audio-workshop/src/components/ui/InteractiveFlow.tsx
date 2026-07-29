import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Repeat } from 'lucide-react';

interface FlowItem {
  id: string;
  label: string;
  description: string;
  color: string;
}

interface InteractiveFlowProps {
  items: FlowItem[];
}

export const InteractiveFlow: React.FC<InteractiveFlowProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const current = items[currentIndex];

  const goNext = () => {
    if (!completed.includes(currentIndex)) {
      setCompleted([...completed, currentIndex]);
    }
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const reset = () => {
    setCurrentIndex(0);
    setCompleted([]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-6">
      {/* Barra de progresso do fluxo */}
      <div className="w-full flex items-center gap-1">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`flex-1 h-2 rounded-full transition-all duration-500 ${
              completed.includes(idx)
                ? 'bg-blue-500'
                : idx === currentIndex
                  ? 'bg-blue-400/50'
                  : 'bg-slate-800'
            }`}
          />
        ))}
      </div>

      {/* Card do item atual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="w-full p-8 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-3xl"
          >
            {current.color}
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            {current.label}
          </h3>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            {current.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navegação */}
      <div className="flex items-center gap-4">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="p-3 rounded-full bg-slate-900 border border-slate-800 disabled:opacity-30 hover:bg-slate-800 text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono font-bold text-slate-400">
          {currentIndex + 1} / {items.length}
        </span>

        {currentIndex < items.length - 1 ? (
          <button
            onClick={goNext}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={reset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
          >
            <Repeat className="w-4 h-4" />
            Recomeçar
          </button>
        )}
      </div>
    </div>
  );
};
