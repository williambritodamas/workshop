import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
import { Mic, CheckCircle, ArrowRight } from 'lucide-react';
export { slide11Notes };

const steps = [
  { instruction: 'Segure o microfone corretamente (pelo corpo)', detail: 'Mão firme, sem cobrir a grade' },
  { instruction: 'Fale a uma distância de 2-3 dedos', detail: 'Voz clara, sem estouros' },
  { instruction: 'Fale muito perto (efeito de proximidade)', detail: 'Graves aumentam — útil para locução' },
  { instruction: 'Fale de lado (90°)', detail: 'Perda de volume e clareza' },
  { instruction: 'Gire 360° lentamente', detail: 'Perceba como o padrão polar altera o som' },
  { instruction: 'Cubra a grade com a mão', detail: 'Som abafado e distorcido' },
];

export const Slide11_Demo: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle title="Demonstração prática" subtitle="Experimente com seu microfone" badge="Prática" />
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-blue-500/30 shadow-2xl">
            <div className="p-5 rounded-2xl bg-blue-500/10 text-blue-400 mb-4"><Mic className="w-14 h-14" /></div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Passo {step + 1} de {steps.length}</h3>
            <p className="text-lg text-blue-300 font-semibold mb-1">{steps[step].instruction}</p>
            <p className="text-sm text-slate-400">{steps[step].detail}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <button key={i} onClick={() => setStep(i)} className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
              step === i ? 'bg-blue-500/20 border-blue-500/50 text-white' : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800/60'
            }`}>
              {step > i ? <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> : <span className="w-5 h-5 flex items-center justify-center text-xs font-bold text-slate-500">{i + 1}</span>}
              <span className="text-xs leading-tight">{s.instruction}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="px-6 py-2 rounded-xl bg-slate-800 text-white text-sm disabled:opacity-50 cursor-pointer hover:bg-slate-700 transition-colors">← Anterior</button>
        <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="px-6 py-2 rounded-xl bg-blue-600 text-white text-sm disabled:opacity-50 cursor-pointer hover:bg-blue-500 transition-colors flex items-center gap-1">Próximo <ArrowRight className="w-4 h-4" /></button>
      </div>
    </div>
  );
};
