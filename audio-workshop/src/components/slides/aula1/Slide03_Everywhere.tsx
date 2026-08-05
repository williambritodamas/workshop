import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { ImageCard } from '../../ui/ImageCard';
import { Clapperboard, Guitar, Car, Mic } from 'lucide-react';
import { slide03Notes } from './notes';

export { slide03Notes };
export const Slide03_Everywhere: React.FC = () => {
  const cards = [
    {
      title: 'Palmas',
      icon: <Clapperboard className="w-8 h-8" />,
      imageSrc: 'https://images.pexels.com/photos/4124316/pexels-photo-4124316.jpeg?auto=compress&cs=tinysrgb&w=800',
      delay: 0.1,
    },
    {
      title: 'Violão',
      icon: <Guitar className="w-8 h-8" />,
      imageSrc: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop',
      delay: 0.2,
    },
    {
      title: 'Motor',
      icon: <Car className="w-8 h-8" />,
      imageSrc: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
      delay: 0.3,
    },
    {
      title: 'Voz humana',
      icon: <Mic className="w-8 h-8" />,
      imageSrc: 'https://images.pexels.com/photos/16108227/pexels-photo-16108227.jpeg?auto=compress&cs=tinysrgb&w=800',
      delay: 0.4,
    },
  ];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="O som está em todos os lugares"
        subtitle="Diferentes fontes, a mesma física por trás"
        badge="Fontes Sonoras"
      />

      {/* Grid de 4 Cards Grandes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl my-auto">
        {cards.map((card, idx) => (
          <ImageCard
            key={idx}
            title={card.title}
            icon={card.icon}
            imageSrc={card.imageSrc}
            delay={card.delay}
          />
        ))}
      </div>

      {/* Frase inferior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-lg md:text-xl font-medium"
      >
        "Todos eles produzem <span className="text-white underline decoration-blue-500 font-bold">vibrações</span>."
      </motion.div>
    </div>
  );
};

