import { motion } from 'framer-motion';
import { Map, Cable, GitBranch, Power, Gauge, CheckCircle, Wind } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
export { slide15Notes };

const items = [
  { icon: <Map className="w-5 h-5" />, text: 'Planejar o layout do sistema', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <GitBranch className="w-5 h-5" />, text: 'Conectar na ordem correta', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { icon: <Cable className="w-5 h-5" />, text: 'Organizar cabos cuidadosamente', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <Power className="w-5 h-5" />, text: 'Ligar na sequência correta', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { icon: <Gauge className="w-5 h-5" />, text: 'Ajustar o ganho de cada canal', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { icon: <CheckCircle className="w-5 h-5" />, text: 'Testar tudo antes do evento', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { icon: <Wind className="w-5 h-5" />, text: 'Resolver problemas com calma', color: 'border-pink-500/30 bg-pink-500/10 text-pink-400' },
];

export const Slide15_Review: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Audio_mixer_faders.jpg/1280px-Audio_mixer_faders.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Revisão" subtitle="Os 7 pilares da montagem de sistemas" badge="Recapitulando" />
    <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className={`flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-sm ${item.color}`}
        >
          <span className="shrink-0 mt-0.5">{item.icon}</span>
          <p className="text-xs font-bold leading-relaxed text-slate-200">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
