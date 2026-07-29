import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide12Notes } from './notes';
import { Eye, Headphones, Cpu, Route, Zap } from 'lucide-react';
export { slide12Notes };

const exercises = [
  { title: 'Identifique os controles', desc: 'Mostrar foto de mesa e identificar Gain, EQ, Pan, Fader, Mute e Solo.', icon: <Eye className="w-5 h-5" />, color: 'from-blue-500 to-blue-600' },
  { title: 'Soundcheck simulado', desc: 'Descrever situação (ex: microfone do palestrante) e montar passo a passo do ajuste.', icon: <Headphones className="w-5 h-5" />, color: 'from-emerald-500 to-emerald-600' },
  { title: 'Analógico vs Digital', desc: 'Discutir em grupo qual tipo é melhor para cada cenário (igreja, show, estúdio).', icon: <Cpu className="w-5 h-5" />, color: 'from-purple-500 to-purple-600' },
  { title: 'Rastreio do sinal', desc: 'Descrever o caminho do sinal desde o microfone até a caixa de som.', icon: <Route className="w-5 h-5" />, color: 'from-amber-500 to-amber-600' },
  { title: 'Desafio extra', desc: 'Configurar mentalmente um sistema com 2 microfones, 1 notebook e 1 violão.', icon: <Zap className="w-5 h-5" />, color: 'from-red-500 to-red-600' },
];

export const Slide12_Exercises: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Exercícios Práticos" subtitle="Mão na massa com os conceitos da aula" badge="Exercícios" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {exercises.map((ex, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${ex.color} mb-3`}>{ex.icon}</div>
          <h4 className="text-white font-bold text-sm mb-2">{ex.title}</h4>
          <p className="text-slate-400 text-xs leading-relaxed">{ex.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
