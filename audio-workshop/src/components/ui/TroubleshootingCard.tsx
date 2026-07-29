import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

interface TroubleshootingCardProps {
  problem: string;
  solution: string;
  tip?: string;
  delay?: number;
}

export const TroubleshootingCard: React.FC<TroubleshootingCardProps> = ({
  problem,
  solution,
  tip,
  delay = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 md:p-5 text-left hover:bg-slate-800/60 transition-colors"
      >
        <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 shrink-0">
          <AlertTriangle className="w-5 h-5 text-red-400" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-sm font-bold text-white block truncate">
            {problem}
          </span>
        </div>
        <div className="text-slate-500 shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0 border-t border-slate-800">
              <div className="flex items-start gap-3 mt-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 shrink-0 mt-0.5">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-200 font-semibold mb-1">Solução:</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{solution}</p>
                  {tip && (
                    <p className="mt-2 text-xs text-blue-400 italic">💡 {tip}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
