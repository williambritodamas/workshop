import { motion } from 'framer-motion';
import { Church, Target, Mic, Speaker, Disc3, Laptop, MonitorSpeaker } from 'lucide-react';
import { ScenarioCard } from '../../ui/ScenarioCard';
import { ScenarioBuilder } from '../../ui/ScenarioBuilder';
import { slide03Notes } from './notes';
export { slide03Notes };

const zones = [
  { id: 'front', label: 'Frente do Palco', hint: 'Onde o público ouve — caixas principais', className: '' },
  { id: 'stage', label: 'Palco', hint: 'Onde cantores/falantes atuam — mics e monitores', className: '' },
  { id: 'control', label: 'Área de Controle', hint: 'Atrás — mesa, notebook e cabos', className: '' },
];

const items = [
  { id: 'spk1', label: 'Caixa 1', icon: <Speaker className="w-3.5 h-3.5" />, zone: 'front' },
  { id: 'spk2', label: 'Caixa 2', icon: <Speaker className="w-3.5 h-3.5" />, zone: 'front' },
  { id: 'mon1', label: 'Monitor 1', icon: <MonitorSpeaker className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mon2', label: 'Monitor 2', icon: <MonitorSpeaker className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mic1', label: 'Microfone 1', icon: <Mic className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mic2', label: 'Microfone 2', icon: <Mic className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mixer', label: 'Mesa', icon: <Disc3 className="w-3.5 h-3.5" />, zone: 'control' },
  { id: 'notebook', label: 'Notebook', icon: <Laptop className="w-3.5 h-3.5" />, zone: 'control' },
];

export const Slide03_ScenarioChurch: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/images/sound-reinforcement.jpg" alt="Igreja" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium">
      Cenário 1
    </motion.div>
    <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Montagem para Igreja</h2>
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col gap-4">
        <ScenarioCard
          title="Igreja"
          description="Culto/reunião com equipamento básico — o som precisa cobrir todos e chegar a quem fala ao vivo."
          equipment={['2 Microfones', '2 Caixas Ativas', 'Monitores de Palco', '1 Mesa de Som', 'Notebook']}
          icon={<Church className="w-5 h-5" />}
          color="amber"
        />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm flex items-center gap-3"
        >
          <Target className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-sm text-slate-300 font-medium">Coloque cada equipamento na zona correta e valide a montagem.</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <ScenarioBuilder
          title="Montagem do Palco"
          zones={zones}
          items={items}
          accent="amber"
        />
      </motion.div>
    </div>
  </div>
);