import { motion } from 'framer-motion';
import { Mic, Guitar, Drum, Users, Podcast, AlertTriangle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
export { slide09Notes };

const problems = [
  { icon: <Mic className="w-5 h-5" />, title: '2 mics no mesmo palestrante', desc: 'Microfone de lapela + microfone de mão próximos criam cancelamento em certas frequências.', color: 'border-red-500/30 bg-red-500/10' },
  { icon: <Guitar className="w-5 h-5" />, title: 'Guitarra com 2 microfones', desc: 'Um mic no cone e outro fora do eixo — a diferença de fase pode filtrar o som.', color: 'border-amber-500/30 bg-amber-500/10' },
  { icon: <Drum className="w-5 h-5" />, title: 'Bateria — microfone de caixa', desc: 'Microfone em cima e embaixo da caixa frequentemente estão em oposição de fase.', color: 'border-orange-500/30 bg-orange-500/10' },
  { icon: <Users className="w-5 h-5" />, title: 'Coral com vários microfones', desc: 'Múltiplos microfones captam a mesma fonte a distâncias diferentes.', color: 'border-purple-500/30 bg-purple-500/10' },
  { icon: <Podcast className="w-5 h-5" />, title: 'Podcast com convidados', desc: 'Microfones próximos podem captar o som uns dos outros com defasagem.', color: 'border-blue-500/30 bg-blue-500/10' },
];

export const Slide09_RealProblems: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Problemas Reais" subtitle="Situações do dia a dia onde a fase aparece" badge="Casos" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {problems.map((p, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`p-4 rounded-2xl border backdrop-blur-sm ${p.color}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white">{p.icon}</span>
            <h4 className="text-white font-extrabold text-xs">{p.title}</h4>
          </div>
          <p className="text-slate-300 text-[10px] leading-relaxed">{p.desc}</p>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="md:col-span-2 lg:col-span-3 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm text-center"
      >
        <AlertTriangle className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
        <p className="text-cyan-400 text-xs font-bold">Problemas de fase são mais comuns do que parecem — saber identificá-los é essencial.</p>
      </motion.div>
    </div>
  </div>
);

