import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Scissors } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide08Notes } from './notes';
export { slide08Notes };

const eqBands = [200, 500, 1000, 2000, 4000, 8000];

type CutMap = Partial<Record<number, number>>;

const frequencies: { range: string; source: string; tip: string; cutLabel: string; cuts: CutMap }[] = [
  { range: '200-400 Hz', source: 'Ressonância de graves', tip: 'Corte estreito em torno de 250 Hz se a sala tem eco de graves.', cutLabel: 'corte em 250 Hz', cuts: { 200: 22 } },
  { range: '800-2 kHz', source: 'Voz e médios', tip: 'Região mais comum. Corte entre 1-2 kHz com Q alto.', cutLabel: 'corte em 1-2 kHz', cuts: { 1000: 18, 2000: 26 } },
  { range: '3-6 kHz', source: 'Agudos e sibilância', tip: 'Corte suave em 4 kHz se necessário. Cuidado para não abrir o som.', cutLabel: 'corte em 4 kHz', cuts: { 4000: 18 } },
];

export const Slide08_EQ: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="/images/mixing-console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Equalização Contra Microfonia" subtitle="Corte cirúrgico na frequência do feedback" badge="EQ" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-6">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-purple-400" />
            <span className="text-white text-sm font-bold">Equalizador Paramétrico</span>
          </div>
          <div className="space-y-3">
            {eqBands.map((freq) => {
              const cut = selected !== null ? frequencies[selected].cuts[freq] : undefined;
              return (
                <div key={freq} className="flex items-center gap-2">
                  <div className="w-16 text-[10px] text-slate-500 text-right">{freq} Hz</div>
                  <div className="flex-1 h-4 rounded-full bg-slate-800 overflow-y-auto">
                    <motion.div
                      animate={{ width: cut !== undefined ? `${100 - cut}%` : '100%' }}
                      transition={{ duration: 0.3 }}
                      className={`h-full rounded-full ${cut !== undefined ? 'bg-red-500/50' : 'bg-purple-500/30'}`}
                    />
                  </div>
                  <span className={`w-10 text-[10px] text-right ${cut !== undefined ? 'text-red-400 font-bold' : 'text-slate-600'}`}>
                    {cut !== undefined ? `-${cut} dB` : '0 dB'}
                  </span>
                </div>
              );
            })}
            <div className="mt-2 flex justify-center items-center gap-1">
              <Scissors className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-[10px]">
                {selected !== null ? `Corte estreito (Q alto) — ${frequencies[selected].cutLabel}` : 'Corte estreito (Q alto) — clique em uma faixa'}
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-full lg:w-1/2 space-y-3">
          {frequencies.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`p-3 rounded-xl border backdrop-blur-sm cursor-pointer transition-all ${selected === i ? 'border-purple-500/50 bg-purple-500/20 scale-[1.02]' : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-purple-400 text-xs font-bold">{f.range}</span>
                <span className="text-slate-500 text-[10px]">{f.source}</span>
              </div>
              {selected === i && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-400 text-[10px] mt-2">{f.tip}</motion.p>
              )}
            </motion.div>
          ))}
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
            <p className="text-amber-400 text-[10px] font-bold">Dica:</p>
            <p className="text-slate-300 text-[10px] mt-1">Nunca corte mais que 3-6 dB em uma banda. Se precisar de mais, reposicione o microfone.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

