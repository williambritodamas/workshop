import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
export { slide11Notes };

const mistakes = [
  { title: 'Colocar tudo no máximo', detail: 'Equalização não é volume. Aumentar tudo cria um som artificial, sujo e pode causar clip. Menos é mais.' },
  { title: 'Equalizar olhando apenas para a tela', detail: 'O gráfico não substitui o ouvido. Feche os olhos e ouça antes de olhar para a tela.' },
  { title: 'Ignorar o ambiente', detail: 'A mesma equalização não funciona em todos os lugares. Uma sala com carpete soa diferente de uma com piso frio.' },
  { title: 'Copiar configuração de outro evento', detail: 'Cada microfone, cada voz, cada sala é única. O que funcionou ontem pode não funcionar hoje.' },
  { title: 'Nunca usar HPF', detail: 'O HPF é uma ferramenta essencial para limpar graves indesejados. Não usar é perder qualidade de graça.' },
  { title: 'Exagerar nos agudos', detail: 'Agudos demais causam fadiga auditiva. O público vai se cansar rapidamente e associar o som a "desconfortável".' },
];

export const Slide11_Mistakes: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Erros Comuns na Equalização" subtitle="Evite estas armadilhas" badge="Cuidado!" />
      <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        {mistakes.map((m, i) => (
          <motion.button key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-red-500/30 transition-all text-left cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-200 text-sm font-bold">{m.title}</span>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                      className="text-slate-400 text-xs mt-2 leading-relaxed overflow-hidden"
                    >
                      {m.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
