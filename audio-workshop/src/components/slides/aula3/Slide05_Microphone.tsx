import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide05Notes } from './notes';
import { Waves, Zap, ArrowRight } from 'lucide-react';

export { slide05Notes };

export const Slide05_Microphone: React.FC = () => {
  const [stage, setStage] = useState(0);

  const stages = [
    { icon: <Waves className="w-8 h-8" />, title: 'Voz (Ondas Sonoras)', color: 'text-cyan-400', border: 'border-cyan-500' },
    { icon: <ArrowRight className="w-8 h-8" />, title: 'Transformação', color: 'text-blue-400', border: 'border-blue-500' },
    { icon: <Zap className="w-8 h-8" />, title: 'Sinal Elétrico', color: 'text-yellow-400', border: 'border-yellow-500' },
  ];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="O Microfone"
        subtitle="Transforma vibração em eletricidade"
        badge="Transdutor de Entrada"
      />

      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 h-72 md:h-96 rounded-3xl overflow-y-auto border border-blue-500/30 shadow-2xl relative"
        >
          <img
            src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop"
            alt="Microfone profissional"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </motion.div>

        <div className="lg:col-span-7 flex flex-col gap-4">
          {stages.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              onClick={() => setStage(idx)}
              className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all ${
                stage === idx
                  ? `${s.border} bg-blue-500/10 shadow-lg`
                  : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
              }`}
            >
              <div className={`p-3 rounded-xl ${
                stage === idx ? 'bg-blue-500/20' : 'bg-slate-800'
              } ${s.color}`}>
                {s.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{s.title}</h4>
                <p className="text-sm text-slate-400">
                  {idx === 0 && 'A voz produz ondas de pressão que chegam ao microfone.'}
                  {idx === 1 && 'O diafragma vibra com a pressão do ar.'}
                  {idx === 2 && 'A vibração vira um pequeno sinal elétrico.'}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-2 p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 border border-blue-500/30 text-center"
          >
            <p className="text-lg font-bold text-white">
              "O microfone <span className="text-blue-400">escuta</span> a vibração e a transforma em{' '}
              <span className="text-yellow-400">eletricidade</span>."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

