import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
import { Zap, Speaker, ArrowRight, Car } from 'lucide-react';

export { slide09Notes };

export const Slide09_Amplifier: React.FC = () => {
  const [activeSystem, setActiveSystem] = useState<'ativa' | 'passiva'>('ativa');

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Amplificador"
        subtitle="Dando força ao sinal"
        badge="Potência"
      />

      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sistema A: Caixa Ativa */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveSystem('ativa')}
          className={`p-6 md:p-8 rounded-3xl border-2 transition-all cursor-pointer ${
            activeSystem === 'ativa'
              ? 'border-blue-500 bg-blue-500/10 shadow-xl shadow-blue-500/20'
              : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            <span>Sistema A</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-800 text-indigo-400">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h18v8H3z"/><path d="M3 8l9 8 9-8"/></svg>
            </div>
            <span className="text-sm font-bold text-white">Mesa de Som</span>

            <motion.div
              animate={activeSystem === 'ativa' ? { y: [0, 4, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-blue-400"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Speaker className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold text-white">Caixa Ativa</span>
            <span className="text-[10px] text-emerald-400 font-semibold uppercase">(Amplificador interno)</span>
          </div>

          {activeSystem === 'ativa' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center"
            >
              <p className="text-xs text-blue-300">Amplificador já está dentro da caixa.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Sistema B: Caixa Passiva + Amplificador */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setActiveSystem('passiva')}
          className={`p-6 md:p-8 rounded-3xl border-2 transition-all cursor-pointer ${
            activeSystem === 'passiva'
              ? 'border-amber-500 bg-amber-500/10 shadow-xl shadow-amber-500/20'
              : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            <span>Sistema B</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-800 text-indigo-400">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h18v8H3z"/><path d="M3 8l9 8 9-8"/></svg>
            </div>
            <span className="text-sm font-bold text-white">Mesa de Som</span>

            <motion.div
              animate={activeSystem === 'passiva' ? { y: [0, 4, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-amber-400"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Zap className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold text-white">Amplificador</span>

            <motion.div
              animate={activeSystem === 'passiva' ? { y: [0, 4, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              className="text-amber-400"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            <div className="p-3 rounded-xl bg-slate-800 text-emerald-400">
              <Speaker className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold text-white">Caixa Passiva</span>
            <span className="text-[10px] text-amber-400 font-semibold uppercase">(Amplificador externo)</span>
          </div>

          {activeSystem === 'passiva' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center"
            >
              <p className="text-xs text-amber-300">Amplificador separado da caixa.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4 flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800"
      >
        <Car className="w-5 h-5 text-yellow-400 shrink-0" />
        <span className="text-sm text-slate-300">
          O amplificador é como o <strong className="text-white">motor</strong> de um carro: dá a potência necessária para o som se mover.
        </span>
      </motion.div>
    </div>
  );
};
