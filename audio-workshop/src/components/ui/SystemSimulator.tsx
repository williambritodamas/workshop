import { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, Mic, Speaker, SlidersHorizontal, Waves } from 'lucide-react';

export const SystemSimulator: React.FC = () => {
  const [gain, setGain] = useState(5);
  const [fader, setFader] = useState(7);
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

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
      <div className="flex items-center gap-2 mb-6">
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

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Slider label="Gain" value={gain} onChange={setGain} icon={<Volume2 className="w-4 h-4" />} color="blue" />
        <Slider label="Fader" value={fader} onChange={setFader} icon={<SlidersHorizontal className="w-4 h-4" />} color="red" />
        <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-[10px] text-slate-500 font-bold uppercase">Pan</span>
          <div className="flex items-center gap-2 w-full">
            <span className="text-[10px] text-slate-600">L</span>
            <input type="range" min={-10} max={10} value={pan} onChange={(e) => setPan(Number(e.target.value))}
              className="flex-1 h-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400"
            />
            <span className="text-[10px] text-slate-600">R</span>
          </div>
          <span className="text-xs text-cyan-400 font-bold">{pan === 0 ? 'Centro' : pan < 0 ? `Esquerda ${Math.abs(pan)}` : `Direita ${pan}`}</span>
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
        {hpf && !muted && ' | HPF ativo'}
        {compOn && !muted && ' | Compressor ligado'}
      </div>
    </div>
  );
};

function Slider({ label, value, onChange, icon, color }: {
  label: string; value: number; onChange: (v: number) => void; icon: React.ReactNode; color: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
      <div className={`p-1.5 rounded-lg bg-${color}-500/10 text-${color}-400`}>{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
          <span>{label}</span>
          <span className={`text-${color}-400 font-bold`}>{value}</span>
        </div>
        <input type="range" min={0} max={10} value={value} onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full h-1.5 appearance-none bg-slate-800 rounded-full cursor-pointer accent-${color}-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-${color}-400`}
        />
      </div>
    </div>
  );
}

function Toggle({ label, active, onClick, color }: {
  label: string; active: boolean; onClick: () => void; color: string;
}) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
        active ? `bg-${color}-500 text-white shadow-lg shadow-${color}-500/30` : 'bg-slate-800 text-slate-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}
