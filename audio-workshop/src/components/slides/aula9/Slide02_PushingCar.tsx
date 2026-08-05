import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Car, Users } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide02Notes } from './notes';
export { slide02Notes };

export const Slide02_PushingCar: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/169720/pexels-photo-169720.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Estrada" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Empurrando um Carro" subtitle="A analogia mais simples para entender fase" badge="Analogia" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-emerald-500/20">
            <Users className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-emerald-400 font-black text-lg">Situação A</h3>
            <span className="text-emerald-400/60 text-xs font-bold uppercase">Mesma direção</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Car className="w-12 h-12 text-slate-400" />
          <div className="flex gap-2">
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>
              <ArrowRight className="w-6 h-6 text-emerald-400" />
            </motion.div>
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}>
              <ArrowRight className="w-6 h-6 text-emerald-400" />
            </motion.div>
          </div>
        </div>
        <p className="text-slate-300 text-sm font-bold">Os dois empurram juntos → o carro se move.</p>
        <p className="text-emerald-400/70 text-xs mt-2">Força total = soma dos esforços</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
        className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-red-500/20">
            <Users className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h3 className="text-red-400 font-black text-lg">Situação B</h3>
            <span className="text-red-400/60 text-xs font-bold uppercase">Direções opostas</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <Car className="w-12 h-12 text-slate-400" />
          <div className="flex gap-2">
            <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>
              <ArrowRight className="w-6 h-6 text-red-400" />
            </motion.div>
            <motion.div animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }}>
              <ArrowLeft className="w-6 h-6 text-red-400" />
            </motion.div>
          </div>
        </div>
        <p className="text-slate-300 text-sm font-bold">Um empurra, o outro puxa → o carro mal se move.</p>
        <p className="text-red-400/70 text-xs mt-2">Forças se cancelam = resultado próximo de zero</p>
      </motion.div>
    </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="relative z-10 p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm max-w-xl mt-6"
    >
      <p className="text-cyan-400 text-center text-xs font-bold">
        Com ondas sonoras é a mesma coisa: alinhadas se somam, opostas se cancelam.
      </p>
    </motion.div>
  </div>
);

