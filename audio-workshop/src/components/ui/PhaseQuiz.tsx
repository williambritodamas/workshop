import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: 'O botão Ø (polaridade) faz o quê?',
    options: [
      'Inverte a fase do sinal',
      'Inverte a polaridade elétrica do sinal',
      'Aumenta o volume',
      'Cria um atraso',
    ],
    correct: 1,
    explanation: 'O botão Ø inverte a polaridade elétrica do sinal (positivo vira negativo e vice-versa).',
  },
  {
    question: 'Fase e polaridade são a mesma coisa?',
    options: [
      'Sim',
      'Não, fase envolve tempo e polaridade é inversão elétrica',
      'Sim, ambos cancelam o som',
      'Não, fase é volume e polaridade é tom',
    ],
    correct: 1,
    explanation: 'Fase está relacionada ao tempo/atraso entre ondas. Polaridade é a inversão elétrica do sinal.',
  },
  {
    question: 'Por que dois microfones podem causar cancelamento?',
    options: [
      'Um deles está sempre quebrado',
      'Diferenças de distância criam defasagem entre as ondas',
      'Eles competem entre si',
      'O som fica mais forte',
    ],
    correct: 1,
    explanation: 'Quando os microfones estão a distâncias diferentes da fonte, as ondas chegam em tempos diferentes, criando defasagem.',
  },
  {
    question: 'Quando devemos desconfiar de problemas de fase?',
    options: [
      'Som muito grave',
      'Som fraco, sem graves, "oco"',
      'Som distorcido',
      'Som muito alto',
    ],
    correct: 1,
    explanation: 'O cancelamento de fase remove frequências, resultando em som fraco, sem corpo e com sensação "oca".',
  },
  {
    question: 'Qual a regra aproximada para posicionar dois microfones?',
    options: ['1:1', '3:1', '5:1', '10:1'],
    correct: 1,
    explanation: 'A regra 3:1 diz que a distância entre microfones deve ser pelo menos 3x a distância de cada um à fonte.',
  },
];

export const PhaseQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleSelect = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.correct) setScore((s) => s + 1);
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
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-sm text-center">
        <Brain className="w-10 h-10 text-blue-400 mx-auto mb-3" />
        <h3 className="text-xl font-bold text-white mb-2">Quiz Concluído!</h3>
        <div className="text-5xl font-black text-white mb-2">{score}/{questions.length}</div>
        <div className="text-sm text-slate-400 mb-4">{pct}% de acertos</div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="h-2 bg-slate-800 rounded-full overflow-hidden mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            className={`h-full rounded-full ${pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
          />
        </motion.div>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" /> Refazer Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-3xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-white font-bold text-sm">Quiz de Fase e Polaridade</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">{score}/{current + (answered ? 1 : 0)}</span>
            <span className="text-xs text-slate-600 font-mono">{current + 1}/{questions.length}</span>
          </div>
        </div>

        <p className="text-white font-bold mb-4">{q.question}</p>

        <div className="space-y-2 mb-4">
          {q.options.map((opt, i) => {
            let cls = 'border-slate-800 bg-slate-950 text-slate-300 hover:border-blue-500/50';
            if (answered && i === q.correct) {
              cls = 'border-emerald-500 bg-emerald-500/20 text-emerald-300';
            } else if (answered && i === selected && i !== q.correct) {
              cls = 'border-red-500 bg-red-500/20 text-red-300';
            } else if (selected === i && !answered) {
              cls = 'border-blue-500 bg-blue-500/20 text-blue-300';
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full p-3 rounded-xl border text-sm font-bold text-left transition-all cursor-pointer ${cls}`}
              >
                {String.fromCharCode(65 + i)}) {opt}
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
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`p-4 rounded-2xl border ${selected === q.correct ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-red-500/10 border-red-500/40'} mb-4`}>
                <div className="flex items-center gap-2 mb-1">
                  {selected === q.correct ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className={`text-sm font-bold ${selected === q.correct ? 'text-emerald-400' : 'text-red-400'}`}>
                    {selected === q.correct ? 'Correto!' : 'Incorreto!'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{q.explanation}</p>
              </div>
              <button
                onClick={handleNext}
                className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all cursor-pointer"
              >
                {current < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
