import React from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { User, Mic, Sliders, Volume2, Ear } from 'lucide-react';
import { slide09Notes } from './notes';

export { slide09Notes };
export const Slide09_AudioFlow: React.FC = () => {
  const steps = [
    { title: 'Pessoa', icon: <User className="w-8 h-8" />, color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30' },
    { title: 'Microfone', icon: <Mic className="w-8 h-8" />, color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30' },
    { title: 'Mesa de Som', icon: <Sliders className="w-8 h-8" />, color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30' },
    { title: 'Caixa de Som', icon: <Volume2 className="w-8 h-8" />, color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30' },
    { title: 'Ouvido', icon: <Ear className="w-8 h-8" />, color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Fluxo do Sinal de Áudio"
        subtitle="O caminho fundamental de qualquer sistema de sonorização profissional"
        badge="Fundamento Principal"
      />

      {/* Diagrama Horizontal Animado */}
      <div className="w-full max-w-6xl my-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative p-6 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.25 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-b ${step.color} border shadow-lg w-36 md:w-44 text-center group cursor-pointer`}
            >
              <div className="p-4 rounded-xl bg-slate-950/60 text-white mb-3 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <span className="text-sm md:text-base font-bold text-white">
                {step.title}
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-400 mt-1">
                Etapa {idx + 1}
              </span>
            </motion.div>

            {/* Setas Conectoras entre cada etapa */}
            {idx < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.25 + 0.15 }}
                className="hidden md:flex items-center text-blue-400 font-bold text-xl"
              >
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ➔
                </motion.span>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Frase didática explicativa */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-6 p-4 px-8 rounded-2xl bg-slate-900 border border-slate-800 text-center max-w-3xl"
      >
        <p className="text-slate-300 text-base md:text-lg">
          Entender o <span className="text-blue-400 font-bold">fluxo de sinal</span> é o segredo para encontrar qualquer problema em um sistema de som.
        </p>
      </motion.div>
    </div>
  );
};
