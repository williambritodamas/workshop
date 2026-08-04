import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Speaker, Mic, SlidersHorizontal, Monitor, Building2 } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide06Notes } from './notes';
export { slide06Notes };

const factors = [
  { id: 1, icon: <Gauge className="w-5 h-5" />, title: 'Ganho Excessivo', desc: 'Ganho alto demais no pré ou no fader. O sistema fica no limite do feedback o tempo todo.', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { id: 2, icon: <Speaker className="w-5 h-5" />, title: 'Caixa Muito Próxima', desc: 'Speaker muito perto do microfone. O som direto entra na cápsula sem atenuação.', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { id: 3, icon: <Mic className="w-5 h-5" />, title: 'Microfone Sensível', desc: 'Microfones condensadores captam mais longe e são mais propensos a feedback que dinâmicos.', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { id: 4, icon: <SlidersHorizontal className="w-5 h-5" />, title: 'EQ Exagerado', desc: 'Aumentar demais frequências específicas sem necessidade pode criar ressonâncias.', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { id: 5, icon: <Monitor className="w-5 h-5" />, title: 'Monitor Mal Posicionado', desc: 'Monitor apontado para o lado errado ou muito próximo à cápsula do microfone.', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { id: 6, icon: <Building2 className="w-5 h-5" />, title: 'Sala Reflexiva', desc: 'Paredes de vidro, piso cerâmico, teto alto — muitas superfícies que refletem o som de volta.', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
];

export const Slide06_RiskFactors: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mixing_console.jpg?width=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Fatores de Risco" subtitle="O que favorece a microfonia?" badge="Atenção" />
      <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {factors.map((f) => (
          <motion.div key={f.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: f.id * 0.08 }}
            onClick={() => setActiveId(activeId === f.id ? null : f.id)}
            className={`p-4 rounded-xl border backdrop-blur-sm cursor-pointer transition-all ${f.color} ${activeId === f.id ? 'scale-105 shadow-lg' : 'hover:scale-[1.02]'}`}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg shrink-0 bg-slate-900/60">{f.icon}</div>
              <div>
                <span className="text-xs font-bold">{f.title}</span>
                {(activeId === f.id) && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                    className="text-slate-400 text-[10px] mt-1 leading-relaxed">{f.desc}</motion.p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="relative z-10 text-slate-500 text-[10px] mt-2">Clique em cada card para saber mais</motion.p>
    </div>
  );
};
