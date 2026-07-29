import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide05Notes } from './notes';
import { Shield, Volume2, Wifi } from 'lucide-react';
export { slide05Notes };

const features = [
  { icon: <Shield className="w-5 h-5" />, label: 'Robusto', desc: 'Resiste a quedas e manuseio pesado' },
  { icon: <Volume2 className="w-5 h-5" />, label: 'Alto SPL', desc: 'Suporta volumes altos sem distorcer' },
  { icon: <Wifi className="w-5 h-5" />, label: 'Dispensa pilha', desc: 'Não precisa de energia externa' },
];

export const Slide05_Dynamic: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1920&auto=format&fit=crop" alt="Microfone dinâmico" className="w-full h-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Microfone Dinâmico" subtitle="O tanque de guerra dos microfones" badge="Dinâmico" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="rounded-3xl overflow-hidden border border-blue-500/40 shadow-2xl">
        <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" alt="Dinâmico" className="w-full h-64 md:h-80 object-cover" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col gap-4">
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 leading-relaxed">
            Funciona como um <span className="text-blue-400 font-bold">gerador</span> de energia: o som vibra uma bobina presa ao diafragma dentro de um campo magnético, gerando eletricidade.
          </p>
        </div>
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">{f.icon}</div>
            <div>
              <span className="text-white font-bold text-sm">{f.label}</span>
              <p className="text-slate-400 text-xs">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);
