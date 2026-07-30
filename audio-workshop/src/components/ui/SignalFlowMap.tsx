import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Disc3, Speaker, Zap, CheckCircle2, LayoutDashboard } from 'lucide-react';

type Stage = 'plan' | 'connect' | 'power' | 'test' | 'done';

interface SignalFlowMapProps {
  stage: Stage;
}

const blocks = [
  { id: 'mic', label: 'Microfone', x: 20, y: 50, icon: <Mic className="w-4 h-4" /> },
  { id: 'mixer', label: 'Mesa', x: 110, y: 50, icon: <Disc3 className="w-4 h-4" /> },
  { id: 'amp', label: 'Amplificador', x: 200, y: 50, icon: <Zap className="w-4 h-4" /> },
  { id: 'speaker', label: 'Caixa', x: 290, y: 50, icon: <Speaker className="w-4 h-4" /> },
];

const connections = [
  { from: 'mic', to: 'mixer' },
  { from: 'mixer', to: 'amp' },
  { from: 'amp', to: 'speaker' },
];

const stageLabels: Record<Stage, string> = {
  plan: 'Planejamento',
  connect: 'Conexão',
  power: 'Energia',
  test: 'Teste',
  done: 'Finalizado',
};

export const SignalFlowMap: React.FC<SignalFlowMapProps> = ({ stage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 2 : 0));
    }, 80);
    return () => clearInterval(interval);
  }, [stage]);

  const getBlockOpacity = (id: string) => {
    const idx = blocks.findIndex((b) => b.id === id);
    if (stage === 'done') return 1;
    if (stage === 'plan') return 1;
    if (stage === 'connect') return idx <= 1 ? 1 : 0.5;
    if (stage === 'power') return idx <= 2 ? 1 : 0.5;
    if (stage === 'test') return 1;
    return 1;
  };

  const getConnectionState = (idx: number) => {
    if (stage === 'done') return 'complete';
    if (stage === 'plan') return 'idle';
    if (stage === 'connect') {
      if (idx === 0) return progress > 0 ? 'animating' : 'idle';
      if (idx === 1) return progress > 50 ? 'animating' : 'idle';
      return 'idle';
    }
    if (stage === 'power') return 'complete';
    if (stage === 'test') return 'complete';
    return 'idle';
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <LayoutDashboard className="w-4 h-4 text-blue-400" />
          <span>{stageLabels[stage]}</span>
        </div>
        <div className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
          stage === 'done' ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' :
          stage === 'test' ? 'bg-blue-500/20 border-blue-500/40 text-blue-400' :
          'bg-slate-800 border-slate-700 text-slate-400'
        }`}>
          {stage.toUpperCase()}
        </div>
      </div>

      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <svg viewBox="0 0 340 100" className="w-full">
          {connections.map((conn, idx) => {
            const from = blocks.find((b) => b.id === conn.from);
            const to = blocks.find((b) => b.id === conn.to);
            if (!from || !to) return null;
            const x1 = from.x + 45;
            const y1 = from.y + 20;
            const x2 = to.x;
            const y2 = to.y + 20;
            const state = getConnectionState(idx);
            const isAnimating = state === 'animating';
            const isComplete = state === 'complete';

            return (
              <g key={conn.from + conn.to}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#334155" strokeWidth="4" strokeLinecap="round" />
                <line
                  x1={x1} y1={y1}
                  x2={isAnimating ? x1 + (x2 - x1) * (progress / 100) : isComplete ? x2 : x1}
                  y2={isAnimating ? y1 + (y2 - y1) * (progress / 100) : isComplete ? y2 : y1}
                  stroke={isComplete ? '#10B981' : '#3B82F6'}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {isAnimating && (
                  <circle
                    cx={x1 + (x2 - x1) * (progress / 100)}
                    cy={y1 + (y2 - y1) * (progress / 100)}
                    r="4"
                    fill="#60A5FA"
                  >
                    <animate attributeName="r" values="3;5;3" dur="0.8s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            );
          })}

          {blocks.map((block) => (
            <g key={block.id} opacity={getBlockOpacity(block.id)}>
              <rect
                x={block.x} y={block.y} width="45" height="40" rx="8"
                fill={stage === 'done' ? '#10B98120' : '#1E293B'}
                stroke={stage === 'done' ? '#10B981' : '#475569'}
                strokeWidth="1.5"
              />
              <foreignObject x={block.x} y={block.y + 4} width="45" height="18">
                <div className="flex items-center justify-center text-white">{block.icon}</div>
              </foreignObject>
              <text x={block.x + 22.5} y={block.y + 34} textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="bold">
                {block.label}
              </text>
              {stage === 'power' && block.id === 'amp' && (
                <g>
                  <circle cx={block.x + 22.5} cy={block.y - 6} r="6" fill="#F59E0B" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <text x={block.x + 22.5} y={block.y - 4} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">PWR</text>
                </g>
              )}
              {stage === 'power' && block.id === 'mixer' && (
                <g>
                  <circle cx={block.x + 22.5} cy={block.y - 6} r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />
                  </circle>
                  <text x={block.x + 22.5} y={block.y - 4} textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">PWR</text>
                </g>
              )}
              {stage === 'test' && (
                <g>
                  <CheckCircle2 className="w-4 h-4" />
                  <circle cx={block.x + 22.5} cy={block.y - 6} r="6" fill="#10B981" opacity="0.9" />
                  <text x={block.x + 22.5} y={block.y - 4} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">✓</text>
                </g>
              )}
              {stage === 'done' && (
                <g>
                  <circle cx={block.x + 22.5} cy={block.y - 6} r="6" fill="#10B981" />
                  <text x={block.x + 22.5} y={block.y - 4} textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">✓</text>
                </g>
              )}
            </g>
          ))}
        </svg>

        {stage === 'done' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
          >
            <p className="text-emerald-300 text-xs font-bold">Sistema completo e testado!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
