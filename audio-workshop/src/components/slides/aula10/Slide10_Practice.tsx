import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide10Notes } from './notes';
export { slide10Notes };

const steps = [
  'Posicione o microfone a 30 cm da caixa de som',
  'Aumente o ganho lentamente até ouvir pré-feedback',
  'Anote o nível onde o pré-feedback aparece',
  'Reduza o ganho 6 dB abaixo desse ponto',
  'Aponte a cápsula para longe da caixa',
  'Reposicione o microfone e teste novamente',
  'Aplique EQ cirúrgico na frequência problemática',
  'Teste com falante real em volume de apresentação',
  'Repita o processo com cada microfone do sistema',
  'Documente os níveis seguros para referência futura',
];

export const Slide10_Practice: React.FC = () => {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(checked);
    if (next.has(i)) next.delete(i); else next.add(i);
    setChecked(next);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Audio_mixer_faders.jpg/1280px-Audio_mixer_faders.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Prática: Encontrando o Limite" subtitle="Checklist para demonstração ao vivo" badge="Mãos à Obra" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto space-y-2">
        {steps.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
            onClick={() => toggle(i)}
            className={`flex items-center gap-3 p-3 rounded-xl border backdrop-blur-sm cursor-pointer transition-all ${checked.has(i) ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'}`}
          >
            <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all ${checked.has(i) ? 'bg-emerald-500 text-white' : 'border border-slate-600'}`}>
              {checked.has(i) ? <Check className="w-3 h-3" /> : <span className="w-2 h-2 rounded-sm bg-slate-600" />}
            </div>
            <span className={`text-xs ${checked.has(i) ? 'text-slate-500 line-through' : 'text-slate-200'}`}>{step}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
