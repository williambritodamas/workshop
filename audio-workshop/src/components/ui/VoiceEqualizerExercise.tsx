import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Ear } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  problem: string;
  ideal: { low: number; mid: number; high: number; hpf: boolean };
  source: { low: number; mid: number; high: number };
  feedback: { excellent: string; acceptable: string; tryAgain: string };
}

const scenarios: Scenario[] = [
  {
    id: 'muffled',
    title: 'Voz Abafada',
    description: 'A voz do palestrante parece que está saindo de dentro de um armário. Falta clareza e presença.',
    problem: 'O som está cheio de graves e sem agudos — como se um cobertor cobrisse a voz.',
    ideal: { low: 35, mid: 70, high: 60, hpf: true },
    source: { low: 34, mid: 10, high: 5 },
    feedback: { excellent: 'Perfeito! Você removeu o excesso de graves e trouxe clareza com médios e agudos na medida.', acceptable: 'Quase lá! Tente reduzir um pouco mais os graves e confirmar se o HPF está ativo.', tryAgain: 'A voz ainda está abafada. Tente reduzir os graves, aumentar levemente os médios e ativar o HPF.' },
  },
  {
    id: 'shrill',
    title: 'Voz Estridente',
    description: 'A voz está muito aguda, quase dolorida de ouvir. Os "esses" assobiam.',
    problem: 'Os agudos estão exagerados — a voz corta o ouvido e os "ss" viram apitos.',
    ideal: { low: 50, mid: 50, high: 30, hpf: false },
    source: { low: 5, mid: 12, high: 30 },
    feedback: { excellent: 'Excelente! Você domou os agudos sem perder clareza.', acceptable: 'Bom caminho! Reduza um pouco mais os agudos para suavizar.', tryAgain: 'Ainda está estridente. Tente reduzir os agudos pela metade.' },
  },
  {
    id: 'dull',
    title: 'Música sem Brilho',
    description: 'A música parece que está coberta por um cobertor. Falta vida e brilho.',
    problem: 'Os agudos estão baixos demais — tudo parece apagado, sem detalhe.',
    ideal: { low: 45, mid: 55, high: 70, hpf: false },
    source: { low: 18, mid: 12, high: 6 },
    feedback: { excellent: 'Perfeito! Os agudos devolveram o brilho à música sem exageros.', acceptable: 'Quase! Tente aumentar um pouco mais os agudos.', tryAgain: 'A música ainda soa sem vida. Aumente os agudos gradualmente.' },
  },
  {
    id: 'boomy',
    title: 'Excesso de Graves',
    description: 'O som está "trovão". Os graves dominam tudo, a voz some.',
    problem: 'Os graves estão em excesso — a voz se perde no fundo e o som fica confuso.',
    ideal: { low: 25, mid: 60, high: 50, hpf: true },
    source: { low: 34, mid: 8, high: 6 },
    feedback: { excellent: 'Perfeito! Você domou os graves e trouxe a voz de volta ao centro.', acceptable: 'Bom! Reduza um pouco mais os graves para limpar.', tryAgain: 'Ainda muito grave. Reduza mais os graves e ative o HPF.' },
  },
];

function scoreAdjustment(user: number, ideal: number): number {
  const diff = Math.abs(user - ideal);
  if (diff <= 10) return 3;
  if (diff <= 25) return 1;
  return 0;
}

function perceivedState(scenario: Scenario, low: number, mid: number, high: number, hpf: boolean): string {
  const gainLow = hpf ? 0 : low / 50;
  const gainMid = mid / 50;
  const gainHigh = high / 50;
  const oLow = scenario.source.low * gainLow;
  const oMid = scenario.source.mid * gainMid;
  const oHigh = scenario.source.high * gainHigh;

  if (oLow > oHigh * 2.2 && oLow > oMid * 1.6) return 'soando grave demais, sem clareza';
  if (oHigh > oLow * 2.2 && oHigh > oMid * 1.6) return 'soando estridente e cortante';
  if (oHigh < oLow * 0.6 && oHigh < oMid * 0.6) return 'soando apagado, sem brilho';
  if (oMid >= oLow * 0.8 && oMid >= oHigh * 0.6 && oHigh >= oLow * 0.5) return 'soando natural e equilibrado';
  return 'soando parcialmente equilibrado';
}

function voiceWave(scenario: Scenario, low: number, mid: number, high: number, hpf: boolean): string {
  const pts: string[] = [];
  const gainLow = hpf ? 0 : low / 50;
  const gainMid = mid / 50;
  const gainHigh = high / 50;
  for (let i = 0; i <= 100; i++) {
    const x = (i / 100) * 100;
    const lowC = Math.sin((i / 100) * Math.PI * 2) * 20;
    const midC = Math.sin((i / 100) * Math.PI * 5) * 16;
    const highC = Math.sin((i / 100) * Math.PI * 12) * 10;
    const y = 50 - (scenario.source.low * gainLow * lowC + scenario.source.mid * gainMid * midC + scenario.source.high * gainHigh * highC) / 28;
    pts.push(`${x},${y}`);
  }
  return pts.join(' ');
}

export const VoiceEqualizerExercise: React.FC = () => {
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [low, setLow] = useState(50);
  const [mid, setMid] = useState(50);
  const [high, setHigh] = useState(50);
  const [hpf, setHpf] = useState(false);
  const [result, setResult] = useState<'excellent' | 'acceptable' | 'tryAgain' | null>(null);

  const scenario = scenarios[scenarioIdx];

  const state = useMemo(
    () => perceivedState(scenario, low, mid, high, hpf),
    [scenario, low, mid, high, hpf]
  );
  const wave = useMemo(
    () => voiceWave(scenario, low, mid, high, hpf),
    [scenario, low, mid, high, hpf]
  );

  const checkResult = () => {
    let score = 0;
    score += scoreAdjustment(low, scenario.ideal.low);
    score += scoreAdjustment(mid, scenario.ideal.mid);
    score += scoreAdjustment(high, scenario.ideal.high);
    score += hpf === scenario.ideal.hpf ? 3 : 0;
    if (score >= 10) setResult('excellent');
    else if (score >= 5) setResult('acceptable');
    else setResult('tryAgain');
  };

  const reset = () => {
    setLow(50);
    setMid(50);
    setHigh(50);
    setHpf(false);
    setResult(null);
  };

  const nextScenario = () => {
    if (scenarioIdx < scenarios.length - 1) {
      setScenarioIdx((i) => i + 1);
      reset();
    } else {
      setResult(null);
      setScenarioIdx(0);
      reset();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4">
        <Ear className="w-5 h-5 text-amber-400" />
        <span className="text-white font-bold text-sm">Ouvido de Ouro — Desafio {scenarioIdx + 1}/{scenarios.length}</span>
      </div>
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-4">
        <h4 className="text-amber-400 font-bold text-sm mb-1">{scenario.title}</h4>
        <p className="text-slate-300 text-xs leading-relaxed">{scenario.description}</p>
        <p className="text-slate-400 text-[10px] leading-relaxed mt-2 italic">{scenario.problem}</p>
      </div>

      <div className="relative h-24 bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-2">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <motion.polyline
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            initial={{ pathLength: 0.4, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            points={wave}
          />
        </svg>
      </div>
      <p className="text-[10px] text-slate-500 text-center mb-4">
        Forma de onda da voz — observe como ela muda conforme você ajusta os controles.
        <span className="text-amber-400/90 font-bold block mt-0.5">A voz está {state}.</span>
      </p>

      <div className="space-y-3 mb-4">
        <SliderSmall label="Graves" value={low} onChange={setLow} disabled={result !== null} color="accent-blue-500" />
        <SliderSmall label="Médios" value={mid} onChange={setMid} disabled={result !== null} color="accent-emerald-500" />
        <SliderSmall label="Agudos" value={high} onChange={setHigh} disabled={result !== null} color="accent-amber-500" />
        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700">
          <span className="text-xs font-bold text-slate-400">HPF</span>
          <button onClick={() => !result && setHpf(!hpf)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${hpf ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'} ${result ? 'opacity-50' : ''}`}
          >
            {hpf ? 'Ativado' : 'Desativado'}
          </button>
        </div>
      </div>
      {!result ? (
        <button onClick={checkResult}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold text-sm hover:from-amber-500 hover:to-orange-500 transition-all"
        >
          Verificar Ajuste
        </button>
      ) : (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className={`p-4 rounded-2xl mb-3 text-center ${
            result === 'excellent' ? 'bg-emerald-500/20 border border-emerald-500/40' :
            result === 'acceptable' ? 'bg-amber-500/20 border border-amber-500/40' :
            'bg-red-500/20 border border-red-500/40'
          }`}>
            <span className={`text-lg font-black ${
              result === 'excellent' ? 'text-emerald-400' :
              result === 'acceptable' ? 'text-amber-400' :
              'text-red-400'
            }`}>
              {result === 'excellent' ? '🟢 ' : result === 'acceptable' ? '🟡 ' : '🔴 '}
              {result === 'excellent' ? 'Excelente Ajuste' : result === 'acceptable' ? 'Ajuste Aceitável' : 'Tente Novamente'}
            </span>
            <p className="text-slate-300 text-xs mt-2">{scenario.feedback[result]}</p>
          </div>
          <div className="flex gap-2">
            {result !== 'excellent' && (
              <button onClick={reset} className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-all">
                Tentar Novamente
              </button>
            )}
            <button onClick={nextScenario}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold hover:from-blue-500 hover:to-cyan-500 transition-all"
            >
              {scenarioIdx < scenarios.length - 1 ? 'Próximo Desafio' : 'Recomeçar'}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

function SliderSmall({ label, value, onChange, disabled, color }: { label: string; value: number; onChange: (v: number) => void; disabled?: boolean; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-slate-400 mb-1">
        <span>{label}</span>
        <span className="text-white font-bold">{value}%</span>
      </div>
      <input type="range" min={0} max={100} value={value} onChange={(e) => onChange(Number(e.target.value))} disabled={disabled}
        className={`w-full ${color} h-2 rounded-full appearance-none bg-slate-800 cursor-pointer ${disabled ? 'opacity-50' : ''}`} />
    </div>
  );
}
