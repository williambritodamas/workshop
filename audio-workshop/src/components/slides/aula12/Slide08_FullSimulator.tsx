import { motion } from 'framer-motion';
import { SystemSimulator } from '../../ui/SystemSimulator';
import { slide08Notes } from './notes';
export { slide08Notes };

export const Slide08_FullSimulator: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mixing_console.jpg/1280px-Mixing_console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
      Mãos na Mesa
    </motion.div>
    <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Simulador Completo</h2>
    <p className="relative z-10 text-slate-400 text-sm mt-1">Opere o sistema livremente</p>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      className="relative z-10 w-full max-w-4xl my-auto">
      <SystemSimulator />
    </motion.div>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
      className="relative z-10 text-xs text-slate-500 font-medium text-center mt-2">
      Gain · Mute · Pan · Fader · HPF · EQ (Low, Mid, High) · Compressor
    </motion.p>
  </div>
);
