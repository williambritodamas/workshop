import { motion } from 'framer-motion';
import { Ear, VolumeX, Guitar as Bass, Waves, UserX, Headphones } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
export { slide11Notes };

const symptoms = [
  { icon: <VolumeX className="w-5 h-5" />, title: 'Som fraco ou fino', desc: 'O som perde corpo e parece "magro" mesmo com volume alto.', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { icon: <Bass className="w-5 h-5" />, title: 'Graves desaparecem', desc: 'Frequências baixas são as primeiras a cancelar quando há defasagem.', color: 'border-orange-500/30 bg-orange-500/10 text-orange-400' },
  { icon: <Waves className="w-5 h-5" />, title: 'Som "oco" ou "distante"', desc: 'Sensação de que o som vem de longe ou de dentro de um túnel.', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <UserX className="w-5 h-5" />, title: 'Muda quando a pessoa se move', desc: 'O tom muda conforme o palestrante vira a cabeça ou se desloca.', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <Ear className="w-5 h-5" />, title: 'Fadiga auditiva', desc: 'O cancelamento parcial causa um som "não natural" que cansa o ouvido.', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
];

export const Slide11_HowToIdentify: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784169/pexels-photo-3784169.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Como Identificar" subtitle="Sintomas de problemas de fase" badge="Diagnóstico" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {symptoms.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`p-4 rounded-2xl border backdrop-blur-sm ${s.color}`}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-slate-900/60 shrink-0">
              {s.icon}
            </div>
            <div>
              <span className="text-white font-extrabold text-xs">{s.title}</span>
              <p className="text-slate-400 text-[10px] mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="md:col-span-2 lg:col-span-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm text-center"
      >
        <Headphones className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <p className="text-emerald-400 text-xs font-bold">O melhor detector de fase é o seu ouvido. Treine-o!</p>
      </motion.div>
    </div>
  </div>
);
