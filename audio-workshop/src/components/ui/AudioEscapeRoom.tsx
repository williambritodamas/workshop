import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Cable, Volume2, SlidersHorizontal, Bell, Speaker, Zap, Radio, HelpCircle, Search } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  checked: boolean;
  isProblem: boolean;
  explanation: string;
}

const items: ChecklistItem[] = [
  { id: 'power', label: 'Energia', icon: <Zap className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'O sistema está ligado na tomada.' },
  { id: 'cables', label: 'Cabos', icon: <Cable className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Cabos conectados corretamente.' },
  { id: 'gain', label: 'Gain', icon: <Volume2 className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Gain do canal está ajustado.' },
  { id: 'fader', label: 'Fader', icon: <SlidersHorizontal className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Fader do canal está levantado.' },
  { id: 'mute', label: 'Mute', icon: <Bell className="w-4 h-4" />, checked: false, isProblem: true, explanation: 'Canal estava mutado! Mute desativado.' },
  { id: 'master', label: 'Master', icon: <SlidersHorizontal className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Fader master está no nível correto.' },
  { id: 'speaker', label: 'Caixa', icon: <Speaker className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Caixa de som ligada e conectada.' },
  { id: 'phantom', label: 'Phantom Power', icon: <Radio className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Phantom Power +48V ativo para microfone condensador.' },
  { id: 'mic', label: 'Microfone', icon: <Mic className="w-4 h-4" />, checked: false, isProblem: false, explanation: 'Microfone conectado e funcional.' },
];

export const AudioEscapeRoom: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(items);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [message, setMessage] = useState('');

  const handleCheck = (id: string) => {
    const idx = checklist.findIndex((i) => i.id === id);
    const item = checklist[idx];
    if (item.checked || idx !== currentItem) return;

    const newList = checklist.map((i) => (i.id === id ? { ...i, checked: true } : i));
    setChecklist(newList);

    if (item.isProblem) {
      setScore((s) => s + 1);
      setMessage('Encontrou o problema! Passe para o próximo.');
    } else {
      setMessage(item.explanation + ' Não era o problema.');
    }

    setTimeout(() => {
      setCurrentItem((prev) => prev + 1);
      setMessage('');
      if (currentItem >= checklist.length - 1) {
        setFinished(true);
      }
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-amber-400" />
        <span className="text-white font-bold text-sm">Sala de Escape — "Não sai som"</span>
      </div>

      {!finished ? (
        <>
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 mb-4">
            <p className="text-red-300 text-sm font-bold text-center">NÃO SAI SOM!</p>
            <p className="text-slate-400 text-xs text-center mt-1">Verifique os itens um por um.</p>
          </div>

          <div className="space-y-2">
            {checklist.map((item, i) => (
              <button key={item.id} onClick={() => handleCheck(item.id)}
                disabled={item.checked || i !== currentItem}
                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                  item.checked
                    ? 'border-slate-700 bg-slate-800/50 opacity-60'
                    : i === currentItem
                    ? 'border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20'
                    : 'border-slate-800 bg-slate-900/60 opacity-40 cursor-not-allowed'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${
                  item.checked ? 'bg-slate-700 text-slate-500' : 'bg-slate-800 text-slate-300'
                }`}>
                  {item.icon}
                </div>
                <span className={`text-sm font-bold ${
                  item.checked ? 'text-slate-600' : 'text-white'
                }`}>{item.label}</span>
                {item.checked && (
                  <span className="ml-auto text-xs">{item.isProblem ? '✅' : '❌'}</span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {message && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="mt-4 p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center"
              >
                <p className="text-slate-200 text-xs">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
        >
          <Search className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
          <h3 className="text-white font-bold text-lg mb-1">Sistema Resolvido!</h3>
          <p className="text-slate-300 text-sm">Problemas encontrados: {score}</p>
        </motion.div>
      )}
    </div>
  );
};
