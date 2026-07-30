import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const questions = [
  { q: 'O que causa a microfonia?', opts: ['Cabo solto', 'Ciclo de realimentação entre microfone e caixa', 'Mau contato no XLR', 'Botão mudo ativado'], correct: 1, explanation: 'A microfonia (feedback) ocorre quando o som da caixa é captado pelo microfone, amplificado novamente, criando um ciclo que gera o apito característico.' },
  { q: 'Qual a primeira atitude ao ouvir feedback?', opts: ['Desligar tudo', 'Identificar qual microfone está causando e baixar o fader', 'Correr', 'Aumentar o volume para "abafar"'], correct: 1, explanation: 'A ação correta é identificar rapidamente o microfone causador e reduzir seu fader ou gain para quebrar o ciclo de realimentação.' },
  { q: 'Posicionar corretamente o microfone ajuda?', opts: ['Sim, é a primeira defesa contra microfonia', 'Não faz diferença', 'Só se for condensador', 'Piora o problema'], correct: 0, explanation: 'Um bom posicionamento evita que o microfone capture o som das caixas, sendo a defesa mais básica e eficaz contra feedback.' },
  { q: 'Gain alto aumenta o risco?', opts: ['Não, gain é só volume', 'Sim, ganho excessivo amplifica ruídos e aumenta o risco', 'Só se usar EQ', 'Apenas em microfones sem fio'], correct: 1, explanation: 'Ganho excessivo amplifica não só a fonte desejada mas também ruídos ambiente e o som das caixas, elevando drasticamente o risco de microfonia.' },
  { q: 'Quando faz sentido usar equalização contra microfonia?', opts: ['Sempre, antes de tudo', 'Reduzir uma frequência crítica específica depois de verificar posicionamento e ganho', 'Nunca', 'Só em monitores'], correct: 1, explanation: 'A equalização deve ser o último recurso, usado para cortar uma frequência específica que está realimentando, após já ter otimizado posicionamento e ganho.' },
];

export const FeedbackQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[current].correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm">
              <HelpCircle className="w-4 h-4" />
              Pergunta {current + 1} de {questions.length}
            </div>
            <h3 className="text-white text-lg md:text-xl font-bold mb-5">{questions[current].q}</h3>
            <div className="space-y-2">
              {questions[current].opts.map((opt, idx) => {
                let cls = 'border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer';
                if (selected !== null) {
                  if (idx === questions[current].correct) cls = 'border-emerald-500 bg-emerald-500/15 cursor-default';
                  else if (idx === selected && idx !== questions[current].correct) cls = 'border-red-500 bg-red-500/15 cursor-default';
                  else cls = 'border-slate-800 bg-slate-900/60 opacity-50 cursor-default';
                }
                return (
                  <button key={idx} onClick={() => handleAnswer(idx)}
                    className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all ${cls}`}
                  >
                    {selected !== null && idx === questions[current].correct && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                    {selected !== null && idx === selected && idx !== questions[current].correct && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
                    <span className="text-white text-sm">{opt}</span>
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30"
              >
                <p className="text-slate-200 text-sm">{questions[current].explanation}</p>
              </motion.div>
            )}
            {selected !== null && (
              <button onClick={next}
                className="mt-5 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all"
              >
                {current < questions.length - 1 ? 'Próxima pergunta' : 'Ver resultado'}
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 rounded-3xl bg-slate-900/80 border border-slate-800"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white text-2xl font-bold mb-2">Quiz Concluído!</h3>
            <p className="text-slate-300 text-lg">Você acertou <span className="text-blue-400 font-bold">{score}</span> de <span className="text-blue-400 font-bold">{questions.length}</span>!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
