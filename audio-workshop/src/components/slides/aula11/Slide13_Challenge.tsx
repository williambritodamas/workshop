import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Speaker, Disc3, Laptop, Cable, Music, Timer, Award, Star } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide13Notes } from './notes';
export { slide13Notes };

const challengeItems = [
  { icon: <Mic className="w-5 h-5" />, label: '2 Microfones' },
  { icon: <Speaker className="w-5 h-5" />, label: '2 Caixas' },
  { icon: <Disc3 className="w-5 h-5" />, label: '1 Mixer' },
  { icon: <Laptop className="w-5 h-5" />, label: '1 Notebook' },
  { icon: <Cable className="w-5 h-5" />, label: 'Cabos XLR' },
  { icon: <Music className="w-5 h-5" />, label: '2 Stands' },
];

const scoring = [
  { label: 'Conexões corretas', points: 3 },
  { label: 'Cabos organizados', points: 2 },
  { label: 'Sequência de energia', points: 2 },
  { label: 'Som funcionando', points: 3 },
];

export const Slide13_Challenge: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [timeLeft] = useState(300);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/1726050/pexels-photo-1726050.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Água" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Desafio de Montagem" subtitle="Monte o sistema para uma palestra em 5 minutos" badge="Desafio Prático" />
      <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm"
        >
          <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" /> Equipamentos disponíveis
          </p>
          <div className="grid grid-cols-2 gap-2">
            {challengeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 text-slate-300">
                <span className="text-purple-400">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <p className="text-xs font-bold text-amber-400 mb-2 flex items-center gap-1"><Timer className="w-3 h-3" /> Pontuação</p>
            <div className="space-y-1">
              {scoring.map((s, i) => (
                <div key={i} className="flex justify-between text-xs text-slate-300">
                  <span>{s.label}</span>
                  <span className="text-amber-400 font-bold">+{s.points}pts</span>
                </div>
              ))}
              <div className="border-t border-slate-700 pt-1 flex justify-between text-xs font-bold">
                <span className="text-white">Total</span>
                <span className="text-emerald-400">10 pts</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500/30 flex items-center justify-center mb-4">
            <Timer className="w-10 h-10 text-purple-400" />
          </div>
          <p className="text-3xl font-black text-white font-mono">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </p>
          <p className="text-xs text-slate-400 mt-1">tempo restante</p>
          {!started ? (
            <button onClick={() => setStarted(true)}
              className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              Iniciar Desafio
            </button>
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
              className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-bold"
            >
              <Award className="w-5 h-5" /> Mãos à obra!
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
