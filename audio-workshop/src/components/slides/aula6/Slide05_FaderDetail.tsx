import { motion } from 'framer-motion';
import { SlidersHorizontal, Volume2, ArrowUpDown } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_FaderDetail: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que é Fader?" subtitle="O volume final do canal na mixagem" badge="Fader" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <SlidersHorizontal className="w-5 h-5 text-blue-400" />
            <span className="text-white font-bold text-sm">Fader = Volume de saída</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            O Fader controla o <span className="text-blue-400 font-bold">nível de saída</span> do canal depois de todo o processamento (Gain, EQ, efeitos).
          </p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <ArrowUpDown className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-sm">Posição típica</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Na maioria das mesas, o Fader opera na faixa de <span className="text-amber-400 font-bold">-∞ a +10 dB</span>. O ponto <span className="text-blue-400 font-bold">0 (zero)</span> é o nível de referência.
          </p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Volume2 className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-bold text-sm">Fader não resolve captação ruim</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Se o Gain está mal ajustado, o Fader só vai <span className="text-emerald-400 font-bold">amplificar o problema</span> (ruído ou distorção).
          </p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0" />
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-amber-400 font-bold">Regra de ouro:</span> Gain primeiro, Fader depois. Sempre.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

