import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { Mic, Volume2, Wind, Rocket } from 'lucide-react';
import { slide11Notes } from './notes';

export { slide11Notes };
export const Slide11_Curiosities: React.FC = () => {
  const items = [
    {
      icon: <Mic className="w-10 h-10 text-blue-400" />,
      text: 'Sua voz é uma vibração.',
      detail: 'Produzida pela passagem de ar através das pregas vocais.',
      delay: 0.1,
    },
    {
      icon: <Volume2 className="w-10 h-10 text-cyan-400" />,
      text: 'Todo alto-falante vibra.',
      detail: 'Se você encostar a mão no cone, sentirá o som fisicamente.',
      delay: 0.25,
    },
    {
      icon: <Wind className="w-10 h-10 text-indigo-400" />,
      text: 'O som precisa de um meio para se propagar.',
      detail: 'Pode viajar no ar, na água ou em materiais sólidos.',
      delay: 0.4,
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-400" />,
      text: 'No espaço praticamente não existe som.',
      detail: 'Como o espaço é um vácuo (sem ar), as ondas não se movem.',
      delay: 0.55,
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Curiosidades sobre o Som"
        subtitle="Fatos fascinantes sobre como o som se comporta no universo"
        badge="Você Sabia?"
      />

      {/* Grid de 4 Cards Informativos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl my-auto">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: item.delay }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="flex items-start gap-5 p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all shadow-xl group"
          >
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {item.text}
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rodapé explicativo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-slate-400 text-sm md:text-base text-center"
      >
        Esses conceitos simples são a chave para entender qualquer equipamento de áudio.
      </motion.p>
    </div>
  );
};
