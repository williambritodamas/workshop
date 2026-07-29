import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';

interface QuizMicrophoneProps {
  image: string;
  answerName: string;
  answerType: string;
  answerApplication: string;
  curiosity: string;
}

export const QuizMicrophone: React.FC<QuizMicrophoneProps> = ({
  image, answerName, answerType, answerApplication, curiosity,
}) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full p-5 md:p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-4 text-blue-400">
          <HelpCircle className="w-6 h-6" />
          <h3 className="text-xl font-bold text-white">Qual microfone é este?</h3>
        </div>

        <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800">
          <img src={image} alt="Quiz Microfone" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg mx-auto"
        >
          {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showAnswer ? 'Ocultar Resposta' : 'Mostrar Resposta'}
        </button>

        <AnimatePresence>
          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-5 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-xl font-extrabold text-white">{answerName}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold border border-blue-500/30">{answerType}</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-bold border border-purple-500/30">{answerApplication}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">💡 {curiosity}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
