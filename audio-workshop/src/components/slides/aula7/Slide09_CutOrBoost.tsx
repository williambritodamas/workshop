import { motion } from 'framer-motion';
import { ArrowUpCircle, ArrowDownCircle, CheckCircle2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
export { slide09Notes };

export const Slide09_CutOrBoost: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Cortar ou Aumentar?" subtitle="Nem sempre mais é melhor" badge="Filosofia" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <ArrowUpCircle className="w-8 h-8 text-red-400" />
          <h3 className="text-red-400 font-black text-lg">Aumentar tudo</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Quando você aumenta todas as frequências, o som fica <span className="text-red-400 font-bold">artificial</span>.
          Cada banda compete com a outra, e o resultado é sujo e sem naturalidade.
        </p>
        <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-center">
          <span className="text-red-400 text-xs font-bold">Som artificial e sem naturalidade</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
        className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <ArrowDownCircle className="w-8 h-8 text-emerald-400" />
          <h3 className="text-emerald-400 font-black text-lg">Remover o excesso</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Os melhores operadores <span className="text-emerald-400 font-bold">cortam frequências desnecessárias</span> antes de aumentar outras.
          O resultado é um som limpo e natural.
        </p>
        <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-center">
          <span className="text-emerald-400 text-xs font-bold">Som limpo e natural</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="lg:col-span-2 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm text-center"
      >
        <CheckCircle2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
        <p className="text-slate-200 text-sm font-bold">
          Os melhores operadores cortam frequências desnecessárias antes de aumentar outras.
        </p>
      </motion.div>
    </div>
  </div>
);

