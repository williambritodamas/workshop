import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide10Notes } from './notes';
import { Speaker, Mic, Zap, Waves, ArrowRightLeft } from 'lucide-react';

export { slide10Notes };

export const Slide10_Speaker: React.FC = () => {
  const [view, setView] = useState<'speaker' | 'compare'>('speaker');

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Caixa de Som"
        subtitle="O exato contrário do microfone"
        badge="Transdutor de Saída"
      />

      <div className="w-full max-w-5xl my-auto flex flex-col items-center gap-6">
        {/* Alternador de visualização */}
        <div className="flex items-center gap-2 p-1 rounded-full bg-slate-900 border border-slate-800">
          <button
            onClick={() => setView('speaker')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              view === 'speaker' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Caixa de Som
          </button>
          <button
            onClick={() => setView('compare')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              view === 'compare' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Microfone vs Caixa
          </button>
        </div>

        {view === 'speaker' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-72 md:h-80 rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop"
                alt="Caixa de som aberta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            </motion.div>

            <div className="flex flex-col gap-4">
              {[
                { icon: <Zap className="w-6 h-6" />, title: '1. Eletricidade chega', desc: 'O sinal amplificado chega à caixa.', color: 'text-yellow-400', border: 'border-yellow-500/40' },
                { icon: <Speaker className="w-6 h-6" />, title: '2. O cone vibra', desc: 'A eletricidade faz o cone se mover para frente e para trás.', color: 'text-emerald-400', border: 'border-emerald-500/40' },
                { icon: <Waves className="w-6 h-6" />, title: '3. O ar é empurrado', desc: 'O movimento do cone empurra o ar e gera som.', color: 'text-cyan-400', border: 'border-cyan-500/40' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl bg-slate-900/90 border ${step.border}`}
                >
                  <div className={`p-2.5 rounded-xl bg-slate-800 ${step.color}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <p className="text-xs text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Microfone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 shadow-2xl"
            >
              <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6">
                <Mic className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Microfone</h3>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-lg font-bold">
                <span className="text-cyan-400">Som</span>
                <span className="text-blue-400">→</span>
                <span className="text-yellow-400">Eletricidade</span>
              </div>
              <p className="mt-4 text-sm text-slate-400 text-center">
                Transforma vibração em sinal elétrico.
              </p>
            </motion.div>

            {/* Caixa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-2xl"
            >
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-6">
                <Speaker className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Caixa de Som</h3>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-lg font-bold">
                <span className="text-yellow-400">Eletricidade</span>
                <span className="text-blue-400">→</span>
                <span className="text-emerald-400">Som</span>
              </div>
              <p className="mt-4 text-sm text-slate-400 text-center">
                Transforma eletricidade de volta em vibração.
              </p>
            </motion.div>
          </div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 flex items-center gap-3 p-4 px-6 rounded-2xl bg-slate-900 border border-slate-800"
      >
        <ArrowRightLeft className="w-5 h-5 text-blue-400 shrink-0" />
        <span className="text-sm text-slate-300">
          Os dois são <strong className="text-white">transdutores</strong>: um vai, o outro volta.
        </span>
      </motion.div>
    </div>
  );
};
