import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide07Notes } from './notes';
import { Headphones, Ear, Film } from 'lucide-react';
export { slide07Notes };

const cards = [
  {
    icon: <Headphones className="w-10 h-10" />,
    title: 'Headset',
    color: 'from-purple-600/20 to-purple-950/30 border-purple-500/40',
    iconBg: 'bg-purple-500/10 text-purple-400',
    desc: 'Microfone preso a um arco que vai na cabeça. Mãos livres e posição fixa: ideal para palestras, teatros e apresentações onde o apresentador se movimenta.',
  },
  {
    icon: <Ear className="w-10 h-10" />,
    title: 'Lapela (Cravá)',
    color: 'from-emerald-600/20 to-emerald-950/30 border-emerald-500/40',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    desc: 'Microfone minúsculo preso na roupa (lapela, gola ou gravata). Discreto e mãos livres: padrão em TV, entrevistas, vídeos e YouTube.',
  },
  {
    icon: <Film className="w-10 h-10" />,
    title: 'Shotgun (Dirigido)',
    color: 'from-amber-600/20 to-amber-950/30 border-amber-500/40',
    iconBg: 'bg-amber-500/10 text-amber-400',
    desc: 'Microfone tubular superdirecional. Capta apenas o som na frente. Usado em cinema, documentários e gravação externa para isolar o som desejado.',
  },
];

export const Slide07_Specialized: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <SlideTitle title="Microfones especializados" subtitle="Headset, Lapela e Shotgun — cada um com sua vocação" badge="Especiais" />
    <div className="w-full max-w-6xl my-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className={`flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-gradient-to-b ${c.color} backdrop-blur-sm shadow-xl hover:scale-[1.02] transition-transform`}
        >
          <div className={`p-4 rounded-2xl ${c.iconBg} mb-5`}>{c.icon}</div>
          <h3 className="text-2xl font-extrabold text-white mb-3">{c.title}</h3>
          <p className="text-slate-300 leading-relaxed text-sm">{c.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

