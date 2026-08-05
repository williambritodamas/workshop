import { motion } from 'framer-motion';
import { Smartphone, Volume2, Gauge } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide03Notes } from './notes';
export { slide03Notes };

export const Slide03_CelularAnalogy: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Gain vs Volume" subtitle="Uma analogia que você já viveu" badge="Conceito" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-6 h-6 text-blue-400" />
            <span className="text-white font-bold">Gravar áudio no celular</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Se você grava um áudio com o celular <span className="text-blue-400 font-bold">longe da boca</span>, o som fica baixo e cheio de ruído.
          </p>
        </div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <Volume2 className="w-6 h-6 text-amber-400" />
            <span className="text-white font-bold">Aumentar o volume não resolve</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Quando você aumenta o volume no playback, o <span className="text-amber-400 font-bold">ruído de fundo</span> também aumenta. O áudio continua ruim, só mais alto.
          </p>
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Gauge className="w-6 h-6 text-emerald-400" />
            <span className="text-white font-bold">Gain correto = captação ideal</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            O segredo é aproximar o microfone da fonte (boca, instrumento) e ajustar o <span className="text-emerald-400 font-bold">Gain</span> para captar o som limpo e forte desde o início.
          </p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-amber-400 font-bold">Gain</span> = qualidade da captação<br />
              <span className="text-blue-400 font-bold">Volume/Fader</span> = quanto você ouve
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

