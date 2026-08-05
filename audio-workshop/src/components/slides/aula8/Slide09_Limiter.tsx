import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { LimiterDemo } from '../../ui/LimiterDemo';
import { slide09Notes } from './notes';
export { slide09Notes };

export const Slide09_Limiter: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="O que é um Limiter?" subtitle="A parede que o sinal não ultrapassa" badge="Limiter" />
      <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2"
        >
          <LimiterDemo active={active} />
          <motion.div className="mt-4">
            <button onClick={() => setActive(!active)}
              className={`w-full py-3 rounded-2xl text-sm font-bold transition-all ${active ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
            >
              {active ? 'Desativar Limiter' : 'Ativar Limiter'}
            </button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="w-full lg:w-1/2 space-y-4"
        >
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-white font-bold text-sm">Proteção</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              O <span className="text-red-400 font-bold">Limiter</span> é um compressor extremo com Ratio ∞:1. Ele impede que o sinal ultrapasse um limite definido.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-amber-400 font-bold">Importante:</span> O Limiter protege equipamentos (caixas de som, amplificadores) contra picos perigosos.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center">
            <p className="text-purple-300 text-xs italic">É como uma catraca que não deixa passar mais pessoas do que o permitido.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

