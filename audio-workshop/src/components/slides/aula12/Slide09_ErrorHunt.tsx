import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle2, Lightbulb, RotateCcw, Trophy, Mic, Speaker, Disc3, Cable, MonitorSpeaker, Laptop, Bell, SlidersHorizontal, SearchCheck } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
export { slide09Notes };

interface Gear {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
  zone: 'front' | 'stage' | 'control';
  correct: boolean;
  result: string;
}

const gearList: Gear[] = [
  { id: 'spk1', label: 'Caixa Principal', icon: Speaker, zone: 'front', correct: true, result: 'Tudo certo! Sinal saindo limpo.' },
  { id: 'mic', label: 'Microfone', icon: Mic, zone: 'front', correct: false, result: 'Erro: apontado para a caixa (microfonia).' },
  { id: 'spk2', label: 'Caixa Retorno 2', icon: Speaker, zone: 'front', correct: false, result: 'Erro: desligada, sem energia.' },
  { id: 'mon1', label: 'Monitor 1', icon: MonitorSpeaker, zone: 'stage', correct: false, result: 'Erro: mal posicionado, apontando para o mic.' },
  { id: 'mic2', label: 'Mic. Sem Fio', icon: Mic, zone: 'stage', correct: true, result: 'Tudo certo! Sinal estável.' },
  { id: 'mixer', label: 'Mesa de Som', icon: Disc3, zone: 'stage', correct: false, result: 'Erro: canal está no mute.' },
  { id: 'gain', label: 'Gain', icon: SlidersHorizontal, zone: 'stage', correct: false, result: 'Erro: gain no máximo, sinal clipando.' },
  { id: 'mon2', label: 'Monitor 2', icon: MonitorSpeaker, zone: 'stage', correct: false, result: 'Erro: fio desencapado, conexão falha.' },
  { id: 'notebook', label: 'Notebook', icon: Laptop, zone: 'control', correct: false, result: 'Erro: desconectado da mesa (sem USB).' },
  { id: 'cable', label: 'Cabos', icon: Cable, zone: 'control', correct: true, result: 'Tudo certo! Conexões firmes.' },
  { id: 'mute', label: 'Mute Master', icon: Bell, zone: 'control', correct: true, result: 'Tudo certo! Master no nível ideal.' },
  { id: 'master', label: 'Fader Master', icon: SlidersHorizontal, zone: 'control', correct: false, result: 'Erro: master lá embaixo.' },
];

const zoneMeta = {
  front: { label: 'Frente do Palco', hint: 'Público / caixas principais' },
  stage: { label: 'Palco', hint: 'Microfones, monitores, mesa' },
  control: { label: 'Área de Controle', hint: 'Notebook, cabos, master' },
} as const;

const zoneColor: Record<Gear['zone'], string> = {
  front: 'border-slate-600 bg-slate-800/90',
  stage: 'border-purple-500/40 bg-slate-900/80',
  control: 'border-cyan-500/40 bg-slate-900/80',
};

const errorCount = gearList.filter((g) => !g.correct).length;

export const Slide09_ErrorHunt: React.FC = () => {
  const [inspected, setInspected] = useState<Set<string>>(new Set());
  const [revealAll, setRevealAll] = useState(false);

  const foundSet = new Set(gearList.filter((g) => !g.correct && inspected.has(g.id)).map((g) => g.id));
  const foundCount = foundSet.size;
  const allInspected = inspected.size === gearList.length;
  const won = foundCount === errorCount;

  const inspect = (id: string) => {
    if (inspected.has(id) || revealAll) return;
    setInspected((prev) => new Set(prev).add(id));
  };

  const reset = () => {
    setInspected(new Set());
    setRevealAll(false);
  };

  const isRevealed = (g: Gear) => revealAll || inspected.has(g.id);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-6 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wall_of_Sound_%28QuadFest%29.jpg/1280px-Wall_of_Sound_%28QuadFest%29.jpg" alt="Palco" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Caça aos Erros" subtitle="Inspecione cada equipamento do palco e encontre os 8 problemas" badge="Desafio" />

      <div className="relative z-10 w-full max-w-4xl space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Search className="w-3.5 h-3.5" /> {foundCount}/{errorCount} problemas encontrados
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 text-xs font-bold">
            {inspected.size}/{gearList.length} itens inspecionados
          </div>
          <button onClick={() => setRevealAll(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500/20 transition-colors cursor-pointer"
          >
            <SearchCheck className="w-3.5 h-3.5" /> Revelar erros
          </button>
          {(inspected.size > 0 || revealAll) && (
            <button onClick={reset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 text-xs font-bold hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
            </button>
          )}
        </div>

        <div className="grid grid-rows-3 gap-3">
          {(['front', 'stage', 'control'] as const).map((zone) => (
            <div key={zone} className={`rounded-2xl border p-3 ${zoneColor[zone]}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {zoneMeta[zone].label}
                </span>
                <span className="text-[9px] text-slate-500">{zoneMeta[zone].hint}</span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {gearList.filter((g) => g.zone === zone).map((g) => {
                  const Icon = g.icon;
                  const revealed = isRevealed(g);
                  const isProblem = !g.correct;
                  return (
                    <motion.button
                      key={g.id}
                      whileHover={!revealed ? { scale: 1.04 } : {}}
                      whileTap={!revealed ? { scale: 0.97 } : {}}
                      onClick={() => inspect(g.id)}
                      disabled={revealed}
                      className={`relative flex flex-col items-center gap-2 rounded-xl border p-3 text-center transition-all cursor-pointer ${
                        revealed
                          ? isProblem
                            ? 'bg-red-500/15 border-red-500/50'
                            : 'bg-emerald-500/10 border-emerald-500/40'
                          : 'border-slate-700 bg-slate-900/70 hover:border-amber-400/60'
                      }`}
                      title="Clique para inspecionar"
                    >
                      {!revealed && (
                        <motion.div
                          className="absolute inset-0 rounded-xl flex items-center justify-center bg-slate-950/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <Search className="w-5 h-5 text-slate-500" />
                        </motion.div>
                      )}
                      <Icon className={`w-6 h-6 ${revealed ? (isProblem ? 'text-red-400' : 'text-emerald-400') : 'text-slate-300'}`} />
                      <span className={`text-[11px] font-bold leading-tight ${revealed ? (isProblem ? 'text-red-200' : 'text-emerald-200') : 'text-slate-200'}`}>
                        {g.label}
                      </span>
                      {revealed && (
                        <span className={`text-[9px] font-semibold leading-tight ${isProblem ? 'text-red-300' : 'text-emerald-300'}`}>
                          {isProblem ? 'PROBLEMA' : 'OK'}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="min-h-[64px]">
          <AnimatePresence mode="wait">
            {won && (
              <motion.div key="won" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40"
              >
                <Trophy className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-black text-emerald-400">Todos os problemas encontrados!</span>
              </motion.div>
            )}
            {!won && allInspected && !revealAll && (
              <motion.div key="hint" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm"
              >
                <Lightbulb className="w-4 h-4 shrink-0" />
                Nem todos os itens estão OK — use "Revelar erros" para conferir quais falharam.
              </motion.div>
            )}
            {!won && revealAll && (
              <motion.div key="reveal" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/70 border border-slate-700 text-slate-300 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                Os itens verificados revelam se cada equipamento passou ou falhou na inspeção.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};