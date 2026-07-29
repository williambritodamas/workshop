import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SignalNode } from './SignalNode';
import { Play, RotateCcw } from 'lucide-react';

interface FlowStep {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

interface SignalFlowAnimationProps {
  steps: FlowStep[];
  autoPlay?: boolean;
  interval?: number;
  onComplete?: () => void;
  direction?: 'horizontal' | 'vertical';
  highlightColor?: 'default' | 'success' | 'danger';
}

export const SignalFlowAnimation: React.FC<SignalFlowAnimationProps> = ({
  steps,
  autoPlay = true,
  interval = 1200,
  onComplete,
  direction = 'horizontal',
  highlightColor = 'default',
}) => {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const advance = useCallback(() => {
    setActiveStep((prev) => {
      if (prev >= steps.length - 1) {
        setIsPlaying(false);
        onComplete?.();
        return prev;
      }
      return prev + 1;
    });
  }, [steps.length, onComplete]);

  const reset = useCallback(() => {
    setActiveStep(-1);
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [isPlaying, advance, interval]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className={`w-full flex ${direction === 'horizontal' ? 'flex-row flex-wrap justify-center items-center gap-2 md:gap-3' : 'flex-col items-center gap-3'}`}>
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            {idx > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeStep >= idx - 1 ? 1 : 0.2 }}
                className={`text-blue-400 font-bold text-lg ${direction === 'horizontal' ? 'hidden md:block' : 'block'}`}
              >
                <motion.span
                  animate={activeStep >= idx - 1 ? { x: [0, 4, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {direction === 'horizontal' ? '→' : '↓'}
                </motion.span>
              </motion.div>
            )}
            <SignalNode
              icon={step.icon}
              title={step.title}
              subtitle={step.subtitle}
              active={activeStep >= idx}
              highlight={activeStep >= idx ? highlightColor : 'default'}
              delay={0}
              size="sm"
              onClick={() => setActiveStep(idx)}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-2">
        {!autoPlay && (
          <button
            onClick={advance}
            disabled={activeStep >= steps.length - 1}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-white text-xs font-bold transition-all"
          >
            <Play className="w-3.5 h-3.5" />
            Avançar
          </button>
        )}
        <button
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Repetir
        </button>
      </div>
    </div>
  );
};
