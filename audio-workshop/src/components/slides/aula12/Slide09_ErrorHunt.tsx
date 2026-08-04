import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, CheckCircle, Lightbulb, SearchX, RotateCcw, Trophy } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
export { slide09Notes };

const errorInfo: Record<string, { label: string; icon: string; spot: number }> = {
  mic:      { label: 'Microfone apontado para a caixa', icon: '🎤', spot: 0 },
  gain:     { label: 'Gain clipando', icon: '📊', spot: 2 },
  desk:     { label: 'Mesa desligada', icon: '🎚️', spot: 3 },
  monitor:  { label: 'Monitor mal posicionado', icon: '📺', spot: 5 },
  mute:     { label: 'Canal mutado', icon: '🔇', spot: 6 },
  speaker:  { label: 'Caixa desligada', icon: '🔊', spot: 7 },
  cables:   { label: 'Cabos cruzados', icon: '🔌', spot: 9 },
  notebook: { label: 'Notebook desconectado', icon: '💻', spot: 10 },
};

const errorIds = Object.keys(errorInfo);
const emptySpots = [1, 4, 8, 11];
const totalSpots = 12;

const hints = [
  'Olhe quem está apontado diretamente para a caixa.',
  'Verifique cada botão de liga/desliga.',
  'Repare no nível do ganho e se algo está no mute.',
  'Confira os cabos e conexões em volta da mesa.',
];

const spotLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export const Slide09_ErrorHunt: React.FC = () => {
  const [inspected, setInspected] = useState<Set<number>>(new Set());
  const [attempts, setAttempts] = useState(0);
  const [hintIdx, setHintIdx] = useState(-1);

  const foundCount = Object.values(errorInfo).filter((e) => inspected.has(e.spot)).length;
  const won = foundCount === errorIds.length;

  const inspect = (spot: number) => {
    if (inspected.has(spot) || won) return;
    setInspected((prev) => new Set(prev).add(spot));
    if (emptySpots.includes(spot)) {
      setAttempts((a) => a + 1);
      setHintIdx(-1);
    }
  };

  const showHint = () => {
    setHintIdx((prev) => (prev + 1) % hints.length);
  };

  const reset = () => {
    setInspected(new Set());
    setAttempts(0);
    setHintIdx(-1);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Wall_of_Sound_(QuadFest).jpg?width=1920" alt="Palco" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Caça aos Erros" subtitle="Inspecione o palco e encontre todos os 8 erros" badge="Desafio" />

      <div className="relative z-10 w-full max-w-3xl space-y-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Search className="w-3.5 h-3.5" /> {foundCount}/{errorIds.length} encontrados
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 text-xs font-bold">
            <SearchX className="w-3.5 h-3.5" /> {attempts} locais vazios inspecionados
          </div>
          <button onClick={showHint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-500/20 transition-colors cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5" /> Dica
          </button>
          {inspected.size > 0 && (
            <button onClick={reset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700 text-slate-300 text-xs font-bold hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
            </button>
          )}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: totalSpots }).map((_, spot) => {
            const isInspected = inspected.has(spot);
            const err = errorIds.find((id) => errorInfo[id].spot === spot);
            const row = Math.floor(spot / 4);
            return (
              <motion.button
                key={spot}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (row + spot % 4) * 0.05 }}
                onClick={() => inspect(spot)}
                disabled={isInspected || won}
                className={`relative aspect-square rounded-xl border-2 transition-all cursor-pointer ${
                  row === 0
                    ? 'border-slate-700 bg-slate-900/80'
                    : row === 1
                    ? 'border-purple-500/40 bg-slate-900/70'
                    : row === 2
                    ? 'border-slate-600 bg-slate-800/90'
                    : 'border-slate-500 bg-slate-700/90'
                } ${!isInspected && !won ? 'hover:border-amber-400/70 hover:scale-105' : ''}`}
                title={row === 0 ? 'Frente do palco' : row === 1 ? 'Centro / microfones' : row === 2 ? 'Mesa e cabos' : 'Público / acesso'}
              >
                {row === 0 && <span className="absolute top-1 left-1 text-[8px] text-slate-500 font-bold">FRENTE</span>}
                {row === 3 && <span className="absolute bottom-1 left-1 text-[8px] text-slate-500 font-bold">CONTROLE</span>}
                {isInspected ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                    {err ? (
                      <>
                        <span className="text-2xl">{errorInfo[err].icon}</span>
                        <span className="text-[8px] sm:text-[9px] font-bold px-1 text-emerald-300 leading-tight">{errorInfo[err].label}</span>
                        <span className="absolute top-1 right-1 text-emerald-400"><CheckCircle className="w-3.5 h-3.5" /></span>
                      </>
                    ) : (
                      <span className="text-slate-600 text-xs font-bold">—</span>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-slate-600 text-sm font-black">{spotLabels[spot]}</span>
                    <span className="text-[8px] text-slate-600">inspecionar</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        <div className="min-h-[44px]">
          <AnimatePresence mode="wait">
            {hintIdx >= 0 && !won && (
              <motion.div key={hintIdx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm"
              >
                <Lightbulb className="w-4 h-4 shrink-0 text-amber-400" />
                {hints[hintIdx]}
              </motion.div>
            )}
            {won && (
              <motion.div key="won" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40"
              >
                <div className="flex items-center gap-2 text-xl font-black text-emerald-400">
                  <Trophy className="w-6 h-6" /> Todos os erros encontrados!
                </div>
                <p className="text-slate-200 text-sm">
                  {attempts === 0 ? 'Perfeito, sem erros de inspeção!' : `Você inspecionou ${attempts} locais sem erro${attempts > 1 ? 's' : ''} antes de concluir.`}
                  {' '}Olho clínico para problemas de áudio!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};