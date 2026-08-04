import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface FlowNode {
  id: string;
  question: string;
  yes?: FlowNode | string;
  no?: FlowNode | string;
  isEnd?: boolean;
  result?: 'ok' | 'error';
}

const flowTree: FlowNode = {
  id: 'start',
  question: 'Tem som?',
  yes: { id: 'ok', question: 'Tudo OK ✅', isEnd: true, result: 'ok' },
  no: {
    id: 'check-mic',
    question: 'Microfone conectado?',
    yes: {
      id: 'check-cable',
      question: 'Cabo XLR funcionando?',
      yes: {
        id: 'check-mixer',
        question: 'Canal da mesa aberto?',
        yes: {
          id: 'check-mute',
          question: 'Canal não está mute?',
          yes: {
            id: 'check-gain',
            question: 'Gain ajustado corretamente?',
            yes: {
              id: 'check-main',
              question: 'Main out ligado?',
              yes: { id: 'check-speaker', question: 'Caixa ligada e com volume?', result: 'ok', isEnd: true },
              no: { id: 'fix-main', question: 'Ative o Main Out', isEnd: true, result: 'error' },
            },
            no: { id: 'fix-gain', question: 'Ajuste o Gain (pré-fader)', isEnd: true, result: 'error' },
          },
          no: { id: 'fix-mute', question: 'Desabilite o Mute do canal', isEnd: true, result: 'error' },
        },
        no: { id: 'fix-channel', question: 'Abra o canal e ajuste o fader', isEnd: true, result: 'error' },
      },
      no: { id: 'fix-cable', question: 'Substitua o cabo XLR', isEnd: true, result: 'error' },
    },
    no: {
      id: 'check-power',
      question: 'Equipamento ligado na tomada?',
      yes: { id: 'check-power-cable', question: 'Cabo de energia com problema?', isEnd: true, result: 'error' },
      no: { id: 'fix-power', question: 'Conecte o equipamento na tomada', isEnd: true, result: 'error' },
    },
  },
};

interface NodeCardProps {
  node: FlowNode;
  state: 'active' | 'answered' | 'result';
  onAnswer: (nodeId: string, answer: 'yes' | 'no') => void;
}

const NodeCard: React.FC<NodeCardProps> = ({ node, state, onAnswer }) => {
  const isEnd = !!node.isEnd;
  const isOk = node.result === 'ok';

  return (
    <div className="w-full max-w-xs">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`p-3 rounded-2xl border transition-all ${
          state === 'result'
            ? isOk
              ? 'bg-emerald-500/15 border-emerald-500/40'
              : 'bg-red-500/15 border-red-500/40'
            : state === 'active'
            ? 'bg-blue-500/10 border-blue-500/40'
            : 'bg-slate-800/60 border-slate-700'
        }`}
      >
        <div className="flex items-center gap-2">
          {isEnd ? (
            isOk ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 shrink-0" />
            )
          ) : (
            <HelpCircle className={`w-5 h-5 shrink-0 ${state === 'active' ? 'text-blue-400' : 'text-slate-500'}`} />
          )}
          <span className={`text-sm font-bold ${
            state === 'result'
              ? isOk ? 'text-emerald-200' : 'text-red-200'
              : state === 'answered' ? 'text-slate-400' : 'text-white'
          }`}>
            {node.question}
          </span>
        </div>
      </motion.div>

      {state === 'active' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="overflow-hidden"
        >
          <div className="flex items-center justify-center gap-3 mt-2">
            <button
              onClick={() => onAnswer(node.id, 'yes')}
              className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Sim <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => onAnswer(node.id, 'no')}
              className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all cursor-pointer"
            >
              Não <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const TroubleshootingFlowchart: React.FC = () => {
  const [path, setPath] = useState<FlowNode[]>([]);
  const [current, setCurrent] = useState<FlowNode>(flowTree);

  const isComplete = !!current.isEnd;

  const handleAnswer = (_nodeId: string, answer: 'yes' | 'no') => {
    const next = answer === 'yes' ? current.yes : current.no;
    if (!next) return;
    setPath((p) => [...p, current]);
    const nextNode = typeof next === 'string' ? { id: next, question: next, isEnd: true, result: 'error' as const } : next;
    setCurrent(nextNode);
  };

  const handleReset = () => {
    setPath([]);
    setCurrent(flowTree);
  };

  const chain = [...path, current];

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Diagnóstico rápido</span>
        </div>
        {chain.length > 1 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs hover:bg-slate-700 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Reiniciar
          </button>
        )}
      </div>

      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-2">
          {chain.map((node, idx) => {
            const isLast = idx === chain.length - 1;
            const state = isLast ? (isComplete ? 'result' : 'active') : 'answered';
            return (
              <div key={`${node.id}-${idx}`} className="flex flex-col items-center w-full">
                {idx > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    className="w-0.5 h-3 bg-blue-500/50"
                  />
                )}
                <NodeCard node={node} state={state as 'active' | 'answered' | 'result'} onAnswer={handleAnswer} />
              </div>
            );
          })}
        </div>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700"
          >
            <p className="text-xs text-slate-400 text-center">
              {current.result === 'ok'
                ? 'Sistema funcionando!'
                : `Solução encontrada: ${current.question}`}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
