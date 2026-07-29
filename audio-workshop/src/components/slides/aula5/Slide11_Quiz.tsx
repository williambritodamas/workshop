import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
export { slide11Notes };

const quiz = [
  { question: 'Qual a diferença entre Gain e Fader?', answer: 'Gain ajusta a sensibilidade de entrada (quanto o microfone "escuta"); Fader ajusta o volume de saída do canal.', options: ['Gain e Fader são a mesma coisa', 'Gain controla entrada, Fader controla saída', 'Gain controla saída, Fader controla entrada', 'Gain é para graves, Fader para agudos'], correct: 1 },
  { question: 'Para que serve o botão Mute?', answer: 'Silenciar completamente o canal, independentemente da posição do Fader.', options: ['Aumentar o volume', 'Silenciar o canal', 'Isolar o canal nos fones', 'Ativar o equalizador'], correct: 1 },
  { question: 'O que significa "cada fonte tem seu canal"?', answer: 'Cada microfone ou instrumento ocupa uma faixa independente com seus próprios controles.', options: ['Todas as fontes compartilham o mesmo canal', 'Cada fonte tem controles independentes', 'Apenas microfones têm canais', 'Canais são apenas para instrumentos'], correct: 1 },
  { question: 'Qual a maior vantagem de uma mesa digital sobre uma analógica?', answer: 'Salvar e carregar configurações completas (cenas).', options: ['Som de melhor qualidade', 'Salvar configurações (cenas)', 'Mais canais', 'Mais barata'], correct: 1 },
  { question: 'O que o controle Pan faz?', answer: 'Posiciona o som entre os lados esquerdo e direito do sistema estéreo.', options: ['Controla o volume', 'Controla os graves', 'Posiciona o som entre esquerda e direita', 'Ativa o efeito de eco'], correct: 2 },
];

export const Slide11_Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quiz[current].correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < quiz.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Quiz" subtitle="Teste o que você aprendeu" badge="Quiz" />
      <div className="relative z-10 w-full max-w-2xl my-auto">
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div key={current} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
              <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm">
                <HelpCircle className="w-4 h-4" />
                Pergunta {current + 1} de {quiz.length}
              </div>
              <h3 className="text-white text-xl font-bold mb-6">{quiz[current].question}</h3>
              <div className="space-y-2">
                {quiz[current].options.map((opt, idx) => {
                  let cls = 'border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer';
                  if (selected !== null) {
                    if (idx === quiz[current].correct) cls = 'border-emerald-500 bg-emerald-500/15 cursor-default';
                    else if (idx === selected && idx !== quiz[current].correct) cls = 'border-red-500 bg-red-500/15 cursor-default';
                    else cls = 'border-slate-800 bg-slate-900/60 opacity-50 cursor-default';
                  }
                  return (
                    <button key={idx} onClick={() => handleAnswer(idx)}
                      className={`w-full flex items-center gap-3 p-4 rounded-2xl border transition-all ${cls}`}
                    >
                      {selected !== null && idx === quiz[current].correct && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {selected !== null && idx === selected && idx !== quiz[current].correct && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
                      <span className="text-white text-sm">{opt}</span>
                    </button>
                  );
                })}
              </div>
              {selected !== null && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30">
                  <p className="text-slate-300 text-sm">{quiz[current].answer}</p>
                </motion.div>
              )}
              {selected !== null && (
                <button onClick={next}
                  className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all"
                >
                  {current < quiz.length - 1 ? 'Próxima pergunta' : 'Ver resultado'}
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="text-center p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
            >
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-white text-2xl font-bold mb-2">Quiz Concluído!</h3>
              <p className="text-slate-300 text-lg">Você acertou <span className="text-blue-400 font-bold">{score}</span> de <span className="text-blue-400 font-bold">{quiz.length}</span>!</p>
              <p className="text-slate-500 text-sm mt-4">Incentive perguntas e discussão sobre os conceitos.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
