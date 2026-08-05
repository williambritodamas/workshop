import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Cable, Volume2, SlidersHorizontal, Bell, Speaker, Radio, Mic, AlertTriangle } from 'lucide-react';

interface ProblemItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  isIssue: boolean;
  explanation: string;
}

const problemItems: ProblemItem[] = [
  { id: 'energia', label: 'Energia', icon: <Zap className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Sistema ligado corretamente.' },
  { id: 'cabos', label: 'Cabos', icon: <Cable className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Cabos conectados sem falhas.' },
  { id: 'gain', label: 'Gain', icon: <Volume2 className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Gain ajustado adequadamente.' },
  { id: 'fader', label: 'Fader', icon: <SlidersHorizontal className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Fader do canal elevado.' },
  { id: 'mute', label: 'Mute', icon: <Bell className="w-4 h-4" />, checked: false, isIssue: true, explanation: 'Canal estava mutado! ✅ Problema resolvido.' },
  { id: 'master', label: 'Master', icon: <SlidersHorizontal className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Master no nível correto.' },
  { id: 'caixa', label: 'Caixa', icon: <Speaker className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Caixa de som operacional.' },
  { id: 'phantom', label: 'Phantom', icon: <Radio className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Phantom Power ativo se necessário.' },
  { id: 'microfone', label: 'Microfone', icon: <Mic className="w-4 h-4" />, checked: false, isIssue: false, explanation: 'Microfone conectado e funcional.' },
];

export const ProblemPanel: React.FC = () => {
  const [items, setItems] = useState<ProblemItem[]>(problemItems);
  const [selected, setSelected] = useState<ProblemItem | null>(null);

  const handleClick = (id: string) => {
    const item = problemItems.find((i) => i.id === id);
    if (!item || item.checked) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, checked: true } : i)));
    setSelected(item);
  };

  const allChecked = items.every((i) => i.checked);

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-red-400" />
        <span className="text-white font-bold text-sm">Diagnóstico — Não sai som</span>
      </div>

      <div className="space-y-1 overflow-y-auto max-h-[30vh] md:max-h-[40vh] hide-scrollbars">
        {items.map((item) => (
          <button key={item.id} onClick={() => handleClick(item.id)}
            disabled={item.checked}
            className={`w-full flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer ${
              item.checked
                ? 'border-slate-700 bg-slate-800/50'
                : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800/60'
            }`}
          >
            <div className={`p-1.5 rounded-lg ${
              item.checked ? (item.isIssue ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400') : 'bg-slate-800 text-slate-300'
            }`}>
              {item.icon}
            </div>
            <span className={`text-sm font-bold flex-1 text-left ${item.checked ? 'text-slate-500' : 'text-white'}`}>
              {item.label}
            </span>
            {item.checked && (
              <span className="text-xs font-bold">{item.isIssue ? '✅' : '❌'}</span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div key={selected.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-2xl border ${selected.isIssue ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-blue-500/10 border-blue-500/30'}`}
          >
            <p className={`text-sm font-bold ${selected.isIssue ? 'text-emerald-400' : 'text-blue-300'}`}>
              {selected.isIssue ? '✅ Problema encontrado!' : '❌ Verificado'}
            </p>
            <p className="text-slate-300 text-xs mt-1">{selected.explanation}</p>
            <p className="text-slate-500 text-[10px] mt-2">Clique em outro item para continuar o diagnóstico.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {allChecked && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
          >
            <p className="text-emerald-400 text-sm font-bold">Diagnóstico completo!</p>
            <p className="text-slate-300 text-xs mt-1">Problema encontrado: Mute estava ativado.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
