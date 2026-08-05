import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { ThresholdAnimation } from '../../ui/ThresholdAnimation';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_Threshold: React.FC = () => {
  const [threshold, setThreshold] = useState(50);
  const [signal, setSignal] = useState(30);
  const active = signal > threshold;

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Threshold" subtitle="O ponto onde o compressor começa a trabalhar" badge="Threshold" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <ThresholdAnimation threshold={threshold} signal={signal} active={active} />
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Nível do sinal</span>
                <span className={active ? 'text-red-400 font-bold' : 'text-white'}>{signal}%</span>
              </div>
              <input type="range" min={0} max={100} value={signal} onChange={(e) => setSignal(Number(e.target.value))}
                className="w-full accent-purple-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Threshold</span>
                <span className="text-red-400 font-bold">{threshold}%</span>
              </div>
              <input type="range" min={0} max={100} value={threshold} onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full accent-red-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className={`p-5 rounded-2xl border backdrop-blur-sm ${active ? 'bg-red-500/10 border-red-500/30' : 'bg-slate-900/80 border-slate-800'}`}>
            <p className="text-slate-300 text-sm leading-relaxed">
              {active ? (
                <span className="text-red-400 font-bold">⚠ Sinal ACIMA do Threshold — Compressor ativado!</span>
              ) : (
                <span>Sinal abaixo do Threshold — <span className="text-slate-400">nada acontece.</span></span>
              )}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-purple-400 font-bold">Threshold</span> é como o <span className="text-amber-400 font-bold">limite de velocidade</span> em uma estrada. Abaixo dele, você passa livre. Acima, o radar (compressor) pega.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

