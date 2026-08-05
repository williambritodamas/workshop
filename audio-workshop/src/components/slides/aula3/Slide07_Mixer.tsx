import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide07Notes } from './notes';
import { Mic, Guitar, Monitor, Sliders, Music } from 'lucide-react';

export { slide07Notes };

export const Slide07_Mixer: React.FC = () => {
  const channels = [
    { icon: <Mic className="w-5 h-5" />, label: 'Microfone 1', color: 'text-blue-400', border: 'border-blue-500/50' },
    { icon: <Mic className="w-5 h-5" />, label: 'Microfone 2', color: 'text-cyan-400', border: 'border-cyan-500/50' },
    { icon: <Guitar className="w-5 h-5" />, label: 'Violão', color: 'text-emerald-400', border: 'border-emerald-500/50' },
    { icon: <Monitor className="w-5 h-5" />, label: 'Notebook', color: 'text-purple-400', border: 'border-purple-500/50' },
  ];

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="A Mesa de Som"
        subtitle="Onde todo o áudio se encontra"
        badge="Central de Controle"
      />

      <div className="w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Imagem da mesa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 h-72 md:h-96 rounded-3xl overflow-y-auto border border-blue-500/30 shadow-2xl relative"
        >
          <img
            src="/images/mixing-console.jpg"
            alt="Mesa de som de 16 canais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        </motion.div>

        {/* Canais entrando na mesa */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2"
          >
            Vários sinais chegando:
          </motion.p>

          {channels.map((ch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className={`flex items-center gap-3 p-3 rounded-2xl bg-slate-900/90 border ${ch.border}`}
            >
              <div className={`p-2 rounded-lg bg-slate-800 ${ch.color}`}>
                {ch.icon}
              </div>
              <span className="text-sm font-bold text-white">{ch.label}</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-auto text-blue-400"
              >
                →
              </motion.div>
            </motion.div>
          ))}

          {/* Mixagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-3 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-cyan-500/20 border border-blue-500/40 text-center"
          >
            <div className="flex items-center justify-center gap-2 text-blue-400 mb-2">
              <Sliders className="w-5 h-5" />
              <Music className="w-5 h-5" />
            </div>
            <p className="text-lg font-bold text-white">Tudo misturado em um único som!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center"
          >
            <p className="text-sm text-slate-300">
              É como um <span className="text-blue-400 font-bold">maestro</span> organizando uma orquestra.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

