import { motion } from 'framer-motion';
import { Mic, Headphones, Radio, Music, Podcast, Monitor } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide10Notes } from './notes';
export { slide10Notes };

const uses = [
  { icon: <Mic className="w-5 h-5" />, title: 'Voz em palestras', desc: 'Mantém o volume uniforme enquanto o palestrante se movimenta.', color: 'border-blue-500/30 bg-blue-500/10' },
  { icon: <Headphones className="w-5 h-5" />, title: 'Podcast', desc: 'Equaliza vozes de participantes com volumes diferentes.', color: 'border-emerald-500/30 bg-emerald-500/10' },
  { icon: <Radio className="w-5 h-5" />, title: 'Locução', desc: 'Garante que a locução se mantenha clara e em nível constante.', color: 'border-purple-500/30 bg-purple-500/10' },
  { icon: <Music className="w-5 h-5" />, title: 'Cantores', desc: 'Controla variações de intensidade vocal durante a música.', color: 'border-amber-500/30 bg-amber-500/10' },
  { icon: <Podcast className="w-5 h-5" />, title: 'Instrumentos', desc: 'Suaviza picos de guitarra, baixo e bateria.', color: 'border-cyan-500/30 bg-cyan-500/10' },
  { icon: <Monitor className="w-5 h-5" />, title: 'Transmissões ao vivo', desc: 'Evita que picos inesperados estourem o áudio da transmissão.', color: 'border-rose-500/30 bg-rose-500/10' },
];

export const Slide10_WhenToUse: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Quando usar Compressão?" subtitle="Situações onde o compressor faz diferença" badge="Aplicações" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {uses.map((u, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className={`p-4 rounded-2xl border backdrop-blur-sm ${u.color}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white">{u.icon}</span>
            <h4 className="text-white font-extrabold text-xs">{u.title}</h4>
          </div>
          <p className="text-slate-300 text-[10px] leading-relaxed">{u.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);
