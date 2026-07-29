import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react';

interface Question {
  image: string;
  options: string[];
  correct: number;
  hint: string;
}

interface QuizMicrophoneProps {
  questions: Question[];
}

export const QuizMicrophone: React.FC<QuizMicrophoneProps> = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = questions[current];

  const handleReveal = () => {
    if (selected === null) {
      setRevealed(true);
    } else {
      setRevealed(!revealed);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  const isCorrect = selected === q.correct;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-4">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full p-5 md:p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-blue-400">
            <HelpCircle className="w-6 h-6" />
            <h3 className="text-xl font-bold text-white">Qual microfone é este?</h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">{current + 1}/{questions.length}</span>
        </div>

        <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-4 border border-slate-800 bg-slate-950 flex items-center justify-center">
          <img src={q.image} alt="Quiz Microfone" className="w-full h-full object-scale-down p-2" />
          <div className="absolute inset-0 bg-slate-950/10" />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {q.options.map((opt, i) => {
            let btnClass = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-blue-500/50';
            if (revealed && i === q.correct) {
              btnClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-300';
            } else if (selected === i && !revealed) {
              btnClass = 'border-blue-500 bg-blue-500/20 text-blue-300';
            }
            return (
              <button
                key={i}
                onClick={() => { if (!revealed) setSelected(i); }}
                className={`p-3 rounded-xl border text-sm font-bold transition-all cursor-pointer ${btnClass}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReveal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
          >
            {revealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {revealed ? 'Ocultar' : 'Revelar Resposta'}
          </button>
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`mt-4 p-4 rounded-2xl border ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-amber-500/10 border-amber-500/40'} space-y-2`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-5 h-5 ${isCorrect ? 'text-emerald-400' : 'text-amber-400'}`} />
                  <span className="text-lg font-extrabold text-white">{q.options[q.correct]}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">💡 {q.hint}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex items-center gap-3">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className="flex items-center gap-1 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm disabled:opacity-30 cursor-pointer hover:bg-slate-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={current === questions.length - 1}
          className="flex items-center gap-1 px-4 py-2 rounded-full bg-blue-600 text-white text-sm disabled:opacity-30 cursor-pointer hover:bg-blue-500 transition-all"
        >
          Próximo <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
