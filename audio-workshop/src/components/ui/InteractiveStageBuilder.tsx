import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Speaker, Disc3, Laptop, Cable, Shirt } from 'lucide-react';

interface Item {
  id: string;
  label: string;
  icon: React.ReactNode;
  placed: boolean;
}

const availableItems: Item[] = [
  { id: 'mic1', label: 'Microfone 1', icon: <Mic className="w-5 h-5" />, placed: false },
  { id: 'mic2', label: 'Microfone 2', icon: <Mic className="w-5 h-5" />, placed: false },
  { id: 'spk1', label: 'Caixa 1', icon: <Speaker className="w-5 h-5" />, placed: false },
  { id: 'spk2', label: 'Caixa 2', icon: <Speaker className="w-5 h-5" />, placed: false },
  { id: 'mixer', label: 'Mesa', icon: <Disc3 className="w-5 h-5" />, placed: false },
  { id: 'notebook', label: 'Notebook', icon: <Laptop className="w-5 h-5" />, placed: false },
  { id: 'stand1', label: 'Estante 1', icon: <Shirt className="w-5 h-5" />, placed: false },
  { id: 'stand2', label: 'Estante 2', icon: <Shirt className="w-5 h-5" />, placed: false },
  { id: 'cable1', label: 'Cabo 1', icon: <Cable className="w-5 h-5" />, placed: false },
  { id: 'cable2', label: 'Cabo 2', icon: <Cable className="w-5 h-5" />, placed: false },
];

type Validation = 'idle' | 'green' | 'yellow' | 'red';

export const InteractiveStageBuilder: React.FC = () => {
  const [items, setItems] = useState<Item[]>(availableItems);
  const [selected, setSelected] = useState<string | null>(null);
  const [validation, setValidation] = useState<Validation>('idle');

  const handleStageClick = () => {
    if (!selected) return;
    setItems((prev) => prev.map((i) => (i.id === selected ? { ...i, placed: true } : i)));
    setSelected(null);
  };

  const validate = () => {
    const placed = items.filter((i) => i.placed);
    if (placed.length === items.length) setValidation('green');
    else if (placed.length >= items.length - 2) setValidation('yellow');
    else setValidation('red');
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <h3 className="text-white font-bold text-sm mb-4 text-center">Montagem de Palco</h3>

      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 mb-4 min-h-[180px] relative"
        onClick={handleStageClick}
      >
        <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-slate-700/50 m-2 flex items-center justify-center">
          <span className="text-slate-600 text-xs font-bold">PALCO</span>
        </div>
        <div className="relative flex flex-wrap gap-2 p-4 min-h-[140px]">
          {items.filter((i) => i.placed).map((item) => (
            <motion.div key={item.id} initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs"
            >
              {item.icon}
              {item.label}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {items.filter((i) => !i.placed).map((item) => (
          <button key={item.id} onClick={() => setSelected(item.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selected === item.id
                ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300'
                : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-500'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <button onClick={validate}
        className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm hover:from-blue-500 hover:to-cyan-500 transition-all cursor-pointer"
      >
        Validar Montagem
      </button>

      <AnimatePresence>
        {validation !== 'idle' && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className={`mt-4 p-4 rounded-2xl text-center border ${
              validation === 'green' ? 'bg-emerald-500/10 border-emerald-500/30' :
              validation === 'yellow' ? 'bg-amber-500/10 border-amber-500/30' :
              'bg-red-500/10 border-red-500/30'
            }`}
          >
            <span className={`text-2xl font-bold ${
              validation === 'green' ? 'text-emerald-400' :
              validation === 'yellow' ? 'text-amber-400' :
              'text-red-400'
            }`}>
              {validation === 'green' ? '🟢 Correto' :
               validation === 'yellow' ? '🟡 Ajustes necessários' :
               '🔴 Revise montagem'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
