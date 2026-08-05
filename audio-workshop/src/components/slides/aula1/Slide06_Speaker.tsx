import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { Zap, Activity } from 'lucide-react';
import { slide06Notes } from './notes';

export { slide06Notes };
export const Slide06_Speaker: React.FC = () => {
  const [activePart, setActivePart] = useState<'cone' | 'bobina' | 'ima' | null>('cone');

  const parts = {
    cone: {
      title: 'Cone (Diafragma)',
      desc: 'Superfície que empurra o ar para criar as ondas sonoras audíveis.',
    },
    bobina: {
      title: 'Bobina Móvel',
      desc: 'Fio condutor envolvido por onde circula a corrente elétrica da música.',
    },
    ima: {
      title: 'Ímã Permanente',
      desc: 'Cria o campo magnético que reage com a bobina gerando movimento.',
    },
  };

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Anatomia do Alto-falante"
        subtitle="Como a eletricidade se transforma em vibração no ar"
        badge="Anatomia do Equipamento"
      />

      {/* Conteúdo Principal com Imagem e Hotspots Interativos */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Imagem em Destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative h-72 md:h-96 rounded-3xl overflow-y-auto border border-slate-800 shadow-2xl group"
        >
          <img
            src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1200&auto=format&fit=crop"
            alt="Alto falante desmontado"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />

          {/* Markers / Hotspots interativos sobrepostos */}
          <button
            onClick={() => setActivePart('cone')}
            className={`absolute top-1/3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border text-xs md:text-sm font-bold backdrop-blur-md transition-all ${
              activePart === 'cone'
                ? 'bg-blue-500 text-white border-blue-400 scale-110 shadow-lg shadow-blue-500/50'
                : 'bg-slate-900/80 text-blue-300 border-blue-500/40 hover:bg-blue-500/20'
            }`}
          >
            ← Cone →
          </button>

          <button
            onClick={() => setActivePart('bobina')}
            className={`absolute top-1/2 left-1/3 px-4 py-2 rounded-full border text-xs md:text-sm font-bold backdrop-blur-md transition-all ${
              activePart === 'bobina'
                ? 'bg-blue-500 text-white border-blue-400 scale-110 shadow-lg shadow-blue-500/50'
                : 'bg-slate-900/80 text-blue-300 border-blue-500/40 hover:bg-blue-500/20'
            }`}
          >
            🌀 Bobina
          </button>

          <button
            onClick={() => setActivePart('ima')}
            className={`absolute bottom-1/4 right-1/4 px-4 py-2 rounded-full border text-xs md:text-sm font-bold backdrop-blur-md transition-all ${
              activePart === 'ima'
                ? 'bg-blue-500 text-white border-blue-400 scale-110 shadow-lg shadow-blue-500/50'
                : 'bg-slate-900/80 text-blue-300 border-blue-500/40 hover:bg-blue-500/20'
            }`}
          >
            🧲 Ímã
          </button>
        </motion.div>

        {/* Card Explicativo das Partes */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {(['cone', 'bobina', 'ima'] as const).map((key) => (
            <motion.div
              key={key}
              whileHover={{ x: 5 }}
              onClick={() => setActivePart(key)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activePart === key
                  ? 'bg-blue-500/10 border-blue-500 text-white shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <h4 className="text-lg font-bold flex items-center gap-2 text-white">
                <span className={`w-3 h-3 rounded-full ${activePart === key ? 'bg-blue-400 animate-ping' : 'bg-slate-600'}`} />
                {parts[key].title}
              </h4>
              <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                {parts[key].desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frases Chave de Fechamento */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
      >
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <Zap className="w-6 h-6 text-yellow-400 shrink-0" />
          <span className="text-slate-300 text-sm md:text-base">
            "O alto-falante transforma <strong className="text-white">energia elétrica</strong> em <strong className="text-blue-400">movimento</strong>."
          </span>
        </div>
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center gap-3">
          <Activity className="w-6 h-6 text-blue-400 shrink-0" />
          <span className="text-blue-300 font-semibold text-sm md:text-base">
            "Esse movimento gera o som."
          </span>
        </div>
      </motion.div>
    </div>
  );
};

