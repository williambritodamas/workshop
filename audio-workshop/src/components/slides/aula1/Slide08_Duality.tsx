import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { Volume2, Mic, ArrowRightLeft, Zap, Waves } from 'lucide-react';
import { slide08Notes } from './notes';

export { slide08Notes };
export const Slide08_Duality: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Duas faces da mesma moeda"
        subtitle="A simetria perfeita entre captação e reprodução sonora"
        badge="Comparação Visual"
      />

      {/* Dois Blocos Grandes Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl my-auto">
        {/* Bloco 1: Alto-falante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-blue-500/40 relative overflow-y-auto group shadow-2xl"
        >
          <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6 group-hover:scale-110 transition-transform">
            <Volume2 className="w-16 h-16" />
          </div>

          <h3 className="text-3xl font-extrabold text-white mb-6">Alto-falante</h3>

          {/* Fluxo com setas animadas */}
          <div className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-lg font-bold">
            <span className="flex items-center gap-1.5 text-yellow-400">
              <Zap className="w-5 h-5" /> Eletricidade
            </span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-blue-400"
            >
              ➔
            </motion.div>

            <span className="flex items-center gap-1.5 text-cyan-400">
              <Waves className="w-5 h-5" /> Som
            </span>
          </div>

          <p className="mt-6 text-sm text-slate-400 text-center">
            Converte o sinal de áudio elétrico de volta em pressão acústica ar.
          </p>
        </motion.div>

        {/* Bloco 2: Microfone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center p-8 md:p-12 rounded-3xl bg-slate-900/90 border border-cyan-500/40 relative overflow-y-auto group shadow-2xl"
        >
          <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
            <Mic className="w-16 h-16" />
          </div>

          <h3 className="text-3xl font-extrabold text-white mb-6">Microfone</h3>

          {/* Fluxo com setas animadas */}
          <div className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-lg font-bold">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Waves className="w-5 h-5" /> Som
            </span>

            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-cyan-400"
            >
              ➔
            </motion.div>

            <span className="flex items-center gap-1.5 text-yellow-400">
              <Zap className="w-5 h-5" /> Eletricidade
            </span>
          </div>

          <p className="mt-6 text-sm text-slate-400 text-center">
            Capta a variação de pressão acústica e converte em voltagem elétrica.
          </p>
        </motion.div>
      </div>

      {/* Destaque Central */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 flex items-center gap-3 p-4 px-6 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300"
      >
        <ArrowRightLeft className="w-6 h-6 text-blue-400 shrink-0 animate-pulse" />
        <span className="text-base md:text-lg">
          Ambos são chamados tecnicamente de <strong className="text-white">Transdutores</strong>: dispositivos que convertem um tipo de energia em outro.
        </span>
      </motion.div>
    </div>
  );
};

