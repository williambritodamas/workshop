import { useState } from 'react';
import { motion } from 'framer-motion';
import { EqualizerVisualizer } from './EqualizerVisualizer';

export const EQSimulator: React.FC = () => {
  const [low, setLow] = useState(50);
  const [mid, setMid] = useState(50);
  const [high, setHigh] = useState(50);
  const [hpf, setHpf] = useState(false);

  const isExaggerated = low > 80 || high > 80;

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-white font-bold text-sm">Equalizador</span>
      </div>
      <EqualizerVisualizer low={low} mid={mid} high={high} />
      <div className="space-y-4 mt-6">
        <SliderBand label="Graves" value={low} onChange={setLow} color="accent-blue-500" />
        <SliderBand label="Médios" value={mid} onChange={setMid} color="accent-emerald-500" />
        <SliderBand label="Agudos" value={high} onChange={setHigh} color="accent-amber-500" />
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700">
          <span className="text-xs font-bold text-slate-400">HPF (Filtro Passa-Alta)</span>
          <button onClick={() => setHpf(!hpf)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${hpf ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-700 text-slate-400'}`}
          >
            {hpf ? 'Ativado' : 'Desativado'}
          </button>
        </div>
      </div>
      {isExaggerated && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="mt-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-center"
        >
          <span className="text-red-400 text-sm font-black">Equalização exagerada! Grave e agudo em excesso.</span>
        </motion.div>
      )}
      <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center">
        <p className="text-slate-300 text-xs">Ajuste os sliders para encontrar o equilíbrio ideal.</p>
      </div>
    </div>
  );
};

function SliderBand({ label, value, onChange, color }: { label: string; value: number; onChange: (v: number) => void; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-400 mb-1">
        <span>{label}</span>
        <span className="text-white font-bold">{value}%</span>
      </div>
      <input type="range" min={0} max={100} value={value} onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full ${color} h-2 rounded-full appearance-none bg-slate-800 cursor-pointer`} />
    </div>
  );
}
