import { motion } from 'framer-motion';
import { Mic, Music, Monitor, Headphones, ArrowLeftRight, Bell, SlidersHorizontal, AlertTriangle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide13Notes } from './notes';
export { slide13Notes };

const tasks = [
  { icon: <Mic className="w-4 h-4" />, text: 'Conectar todas as fontes nos canais corretos', color: 'text-blue-400' },
  { icon: <SlidersHorizontal className="w-4 h-4" />, text: 'Ajustar o Gain de cada canal sem clipar', color: 'text-emerald-400' },
  { icon: <Music className="w-4 h-4" />, text: 'Equalizar cada fonte para evitar "lama" sonora', color: 'text-purple-400' },
  { icon: <Headphones className="w-4 h-4" />, text: 'Configurar o auxiliar para o monitor do violonista', color: 'text-amber-400' },
  { icon: <ArrowLeftRight className="w-4 h-4" />, text: 'Posicionar o Pan para um palco stereo', color: 'text-cyan-400' },
  { icon: <Bell className="w-4 h-4" />, text: 'Usar Mute para canais que não estão em uso', color: 'text-red-400' },
  { icon: <Monitor className="w-4 h-4" />, text: 'Ajustar os Faders para um volume equilibrado', color: 'text-green-400' },
];

export const Slide13_FinalChallenge: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Desafio Final — Missão: Operador de Mesa" subtitle="Cenário: culto com 3 microfones, 1 violão e 1 notebook" badge="Desafio" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col lg:flex-row gap-6 items-start">
      <div className="w-full lg:w-1/2 space-y-2">
        {tasks.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
          >
            <span className={t.color}>{t.icon}</span>
            <span className="text-slate-300 text-xs font-bold">{t.text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
        className="w-full lg:w-1/2 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span className="text-amber-400 font-bold text-sm">Pergunta desafio</span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          "O que você faria se o microfone do pastor começasse a distorcer durante o culto?"
        </p>
        <p className="text-slate-500 text-xs mt-3 italic">Discuta em grupo as possíveis soluções.</p>
      </motion.div>
    </div>
  </div>
);

