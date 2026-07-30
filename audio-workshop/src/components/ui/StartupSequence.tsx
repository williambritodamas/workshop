import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Power, Volume2, Disc3, Zap, CheckCircle2, RotateCcw } from 'lucide-react';

interface StartupSequenceProps {
  mode: 'startup' | 'shutdown';
}

interface StepData {
  id: string;
  label: string;
  detail: string;
  icon: React.ReactNode;
  order: number;
}

const steps: StepData[] = [
  { id: 'volumes', label: 'Volumes no mínimo', detail: 'Gain e fader em 0', icon: <Volume2 className="w-4 h-4" />, order: 1 },
  { id: 'signal', label: 'Equipamentos de sinal', detail: 'Mesa e processadores', icon: <Disc3 className="w-4 h-4" />, order: 2 },
  { id: 'amplifiers', label: 'Amplificadores', detail: 'Caixas ativas e amps', icon: <Zap className="w-4 h-4" />, order: 3 },
];

export const StartupSequence: React.FC<StartupSequenceProps> = ({ mode }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [done, setDone] = useState(false);

  const order = mode === 'startup'
    ? [steps[0], steps[1], steps[2]]
    : [...steps].reverse();

  const startSequence = useCallback(() => {
    setActiveStep(0);
    setCompleted([]);
    setDone(false);
    setIsRunning(true);
  }, []);

  useEffect(() => {
    if (!isRunning || done) return;
    const timer = setTimeout(() => {
      const current = order[activeStep];
      if (current) {
        setCompleted((prev) => [...prev, current.id]);
        if (activeStep < order.length - 1) {
          setActiveStep((prev) => prev + 1);
        } else {
          setDone(true);
          setIsRunning(false);
        }
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [isRunning, activeStep, done, order]);

  useEffect(() => {
    startSequence();
  }, [mode, startSequence]);

  const getBadgeColor = (stepId: string) => {
    if (completed.includes(stepId)) return 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';
    const idx = order.findIndex((s) => s.id === stepId);
    if (idx === activeStep) return 'bg-blue-500/20 border-blue-500/40 text-blue-300';
    return 'bg-slate-800 border-slate-700 text-slate-500';
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Power className={`w-4 h-4 ${mode === 'startup' ? 'text-emerald-400' : 'text-red-400'}`} />
          <span>{mode === 'startup' ? 'Sequência de Ligar' : 'Sequência de Desligar'}</span>
        </div>
        <button
          onClick={startSequence}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs hover:bg-slate-700 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          Repetir
        </button>
      </div>

      <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          {order.map((step, idx) => {
            const isCompleted = completed.includes(step.id);
            const isActive = idx === activeStep && !isCompleted;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-3 rounded-2xl border transition-all duration-500 ${
                  isCompleted
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : isActive
                    ? 'bg-blue-500/10 border-blue-500/40'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-all duration-500 ${
                    isCompleted ? 'bg-emerald-500/20 text-emerald-400' :
                    isActive ? 'bg-blue-500/20 text-blue-400' :
                    'bg-slate-800 text-slate-600'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold transition-all duration-500 ${
                        isCompleted ? 'text-emerald-200' :
                        isActive ? 'text-white' :
                        'text-slate-500'
                      }`}>
                        {step.label}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full border transition-all duration-500 ${getBadgeColor(step.id)}`}>
                        {mode === 'startup' ? `${step.order}º` : `${order.length - step.order + 1}º`}
                      </span>
                    </div>
                    <p className={`text-xs mt-0.5 ${
                      isCompleted ? 'text-emerald-400/70' :
                      isActive ? 'text-blue-400/70' :
                      'text-slate-600'
                    }`}>
                      {step.detail}
                    </p>
                  </div>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  )}
                  {isActive && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    >
                      <Power className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-1" />
                <p className="text-white font-bold text-sm">
                  {mode === 'startup' ? 'Sistema ligado com segurança!' : 'Sistema desligado com segurança!'}
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  {mode === 'startup'
                    ? 'Sempre ligue amplificadores por último'
                    : 'Sempre desligue amplificadores primeiro'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
