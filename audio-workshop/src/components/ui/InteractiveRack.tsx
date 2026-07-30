import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Disc3, Waves, GitBranch, Speaker, CheckCircle2, ArrowDown, GripVertical } from 'lucide-react';

interface RackUnit {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const allUnits: RackUnit[] = [
  { id: 'power', label: 'Power Conditioner', subtitle: 'Fonte de energia', icon: <Zap className="w-5 h-5" />, color: '#F59E0B' },
  { id: 'mixer', label: 'Mixer', subtitle: 'Mesa de som', icon: <Disc3 className="w-5 h-5" />, color: '#3B82F6' },
  { id: 'eq', label: 'Equalizador', subtitle: 'EQ Gráfico', icon: <Waves className="w-5 h-5" />, color: '#8B5CF6' },
  { id: 'crossover', label: 'Crossover', subtitle: 'Divisor de frequências', icon: <GitBranch className="w-5 h-5" />, color: '#EC4899' },
  { id: 'amp', label: 'Amplificador', subtitle: 'Potência', icon: <Speaker className="w-5 h-5" />, color: '#EF4444' },
];

const correctOrder = ['power', 'mixer', 'eq', 'crossover', 'amp'];

const RackSlot: React.FC<{
  unit: RackUnit | null;
  slotIndex: number;
  isDragOver: boolean;
  onDrop: (slotIndex: number) => void;
  onDragStart: (id: string) => void;
  isCorrect: boolean;
  isIncorrect: boolean;
  isEmptyTarget: boolean;
}> = ({ unit, slotIndex, isDragOver, onDrop, onDragStart, isCorrect, isIncorrect, isEmptyTarget }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={() => onDrop(slotIndex)}
      className={`relative p-2 rounded-xl border-2 transition-all duration-300 ${
        isDragOver ? 'border-blue-500 bg-blue-500/10' :
        isCorrect ? 'border-emerald-500/60 bg-emerald-500/10' :
        isIncorrect ? 'border-red-500/60 bg-red-500/10' :
        unit ? 'border-slate-700 bg-slate-800/80' :
        isEmptyTarget ? 'border-dashed border-slate-700 bg-slate-900/40' :
        'border-dashed border-slate-700 bg-slate-900/40'
      }`}
      style={{ minHeight: '68px' }}
    >
      {unit ? (
        <div
          draggable
          onDragStart={() => onDragStart(unit.id)}
          className="flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <div className="text-slate-600">
            <GripVertical className="w-4 h-4" />
          </div>
          <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${unit.color}20` }}>
            {unit.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">{unit.label}</p>
            <p className="text-[10px] text-slate-500 truncate">{unit.subtitle}</p>
          </div>
          {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {isIncorrect && (
            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
              <span className="text-red-400 text-xs font-bold">!</span>
            </div>
          )}
          <span className="text-[10px] text-slate-600 font-mono shrink-0">Slot {slotIndex + 1}</span>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full py-3">
          <span className="text-xs text-slate-600 italic">Arraste um equipamento aqui</span>
        </div>
      )}
    </div>
  );
};

export const InteractiveRack: React.FC = () => {
  const [available, setAvailable] = useState<RackUnit[]>(allUnits);
  const [slots, setSlots] = useState<(RackUnit | null)[]>(Array(5).fill(null));
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
  const [slotStatus, setSlotStatus] = useState<('idle' | 'correct' | 'incorrect')[]>(Array(5).fill('idle'));

  const isAllCorrect = slots.every((unit, i) => unit?.id === correctOrder[i]);

  const handleDragStart = (id: string) => {
    setDraggedId(id);
  };

  const handleDropOnSlot = useCallback((slotIndex: number) => {
    if (!draggedId) return;
    const expectedId = correctOrder[slotIndex];
    const unit = available.find((u) => u.id === draggedId);
    if (!unit) return;

    setSlots((prev) => {
      const newSlots = [...prev];
      newSlots[slotIndex] = unit;
      return newSlots;
    });
    setAvailable((prev) => prev.filter((u) => u.id !== draggedId));
    setDraggedId(null);
    setDragOverSlot(null);

    if (draggedId === expectedId) {
      setSlotStatus((prev) => {
        const newStatus = [...prev];
        newStatus[slotIndex] = 'correct';
        return newStatus as ('idle' | 'correct' | 'incorrect')[];
      });
    } else {
      setSlotStatus((prev) => {
        const newStatus = [...prev];
        newStatus[slotIndex] = 'incorrect';
        return newStatus;
      });
      setTimeout(() => {
        setSlots((prev) => {
          const newSlots = [...prev];
          newSlots[slotIndex] = null;
          return newSlots;
        });
        setAvailable((prev) => [...prev, unit]);
        setSlotStatus((prev) => {
          const newStatus = [...prev];
          newStatus[slotIndex] = 'idle';
          return newStatus;
        });
      }, 1200);
    }
  }, [draggedId, available]);

  const handleReset = () => {
    setAvailable(allUnits);
    setSlots(Array(5).fill(null));
    setDraggedId(null);
    setSlotStatus(Array(5).fill('idle'));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Speaker className="w-4 h-4 text-indigo-400" />
          <span>Monte o Rack na ordem correta do fluxo de sinal</span>
        </div>
        {available.length < 5 && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs hover:bg-slate-700 transition-all cursor-pointer"
          >
            Reiniciar
          </button>
        )}
      </div>

      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <div className="mb-3">
          <p className="text-xs text-slate-500 mb-2 font-semibold">Equipamentos disponíveis:</p>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {available.map((unit) => (
                <motion.div
                  key={unit.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  draggable
                  onDragStart={() => handleDragStart(unit.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold hover:border-blue-500/50 cursor-grab active:cursor-grabbing transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GripVertical className="w-3 h-3 text-slate-600" />
                  {unit.icon}
                  {unit.label}
                </motion.div>
              ))}
            </AnimatePresence>
            {available.length === 0 && (
              <p className="text-xs text-slate-600 italic">Todos os equipamentos foram posicionados</p>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-500 font-semibold">Rack:</p>
            <div className="flex items-center gap-1 text-xs text-slate-600">
              <ArrowDown className="w-3 h-3" />
              <span>Fluxo do sinal</span>
              <ArrowDown className="w-3 h-3" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {slots.map((unit, i) => (
              <RackSlot
                key={i}
                unit={unit}
                slotIndex={i}
                isDragOver={dragOverSlot === i}
                onDrop={handleDropOnSlot}
                onDragStart={handleDragStart}
                isCorrect={slotStatus[i] === 'correct'}
                isIncorrect={slotStatus[i] === 'incorrect'}
                isEmptyTarget={available.length > 0 && !unit}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isAllCorrect && slots.every((s) => s !== null) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center"
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-1" />
              <p className="text-white font-bold text-sm">Rack montado corretamente!</p>
              <p className="text-slate-400 text-xs mt-1">
                Power Conditioner → Mixer → EQ → Crossover → Amplificador
              </p>
              <div className="flex justify-center gap-1 mt-2">
                {[0,1,2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
