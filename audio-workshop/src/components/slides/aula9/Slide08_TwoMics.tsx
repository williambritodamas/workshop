import { motion } from 'framer-motion';
import { Mic, Ruler, AlertTriangle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { MicrophoneDistanceDemo } from '../../ui/MicrophoneDistanceDemo';
import { slide08Notes } from './notes';
export { slide08Notes };

export const Slide08_TwoMics: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Dois Microfones" subtitle="Como a distância entre eles afeta a fase" badge="Prática" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col md:flex-row items-center gap-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full"
      >
        <MicrophoneDistanceDemo />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="flex-1 w-full max-w-sm space-y-4"
      >
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
          <Ruler className="w-6 h-6 text-amber-400 mb-2" />
          <h3 className="text-amber-400 font-black text-sm mb-2">A distância importa</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Quando um microfone está mais longe da fonte que o outro, o som chega em tempos diferentes — criando defasagem.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm">
          <AlertTriangle className="w-6 h-6 text-red-400 mb-2" />
          <h3 className="text-red-400 font-black text-sm mb-2">Consequência</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Certas frequências se cancelam parcial ou totalmente, deixando o som "oco" ou fraco.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-[10px] font-bold">Arraste o controle para ver o efeito</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);
