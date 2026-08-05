import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { Mic, Speaker, Sliders, Laptop, Radio, Cable, HelpCircle } from 'lucide-react';

export const slide02Notes: PresenterNote = {
  explanation: 'Este slide serve como aquecimento visual. Em vez de entregar a lista de equipamentos pronta, faça a plateia olhar para a foto do palco e identificar os itens.',
  practicalExamples: [
    'Aponte com um laser pointer ou peça para alguém da primeira fileira apontar onde está a caixa de retorno.',
  ],
  audienceQuestions: [
    'Alguém consegue ver onde o baterista ou vocalista se escutam no palco?',
    'Quantos cabos vocês acham que passam em um palco desses?',
  ],
};

export const Slide02_StageOverview: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const highlights = [
    { id: 'mic', name: 'Microfones', icon: <Mic className="w-5 h-5" />, pos: 'top-[35%] left-[48%]', desc: 'Capta a voz dos cantores e instrumentos.' },
    { id: 'speaker', name: 'Caixas PA', icon: <Speaker className="w-5 h-5" />, pos: 'top-[25%] right-[15%]', desc: 'Enviam o som principal para o público.' },
    { id: 'mixer', name: 'Mesa de Som', icon: <Sliders className="w-5 h-5" />, pos: 'bottom-[20%] right-[30%]', desc: 'Central de controle e mistura dos canais.' },
    { id: 'laptop', name: 'Notebook / VS', icon: <Laptop className="w-5 h-5" />, pos: 'bottom-[25%] left-[25%]', desc: 'Roda trilhas, metrônomo ou efeitos digitais.' },
    { id: 'monitor', name: 'Monitores', icon: <Radio className="w-5 h-5" />, pos: 'bottom-[35%] left-[45%]', desc: 'Caixas voltadas para o musico se ouvir.' },
    { id: 'cables', name: 'Cabos & Medusa', icon: <Cable className="w-5 h-5" />, pos: 'bottom-[15%] left-[50%]', desc: 'Transportam todos os sinais pelo palco.' },
  ];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="O que existe em um sistema de áudio?"
        subtitle="Explore o palco e identifique os equipamentos fundamentais"
        badge="Visão Geral do Palco"
      />

      {/* Palco Interativo com Hotspots */}
      <div className="w-full max-w-5xl my-auto relative h-[55vh] rounded-3xl overflow-y-auto border border-slate-800 shadow-2xl group">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop"
          alt="Palco de show completo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/40" />

        {/* Hotspots Animados */}
        {highlights.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item.name === selectedItem ? null : item.name)}
            className={`absolute ${item.pos} -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs md:text-sm font-bold backdrop-blur-md transition-all z-20 ${
              selectedItem === item.name
                ? 'bg-blue-500 text-white border-blue-400 scale-110 shadow-lg shadow-blue-500/50'
                : 'bg-slate-900/80 text-blue-300 border-blue-500/40 hover:bg-blue-500/30'
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}

        {/* Info Box do item selecionado */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 md:left-8 md:right-auto z-30 p-4 rounded-2xl bg-slate-900/95 border border-blue-500/40 backdrop-blur-xl max-w-md"
          >
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
              {selectedItem}
            </h4>
            <p className="mt-1 text-sm text-slate-300">
              {highlights.find((h) => h.name === selectedItem)?.desc}
            </p>
          </motion.div>
        )}
      </div>

      {/* Pergunta em Destaque */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-base md:text-lg font-semibold"
      >
        <HelpCircle className="w-5 h-5 text-yellow-400" />
        <span>"Você consegue identificar todos esses equipamentos?"</span>
      </motion.div>
    </div>
  );
};

