import { motion } from 'framer-motion';
import { Mic, ToggleLeft, Ear, Shuffle, Ruler, CheckCircle2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide12Notes } from './notes';
export { slide12Notes };

const tips = [
  { icon: <Mic className="w-5 h-5" />, title: 'Posicione os microfones corretamente', desc: 'Evite que dois microfones capturem a mesma fonte a distâncias muito diferentes.', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { icon: <Shuffle className="w-5 h-5" />, title: 'Evite microfones redundantes', desc: 'Se um microfone já capta bem, não use um segundo na mesma fonte.', color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { icon: <Ear className="w-5 h-5" />, title: 'Teste ouvindo', desc: 'Antes do evento, teste o sistema e ouça atentamente se há cancelamento.', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <ToggleLeft className="w-5 h-5" />, title: 'Use o botão Ø com sabedoria', desc: 'O polarity reverse pode resolver — mas não é solução para problemas de posicionamento.', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { icon: <Ruler className="w-5 h-5" />, title: 'Regra 3:1', desc: 'Distância entre microfones deve ser pelo menos 3x a distância de cada um à fonte.', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
];

export const Slide12_HowToAvoid: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/164680/pexels-photo-164680.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Como Evitar" subtitle="Dicas práticas para prevenir problemas de fase" badge="Prevenção" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {tips.map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`p-4 rounded-2xl border backdrop-blur-sm ${t.color}`}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-slate-900/60 shrink-0">
              {t.icon}
            </div>
            <div>
              <span className="text-white font-extrabold text-xs">{t.title}</span>
              <p className="text-slate-400 text-[10px] mt-1 leading-relaxed">{t.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="md:col-span-2 lg:col-span-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm text-center"
      >
        <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
        <p className="text-emerald-400 text-xs font-bold">Prefira sempre resolver pelo posicionamento antes de usar o botão Ø.</p>
      </motion.div>
    </div>
  </div>
);

