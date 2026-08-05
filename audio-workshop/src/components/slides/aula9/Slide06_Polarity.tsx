import { motion } from 'framer-motion';
import { CircuitBoard, ToggleLeft } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { PolarityToggle } from '../../ui/PolarityToggle';
import { slide06Notes } from './notes';
export { slide06Notes };

export const Slide06_Polarity: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Polaridade" subtitle="O botão Ø (Phase Reverse)" badge="Conceito" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col md:flex-row items-center gap-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
        className="flex-1 w-full"
      >
        <PolarityToggle />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="flex-1 w-full max-w-sm space-y-4"
      >
        <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
          <CircuitBoard className="w-6 h-6 text-purple-400 mb-2" />
          <h3 className="text-purple-400 font-black text-sm mb-2">O que é Polaridade?</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Inversão elétrica do sinal: o que era positivo vira negativo e vice-versa.
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
          <ToggleLeft className="w-6 h-6 text-cyan-400 mb-2" />
          <h3 className="text-cyan-400 font-black text-sm mb-2">Botão Ø na mesa</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Presente em praticamente todos os canais de mesa de som. Inverte a polaridade do sinal instantaneamente.
          </p>
        </div>
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-amber-400 text-[10px] font-bold text-center">
            ⚠ Polaridade não é fase — mas os dois podem soar parecidos!
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

