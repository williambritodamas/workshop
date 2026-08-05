import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Guitar, Drum, Headphones } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide13Notes } from './notes';
export { slide13Notes };

const situations = [
  { icon: <Mic className="w-6 h-6" />, title: 'Pessoa falando', tips: ['Reduza graves (voz abafada)', 'Ative HPF', 'Médios levemente realçados'], hint: 'Clareza é prioridade. A voz precisa ser inteligível.' },
  { icon: <Guitar className="w-6 h-6" />, title: 'Violão', tips: ['Médios naturais', 'Agudos suaves para brilho', 'Evite exageros'], hint: 'O violão já tem um timbre natural. Apenas ajuste o ambiente.' },
  { icon: <Drum className="w-6 h-6" />, title: 'Bateria', tips: ['Graves controlados', 'Médios para definição', 'Agudos para ataque'], hint: 'Cada parte da bateria pede um ajuste. Comece pelo bumbo.' },
  { icon: <Headphones className="w-6 h-6" />, title: 'Podcast', tips: ['Voz clara e presente', 'HPF ativo', 'Evite agudos excessivos'], hint: 'Conforto auditivo é essencial para conteúdo longo.' },
];

export const Slide13_Exercise: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Exercício" subtitle="Qual ajuste faria mais sentido?" badge="Raciocínio" />
      <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {situations.map((s, i) => (
          <motion.button key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            onClick={() => setActiveIdx(activeIdx === i ? null : i)}
            className={`p-5 rounded-2xl border backdrop-blur-sm transition-all text-left cursor-pointer ${
              activeIdx === i ? 'bg-blue-500/20 border-blue-500/40' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className={`p-3 rounded-xl mb-3 inline-block ${activeIdx === i ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
              {s.icon}
            </div>
            <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
            {activeIdx === i && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <ul className="space-y-1 mb-3">
                  {s.tips.map((t, j) => (
                    <li key={j} className="text-slate-300 text-[10px] flex items-start gap-1.5">
                      <span className="text-blue-400 mt-0.5">•</span>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-blue-300 text-[10px] italic">{s.hint}</p>
                </div>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
        className="relative z-10 mt-6 text-slate-500 text-xs text-center"
      >
        Não existe apenas uma resposta. O objetivo é estimular o raciocínio.
      </motion.p>
    </div>
  );
};

