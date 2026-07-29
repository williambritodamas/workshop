import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, Eye } from 'lucide-react';

interface QuizCardProps {
  question: string;
  imageSrc?: string;
  answerTitle: string;
  answerDescription: string;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  imageSrc,
  answerTitle,
  answerDescription,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="w-full max-w-2xl flex flex-col items-center p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4 text-blue-400">
        <HelpCircle className="w-8 h-8 animate-bounce" />
        <h3 className="text-2xl font-bold text-white">{question}</h3>
      </div>

      {imageSrc && (
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6 relative border border-slate-800">
          <img src={imageSrc} alt="Quiz Equipment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>
      )}

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 mb-4"
      >
        <Eye className="w-5 h-5" />
        <span>{showAnswer ? 'Ocultar Resposta' : 'Mostrar Resposta'}</span>
      </button>

      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center flex flex-col items-center"
          >
            <div className="p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-extrabold text-white mb-2">{answerTitle}</h4>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">{answerDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
