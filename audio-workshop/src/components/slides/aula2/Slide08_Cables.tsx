import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { EquipmentCard } from '../../ui/EquipmentCard';
import type { PresenterNote } from '../../../types/presentation';
import { Cable, Tv, Disc, ShieldAlert } from 'lucide-react';

export const slide08Notes: PresenterNote = {
  explanation: 'Apresente os conectores mais comuns. Enfatize que o cabo XLR é balanceado (três pinos) e é a trava padrão de segurança em microfones profissionais. O P10 é usado em instrumentos (guitarra, teclado).',
  practicalExamples: [
    'Mostre o pino de trava do conector XLR fêmea e mostre como ele trava no microfone.',
    'Mostre a diferença do plug P10 estéreo (duas listras) e P10 mono (uma listra).',
  ],
  audienceQuestions: [
    'Por que um cabo HDMI não é usado diretamente na maioria dos microfones?',
  ],
};

export const Slide08_Cables: React.FC = () => {
  const connectors = [
    {
      title: 'XLR (Cannon)',
      badge: '🎤 Profissional',
      tags: ['Microfones', 'Balanceado', 'Com Trava'],
      desc: '3 pinos com trava de segurança. Padrão absoluto para áudio pro.',
      img: 'https://images.pexels.com/photos/8132999/pexels-photo-8132999.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Cable className="w-6 h-6 text-blue-400" />,
      delay: 0.1,
    },
    {
      title: 'P10 (1/4")',
      badge: '🎸 Instrumentos',
      tags: ['Guitarras', 'Teclados', 'Linha'],
      desc: 'Plug robusto para instrumentos musicais e saídas de áudio.',
      img: 'https://images.pexels.com/photos/15160720/pexels-photo-15160720.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Disc className="w-6 h-6 text-cyan-400" />,
      delay: 0.2,
    },
    {
      title: 'P2 (3.5mm)',
      badge: '📱 Portátil',
      tags: ['Celulares', 'Fones', 'Notebooks'],
      desc: 'Plug pequeno de fone de ouvido para dispositivos cotidianos.',
      img: 'https://images.pexels.com/photos/1058840/pexels-photo-1058840.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Disc className="w-6 h-6 text-indigo-400" />,
      delay: 0.3,
    },
    {
      title: 'Speakon',
      badge: '🔊 Trava de Caixa',
      tags: ['Caixas de Som', 'Alta Potência'],
      desc: 'Conector de pressão especial para ligação segura de caixas acústicas.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Conector_Speakon.jpg',
      icon: <Cable className="w-6 h-6 text-emerald-400" />,
      delay: 0.4,
    },
    {
      title: 'USB / HDMI',
      badge: '💻 Digital / Vídeo',
      tags: ['Interfaces', 'Vídeo', 'Dados'],
      desc: 'Conectores digitais de dados. HDMI é padrão para vídeo e áudio juntos.',
      img: 'https://images.pexels.com/photos/12997230/pexels-photo-12997230.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Tv className="w-6 h-6 text-yellow-400" />,
      delay: 0.5,
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Cabos e Conectores"
        subtitle="As artérias que conduzem a eletricidade e o sinal por todo o sistema"
        badge="Conectividade"
      />

      {/* Grid de 5 Conectores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-6xl my-auto">
        {connectors.map((item, idx) => (
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

      {/* Destaque explicativo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-4 p-4 px-8 rounded-2xl bg-slate-900 border border-slate-800 text-center flex items-center justify-center gap-3"
      >
        <ShieldAlert className="w-5 h-5 text-yellow-400 shrink-0" />
        <span className="text-slate-300 text-sm md:text-base font-semibold">
          Cada cabo possui uma função específica. Nem todos os conectores transportam áudio analógico!
        </span>
      </motion.div>
    </div>
  );
};
