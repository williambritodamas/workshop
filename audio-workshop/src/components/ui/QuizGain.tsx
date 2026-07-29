import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const questions = [
  { q: 'Qual controle deve ser ajustado primeiro ao configurar um microfone?', opts: ['Gain', 'Fader', 'Mute', 'Pan'], correct: 0, explanation: 'O Gain define a sensibilidade da entrada. Sem ele ajustado primeiro, o Fader não terá um sinal de qualidade para controlar.' },
  { q: 'O que significa a palavra Clip em áudio?', opts: ['Som alto', 'Sinal saturado/distorcido', 'Corte de frequência', 'Ganho máximo'], correct: 1, explanation: 'Clip é a distorção que ocorre quando o sinal ultrapassa o limite máximo que o equipamento suporta.' },
  { q: 'Qual a diferença entre Gain e Fader?', opts: ['São a mesma coisa', 'Gain controla entrada, Fader controla saída', 'Gain controla saída, Fader controla entrada', 'Gain é para graves, Fader para agudos'], correct: 1, explanation: 'Gain atua na entrada (pré-amplificação), Fader atua na saída (volume do canal).' },
  { q: 'O que é Headroom?', opts: ['Um tipo de microfone', 'A margem de segurança antes do clip', 'O volume máximo do sistema', 'Um efeito de áudio'], correct: 1, explanation: 'Headroom é o espaço de segurança entre o nível de operação normal e o ponto de clipping.' },
  { q: 'O que o LED vermelho na mesa de som indica?', opts: ['Que o som está ótimo', 'Que o canal está ligado', 'Que o sinal está próximo ou no clip', 'Que o Fader está no máximo'], correct: 2, explanation: 'O LED vermelho indica que o sinal está muito alto e pode estar clipando. É um alerta para reduzir o Gain.' },
];

export const QuizGain: React.FC = () => {
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
