import { useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, Clock } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { AttackReleaseVisualizer } from '../../ui/AttackReleaseVisualizer';
import { slide07Notes } from './notes';
export { slide07Notes };

export const Slide07_AttackRelease: React.FC = () => {
  const [attack, setAttack] = useState(30);
  const [release, setRelease] = useState(50);
  const [triggered, setTriggered] = useState(false);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Attack e Release" subtitle="A velocidade de resposta do compressor" badge="Attack/Release" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <AttackReleaseVisualizer attack={attack} release={release} triggered={triggered} />
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span className="text-amber-400">Attack</span>
                <span className="text-white font-bold">{attack}ms</span>
              </div>
              <input type="range" min={1} max={100} value={attack} onChange={(e) => setAttack(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span className="text-blue-400">Release</span>
                <span className="text-white font-bold">{release}ms</span>
              </div>
              <input type="range" min={1} max={100} value={release} onChange={(e) => setRelease(Number(e.target.value))}
                className="w-full accent-blue-500 h-2 rounded-full appearance-none bg-slate-800 cursor-pointer" />
            </div>
            <button onClick={() => setTriggered(!triggered)}
              className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${triggered ? 'bg-red-500/20 border border-red-500/40 text-red-400' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              {triggered ? 'Resetar' : 'Disparar sinal'}
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Timer className="w-5 h-5 text-amber-400" />
              <span className="text-white font-bold text-sm">Attack</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Quanto tempo o compressor demora para <span className="text-amber-400 font-bold">começar a agir</span>.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-white font-bold text-sm">Release</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Quanto tempo o compressor demora para <span className="text-blue-400 font-bold">parar de agir</span>.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center">
            <p className="text-purple-300 text-xs italic">
              Attack = tempo que o freio demora para funcionar.<br />
              Release = tempo até voltar a acelerar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

