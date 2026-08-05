import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide02Notes } from './notes';
import { User, Waves, Mic, Zap, ArrowRight } from 'lucide-react';
export { slide02Notes };

const stages = [
  { icon: <User className="w-7 h-7" />, label: 'Pessoa falando', sub: 'Vibração', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  { icon: <Waves className="w-7 h-7" />, label: 'Ondas sonoras', sub: 'Pressão no ar', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
  { icon: <Mic className="w-7 h-7" />, label: 'Microfone', sub: 'Captação', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
  { icon: <Zap className="w-7 h-7" />, label: 'Sinal elétrico', sub: 'Para a mesa', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/30' },
];

export const Slide02_WhatItDoes: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle title="O que faz um microfone?" subtitle="Transforma vibrações do ar em sinais elétricos" badge="Conceito" />
      <div className="w-full max-w-5xl my-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 p-6 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
        {stages.map((s, idx) => (
          <>
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => setActive(idx)}
              className={`flex flex-col items-center p-4 md:p-5 rounded-2xl border transition-all cursor-pointer min-w-[130px] ${
                active === idx ? `${s.bg} shadow-lg scale-105` : 'border-slate-800 bg-slate-950 hover:border-slate-700'
              }`}
            >
              <div className={`p-3 rounded-xl ${active === idx ? s.bg : 'bg-slate-800'} ${s.color}`}>{s.icon}</div>
              <span className="text-sm font-bold text-white mt-2 text-center">{s.label}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{s.sub}</span>
            </motion.button>
            {idx < 3 && <ArrowRight key={`arr-${idx}`} className="w-5 h-5 text-blue-400 hidden md:block" />}
          </>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 border border-blue-500/30 text-center max-w-3xl">
        <p className="text-base md:text-lg text-slate-300">
          "O microfone <span className="text-blue-400 font-bold">escuta</span> as vibrações do ar e as transforma em{' '}
          <span className="text-yellow-400 font-bold">eletricidade</span> para a mesa processar."
        </p>
      </motion.div>
    </div>
  );
};

