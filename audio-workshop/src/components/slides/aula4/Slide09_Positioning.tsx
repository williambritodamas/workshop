import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide09Notes } from './notes';
import { ArrowRightCircle, XCircle, Volume2 } from 'lucide-react';
export { slide09Notes };

const tips = [
  { icon: <ArrowRightCircle className="w-6 h-6 text-green-400" />, label: 'Distância ideal', desc: '2 a 3 dedos da boca (5-10 cm). Próximo demais estoura; longe demais perde volume.' },
  { icon: <ArrowRightCircle className="w-6 h-6 text-green-400" />, label: 'Ângulo correto', desc: 'Aponte para a boca, ligeiramente para o lado (evita sopro e estalos de "p" e "b").' },
  { icon: <XCircle className="w-6 h-6 text-red-400" />, label: 'Evite segurar na cápsula', desc: 'Segure pelo corpo ou pelo suporte. Segurar na grade abafa e altera a captação.' },
  { icon: <XCircle className="w-6 h-6 text-red-400" />, label: 'Nunca aponte para caixas', desc: 'Apontar para monitores ou caixas causa feedback (microfonia).' },
];

export const Slide09_Positioning: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <SlideTitle title="Posicionamento" subtitle="Como usar o microfone corretamente" badge="Técnica" />
    <div className="w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {tips.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-start gap-4 p-5 rounded-2xl border ${
            i < 2 ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'
          } backdrop-blur-sm`}
        >
          <div className="mt-0.5">{t.icon}</div>
          <div>
            <h4 className="text-white font-extrabold text-sm">{t.label}</h4>
            <p className="text-slate-300 text-xs mt-1">{t.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 border border-blue-500/30 text-center max-w-3xl">
      <p className="text-slate-300 font-medium flex items-center gap-2 justify-center"><Volume2 className="w-5 h-5 text-blue-400" /> "A boca certa, na posição certa, usando o microfone certo — esse é o segredo do áudio profissional."</p>
    </motion.div>
  </div>
);

