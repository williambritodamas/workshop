import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const getEndNodes = (node: FlowNode): FlowNode[] => {
  if (node.isEnd) return [node];
  const results: FlowNode[] = [];
  if (node.yes && typeof node.yes !== 'string') results.push(...getEndNodes(node.yes as FlowNode));
  if (node.no && typeof node.no !== 'string') results.push(...getEndNodes(node.no as FlowNode));
  return results;
};

interface FlowRendererProps {
  node: FlowNode;
  path: string[];
  onAnswer: (nodeId: string, answer: 'yes' | 'no') => void;
  isActive: boolean;
}

const FlowRenderer: React.FC<FlowRendererProps> = ({ node, path, onAnswer, isActive }) => {
  const [expanded, setExpanded] = useState(false);
  const isEnd = node.isEnd;
  const hasBeenAnswered = path.includes(node.id);

  const handleClick = () => {
    if (isEnd) return;
    if (!hasBeenAnswered) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isActive ? 1 : hasBeenAnswered ? 0.7 : 1,
          scale: 1,
        }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-xs p-3 rounded-2xl border cursor-pointer transition-all ${
          isEnd
            ? node.result === 'ok'
              ? 'bg-emerald-500/15 border-emerald-500/40'
              : 'bg-red-500/15 border-red-500/40'
            : hasBeenAnswered
            ? 'bg-slate-800/60 border-slate-700'
            : isActive
            ? 'bg-blue-500/10 border-blue-500/40 hover:bg-blue-500/20'
            : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          {isEnd ? (
            node.result === 'ok' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400 shrink-0" />
            )
          ) : (
            <HelpCircle className={`w-5 h-5 shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
          )}
          <span className={`text-sm font-bold ${
            isEnd
              ? node.result === 'ok' ? 'text-emerald-200' : 'text-red-200'
              : hasBeenAnswered ? 'text-slate-400' : 'text-white'
          }`}>
            {node.question}
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {expanded && isActive && !isEnd && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center justify-center gap-3 mt-2">
              <button
                onClick={(e) => { e.stopPropagation(); onAnswer(node.id, 'yes'); }}
                className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Sim <ArrowRight className="w-3 h-3" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onAnswer(node.id, 'no'); }}
                className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Não <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TroubleshootingFlowchart: React.FC = () => {
  const [path, setPath] = useState<string[]>([]);
  const [, setCurrentNode] = useState<FlowNode>(flowTree);
  const [isComplete, setIsComplete] = useState(false);
  const [endNode, setEndNode] = useState<FlowNode | null>(null);

  const handleAnswer = (nodeId: string, answer: 'yes' | 'no') => {
    const node = findNode(flowTree, nodeId);
    if (!node) return;
    const next = answer === 'yes' ? node.yes : node.no;
    if (!next) return;
    const nextNode = typeof next === 'string' ? { id: next, question: next, isEnd: true } : next;
    const newPath = [...path, nodeId, nextNode.id];
    setPath(newPath);
    setCurrentNode(nextNode);
    if (nextNode.isEnd) {
      setIsComplete(true);
      setEndNode(nextNode);
    }
  };

  const findNode = (root: FlowNode, id: string): FlowNode | null => {
    if (root.id === id) return root;
    if (root.yes && typeof root.yes !== 'string') {
      const found = findNode(root.yes as FlowNode, id);
      if (found) return found;
    }
    if (root.no && typeof root.no !== 'string') {
      const found = findNode(root.no as FlowNode, id);
      if (found) return found;
    }
    return null;
  };

  const renderPath = () => {
    const nodes: FlowNode[] = [flowTree];
    let current: FlowNode = flowTree;
    for (let i = 0; i < path.length; i++) {
      const nodeId = path[i];
      const found = findNode(flowTree, nodeId);
      if (found) {
        if (found.yes && typeof found.yes !== 'string' && path[i + 1] === (found.yes as FlowNode).id) {
          current = found.yes as FlowNode;
        } else if (found.no && typeof found.no !== 'string' && path[i + 1] === (found.no as FlowNode).id) {
          current = found.no as FlowNode;
        }
        nodes.push(current);
      }
    }
    return nodes;
  };

  const handleReset = () => {
    setPath([]);
    setCurrentNode(flowTree);
    setIsComplete(false);
    setEndNode(null);
  };

  const pathNodes = renderPath();

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>Diagnóstico rápido</span>
        </div>
        {path.length > 0 && (
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
          {pathNodes.map((node, idx) => (
            <div key={node.id} className="flex flex-col items-center w-full">
              {idx > 0 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  className="w-0.5 h-3 bg-blue-500/50"
                />
              )}
              <FlowRenderer
                node={node}
                path={path}
                onAnswer={handleAnswer}
                isActive={!isComplete && idx === pathNodes.length - 1}
              />
            </div>
          ))}
          {!isComplete && pathNodes.length === 0 && (
            <FlowRenderer
              node={flowTree}
              path={path}
              onAnswer={handleAnswer}
              isActive={true}
            />
          )}
        </div>

        {isComplete && endNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700"
          >
            <p className="text-xs text-slate-400 text-center">
              {endNode.result === 'ok'
                ? 'Sistema funcionando!'
                : 'Solução encontrada - siga a recomendação acima.'}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
