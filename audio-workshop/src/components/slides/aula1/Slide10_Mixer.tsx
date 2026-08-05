import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { Sliders, HelpCircle, ArrowRight } from 'lucide-react';
import { slide10Notes } from './notes';

export { slide10Notes };
export const Slide10_Mixer: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="O Coração do Sistema"
        subtitle="Onde todos os sons se encontram e são moldados"
        badge="A Mesa de Som"
      />

      {/* Conteúdo com Imagem da Mesa de Som e Efeito de Mistério */}
      <div className="w-full max-w-5xl my-auto relative rounded-3xl overflow-y-auto border border-slate-800 shadow-2xl group flex flex-col items-center justify-center p-8 md:p-16 pb-[80px]">
        {/* Imagem de Fundo de uma Mesa de Som Pro */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
            alt="Mesa de som profissional"
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        {/* Pergunta em Destaque no Centro */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="p-5 rounded-2xl bg-blue-500/20 border border-blue-500/40 text-blue-400 mb-6 backdrop-blur-md"
          >
            <Sliders className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg"
          >
            "O que acontece aqui dentro?"
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/90 border border-slate-700 backdrop-blur-md text-slate-300 text-lg md:text-xl font-medium"
          >
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span>Nas próximas aulas vamos descobrir.</span>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </motion.div>
        </div>
      </div>

      {/* Rodapé Provocativo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-slate-400 text-sm md:text-base italic"
      >
        Não se assuste com os botões. Cada canal segue a mesma lógica simples!
      </motion.p>
    </div>
  );
};

