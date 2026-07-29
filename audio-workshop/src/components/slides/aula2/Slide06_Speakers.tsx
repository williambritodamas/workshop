import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { EquipmentCard } from '../../ui/EquipmentCard';
import type { PresenterNote } from '../../../types/presentation';
import { Speaker, Radio, Zap, Layers } from 'lucide-react';

export const slide06Notes: PresenterNote = {
  explanation: 'Não entre em cálculos de impedância ou watts RMS agora. Explique apenas a diferença prática entre Caixa Ativa (tem amplificador embutido na própria caixa, basta ligar na tomada e no som) e Caixa Passiva (precisa de um amplificador externo conectado por cabo).',
  practicalExamples: [
    'Mostre o painel traseiro de uma caixa ativa com botão de ligar e cabo de força vs uma passiva com apenas a entrada Speakon.',
  ],
  audienceQuestions: [
    'Se faltar tomada perto da caixa, qual tipo é mais fácil usar?',
  ],
};

export const Slide06_Speakers: React.FC = () => {
  const models = [
    {
      title: 'Caixa Ativa',
      badge: '⚡ Com Amplificador',
      desc: 'Já possui o amplificador interno. Basta conectar o cabo de áudio e a energia.',
      img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
      icon: <Zap className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      title: 'Caixa Passiva',
      badge: '🔌 Sem Amplificador',
      desc: 'Necessita de um amplificador externo para receber potência e funcionar.',
      img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=600&auto=format&fit=crop',
      icon: <Speaker className="w-6 h-6" />,
      delay: 0.2,
    },
    {
      title: 'Monitor de Palco',
      badge: '🎧 Retorno do Músico',
      desc: 'Direcionado para quem está cantando ou tocando no palco conseguir se ouvir.',
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
      icon: <Radio className="w-6 h-6" />,
      delay: 0.3,
    },
    {
      title: 'Line Array',
      badge: '🏟 Grandes Eventos',
      desc: 'Conjunto de caixas empilhadas em coluna para cobrir grandes multidões com uniformidade.',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop',
      icon: <Layers className="w-6 h-6" />,
      delay: 0.4,
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Caixas de Som"
        subtitle="Transformando a energia elétrica de volta em pressão acústica para os ouvidos"
        badge="Emissores de Som"
      />

      {/* Grid com 4 Modelos Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl my-auto">
        {models.map((item, idx) => (
          <EquipmentCard
            key={idx}
            title={item.title}
            badge={item.badge}
            subtitle={item.desc}
            imageSrc={item.img}
            icon={item.icon}
            delay={item.delay}
          />
        ))}
      </div>

      {/* Frase didática */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 p-3 px-6 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm md:text-base text-center"
      >
        Cada modelo atende a um propósito específico dentro de uma sonorização.
      </motion.div>
    </div>
  );
};
