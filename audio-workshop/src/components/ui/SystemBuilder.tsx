import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Cable, Disc3, Speaker, ArrowRightFromLine, CheckCircle2, Zap } from 'lucide-react';

interface EquipCard {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const allEquipment: EquipCard[] = [
  { id: 'mic', label: 'Microfone', icon: <Mic className="w-5 h-5" /> },
  { id: 'xlr', label: 'Cabo XLR', icon: <Cable className="w-5 h-5" /> },
  { id: 'mixer', label: 'Mesa', icon: <Disc3 className="w-5 h-5" /> },
  { id: 'out', label: 'Saída Principal', icon: <ArrowRightFromLine className="w-5 h-5" /> },
  { id: 'speaker', label: 'Caixa Ativa', icon: <Speaker className="w-5 h-5" /> },
];

const correctOrder = ['mic', 'xlr', 'mixer', 'out', 'speaker'];

const shuffledEquipment = [...allEquipment].sort(() => Math.random() - 0.5);

export const SystemBuilder: React.FC = () => {
  const [available, setAvailable] = useState<EquipCard[]>(shuffledEquipment);
  const [chain, setChain] = useState<EquipCard[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState(false);

  const isComplete = chain.length === correctOrder.length;
  const isCorrectOrder = chain.every((item, i) => item.id === correctOrder[i]);

  const handleClickItem = useCallback((item: EquipCard) => {
    if (showSuccess) return;
    const nextIndex = chain.length;
    if (item.id === correctOrder[nextIndex]) {
      const newChain = [...chain, item];
      setChain(newChain);
      setAvailable((prev) => prev.filter((p) => p.id !== item.id));
      if (newChain.length === correctOrder.length) {
        setShowSuccess(true);
      }
    } else {
      setWrongAttempt(true);
      setTimeout(() => setWrongAttempt(false), 600);
    }
  }, [chain, showSuccess]);

  const handleReset = () => {
    setChain([]);
    setAvailable([...allEquipment].sort(() => Math.random() - 0.5));
    setShowSuccess(false);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Monte a cadeia de sinal na ordem correta</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
          {chain.length}/{correctOrder.length} passos
        </div>
      </div>

      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <div className="mb-3">
          <p className="text-xs text-slate-500 mb-2 font-semibold">Equipamentos disponíveis:</p>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {available.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => handleClickItem(item)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold hover:border-blue-500/50 hover:bg-slate-700/60 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                  {item.label}
                </motion.button>
              ))}
            </AnimatePresence>
            {available.length === 0 && !showSuccess && (
              <p className="text-xs text-slate-600 italic">Todos utilizados</p>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-3">
          <p className="text-xs text-slate-500 mb-2 font-semibold">Cadeia de sinal:</p>
          <div className="flex flex-wrap items-center gap-1 min-h-[40px]">
            {chain.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-1"
              >
                {i > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-emerald-500 mx-0.5"
                  >
                    <ArrowRightFromLine className="w-3 h-3" />
                  </motion.div>
                )}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  {item.icon}
                  {item.label}
                </div>
              </motion.div>
            ))}
            {chain.length === 0 && (
              <p className="text-xs text-slate-600 italic">Clique nos equipamentos na ordem correta</p>
            )}
          </div>
        </div>

        {isComplete && isCorrectOrder && showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            />
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2 relative z-10" />
            <h3 className="text-white font-bold text-lg relative z-10">Cadeia correta!</h3>
            <p className="text-slate-300 text-sm mt-1 relative z-10">
              Microfone → Cabo → Mesa → Saída → Caixa
            </p>
            <div className="flex justify-center gap-1 mt-2 relative z-10">
              {[0,1,2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                />
              ))}
            </div>
            <button
              onClick={handleReset}
              className="mt-3 px-4 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs hover:bg-slate-700 transition-all cursor-pointer relative z-10"
            >
              Recomeçar
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {wrongAttempt && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="mt-2 p-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold text-center"
            >
              Ordem incorreta! Tente novamente.
            </motion.div>
          )}
        </AnimatePresence>

        {chain.length > 0 && !showSuccess && (
          <button
            onClick={handleReset}
            className="mt-3 w-full py-2 rounded-xl bg-slate-800 text-slate-400 text-xs hover:bg-slate-700 transition-all cursor-pointer"
          >
            Recomeçar
          </button>
        )}
      </div>
    </div>
  );
};
