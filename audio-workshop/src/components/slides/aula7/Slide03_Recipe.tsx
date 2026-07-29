import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide03Notes } from './notes';
export { slide03Notes };

const items = [
  { label: 'Pouco sal', eq: 'Pouco grave', color: 'text-blue-400', border: 'border-blue-500/30' },
  { label: 'Muito sal', eq: 'Muito grave', color: 'text-red-400', border: 'border-red-500/30' },
  { label: 'Quantidade ideal', eq: 'Grave equilibrado', color: 'text-emerald-400', border: 'border-emerald-500/30' },
];

export const Slide03_Recipe: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Imagine uma receita" subtitle="Equalização é como temperar um prato" badge="Analogia" />
    <div className="relative z-10 w-full max-w-5xl my-auto flex flex-col lg:flex-row items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="w-full lg:w-1/2 space-y-3"
      >
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}
            className={`p-4 rounded-2xl border ${item.border} bg-slate-900/80 backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-bold">{item.label}</span>
              <span className={`text-sm font-bold ${item.color}`}>→ {item.eq}</span>
            </div>
          </motion.div>
        ))}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="text-center text-slate-400 text-sm italic mt-4"
        >
          Mais nem sempre significa melhor.
        </motion.p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="w-full lg:w-1/2 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm flex flex-col items-center text-center"
      >
        <UtensilsCrossed className="w-16 h-16 text-amber-400 mb-4" />
        <p className="text-slate-300 text-sm leading-relaxed">
          Assim como o sal realça o sabor da comida, a <span className="text-blue-400 font-bold">equalização</span> realça as melhores qualidades do som.
        </p>
        <p className="text-slate-500 text-xs mt-4">
          O segredo está no <span className="text-amber-400 font-bold">equilíbrio</span>.
        </p>
      </motion.div>
    </div>
  </div>
);
