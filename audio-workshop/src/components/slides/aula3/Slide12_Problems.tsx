import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { TroubleshootingCard } from '../../ui/TroubleshootingCard';
import { slide12Notes } from './notes';
import { Search } from 'lucide-react';

export { slide12Notes };

const problems = [
  {
    problem: 'Microfone desligado',
    solution: 'Verifique se o microfone tem um botão liga/desliga e se o canal da mesa não está mutado.',
    tip: 'Sempre comece pela fonte: o microfone está ligado?',
  },
  {
    problem: 'Cabo rompido ou mal encaixado',
    solution: 'Desconecte e reconecte o cabo. Verifique se os pinos não estão tortos. Teste com outro cabo.',
    tip: 'Cabos são a causa mais comum de falhas intermitentes.',
  },
  {
    problem: 'Canal mutado (Mute)',
    solution: 'Verifique se o botão MUTE não está ativo no canal correspondente da mesa de som.',
    tip: 'O mute é um botão que silencia o canal mas não desliga o equipamento.',
  },
  {
    problem: 'Volume baixo ou no mínimo',
    solution: 'Suba o fader do canal e verifique se o ganho (gain) está ajustado corretamente.',
    tip: 'Ganho baixo = sinal fraco. Ganho alto demais = distorção.',
  },
  {
    problem: 'Caixa desligada ou sem energia',
    solution: 'Verifique se a caixa está ligada na tomada, o cabo de energia está conectado e o botão power está aceso.',
    tip: 'Parece básico, mas é um dos erros mais comuns em eventos ao vivo.',
  },
];

export const Slide12_Problems: React.FC = () => {
  const [showSearchTip, setShowSearchTip] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Onde podem acontecer problemas?"
        subtitle="Cada ponto do fluxo pode falhar"
        badge="Diagnóstico"
        center={true}
      />

      <div className="w-full max-w-3xl my-auto flex flex-col gap-3">
        {problems.map((p, idx) => (
          <TroubleshootingCard
            key={idx}
            problem={p.problem}
            solution={p.solution}
            tip={p.tip}
            delay={idx * 0.1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 flex flex-col items-center gap-3"
      >
        <button
          onClick={() => setShowSearchTip(!showSearchTip)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-all"
        >
          <Search className="w-4 h-4 text-blue-400" />
          Se não sai som, onde você começa a procurar?
        </button>

        {showSearchTip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center max-w-md"
          >
            <p className="text-sm text-blue-300 font-semibold">
              Siga o fluxo do começo ao fim:
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Fonte → Microfone → Cabo → Mesa → Processamento → Amplificador → Caixa
            </p>
            <p className="text-xs text-blue-400 mt-2">
              O problema está em algum desses elos da corrente!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
