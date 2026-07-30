import { useState } from 'react';
import { motion } from 'framer-motion';
import { DynamicRangeGraph } from './DynamicRangeGraph';
import { GainReductionMeter } from './GainReductionMeter';

export const CompressorSimulator: React.FC = () => {
  const [threshold, setThreshold] = useState(60);
  const [ratio, setRatio] = useState(2);
  const [attack, setAttack] = useState(30);
  const [release, setRelease] = useState(50);
  const [makeup, setMakeup] = useState(20);
  const [active, setActive] = useState(false);

  const signalAbove = Math.max(0, 80 - threshold);
  const gainReduction = active ? Math.min(100, signalAbove * (ratio / 2)) : 0;

  const before = [10, 15, 80, 20, 12, 90, 18, 8, 85, 14, 10, 88, 16, 9, 82, 11];
  const after = active
    ? before.map((v) => {
        if (v > threshold) {
          const above = v - threshold;
          const reduced = above / ratio;
          return Math.round(threshold + reduced + makeup);
        }
        return Math.round(v + makeup);
      })
    : before;

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-5">
        <span className="text-white font-bold text-sm">Compressor</span>
        <button onClick={() => setActive(!active)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${active ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-slate-700 text-slate-400'}`}
        >
          {active ? 'Ligado' : 'Desligado'}
        </button>
      </div>
      <DynamicRangeGraph before={before} after={after} />
      <div className="grid grid-cols-2 gap-3 mt-5">
        <SliderParam label="Threshold" value={threshold} onChange={setThreshold} min={0} max={100} unit="%" color="accent-red-500" active={active} />
        <SliderParam label="Ratio" value={ratio} onChange={setRatio} min={1} max={8} step={1} unit=":1" color="accent-amber-500" active={active} />
        <SliderParam label="Attack" value={attack} onChange={setAttack} min={1} max={100} unit="ms" color="accent-amber-400" active={active} />
        <SliderParam label="Release" value={release} onChange={setRelease} min={1} max={100} unit="ms" color="accent-blue-400" active={active} />
        <div className="col-span-2">
          <SliderParam label="Make-up Gain" value={makeup} onChange={setMakeup} min={0} max={50} unit="dB" color="accent-emerald-400" active={active} />
        </div>
      </div>
      {active && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
          <GainReductionMeter reduction={gainReduction} label="Redução de Ganho" />
        </motion.div>
      )}
    </div>
  );
};

function SliderParam({ label, value, onChange, min, max, step, unit, color, active }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; unit: string; color: string; active: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
        <span>{label}</span>
        <span className="text-white font-bold">{value}{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step ?? 1} value={value}
        onChange={(e) => onChange(Number(e.target.value))} disabled={!active}
        className={`w-full ${color} h-1.5 rounded-full appearance-none bg-slate-800 cursor-pointer ${!active ? 'opacity-40' : ''}`} />
    </div>
  );
}
