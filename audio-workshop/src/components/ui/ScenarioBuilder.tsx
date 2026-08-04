import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Zone {
  id: string;
  label: string;
  hint: string;
  className: string;
}

interface ScenarioItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  zone: string;
}

interface ScenarioBuilderProps {
  title: string;
  zones: Zone[];
  items: ScenarioItem[];
  accent?: 'amber' | 'blue' | 'emerald';
}

const accentMap = {
  amber: {
    glow: 'border-amber-500/30 shadow-amber-500/5',
    bar: 'from-amber-500 to-orange-500',
    ok: 'text-amber-300',
  },
  blue: {
    glow: 'border-blue-500/30 shadow-blue-500/5',
    bar: 'from-blue-500 to-cyan-500',
    ok: 'text-blue-300',
  },
  emerald: {
    glow: 'border-emerald-500/30 shadow-emerald-500/5',
    bar: 'from-emerald-500 to-teal-500',
    ok: 'text-emerald-300',
  },
};

export const ScenarioBuilder: React.FC<ScenarioBuilderProps> = ({ title, zones, items, accent = 'amber' }) => {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [results, setResults] = useState<Record<string, boolean> | null>(null);

  const a = accentMap[accent];

  const placeInZone = (zoneId: string) => {
    if (!selected) return;
    setPlaced((prev) => ({ ...prev, [selected]: zoneId }));
    setSelected(null);
    setResults(null);
  };

  const releaseItem = (itemId: string) => {
    const next = { ...placed };
    delete next[itemId];
    setPlaced(next);
    setResults(null);
  };

  const validate = () => {
    const res: Record<string, boolean> = {};
    items.forEach((it) => {
      res[it.id] = placed[it.id] === it.zone;
    });
    setResults(res);
  };

  const placedCount = items.filter((it) => placed[it.id]).length;
  const correctCount =
    results !== null ? items.filter((it) => results[it.id]).length : 0;

  const reset = () => {
    setPlaced({});
    setSelected(null);
    setResults(null);
  };

  return (
    <div className={`w-full p-5 rounded-3xl bg-slate-900/90 border shadow-lg backdrop-blur-sm ${a.glow}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-sm">{title}</h3>
        <span className="text-xs text-slate-400">{placedCount}/{items.length} posicionados</span>
      </div>

      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-3 mb-4 space-y-2">
        {zones.map((zone) => (
          <button key={zone.id}
            onClick={() => placeInZone(zone.id)}
            className={`w-full rounded-xl p-3 border-2 border-dashed text-left transition-all cursor-pointer ${
              selected
                ? 'hover:border-emerald-400/70 hover:bg-emerald-500/5 border-slate-700'
                : 'border-slate-700'
            }`}
          >
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">{zone.label}</span>
            <span className={`block text-[10px] text-slate-500 mb-1.5 ${selected ? '' : 'opacity-70'}`}>{zone.hint}</span>
            <div className="flex flex-wrap gap-1.5 min-h-[26px]">
              {items.filter((it) => placed[it.id] === zone.id).map((it) => {
                const ok = results === null ? null : results[it.id];
                return (
                  <motion.div key={it.id} layout initial={{ scale: 0 }} animate={{ scale: 1 }}
                    onClick={(e) => { e.stopPropagation(); releaseItem(it.id); }}
                    title={ok !== null ? (ok ? 'Correto ✓' : 'Reposicione / clique para remover') : 'Clique para remover'}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-bold cursor-pointer transition-colors ${
                      ok === null
                        ? 'bg-slate-800 border-slate-700 text-slate-300'
                        : ok
                        ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                        : 'bg-red-500/15 border-red-500/40 text-red-300'
                    }`}
                  >
                    {it.icon}
                    {it.label}
                    {ok !== null && (ok ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />)}
                  </motion.div>
                );
              })}
            </div>
          </button>
        ))}
      </div>

      <div className="mb-4">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Equipamentos disponíveis</div>
        <div className="flex flex-wrap gap-1.5">
          {items.filter((it) => !placed[it.id]).map((it) => (
            <button key={it.id} onClick={() => setSelected(it.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                selected === it.id
                  ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300'
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-500'
              }`}
            >
              {it.icon}
              {it.label}
            </button>
          ))}
          {items.every((it) => placed[it.id]) && (
            <span className="text-[11px] text-slate-500 italic">Todos posicionados ✓</span>
          )}
        </div>
        {selected && (
          <div className="mt-1.5 text-[10px] text-blue-300">
            {items.find((i) => i.id === selected)?.label} selecionado — clique em uma zona para posicionar
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button onClick={validate}
          className="flex-1 py-2 rounded-xl text-white font-bold text-sm transition-all cursor-pointer hover:opacity-90"
          style={{ backgroundImage: `linear-gradient(to right, ${accent === 'amber' ? '#f59e0b' : accent === 'blue' ? '#3b82f6' : '#10b981'}, ${accent === 'amber' ? '#f97316' : accent === 'blue' ? '#06b6d4' : '#14b8a6'})` }}
        >
          Validar Montagem
        </button>
        {placedCount > 0 && (
          <button onClick={reset}
            className="px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors cursor-pointer"
            title="Reiniciar">
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {results !== null && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-4 space-y-2"
          >
            <div className={`p-3 rounded-xl border text-center ${
              correctCount === items.length ? 'bg-emerald-500/10 border-emerald-500/30' :
              correctCount >= items.length - 1 ? 'bg-amber-500/10 border-amber-500/30' :
              'bg-red-500/10 border-red-500/30'
            }`}>
              <span className={`text-lg font-black ${
                correctCount === items.length ? 'text-emerald-400' :
                correctCount >= items.length - 1 ? 'text-amber-400' : 'text-red-400'
              }`}>
                {correctCount}/{items.length} corretos
              </span>
              <span className={`block text-xs font-bold mt-1 ${
                correctCount === items.length ? 'text-emerald-300' :
                correctCount >= items.length - 1 ? 'text-amber-300' : 'text-red-300'
              }`}>
                {correctCount === items.length
                  ? 'Montagem perfeita! Arraste os itens errados para corrigir.'
                  : 'Ajuste os itens marcados em vermelho para a zona correta.'}
              </span>
            </div>
            <div className="space-y-1">
              {items.filter((it) => !results[it.id]).map((it) => (
                <div key={it.id} className="flex items-start gap-2 p-2 rounded-lg bg-red-500/5 border border-red-500/20 text-[11px] text-red-200">
                  <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-400" />
                  <span>
                    <b>{it.label}</b> deve ficar em{' '}
                    <b>{zones.find((z) => z.id === it.zone)?.label}</b>.
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};