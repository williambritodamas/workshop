import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Search } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
export { slide09Notes };

const errors = [
  { id: 'mic', label: 'Microfone apontado para caixa', icon: '🎤' },
  { id: 'cables', label: 'Cabos cruzados', icon: '🔌' },
  { id: 'monitor', label: 'Monitor mal posicionado', icon: '📺' },
  { id: 'gain', label: 'Gain clipando', icon: '📊' },
  { id: 'mute', label: 'Canal mutado', icon: '🔇' },
  { id: 'desk', label: 'Mesa desligada', icon: '🎚️' },
  { id: 'speaker', label: 'Caixa desligada', icon: '🔊' },
  { id: 'notebook', label: 'Notebook desconectado', icon: '💻' },
];

export const Slide09_ErrorHunt: React.FC = () => {
  const [found, setFound] = useState<Set<string>>(new Set());

  const toggleError = (id: string) => {
    setFound((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Palco" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Caça aos Erros" subtitle="Encontre todos os 8 erros no palco" badge="Desafio" />
      <motion.div className="relative z-10 w-full max-w-5xl space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {errors.map((err, i) => {
            const isFound = found.has(err.id);
            return (
              <motion.button
                key={err.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => toggleError(err.id)}
                className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all cursor-pointer ${
                  isFound
                    ? 'bg-emerald-500/15 border-emerald-500/40'
                    : 'bg-slate-900/80 border-slate-800 hover:border-red-500/50 backdrop-blur-sm'
                }`}
              >
                <span className="text-3xl">{err.icon}</span>
                <span className={`text-xs font-semibold ${isFound ? 'text-emerald-300' : 'text-slate-300'}`}>
                  {err.label}
                </span>
                {isFound ? (
                  <span className="flex items-center gap-1 text-emerald-400 text-sm font-bold">
                    <CheckCircle className="w-4 h-4" /> Encontrado!
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-slate-600 text-xs">
                    <XCircle className="w-3 h-3" /> Não encontrado
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
        {found.size === errors.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30"
          >
            <div className="flex items-center justify-center gap-3 text-2xl font-black text-emerald-400">
              <CheckCircle className="w-8 h-8" /> Todos os erros encontrados!
            </div>
            <p className="text-slate-300 text-sm mt-2">Você tem um olho clínico para problemas de áudio!</p>
          </motion.div>
        )}
        {found.size > 0 && found.size < errors.length && (
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Search className="w-4 h-4" />
            <span>{found.size} de {errors.length} erros encontrados</span>
          </div>
        )}
      </motion.div>
    </div>
  );
};
