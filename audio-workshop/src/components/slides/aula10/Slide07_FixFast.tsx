import { motion } from 'framer-motion';
import { AlertTriangle, Search, ArrowDown, SlidersHorizontal, Move, Waves } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide07Notes } from './notes';
export { slide07Notes };

const steps = [
  { icon: <AlertTriangle className="w-5 h-5" />, title: '1. Não entre em pânico', desc: 'Microfonia tem solução. Respirar fundo ajuda a pensar com clareza.', color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { icon: <Search className="w-5 h-5" />, title: '2. Identifique o microfone', desc: 'Qual canal está apitando? Olhe os VU meters ou mute canais um por um.', color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { icon: <ArrowDown className="w-5 h-5" />, title: '3. Abaixe o fader', desc: 'Reduza o volume do canal identificado até o feedback parar. Solução imediata.', color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { icon: <SlidersHorizontal className="w-5 h-5" />, title: '4. Ajuste o ganho', desc: 'Verifique o ganho de entrada. Às vezes o trim está alto demais.', color: 'border-amber-400/30 bg-amber-400/10 text-amber-400' },
  { icon: <Move className="w-5 h-5" />, title: '5. Reposicione', desc: 'Afaste o microfone da caixa ou gire a cápsula para usar a zona nula.', color: 'border-blue-400/30 bg-blue-400/10 text-blue-400' },
  { icon: <Waves className="w-5 h-5" />, title: '6. EQ cirúrgico', desc: 'Corte a frequência exata do feedback com Q estreito. Último recurso.', color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
];

export const Slide07_FixFast: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="/images/mixing-console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Como Resolver em Segundos" subtitle="Sequência rápida para matar a microfonia" badge="Passo a Passo" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {steps.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
          className={`p-4 rounded-xl border backdrop-blur-sm ${s.color}`}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg shrink-0 bg-slate-900/60">{s.icon}</div>
            <div>
              <span className="text-xs font-bold">{s.title}</span>
              <p className="text-slate-400 text-[10px] mt-1 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
      className="relative z-10 mt-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm text-center max-w-lg">
      <p className="text-purple-300 text-xs font-bold">PARAR → IDENTIFICAR → REDUZIR → CORRIGIR</p>
    </motion.div>
  </div>
);

