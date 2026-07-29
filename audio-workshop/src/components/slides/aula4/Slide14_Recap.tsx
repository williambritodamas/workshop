import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide14Notes } from './notes';
import { Mic, Radio, Headphones, Ear, Film, Lightbulb } from 'lucide-react';
export { slide14Notes };

const pillars = [
  { icon: <Mic className="w-6 h-6" />, title: 'Tipo certo', desc: 'Dinâmico vs Condensador — escolha pela necessidade', color: 'blue' },
  { icon: <Radio className="w-6 h-6" />, title: 'Padrão polar', desc: 'Cardioide, Omni, Bidirecional, Shotgun', color: 'cyan' },
  { icon: <Headphones className="w-6 h-6" />, title: 'Posicionamento', desc: 'Distância, ângulo e onde segurar', color: 'purple' },
  { icon: <Ear className="w-6 h-6" />, title: 'Acessórios', desc: 'Suporte, filtro pop, para-brisa, clipe', color: 'emerald' },
  { icon: <Film className="w-6 h-6" />, title: 'Cuidado', desc: 'Manuseio, armazenamento e transporte', color: 'amber' },
];

const colors = { blue: 'border-blue-500/40 bg-blue-500/10 text-blue-400', cyan: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400', purple: 'border-purple-500/40 bg-purple-500/10 text-purple-400', emerald: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400', amber: 'border-amber-500/40 bg-amber-500/10 text-amber-400' };

export const Slide14_Recap: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <SlideTitle title="Resumo da Aula 4" subtitle="Os 5 pilares — e não existe microfone perfeito" badge="Recap" />
    <div className="w-full max-w-5xl my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {pillars.map((p, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className={`flex flex-col items-center text-center p-5 rounded-2xl border ${colors[p.color]} backdrop-blur-sm`}>
          <div className={`p-3 rounded-xl ${colors[p.color]} mb-3`}>{p.icon}</div>
          <h4 className="text-white font-extrabold text-sm mb-1">{p.title}</h4>
          <p className="text-slate-400 text-xs">{p.desc}</p>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 border border-blue-500/30 text-center max-w-3xl">
      <p className="text-white font-bold text-base flex items-center gap-2 justify-center"><Lightbulb className="w-5 h-5 text-yellow-400" /> "Não existe o melhor microfone — existe o microfone certo para cada situação."</p>
    </motion.div>
  </div>
);
