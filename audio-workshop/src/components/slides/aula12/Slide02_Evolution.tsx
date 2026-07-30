import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { slide02Notes } from './notes';
export { slide02Notes };

const aulas = [
  { num: 1, title: 'O que é Som' },
  { num: 2, title: 'Equipamentos' },
  { num: 3, title: 'Fluxo do Áudio' },
  { num: 4, title: 'Microfones' },
  { num: 5, title: 'Mesa de Som' },
  { num: 6, title: 'Gain' },
  { num: 7, title: 'Equalização' },
  { num: 8, title: 'Compressão' },
  { num: 9, title: 'Fase' },
  { num: 10, title: 'Microfonia' },
  { num: 11, title: 'Montagem' },
  { num: 12, title: 'Você é o Operador' },
];

export const Slide02_Evolution: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev < aulas.length - 1 ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Ondas sonoras" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium">
        Sua Jornada
      </motion.div>
      <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Evolução</h2>
      <div className="relative z-10 flex-1 flex items-center justify-center overflow-hidden py-4">
        <div className="relative h-full max-h-[420px] overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="flex flex-col items-center gap-0">
            {aulas.map((a, i) => (
              <div key={a.num} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: i <= active ? 1 : 0.3, scale: i <= active ? 1 : 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-500 ${
                    i === active
                      ? 'bg-purple-500/10 border-purple-500/40 text-purple-300 shadow-lg shadow-purple-500/10'
                      : i < active
                      ? 'bg-slate-900/60 border-slate-700 text-slate-300'
                      : 'bg-slate-900/30 border-slate-800 text-slate-600'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    i === active ? 'bg-purple-500 text-white' : i < active ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-600'
                  }`}>
                    {a.num}
                  </span>
                  <span className="text-sm font-bold whitespace-nowrap">{a.title}</span>
                  {i === active && (
                    <motion.span layoutId="cursor"
                      className="w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                {i < aulas.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i < active ? 0.4 : 0.15 }}
                    className="text-slate-500 text-lg my-0.5"
                  >
                    ↓
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="relative z-10 text-xs text-slate-500 font-medium">
        {active + 1} de {aulas.length} aulas
      </motion.div>
    </div>
  );
};
