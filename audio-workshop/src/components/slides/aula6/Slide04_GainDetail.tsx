import { motion } from 'framer-motion';
import { Gauge, Mic, Volume2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide04Notes } from './notes';
export { slide04Notes };

export const Slide04_GainDetail: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que é Gain?" subtitle="O controle que define a qualidade da sua captação" badge="Gain" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Gauge className="w-5 h-5 text-amber-400" />
            <span className="text-white font-bold text-sm">Gain = Pré-amplificação</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            O Gain controla a <span className="text-amber-400 font-bold">sensibilidade de entrada</span> do microfone ou instrumento. 
            É o primeiro estágio de amplificação do sinal.
          </p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Mic className="w-5 h-5 text-blue-400" />
            <span className="text-white font-bold text-sm">Onde atua?</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Logo na <span className="text-blue-400 font-bold">entrada do canal</span>, antes de qualquer outro processamento (EQ, efeitos, fader).
          </p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Volume2 className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-bold text-sm">Gain ideal</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Sinal forte o suficiente para ter <span className="text-emerald-400 font-bold">qualidade</span>, mas fraco o suficiente para não <span className="text-red-400 font-bold">distorcer (clip)</span>.
          </p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-red-400 font-bold text-sm">⚠</span>
            <span className="text-white font-bold text-sm">Erro comum</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Gain muito baixo = ruído. Gain muito alto = clip.<br />
            <span className="text-amber-400 font-bold">Ajuste fino</span> é a chave.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

