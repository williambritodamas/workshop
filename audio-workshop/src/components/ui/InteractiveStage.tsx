import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Search, Target } from 'lucide-react';

interface Problem {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  explanation: string;
  found: boolean;
}

const initialProblems: Problem[] = [
  { id: 'speaker-behind-mic', x: 250, y: 30, w: 55, h: 70, label: 'Caixa atrás do microfone', explanation: 'A caixa PA está posicionada atrás do microfone, captando o som diretamente e criando risco de feedback.', found: false },
  { id: 'monitor-facing-wrong', x: 50, y: 115, w: 45, h: 35, label: 'Monitor virado para o microfone', explanation: 'O monitor está apontado diretamente para o microfone, em vez de para o cantor. Isso cria um ciclo de realimentação.', found: false },
  { id: 'gain-too-high', x: 155, y: 10, w: 40, h: 25, label: 'Ganho excessivo', explanation: 'O gain do microfone está muito alto, amplificando demais o sinal e aumentando o risco de microfonia.', found: false },
  { id: 'mic-pointed-at-pa', x: 110, y: 55, w: 25, h: 40, label: 'Microfone apontado para a PA', explanation: 'A cápsula do microfone está virada para a caixa PA, captando o som diretamente.', found: false },
  { id: 'no-null-zone', x: 90, y: 140, w: 40, h: 30, label: 'Monitor fora da zona nula', explanation: 'O monitor não está posicionado na zona de rejeição do padrão cardioide do microfone.', found: false },
];

export const InteractiveStage: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>(initialProblems);
  const [message, setMessage] = useState('');

  const allFound = problems.every((p) => p.found);

  const handleClick = useCallback((id: string) => {
    setProblems((prev) => {
      const p = prev.find((x) => x.id === id);
      if (!p || p.found) return prev;
      setMessage(p.explanation);
      setTimeout(() => setMessage(''), 3000);
      return prev.map((x) => (x.id === id ? { ...x, found: true } : x));
    });
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Target className="w-4 h-4 text-amber-400" />
          <span>Encontre os {problems.length} problemas</span>
        </div>
        <div className="flex items-center gap-1.5">
          {problems.map((p) => (
            <div key={p.id} className={`w-4 h-4 rounded-full border-2 ${p.found ? 'bg-emerald-500 border-emerald-500' : 'border-slate-700'}`} />
          ))}
        </div>
      </div>

      <div className="relative p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <svg viewBox="0 0 340 200" className="w-full">
          <rect x="0" y="170" width="340" height="30" fill="#1E293B" rx="3" />
          <rect x="0" y="168" width="340" height="3" fill="#334155" />
          <text x="170" y="190" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">PALCO</text>

          <g opacity={problems.find((p) => p.id === 'speaker-behind-mic')?.found ? 0.4 : 1}>
            <rect x="260" y="40" width="45" height="60" rx="6" fill="#F59E0B" />
            <rect x="268" y="32" width="30" height="12" rx="4" fill="#92400E" />
            <text x="282" y="108" textAnchor="middle" fill="#F59E0B" fontSize="8" fontWeight="bold">PA</text>
          </g>

          <g opacity={problems.find((p) => p.id === 'mic-pointed-at-pa')?.found ? 0.4 : 1}>
            <rect x="115" y="65" width="14" height="28" rx="7" fill="#3B82F6" />
            <rect x="117" y="93" width="10" height="40" rx="2" fill="#64748B" />
            <line x1="122" y1="60" x2="145" y2="35" stroke="#3B82F6" strokeWidth="1.5" />
            <circle cx="122" cy="110" r="5" fill="#475569" />
          </g>

          <g opacity={problems.find((p) => p.id === 'monitor-facing-wrong')?.found ? 0.4 : 1}>
            <rect x="55" y="125" width="35" height="28" rx="4" fill="#EF4444" opacity="0.8" />
            <polygon points="55,125 42,120 42,140" fill="#EF4444" opacity="0.6" />
            <text x="72" y="160" textAnchor="middle" fill="#EF4444" fontSize="7" fontWeight="bold">Monitor</text>
          </g>

          <g opacity={problems.find((p) => p.id === 'no-null-zone')?.found ? 0.4 : 1}>
            <rect x="95" y="148" width="35" height="22" rx="3" fill="#A78BFA" opacity="0.6" />
            <text x="112" y="178" textAnchor="middle" fill="#A78BFA" fontSize="7" fontWeight="bold">Monitor 2</text>
          </g>

          {problems.find((p) => p.id === 'gain-too-high') && (
            <g opacity={problems.find((p) => p.id === 'gain-too-high')?.found ? 0.4 : 1}>
              <rect x="160" y="10" width="30" height="20" rx="4" fill="#1E293B" stroke="#EF4444" strokeWidth="1" />
              <text x="175" y="23" textAnchor="middle" fill="#EF4444" fontSize="7" fontWeight="bold">Gain 90%</text>
            </g>
          )}

          {problems.map((p) => !p.found && (
            <motion.rect key={p.id} x={p.x} y={p.y} width={p.w} height={p.h} rx="8"
              fill="transparent" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,3" opacity="0.7"
              className="cursor-pointer"
              onClick={() => handleClick(p.id)}
              whileHover={{ opacity: 1, scale: 1.05 }}
            />
          ))}

          {problems.map((p) => p.found && (
            <g key={p.id}>
              <text x={p.x + p.w / 2} y={p.y + p.h / 2 + 4} textAnchor="middle" fill="#10B981" fontSize="18" fontWeight="bold">✓</text>
            </g>
          ))}
        </svg>

        <AnimatePresence>
          {message && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="mt-3 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30"
            >
              <p className="text-slate-200 text-xs">{message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
        <Search className="w-3.5 h-3.5" />
        <span>Clique nas áreas destacadas em vermelho para encontrar problemas</span>
      </div>

      <AnimatePresence>
        {allFound && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-5 rounded-3xl bg-emerald-500/15 border border-emerald-500/40 text-center"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
            <h3 className="text-white font-bold text-lg">Todos os {problems.length} problemas encontrados!</h3>
            <p className="text-slate-300 text-sm mt-1">Agora você sabe identificar situações de risco de microfonia.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
