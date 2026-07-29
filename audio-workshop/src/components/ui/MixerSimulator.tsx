import { useState } from 'react';
import { Volume2, Mic, Bell, Ear } from 'lucide-react';

export const MixerSimulator: React.FC = () => {
  const [gain, setGain] = useState(5);
  const [fader, setFader] = useState(7);
  const [muted, setMuted] = useState(false);
  const [solo, setSolo] = useState(false);
  const [pan, setPan] = useState(0);
  const [low, setLow] = useState(5);
  const [mid, setMid] = useState(5);
  const [high, setHigh] = useState(5);

  const level = muted ? 0 : Math.round((gain / 10) * (fader / 10) * 100);
  const clip = level > 95;

  const vuSegments = 12;
  const vuActive = Math.round((level / 100) * vuSegments);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-6">
        <Mic className="w-5 h-5 text-blue-400" />
        <span className="text-white font-bold text-sm">Canal 1 — Microfone</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-32 h-3 bg-slate-800 rounded-full overflow-hidden flex">
            {Array.from({ length: vuSegments }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 mx-px first:ml-0 last:mr-0 rounded-sm transition-all duration-150 ${
                  i < vuActive ? (i > vuSegments * 0.8 ? 'bg-red-500' : i > vuSegments * 0.6 ? 'bg-amber-400' : 'bg-emerald-500') : 'bg-slate-800'
                }`}
              />
            ))}
          </div>
          {clip && <span className="text-red-500 text-xs font-bold animate-pulse">CLIP</span>}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <ControlSlider label="Gain" value={gain} onChange={setGain} icon={<Volume2 className="w-4 h-4" />} color="blue" />
        <ControlSlider label="Graves (Low)" value={low} onChange={setLow} icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4v16M6 12h12"/></svg>} color="purple" />
        <ControlSlider label="Médios (Mid)" value={mid} onChange={setMid} icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/></svg>} color="amber" />
        <ControlSlider label="Agudos (High)" value={high} onChange={setHigh} icon={<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4v16M6 12h12"/></svg>} color="cyan" />
        <ControlSlider label="Fader" value={fader} onChange={setFader} icon={<Volume2 className="w-4 h-4" />} color="red" vertical />
        <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Pan</span>
          <div className="flex items-center gap-2 w-full">
            <span className="text-[10px] text-slate-600">L</span>
            <input
              type="range"
              min={-10}
              max={10}
              value={pan}
              onChange={(e) => setPan(Number(e.target.value))}
              className="flex-1 h-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400"
            />
            <span className="text-[10px] text-slate-600">R</span>
          </div>
          <span className="text-xs text-cyan-400 font-bold">{pan === 0 ? 'Centro' : pan < 0 ? `Esquerda ${Math.abs(pan)}` : `Direita ${pan}`}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 justify-center mb-4">
        <ToggleButton label="Mute" active={muted} onClick={() => setMuted(!muted)} icon={<Bell className="w-4 h-4" />} color="red" />
        <ToggleButton label="Solo" active={solo} onClick={() => setSolo(!solo)} icon={<Ear className="w-4 h-4" />} color="amber" />
      </div>

      <div className={`p-3 rounded-xl text-center text-sm font-bold transition-all duration-300 ${
        muted ? 'bg-red-500/10 text-red-400 border border-red-500/30' :
        clip ? 'bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse' :
        level > 0 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
        'bg-slate-800 text-slate-500 border border-slate-800'
      }`}>
        {muted ? '🔇 Canal mutado — sem áudio' :
         clip ? '⚠️ Atenção: o sinal está distorcendo (clipping)! Reduza o Gain ou Fader.' :
         level === 0 ? '🔇 Sem sinal — aumente o Gain ou o Fader' :
         `🎵 Nível de saída: ${level}% — som fluindo normalmente`}
      </div>
    </div>
  );
};

interface ControlSliderProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  icon: React.ReactNode;
  color: string;
  vertical?: boolean;
}

const ControlSlider: React.FC<ControlSliderProps> = ({ label, value, onChange, icon, color, vertical }) => (
  <div className={`flex ${vertical ? 'flex-col items-center' : 'items-center gap-3'} p-3 rounded-xl bg-slate-950 border border-slate-800`}>
    <div className={`${vertical ? 'mb-2' : ''} ${vertical ? '' : 'flex items-center gap-2'}`}>
      <div className={`p-1.5 rounded-lg bg-${color}-500/10 text-${color}-400`}>{icon}</div>
      {!vertical && <span className="text-[10px] text-slate-500 font-bold uppercase">{label}</span>}
    </div>
    {vertical && <span className="text-[10px] text-slate-500 font-bold uppercase mb-1">{label}</span>}
    <div className={`flex ${vertical ? 'flex-col items-center' : 'flex-1 items-center gap-2'}`}>
      {vertical ? (
        <input
          type="range"
          min={0}
          max={10}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="h-20 w-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer [writing-mode:vertical-lr] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-400"
        />
      ) : (
        <input
          type="range"
          min={0}
          max={10}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400"
        />
      )}
      <span className={`text-xs font-bold text-${color}-400 min-w-5 text-center`}>{value}</span>
    </div>
  </div>
);

interface ToggleButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  color: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, active, onClick, icon, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
      active ? `bg-${color}-500 text-white shadow-lg shadow-${color}-500/30` : 'bg-slate-800 text-slate-400 hover:text-white'
    }`}
  >
    {icon}
    {label}
  </button>
);
