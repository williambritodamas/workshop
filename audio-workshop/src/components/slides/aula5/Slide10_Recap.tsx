import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide10Notes } from './notes';
export { slide10Notes };

const items = [
  { text: 'Mesa de som = o cérebro do sistema', detail: 'Ela recebe, organiza e distribui o áudio para os destinos corretos.' },
  { text: 'Cada fonte precisa de seu canal', detail: 'Microfones, instrumentos e notebooks ocupam faixas independentes na mesa.' },
  { text: 'O sinal percorre um caminho', detail: 'Entrada → Gain → EQ → Aux → Pan → Fader → Saída.' },
  { text: 'Analógica vs Digital', detail: 'Analógica tem controles físicos; Digital usa menus e telas touch.' },
  { text: 'Gain controla entrada; Fader controla saída', detail: 'Gain = sensibilidade de captação; Fader = volume final do canal.' },
  { text: 'Mute silencia; Solo isola para audição', detail: 'Mute corta o som da plateia; Solo isola o canal nos fones do operador.' },
];

export const Slide10_Recap: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Recapitulação" subtitle="O que aprendemos hoje?" badge="Revisão" />
    <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-white text-sm font-bold">{item.text}</p>
              <p className="text-slate-400 text-xs mt-1">{item.detail}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);
