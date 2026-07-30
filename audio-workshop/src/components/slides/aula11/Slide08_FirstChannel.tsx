import { motion } from 'framer-motion';
import { Mic, Gauge, Eye, SlidersHorizontal, Waves, Volume2, CheckCircle2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide08Notes } from './notes';
export { slide08Notes };

const steps = [
  { icon: <Mic className="w-5 h-5" />, label: 'Conectar microfone', desc: 'XLR no canal 1', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { icon: <Gauge className="w-5 h-5" />, label: 'Ajustar Gain', desc: 'Gire até o LED verde acender', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <Eye className="w-5 h-5" />, label: 'Verificar LEDs', desc: '-20dB verde, 0dB amarelo, PEAK vermelho', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { icon: <Volume2 className="w-5 h-5" />, label: 'Abrir Fader', desc: 'Ajuste para -5dB a 0dB', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <SlidersHorizontal className="w-5 h-5" />, label: 'Ajustar EQ', desc: 'Corte graves se necessário', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { icon: <Waves className="w-5 h-5" />, label: 'Testar Volume', desc: 'Fale no microfone e confira', color: 'border-pink-500/30 bg-pink-500/10 text-pink-400' },
];

export const Slide08_FirstChannel: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Microfone" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Configurando o Primeiro Canal" subtitle="Passo a passo do microfone ao som" badge="Prática" />
    <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {steps.map((step, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`flex items-start gap-3 p-4 rounded-xl border backdrop-blur-sm ${step.color}`}
        >
          <span className="shrink-0 mt-0.5">{step.icon}</span>
          <div>
            <p className="text-sm font-bold text-white">{step.label}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
      className="relative z-10 mt-4 flex items-center gap-2 text-emerald-400 text-xs font-medium"
    >
      <CheckCircle2 className="w-4 h-4" /> Canal pronto para uso!
    </motion.div>
  </div>
);
