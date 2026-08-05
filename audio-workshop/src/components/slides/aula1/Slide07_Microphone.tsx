import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { AnimatedArrow } from '../../ui/AnimatedArrow';
import { Waves, Disc, Zap } from 'lucide-react';
import { slide07Notes } from './notes';

export { slide07Notes };
export const Slide07_Microphone: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Anatomia do Microfone"
        subtitle="Capturando o movimento do ar e transformando em eletricidade"
        badge="O Inverso do Alto-falante"
      />

      {/* Conteúdo Principal com Imagem e Fluxo */}
      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Imagem do Microfone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 h-72 md:h-96 rounded-3xl overflow-y-auto border border-slate-800 shadow-2xl relative"
        >
          <img
            src="https://images.pexels.com/photos/586416/pexels-photo-586416.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Microfone profissional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </motion.div>

        {/* Diagrama de Transdução: Voz -> Diafragma -> Sinal elétrico */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800"
          >
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
              <Waves className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">1. Voz (Vibração Mecânica)</h4>
              <p className="text-sm text-slate-400">A voz produz ondas de pressão de ar que chegam ao microfone.</p>
            </div>
          </motion.div>

          <AnimatedArrow direction="down" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-blue-500/40"
          >
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
              <Disc className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">2. Diafragma</h4>
              <p className="text-sm text-slate-400">Uma membrana ultra-fina que vibra ao ser atingida pelas ondas de ar.</p>
            </div>
          </motion.div>

          <AnimatedArrow direction="down" delay={0.5} />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-yellow-500/40"
          >
            <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded-xl">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">3. Sinal Elétrico</h4>
              <p className="text-sm text-slate-400">O movimento da membrana gera uma minúscula voltagem proporcional ao som.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Frase Chave */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 p-4 px-8 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-center"
      >
        <p className="text-xl md:text-2xl font-bold text-blue-300">
          "O microfone faz <span className="text-white underline decoration-yellow-400">exatamente o caminho contrário</span>."
        </p>
      </motion.div>
    </div>
  );
};

