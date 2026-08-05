import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { slide02Notes } from './notes';

export { slide02Notes };

export const Slide02_Question: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1920&auto=format&fit=crop"
          alt="Ondas sonoras"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[400px] h-[400px] rounded-full border border-blue-500/20 animate-wave" />
        <div className="w-[600px] h-[600px] rounded-full border border-blue-500/10 animate-wave" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6"
        >
          <HelpCircle className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-lg max-w-3xl"
        >
          Como minha voz chega até{' '}
          <span className="text-blue-500">aquela caixa de som?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col gap-3"
        >
          {[
            'Ela viaja pelo ar?',
            'Passa por onde?',
            'Quem controla esse caminho?',
          ].map((q, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.2 }}
              className="text-lg md:text-xl text-slate-400 font-light"
            >
              {q}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

