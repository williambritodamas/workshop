import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, Mic, Speaker, SlidersHorizontal, Waves, Gauge, ArrowLeftRight } from 'lucide-react';

const baseAmp = [0.45, 0.58, 0.7, 0.8, 0.86, 0.82, 0.75, 0.66, 0.56, 0.46, 0.38, 0.32];

const palette = {
  blue: { icon: 'text-blue-400', slider: 'accent-blue-500 [&::-webkit-slider-thumb]:bg-blue-400', chip: 'bg-blue-500/10' },
  red: { icon: 'text-red-400', slider: 'accent-red-500 [&::-webkit-slider-thumb]:bg-red-400', chip: 'bg-red-500/10' },
  purple: { icon: 'text-purple-400', slider: 'accent-purple-500 [&::-webkit-slider-thumb]:bg-purple-400', chip: 'bg-purple-500/10' },
  amber: { icon: 'text-amber-400', slider: 'accent-amber-500 [&::-webkit-slider-thumb]:bg-amber-400', chip: 'bg-amber-500/10' },
  cyan: { icon: 'text-cyan-400', slider: 'accent-cyan-500 [&::-webkit-slider-thumb]:bg-cyan-400', chip: 'bg-cyan-500/10' },
};

export const SystemSimulator: React.FC = () => {
  const [gain, setGain] = useState(5);
  const [fader, setFader] = useState(6);
  const [muted, setMuted] = useState(false);
  const [pan, setPan] = useState(0);
  const [hpf, setHpf] = useState(false);
  const [eqLow, setEqLow] = useState(5);
  const [eqMid, setEqMid] = useState(5);
  const [eqHigh, setEqHigh] = useState(5);
  const [compOn, setCompOn] = useState(false);

  const level = muted ? 0 : Math.round((gain / 10) * (fader / 10) * 100);
  const clip = level > 95;
  const vuSegments = 12;
  const vuActive = Math.round((level / 100) * vuSegments);
  const speakerScale = 0.6 + (level / 100) * 0.4;
  const speakerPulse = level > 0 && !muted;

  const dbToAmp = (db: number) => Math.pow(10, db / 20);
  const eqLowDb = (eqLow - 5) * 2.2;
  const eqMidDb = (eqMid - 5) * 2.2;
  const eqHighDb = (eqHigh - 5) * 2.2;
  const master = level / 100;

  const bandAmps = baseAmp.map((b, i) => {
    const lowW = Math.max(0, 1 - i / 5);
    const midW = Math.max(0, 1 - Math.abs(i - 5.5) / 4.5);
    const highW = Math.max(0, (i - 5.5) / 5.5);
    let a = b * dbToAmp(eqLowDb * lowW + eqMidDb * midW + eqHighDb * highW);
    if (hpf && i < 3) a *= 0.12 * (i / 3) + 0.02;
    a *= master;
    if (compOn) {
      const makeup = 1.18;
      a *= makeup;
      if (a > 0.82) a = 0.82 + (a - 0.82) * 0.25;
    }
    return Math.max(0, Math.min(1, a));
  });

  const ldB = level === 0 || muted ? 0 : -50;
  const angle = (pan / 10) * (Math.PI / 4);
  const leftAmp = ldB === 0 ? 0 : Math.cos(angle + Math.PI / 4) * (compOn ? 1.1 : 1);
  const rightAmp = ldB === 0 ? 0 : Math.sin(angle + Math.PI / 4) * (compOn ? 1.1 : 1);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-4">
        <Mic className="w-5 h-5 text-blue-400" />
        <span className="text-white font-bold text-sm">Simulador de Sistema</span>
        <div className="ml-auto flex items-center gap-3">
          <motion.div animate={{ scale: speakerPulse ? [1, speakerScale, 1] : 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Speaker className={`w-6 h-6 ${muted ? 'text-slate-600' : clip ? 'text-red-400' : 'text-emerald-400'}`} />
          </motion.div>
          <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden flex">
            {Array.from({ length: vuSegments }).map((_, i) => (
              <div key={i}
                className={`flex-1 mx-px first:ml-0 last:mr-0 rounded-sm transition-all duration-150 ${
                  i < vuActive ? (i > vuSegments * 0.8 ? 'bg-red-500' : i > vuSegments * 0.6 ? 'bg-amber-400' : 'bg-emerald-500') : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
          {clip && <span className="text-red-500 text-xs font-bold animate-pulse">CLIP</span>}
        </div>
      </div>

      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-slate-500 font-bold uppercase flex items-center gap-1">
            <Gauge className="w-3 h-3" /> Espectro de Frequência
          </span>
          <div className="flex gap-2 text-[9px] text-slate-600 font-bold">
            <span>60Hz</span><span>250</span><span>1k</span><span>4k</span><span>12k</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-24">
          {bandAmps.map((a, i) => (
            <motion.div key={i} layout
              animate={{ height: `${Math.max(a * 100, 2)}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              title={`faixa ${i}`}
              className={`flex-1 rounded-t ${clip ? 'bg-red-500/80' : i < 3 ? 'bg-purple-400' : i < 7 ? 'bg-cyan-400' : 'bg-emerald-400'} ${compOn ? 'opacity-90' : ''}`}
            />
          ))}
        </div>
        {hpf && (
          <div className="mt-2 text-[10px] text-blue-300 font-bold flex items-center gap-1">
            <Waves className="w-3 h-3" /> HPF ativo — graves cortados (~0-150 Hz)
          </div>
        )}
      </div>

      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-3 mb-4 flex items-center gap-4">
        <span className="text-[10px] text-slate-500 font-bold uppercase flex items-center gap-1">
          <ArrowLeftRight className="w-3 h-3" /> Imagem Estéreo
        </span>
        <div className="flex items-center gap-6 flex-1 justify-center">
          {(['L', 'R'] as const).map((ch, chIdx) => {
            const amp = chIdx === 0 ? leftAmp : rightAmp;
            return (
              <div key={ch} className="flex flex-col items-center gap-1">
                <div className="h-16 w-4 rounded-full bg-slate-900 border border-slate-700 relative overflow-hidden">
                  <motion.div
                    animate={{ height: `${Math.max(amp * 100, 3)}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className={`absolute bottom-0 w-full ${muted ? 'bg-slate-700' : chIdx === 0 ? 'bg-cyan-400' : 'bg-purple-400'}`}
                  />
                </div>
                <span className="text-[10px] font-bold text-slate-400">{ch}</span>
              </div>
            );
          })}
        </div>
        <span className="text-xs font-bold text-cyan-300">{pan === 0 ? 'Centro' : pan < 0 ? `Esquerda ${Math.abs(pan)}` : `Direita ${pan}`}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        <Slider label="Gain" value={gain} onChange={setGain} icon={<Volume2 className="w-4 h-4" />} color="blue" />
        <Slider label="Fader" value={fader} onChange={setFader} icon={<SlidersHorizontal className="w-4 h-4" />} color="red" />
        <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Pan</span>
          <input type="range" min={-10} max={10} value={pan} onChange={(e) => setPan(Number(e.target.value))}
            className="w-full h-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400"
          />
        </div>
        <Slider label="Low EQ" value={eqLow} onChange={setEqLow} icon={<Waves className="w-4 h-4" />} color="purple" />
        <Slider label="Mid EQ" value={eqMid} onChange={setEqMid} icon={<Waves className="w-4 h-4" />} color="amber" />
        <Slider label="High EQ" value={eqHigh} onChange={setEqHigh} icon={<Waves className="w-4 h-4" />} color="cyan" />
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-center mb-4">
        <Toggle label="Mute" active={muted} onClick={() => setMuted(!muted)} color="red" />
        <Toggle label="HPF" active={hpf} onClick={() => setHpf(!hpf)} color="blue" />
        <Toggle label="Compressor" active={compOn} onClick={() => setCompOn(!compOn)} color="emerald" />
      </div>

      <div className={`p-3 rounded-xl text-center text-sm font-bold transition-all duration-300 ${
        muted ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
        clip ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' :
        level > 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
        'bg-slate-800 text-slate-500 border border-slate-800'
      }`}>
        {muted ? 'Canal mutado — sem áudio' :
         clip ? 'Sinal clipando! Reduza o Gain ou Fader.' :
         level === 0 ? 'Sem sinal — ajuste Gain e Fader' :
         `Sinal fluindo — nível ${level}%`}
      </div>
    </div>
  );
};

function Slider({ label, value, onChange, icon, color }: {
  label: string; value: number; onChange: (v: number) => void; icon: React.ReactNode; color: keyof typeof palette;
}) {
  const p = palette[color];
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
      <div className={`p-1.5 rounded-lg ${p.chip} ${p.icon}`}>{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
          <span>{label}</span>
          <span className={`${p.icon} font-bold`}>{value}</span>
        </div>
        <input type="range" min={0} max={10} value={value} onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full h-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer ${p.slider} [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-none`}
        />
      </div>
    </div>
  );
}

function Toggle({ label, active, onClick, color }: {
  label: string; active: boolean; onClick: () => void; color: string;
}) {
  const colors: Record<string, string> = {
    red: 'bg-red-500 shadow-red-500/30',
    blue: 'bg-blue-500 shadow-blue-500/30',
    emerald: 'bg-emerald-500 shadow-emerald-500/30',
  };
  return (
    <button onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
        active ? `${colors[color]} text-white shadow-lg` : 'bg-slate-800 text-slate-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}