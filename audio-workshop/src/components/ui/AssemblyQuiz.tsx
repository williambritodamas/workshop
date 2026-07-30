import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

interface QuestionData {
  question: string;
  options: string[];
  correct: number;
}

const questions: QuestionData[] = [
  {
    question: 'Qual equipamento deve ser ligado por último?',
    options: ['Mesa', 'Caixas / Amplificadores', 'Notebook', 'Microfone'],
    correct: 1,
  },
  {
    question: 'Qual deve ser desligado primeiro?',
    options: ['Notebook', 'Mesa', 'Caixas / Amplificadores', 'Microfone'],
    correct: 2,
  },
  {
    question: 'O Gain é ajustado antes ou depois do Fader?',
    options: ['Depois', 'Antes', 'Tanto faz', 'Só após o evento'],
    correct: 1,
  },
  {
    question: 'Como evitar tropeços com cabos?',
    options: [
      'Passar cabos por cima das cadeiras',
      'Organizar cabos nas laterais e fixar com fita/velcro no chão',
      'Enrolar tudo junto',
      'Não usar cabos',
    ],
    correct: 1,
  },
  {
    question: 'O que fazer antes da chegada do público?',
    options: [
      'Ligar tudo no máximo',
      'Testar cada microfone, ajustar gain, verificar monitores e equalização',
      'Só ligar a mesa',
      'Esperar o público chegar',
    ],
    correct: 1,
  },
];

export const AssemblyQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);

  const q = questions[current];
  const isCorrect = selected === q.correct;

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
  };

  const handleConfirm = () => {
    if (selected === null) return;
    const correct = selected === q.correct;
    if (correct) setScore((prev) => prev + 1);
    setResults((prev) => [...prev, correct]);
    setAnswered(true);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setResults([]);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="w-full max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm text-center"
        >
          <Award className={`w-14 h-14 mx-auto mb-3 ${percentage >= 80 ? 'text-amber-400' : percentage >= 60 ? 'text-blue-400' : 'text-slate-500'}`} />
          <h3 className="text-white font-bold text-xl mb-1">Quiz Completo!</h3>
          <div className="text-4xl font-black text-white mb-2">
            {score}/{questions.length}
          </div>
          <p className="text-slate-400 text-sm mb-4">
            {percentage === 100 ? 'Perfeito! Você domina o assunto!' :
             percentage >= 80 ? 'Muito bom! Quase lá!' :
             percentage >= 60 ? 'Bom, mas pode melhorar!' :
             'Estude mais e tente novamente!'}
          </p>
          <div className="flex flex-wrap gap-1 justify-center mb-4">
            {results.map((r, i) => (
              <div key={i} className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                r ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {r ? '✓' : '✗'}
              </div>
            ))}
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all mx-auto cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Tentar novamente
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <HelpCircle className="w-4 h-4 text-purple-400" />
          <span>Quiz de Montagem</span>
        </div>
        <div className="flex items-center gap-1.5">
          {questions.map((_, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full border ${
              i < current ? 'bg-emerald-500 border-emerald-500' :
              i === current ? 'bg-blue-500 border-blue-500' :
              'bg-slate-800 border-slate-700'
            }`} />
          ))}
        </div>
      </div>

      <motion.div
        key={current}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p-5 rounded-3xl bg-slate-900/90 border border-blue-500/30 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-slate-500 font-mono">Questão {current + 1}/{questions.length}</span>
          <span className="text-xs text-slate-500">Score: {score}</span>
        </div>

        <h3 className="text-white font-bold text-base mb-4">{q.question}</h3>

        <div className="flex flex-col gap-2 mb-4">
          {q.options.map((opt, i) => {
            let btnClass = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-blue-500/50';
            if (answered && i === q.correct) btnClass = 'border-emerald-500 bg-emerald-500/20 text-emerald-300';
            else if (selected === i && answered && i !== q.correct) btnClass = 'border-red-500 bg-red-500/20 text-red-300';
            else if (selected === i && !answered) btnClass = 'border-blue-500 bg-blue-500/20 text-blue-300';
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-bold transition-all cursor-pointer text-left ${btnClass}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  answered && i === q.correct ? 'border-emerald-500 bg-emerald-500' :
                  selected === i && !answered ? 'border-blue-500' :
                  'border-slate-700'
                }`}>
                  {(answered && i === q.correct) || (selected === i && answered && i === q.correct) ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  ) : selected === i && answered && i !== q.correct ? (
                    <XCircle className="w-3.5 h-3.5 text-red-400" />
                  ) : null}
                </div>
                {opt}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {answered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className={`p-3 rounded-2xl border mb-3 ${
                isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'
              }`}>
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`text-sm font-bold ${isCorrect ? 'text-emerald-200' : 'text-red-200'}`}>
                    {isCorrect ? 'Correto!' : 'Incorreto!'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Resposta correta: <span className="text-emerald-300 font-bold">{q.options[q.correct]}</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2">
          {!answered ? (
            <button
              onClick={handleConfirm}
              disabled={selected === null}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-white text-sm font-bold transition-all cursor-pointer"
            >
              Confirmar
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all cursor-pointer"
            >
              {current < questions.length - 1 ? 'Próxima' : 'Ver resultado'}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
