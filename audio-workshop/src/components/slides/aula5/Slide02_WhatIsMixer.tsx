import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide02Notes } from './notes';
export { slide02Notes };

const sources = [
  { name: 'Microfone 1', color: 'bg-blue-500' },
  { name: 'Microfone 2', color: 'bg-emerald-500' },
  { name: 'Notebook', color: 'bg-purple-500' },
  { name: 'Violão', color: 'bg-amber-500' },
];

export const Slide02_WhatIsMixer: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que faz uma mesa de som?" subtitle="O cérebro que organiza todo o áudio" badge="Introdução" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center gap-2 w-full lg:w-1/2">
        {sources.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 w-full max-w-xs p-3 rounded-xl bg-slate-900/80 border border-slate-800"
          >
            <div className={`w-3 h-3 rounded-full ${s.color} animate-pulse`} />
            <span className="text-white text-sm font-bold">{s.name}</span>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="flex flex-col items-center gap-1 mt-2"
        >
          <div className="w-0.5 h-6 bg-blue-500/50" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="16" rx="2"/><path d="M2 10h20"/></svg>
            Mesa de Som
          </div>
          <div className="w-0.5 h-6 bg-green-500/50" />
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-sm font-bold shadow-lg shadow-green-500/20">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 4v16M6 12h12"/></svg>
            Caixas de Som
          </div>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 leading-relaxed">
            A mesa recebe <span className="text-blue-400 font-bold">vários sons</span> ao mesmo tempo, organiza, ajusta e envia tudo para o destino correto.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-bold mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
            Comparação
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            É como o <span className="text-blue-400 font-bold">maestro</span> de uma orquestra: cada músico toca seu instrumento, mas é o maestro quem organiza tudo para que a música saia perfeita.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
