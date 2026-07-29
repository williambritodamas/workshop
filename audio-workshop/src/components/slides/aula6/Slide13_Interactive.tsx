import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { GainSimulator } from '../../ui/GainSimulator';
import { slide13Notes } from './notes';
export { slide13Notes };

export const Slide13_Interactive: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Simulador de Gain" subtitle="Experimente diferentes combinações sem medo de errar" badge="Interativo" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2"
      >
        <GainSimulator />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 space-y-4"
      >
        <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-blue-400 font-bold">Teste você mesmo:</span> mova os sliders e observe como o Gain e o Fader afetam o sinal de saída.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-400 text-xs leading-relaxed">
            <span className="text-amber-400 font-bold">Desafio:</span> encontre uma combinação onde o sinal fique forte (verde) sem clipar (vermelho).
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-400 text-xs leading-relaxed">
            <span className="text-red-400 font-bold">Outro desafio:</span> force o clip aumentando o Gain ao máximo. Veja o alerta vermelho e entenda por que isso é prejudicial.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
