import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { EquipmentCard } from '../../ui/EquipmentCard';
import type { PresenterNote } from '../../../types/presentation';
import { Mic, Radio, Headset, Video, Sparkles } from 'lucide-react';

export const slide04Notes: PresenterNote = {
  explanation: 'Aponte as principais diferenças práticas: o microfone Dinâmico aguentar quedas e volumes altos (como baterias e vocais ao vivo em palco), enquanto o Condensador capta até a respiração e necessita de energia externa (+48V Phantom Power).',
  practicalExamples: [
    'Mostre um Shure SM58 (Dinâmico clássico) e um microfone de condensador de estúdio.',
    'Explique por que um pastor ou palestrante prefere headset ou lapela para ficar com as mãos livres.',
  ],
  audienceQuestions: [
    'Por que não usamos condensador super sensível em um show de rock com caixa de som muito alta perto?',
  ],
};

export const Slide04_MicrophoneTypes: React.FC = () => {
  const types = [
    {
      title: 'Dinâmico',
      badge: '🎤 Resistente',
      tags: ['Resistente', 'Ideal para Palco'],
      desc: 'Aguenta quedas e volumes altos. Perfeito para shows ao vivo.',
      img: 'https://images.pexels.com/photos/14166/pexels-photo-14166.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Mic className="w-6 h-6" />,
      delay: 0.1,
    },
    {
      title: 'Condensador',
      badge: '🎙 Estúdio',
      tags: ['Muito Sensível', 'Excelente para Estúdio'],
      desc: 'Captura detalhes minuciosos e nuances da voz.',
      img: 'https://images.pexels.com/photos/7158591/pexels-photo-7158591.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Radio className="w-6 h-6" />,
      delay: 0.2,
    },
    {
      title: 'Headset',
      badge: '🎧 Mãos livres',
      tags: ['Mãos livres', 'Mobilidade'],
      desc: 'Fixado na cabeça, mantém a cápsula sempre à mesma distância da boca.',
      img: 'https://images.pexels.com/photos/7658188/pexels-photo-7658188.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Headset className="w-6 h-6" />,
      delay: 0.3,
    },
    {
      title: 'Lapela',
      badge: '🎚 Discreto',
      tags: ['Discreto', 'Usado em Palestras'],
      desc: 'Preso na roupa. Usado em entrevistas e apresentações.',
      img: 'https://images.pexels.com/photos/34709171/pexels-photo-34709171.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Mic className="w-6 h-6" />,
      delay: 0.4,
    },
    {
      title: 'Shotgun',
      badge: '📹 Direcionado',
      tags: ['Gravações', 'Cinema & Vídeo'],
      desc: 'Capta o som exatamente de onde está apontado, rejeitando as laterais.',
      img: 'https://images.pexels.com/photos/10668303/pexels-photo-10668303.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Video className="w-6 h-6" />,
      delay: 0.5,
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Tipos de Microfone"
        subtitle="Cada modelo foi desenhado para uma necessidade específica"
        badge="Variedades"
      />

      {/* Grid de 5 Cartões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-6xl my-auto">
        {types.map((item, idx) => (
          <EquipmentCard
            key={idx}
            title={item.title}
            badge={item.badge}
            subtitle={item.desc}
            tags={item.tags}
            imageSrc={item.img}
            icon={item.icon}
            delay={item.delay}
          />
        ))}
      </div>

      {/* Mensagem de Conclusão */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-4 p-4 px-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 border border-blue-500/40 text-center"
      >
        <p className="text-lg md:text-xl font-bold text-white flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span>Não existe microfone melhor. Existe o microfone certo para cada situação.</span>
        </p>
      </motion.div>
    </div>
  );
};
