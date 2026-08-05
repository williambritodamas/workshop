import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Speaker, ArrowUpCircle, Hand, VolumeX, SlidersHorizontal } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide11Notes } from './notes';
export { slide11Notes };

const mistakes = [
  {
    id: 1,
    icon: <Mic className="w-5 h-5" />,
    title: 'Microfone apontado para a caixa',
    desc: 'Erro mais básico. A cápsula capta o som direto da caixa e realimenta o sistema.',
    fix: 'Gire o microfone 180° para usar a zona nula do cardioidal.',
    color: 'border-red-500/30 bg-red-500/10 text-red-400',
  },
  {
    id: 2,
    icon: <ArrowUpCircle className="w-5 h-5" />,
    title: 'Aumentar ganho em vez de reposicionar',
    desc: 'Quando o som está baixo, muitos operadores sobem o ganho — piorando o risco de feedback.',
    fix: 'Reposicione o microfone mais perto da fonte sonora antes de aumentar o ganho.',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  },
  {
    id: 3,
    icon: <Hand className="w-5 h-5" />,
    title: 'Cobrir a cápsula com a mão',
    desc: 'A mão na cápsula altera a diretividade do microfone, criando novas frequências de ressonância.',
    fix: 'Segure o microfone pelo corpo, nunca pela cápsula.',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  },
  {
    id: 4,
    icon: <VolumeX className="w-5 h-5" />,
    title: 'Andar na frente das caixas PA',
    desc: 'O microfone aberto passando na frente do PA principal é microfonia na certa.',
    fix: 'Treine os apresentadores a não andar com microfone aberto na frente das caixas.',
    color: 'border-red-500/30 bg-red-500/10 text-red-400',
  },
  {
    id: 5,
    icon: <Speaker className="w-5 h-5" />,
    title: 'Ignorar posição do monitor',
    desc: 'Monitor mal posicionado é a causa mais ignorada de microfonia em igrejas e eventos.',
    fix: 'Sempre verifique a posição do monitor antes de subir o ganho.',
    color: 'border-red-500/30 bg-red-500/10 text-red-400',
  },
  {
    id: 6,
    icon: <SlidersHorizontal className="w-5 h-5" />,
    title: 'Aumentar graves achando que ajuda',
    desc: 'Aumentar as frequências graves achando que o som fica "mais encorpado" pode criar feedback em 200-400 Hz.',
    fix: 'Use EQ suave. Se precisar de mais graves, reposicione o microfone.',
    color: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  },
];

export const Slide11_Mistakes: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <img src="/images/mixing-console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Erros Comuns" subtitle="O que NÃO fazer ao lidar com microfonia" badge="Atenção" />
      <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {mistakes.map((m) => (
          <motion.div key={m.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: m.id * 0.08 }}
            onClick={() => setSelected(selected === m.id ? null : m.id)}
            className={`p-4 rounded-xl border backdrop-blur-sm cursor-pointer transition-all ${m.color} ${selected === m.id ? 'scale-105 shadow-lg' : 'hover:scale-[1.02]'}`}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg shrink-0 bg-slate-900/60">{m.icon}</div>
              <div>
                <span className="text-xs font-bold">{m.title}</span>
                {selected === m.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-slate-400 text-[10px] mt-1 leading-relaxed">{m.desc}</p>
                    <p className="text-green-400 text-[10px] mt-1 font-bold">✔ {m.fix}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="relative z-10 text-slate-500 text-[10px] mt-2">Clique em cada erro para ver a solução</motion.p>
    </div>
  );
};

