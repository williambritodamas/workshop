import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide04Notes } from './notes';
import { User, XCircle } from 'lucide-react';

export { slide04Notes };

export const Slide04_Source: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Tudo começa aqui"
        subtitle="O primeiro equipamento de todo sistema de áudio é você"
        badge="Fonte Sonora"
      />

      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1000&auto=format&fit=crop"
            alt="Pessoa falando"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Ondas sonoras saindo da boca */}
          <div className="absolute top-1/3 right-4 flex items-center gap-1">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scaleX: [1, 2, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.15,
                }}
                className="w-1.5 h-10 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
              />
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-3xl bg-slate-900/90 border border-blue-500/40 shadow-xl"
          >
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 w-fit mb-4">
              <User className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Sem fonte sonora...
            </h3>
            <p className="text-xl md:text-2xl text-red-400 font-bold">
              Não existe áudio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <XCircle className="w-5 h-5 text-slate-500 shrink-0" />
            <p className="text-sm text-slate-400">
              Sem jogador, não existe partida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <XCircle className="w-5 h-5 text-slate-500 shrink-0" />
            <p className="text-sm text-slate-400">
              Sem músico, não existe show.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-slate-400 text-sm md:text-base text-center"
      >
        Tudo começa com uma vibração — seja a voz, um instrumento ou um som qualquer.
      </motion.p>
    </div>
  );
};
