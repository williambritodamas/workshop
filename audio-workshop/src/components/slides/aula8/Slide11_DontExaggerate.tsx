import { motion } from 'framer-motion';
import { AlertTriangle, VolumeX, Mic as MicIcon, Heart, Music } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
export { slide11Notes };

const cautions = [
  { icon: <VolumeX className="w-5 h-5" />, title: 'Tudo fica sem vida', desc: 'A compressão excessiva achata a dinâmica. O som perde a emoção e a sensação de "ao vivo".' },
  { icon: <MicIcon className="w-5 h-5" />, title: 'Voz artificial', desc: 'Vozes comprimidas demais soam como se estivessem "dentro de uma caixa". Perdem naturalidade.' },
  { icon: <Heart className="w-5 h-5" />, title: 'Música perde emoção', desc: 'A música vive de contrastes. Compressão exagerada tira o impacto do refrão e a suavidade dos versos.' },
  { icon: <Music className="w-5 h-5" />, title: 'Sons respiram menos', desc: 'Instrumentos percussivos perdem o ataque. Tudo soa "amassado" e sem definição.' },
];

export const Slide11_DontExaggerate: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Quando NÃO exagerar?" subtitle="Compressão em excesso pode prejudicar o som" badge="Cuidado!" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {cautions.map((c, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}
          className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-red-500/10 shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <span className="text-red-400 font-bold text-sm">{c.title}</span>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="md:col-span-2 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center"
      >
        <p className="text-purple-300 text-sm font-bold">Compressão excessiva pode deixar tudo "amassado".</p>
      </motion.div>
    </div>
  </div>
);
