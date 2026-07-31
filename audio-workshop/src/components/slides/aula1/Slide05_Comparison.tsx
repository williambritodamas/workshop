import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { Waves, Volume2 } from 'lucide-react';
import { slide05Notes } from './notes';

export { slide05Notes };
export const Slide05_Comparison: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Uma comparação intuitiva"
        subtitle="Entendendo as ondas da física no dia a dia"
        badge="Analogia Didática"
      />

      {/* Comparativo de 2 Colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl my-auto">
        {/* Lado Esquerdo: Pedra na Água */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center rounded-3xl bg-slate-900/80 border border-slate-800 p-6 overflow-hidden relative group hover:border-blue-500/50 transition-all shadow-xl"
        >
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6">
            <img
              src="https://images.pexels.com/photos/21134470/pexels-photo-21134470.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Pedra caindo na água"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute top-4 left-4 p-3 bg-slate-950/80 rounded-xl border border-slate-700 text-blue-400">
              <Waves className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Pedra caindo na água</h3>
          <p className="text-slate-400 text-center text-sm md:text-base">
            O impacto gera perturbações em forma de marolas concêntricas na superfície líquida.
          </p>
        </motion.div>

        {/* Lado Direito: Alto-falante Vibrando */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center rounded-3xl bg-slate-900/80 border border-slate-800 p-6 overflow-hidden relative group hover:border-blue-500/50 transition-all shadow-xl"
        >
          <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop"
              alt="Alto falante vibrando"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-950/30" />
            <div className="absolute top-4 left-4 p-3 bg-slate-950/80 rounded-xl border border-slate-700 text-blue-400">
              <Volume2 className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Alto-falante vibrando</h3>
          <p className="text-slate-400 text-center text-sm md:text-base">
            O movimento do cone empurra o ar ao redor, gerando ondas invisíveis de pressão.
          </p>
        </motion.div>
      </div>

      {/* Pergunta e Conclusão */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 flex flex-col items-center gap-2"
      >
        <span className="text-2xl md:text-3xl font-extrabold text-blue-400">
          "Percebe a semelhança?"
        </span>
        <p className="text-slate-300 text-base md:text-lg">
          Ambos os fenômenos criam e propagam <span className="text-white font-bold underline">ondas</span>.
        </p>
      </motion.div>
    </div>
  );
};
