import { motion } from 'framer-motion';
import { XCircle, Volume2, Gauge, SlidersHorizontal, AlertTriangle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide12Notes } from './notes';
export { slide12Notes };

const mistakes = [
  { icon: <Gauge className="w-5 h-5" />, title: 'Gain no máximo', desc: 'Aumentar o Gain ao extremo gera clip e distorção. O som não fica mais "forte", fica apenas distorcido.', color: 'text-red-400' },
  { icon: <Volume2 className="w-5 h-5" />, title: 'Fader como Gain', desc: 'Usar o Fader para compensar Gain baixo. O ruído de fundo aparece e o sinal fica sujo.', color: 'text-amber-400' },
  { icon: <SlidersHorizontal className="w-5 h-5" />, title: 'Ignorar LED de clip', desc: 'Ignorar o LED vermelho é o erro mais grave. Clip danifica equipamentos e arruína o som.', color: 'text-red-400' },
  { icon: <AlertTriangle className="w-5 h-5" />, title: 'Ajustar Gain em silêncio', desc: 'Ajustar o Gain sem a fonte tocando/cantando. O nível real será diferente e você terá que reajustar.', color: 'text-amber-400' },
];

export const Slide12_Mistakes: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Erros Comuns" subtitle="Evite estas armadilhas no seu dia a dia" badge="Cuidado!" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {mistakes.map((m, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-red-500/30 transition-all"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-red-500/10 shrink-0">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <span className={`font-bold text-sm ${m.color}`}>{m.title}</span>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{m.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
