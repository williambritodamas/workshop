import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Sparkles } from 'lucide-react';

interface PracticeChecklistProps {
  items: string[];
  title?: string;
}

export const PracticeChecklist: React.FC<PracticeChecklistProps> = ({
  items,
  title = 'Checklist da Demonstração',
}) => {
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (idx: number) => {
    setChecked((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const allChecked = checked.length === items.length;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {title && (
        <h3 className="text-lg font-bold text-white mb-4 text-center">{title}</h3>
      )}

      <div className="flex flex-col gap-2.5">
        {items.map((item, idx) => {
          const isChecked = checked.includes(idx);
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              onClick={() => toggle(idx)}
              className={`flex items-center gap-3 p-3.5 md:p-4 rounded-2xl border cursor-pointer transition-all ${
                isChecked
                  ? 'bg-blue-500/20 border-blue-500 text-white shadow-lg'
                  : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60'
              }`}
            >
              <div className="shrink-0">
                {isChecked ? (
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                ) : (
                  <Circle className="w-6 h-6 text-slate-600" />
                )}
              </div>
              <span className="text-sm md:text-base font-semibold">{item}</span>
            </motion.div>
          );
        })}
      </div>

      {allChecked && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-sm font-semibold"
        >
          <Sparkles className="w-4 h-4" />
          Todas as demonstrações concluídas!
        </motion.div>
      )}
    </div>
  );
};
