import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import type { PresenterNote } from '../../../types/presentation';
import { Cpu, ArrowRight } from 'lucide-react';

export const slide05Notes: PresenterNote = {
  explanation: 'Compare a mesa de som a um cérebro humano ou a um maestro de orquestra. Ela pega a voz do vocalista, o som da guitarra e da bateria, ajusta o volume de cada um (mistura) e envia para as caixas.',
  practicalExamples: [
    'Mostre o fader deslizando para cima (aumentar volume) e para baixo (abaixar volume).',
    'Explique brevemente que os knobs acima do fader ajustam a tonalidade (graves, médios e agudos).',
  ],
  audienceQuestions: [
    'Se a voz do cantor estiver muito fraca no meio da música, onde o operador mexe na mesa?',
  ],
};

export const Slide05_MixerConsole: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<'canais' | 'faders' | 'knobs' | 'visor'>('faders');

  const features = {
    canais: { title: 'Canais de Entrada', desc: 'Cada canal recebe o som de um microfone ou instrumento individual.' },
    faders: { title: 'Faders (Potenciômetros deslizantes)', desc: 'Controle rápido do volume de cada sinal na mistura final.' },
    knobs: { title: 'Knobs (Botões giratórios)', desc: 'Ajustam o ganho, equalização (grave/médio/agudo) e efeitos.' },
    visor: { title: 'Visor / Tela Digital', desc: 'Presente em mesas digitais para navegar nos menus e configurações avançadas.' },
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="A Mesa de Som"
        subtitle="O cérebro central onde todos os sons são combinados e ajustados"
        badge="Central de Controle"
      />

      {/* Conteúdo com Imagem Grande e Destaques */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Imagem com Hotspots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative h-72 md:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group"
        >
          <img
            src="https://images.pexels.com/photos/33434894/pexels-photo-33434894.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Mesa de Som em detalhes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/30" />

          {/* Botões de Seleção sobrepostos */}
          <button
            onClick={() => setActiveFeature('canais')}
            className={`absolute top-6 left-6 px-3 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md transition-all ${
              activeFeature === 'canais' ? 'bg-blue-500 text-white border-blue-400 scale-110' : 'bg-slate-900/80 text-blue-300 border-blue-500/40'
            }`}
          >
            1. Canais
          </button>
          <button
            onClick={() => setActiveFeature('knobs')}
            className={`absolute top-1/3 right-10 px-3 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md transition-all ${
              activeFeature === 'knobs' ? 'bg-blue-500 text-white border-blue-400 scale-110' : 'bg-slate-900/80 text-blue-300 border-blue-500/40'
            }`}
          >
            2. Knobs
          </button>
          <button
            onClick={() => setActiveFeature('faders')}
            className={`absolute bottom-8 left-1/3 px-3 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md transition-all ${
              activeFeature === 'faders' ? 'bg-blue-500 text-white border-blue-400 scale-110' : 'bg-slate-900/80 text-blue-300 border-blue-500/40'
            }`}
          >
            3. Faders
          </button>
          <button
            onClick={() => setActiveFeature('visor')}
            className={`absolute top-8 right-1/3 px-3 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md transition-all ${
              activeFeature === 'visor' ? 'bg-blue-500 text-white border-blue-400 scale-110' : 'bg-slate-900/80 text-blue-300 border-blue-500/40'
            }`}
          >
            4. Visor Digital
          </button>
        </motion.div>

        {/* Funções da Mesa */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-blue-400 shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-white">"A mesa é o cérebro do sistema."</h4>
              <p className="text-xs text-slate-300">Recebe todos os sons, mistura e controla volumes.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {(['canais', 'faders', 'knobs', 'visor'] as const).map((key) => (
              <div
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeFeature === key
                    ? 'bg-blue-500/20 border-blue-500 text-white font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between text-sm">
                  <span>{features[key].title}</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </div>
                {activeFeature === key && (
                  <p className="mt-2 text-xs text-slate-300 font-normal leading-relaxed">
                    {features[key].desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resumo didático em passos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-semibold text-slate-300"
      >
        <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">1. Recebe os sons</span>
        ➔
        <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">2. Mistura tudo</span>
        ➔
        <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">3. Controla volumes</span>
        ➔
        <span className="px-3 py-1.5 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300">4. Envia para as caixas</span>
      </motion.div>
    </div>
  );
};
