import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowDown, Mic, Volume2, SlidersHorizontal, Eye } from 'lucide-react';

const steps = [
  { id: 1, icon: <SlidersHorizontal className="w-5 h-5" />, text: 'Abaixe o Fader', detail: 'Coloque o Fader do canal no mínimo antes de começar.' },
  { id: 2, icon: <Mic className="w-5 h-5" />, text: 'Peça para a pessoa falar normalmente', detail: 'A fonte deve estar no volume real de uso — nem sussurrando, nem gritando.' },
  { id: 3, icon: <Volume2 className="w-5 h-5" />, text: 'Ajuste o Gain', detail: 'Gire o Gain lentamente até o LED verde acender com frequência e o amarelo apenas nos picos.' },
  { id: 4, icon: <Eye className="w-5 h-5" />, text: 'Observe os LEDs', detail: 'O LED vermelho (Clip) NÃO deve acender em hipótese alguma durante o uso normal.' },
  { id: 5, icon: <ArrowDown className="w-5 h-5 text-red-400" />, text: 'Evite Clip', detail: 'Se o LED vermelho acender, reduza o Gain imediatamente.' },
  { id: 6, icon: <SlidersHorizontal className="w-5 h-5" />, text: 'Ajuste o Fader', detail: 'Agora suba o Fader até o volume desejado para a mixagem.' },
];

export const StepByStepAdjustment: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full max-w-lg mx-auto space-y-2">
      {steps.map((step) => (
        <button key={step.id} onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
          className={`w-full flex items-start gap-3 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            activeStep === step.id ? 'border-blue-500 bg-blue-500/15' : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
          }`}
        >
          <div className={`flex items-center justify-center w-8 h-8 rounded-xl shrink-0 text-xs font-black ${
            activeStep === step.id ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-500'
          }`}>
            {step.id}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className={`shrink-0 ${activeStep === step.id ? 'text-blue-400' : 'text-slate-500'}`}>{step.icon}</span>
              <span className={`text-sm font-bold ${activeStep === step.id ? 'text-white' : 'text-slate-300'}`}>{step.text}</span>
              {activeStep === step.id && <CheckCircle2 className="w-4 h-4 text-blue-400 ml-auto shrink-0" />}
            </div>
            <AnimatePresence>
              {activeStep === step.id && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                  className="text-xs text-slate-400 mt-2 leading-relaxed overflow-hidden"
                >
                  {step.detail}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </button>
      ))}
    </div>
  );
};
