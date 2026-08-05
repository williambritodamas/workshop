import { motion } from 'framer-motion';
import { Mic, Church, Podcast, Play, Radio, Theater, Heart, Headphones, RadioIcon } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide14Notes } from './notes';
export { slide14Notes };

const areas = [
  { icon: <Mic className="w-6 h-6" />, label: 'Eventos' },
  { icon: <Church className="w-6 h-6" />, label: 'Igrejas' },
  { icon: <Podcast className="w-6 h-6" />, label: 'Podcast' },
  { icon: <Play className="w-6 h-6" />, label: 'YouTube' },
  { icon: <Radio className="w-6 h-6" />, label: 'Lives' },
  { icon: <Theater className="w-6 h-6" />, label: 'Teatro' },
  { icon: <Heart className="w-6 h-6" />, label: 'Casamentos' },
  { icon: <Headphones className="w-6 h-6" />, label: 'Estúdio' },
  { icon: <RadioIcon className="w-6 h-6" />, label: 'Transmissões' },
];

const projects = [
  'Montar mini estúdio de podcast',
  'Operar áudio de evento',
  'Gravar entrevista',
  'Criar checklist personalizada',
  'Experimentar posicionamento de microfones',
];

export const Slide14_ContinueJourney: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center text-center p-8 md:p-16 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="/images/sound-reinforcement.jpg" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Sua Jornada Continua" subtitle="Este workshop é apenas o começo." badge="Próximos Passos" />
    <div className="relative z-10 w-full max-w-5xl space-y-8">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        {areas.map((area, i) => (
          <motion.div
            key={area.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-blue-500/40 transition-all"
          >
            <div className="text-blue-400">{area.icon}</div>
            <span className="text-slate-300 text-xs font-semibold">{area.label}</span>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-white font-bold text-sm mb-4">Continue sua Jornada</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {projects.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 text-slate-200 text-xs font-semibold"
            >
              <span className="text-cyan-400">▸</span>
              {p}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

