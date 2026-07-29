import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, SlidersHorizontal, Gauge } from 'lucide-react';
import { VUAnimation } from './VUAnimation';

export const GainSimulator: React.FC = () => {
  const [gain, setGain] = useState(30);
  const [fader, setFader] = useState(50);
  const [inputLevel, setInputLevel] = useState(50);

  const signalLevel = Math.min(100, (gain / 100) * (inputLevel / 100) * 150);
  const outputLevel = Math.min(100, signalLevel * (fader / 100) * 1.2);
  const clip = signalLevel >= 100 || outputLevel >= 100;

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <Gauge className="w-5 h-5 text-blue-400" />
        <span className="text-white font-bold text-sm">Simulador de Gain</span>
      </div>
      <div className="space-y-5">
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Nível da fonte</span>
            <span className="text-white font-bold">{inputLevel}%</span>
          </div>
          <input type="range" min={0} max={100} value={inputLevel} onChange={(e) => setInputLevel(Number(e.target.value))}
            className="w-full accent-blue-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-slate-400">Gain</span>
            <span className="text-white font-bold text-xs ml-auto">{gain}%</span>
          </div>
          <input type="range" min={0} max={100} value={gain} onChange={(e) => setGain(Number(e.target.value))}
            className="w-full accent-amber-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-slate-400">Fader</span>
            <span className="text-white font-bold text-xs ml-auto">{fader}%</span>
          </div>
          <input type="range" min={0} max={100} value={fader} onChange={(e) => setFader(Number(e.target.value))}
            className="w-full accent-blue-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
        </div>
        <div className="pt-2 border-t border-slate-800">
          <VUAnimation level={outputLevel} label="Sinal de saída" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: clip ? 1 : 0, y: clip ? 0 : 10 }}
          className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-center"
        >
          <span className="text-red-400 text-sm font-black">SINAL CLIPADO! Reduza o Gain.</span>
        </motion.div>
        {!clip && outputLevel > 0 && outputLevel < 80 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-center"
          >
            <span className="text-emerald-400 text-sm font-bold">Sinal ideal ✓</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};
