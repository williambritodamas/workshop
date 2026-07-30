import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle, Timer } from 'lucide-react';

interface Question {
  q: string;
  opts: string[];
  correct: number;
}

const questions: Question[] = [
  { q: 'O que faz o Gain?', opts: ['Controla volume do canal', 'Ajusta sensibilidade de entrada', 'Liga o microfone', 'Aumenta graves'], correct: 1 },
  { q: 'Quando usar HPF?', opts: ['Sempre', 'Nunca', 'Para remover graves indesejados de vozes', 'Só em música'], correct: 2 },
  { q: 'Diferença entre Fase e Polaridade?', opts: ['São a mesma coisa', 'Fase é tempo, Polaridade é inversão elétrica', 'Fase é volume', 'Polaridade é cor'], correct: 1 },
  { q: 'O que provoca microfonia?', opts: ['Cabo ruim', 'Ciclo de realimentação mic-caixa', 'Equalização', 'Phantom Power'], correct: 1 },
  { q: 'Para que serve o Compressor?', opts: ['Aumentar volume', 'Controlar dinâmica reduzindo diferença entre som mais baixo e mais alto', 'Melhorar graves', 'Remover ruído'], correct: 1 },
  { q: 'Sequência correta para ligar o sistema?', opts: ['Caixas primeiro', 'Mesa primeiro, depois caixas', 'Notebook primeiro', 'Qualquer ordem'], correct: 1 },
  { q: 'Como evitar Clip?', opts: ['Aumentar Gain', 'Reduzir Gain ou Fader se o LED de clip acender', 'Ligar compressor', 'Desligar equalizador'], correct: 1 },
  { q: 'Qual equipamento capta o som?', opts: ['Caixa', 'Microfone', 'Mesa', 'Amplificador'], correct: 1 },
  { q: 'O que significa Ratio 4:1 no compressor?', opts: ['4 dB in = 1 dB out após threshold', '4x mais volume', 'Compressão desligada', '1 dB in = 4 dB out'], correct: 0 },
  { q: 'Qual a regra 3:1 no posicionamento de microfones?', opts: ['3 mics por palco', 'Distância entre mics deve ser 3x a distância de cada um à fonte', '3 cabos por mic', '1 mic para 3 pessoas'], correct: 1 },
];

export const FinalQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (finished) return;
    if (timeLeft <= 0) { setFinished(true); return; }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, finished]);

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

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <HelpCircle className="w-4 h-4" />
          <span>Quiz Final</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <Timer className="w-4 h-4" />
            <span className={timeLeft < 60 ? 'text-red-400 font-bold' : ''}>{mins}:{secs.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-slate-500 text-sm">{current + 1}/{questions.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!finished ? (
          <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
            <h3 className="text-white text-lg font-bold mb-5">{questions[current].q}</h3>
            <div className="space-y-2">
              {questions[current].opts.map((opt, idx) => {
                let cls = 'border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer';
                if (selected !== null) {
                  if (idx === questions[current].correct) cls = 'border-emerald-500 bg-emerald-500/15 cursor-default';
                  else if (idx === selected) cls = 'border-red-500 bg-red-500/15 cursor-default';
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
              <button onClick={next}
                className="mt-5 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all cursor-pointer"
              >
                {current < questions.length - 1 ? 'Próxima' : 'Ver resultado'}
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8 rounded-2xl bg-slate-900/80 border border-slate-800"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-white text-2xl font-bold mb-2">Quiz Concluído!</h3>
            <p className="text-slate-300 text-lg">Placar: <span className="text-blue-400 font-bold">{score}</span> / {questions.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
