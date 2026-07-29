import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide06Notes } from './notes';
import { Zap, Battery, AudioLines, Waves } from 'lucide-react';
export { slide06Notes };

const features = [
  { icon: <AudioLines className="w-5 h-5" />, label: 'Alta sensibilidade', desc: 'Capta detalhes e nuances' },
  { icon: <Zap className="w-5 h-5" />, label: 'Phantom Power', desc: 'Requer 48V (ou bateria)' },
  { icon: <Waves className="w-5 h-5" />, label: 'Resposta ampla', desc: 'Grava de graves a agudos com clareza' },
];

export const Slide06_Condenser: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1920&auto=format&fit=crop" alt="Microfone condensador" className="w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/90 via-slate-950 to-cyan-950/90" />
    </div>
    <SlideTitle title="Microfone Condensador" subtitle="O olho clínico do áudio" badge="Condensador" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden border border-cyan-500/40 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=800&auto=format&fit=crop" alt="Condensador" className="w-full h-64 md:h-80 object-cover" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 leading-relaxed">
            Funciona como um <span className="text-cyan-400 font-bold">capacitor</span>: duas placas carregadas — uma fixa, uma móvel (diafragma) — que variam a capacitância com o som.
          </p>
        </div>
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">{f.icon}</div>
            <div>
              <span className="text-white font-bold text-sm">{f.label}</span>
              <p className="text-slate-400 text-xs">{f.desc}</p>
            </div>
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
          <Zap className="w-4 h-4 flex-shrink-0" />
          ⚠️ Atenção: Sempre verifique se o Phantom Power (+48V) está ativado na mesa antes de usar!
        </motion.div>
      </motion.div>
    </div>
  </div>
);
