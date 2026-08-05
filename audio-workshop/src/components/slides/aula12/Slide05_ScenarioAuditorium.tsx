import { motion } from 'framer-motion';
import { Building2, Target, Mic, Speaker, Disc3, Laptop, MonitorSpeaker, Radio } from 'lucide-react';
import { ScenarioCard } from '../../ui/ScenarioCard';
import { ScenarioBuilder } from '../../ui/ScenarioBuilder';
import { slide05Notes } from './notes';
export { slide05Notes };

const zones = [
  { id: 'front', label: 'Frente do Palco', hint: 'Line array que cobre todo o público', className: '' },
  { id: 'stage', label: 'Palco', hint: 'Onde os músicos atuam — mics sem fio e monitores', className: '' },
  { id: 'foh', label: 'Front of House (FOH)', hint: 'Meio da plateia — mesa e notebook de controle', className: '' },
];

const items = [
  { id: 'arrayL', label: 'Line Array L', icon: <Speaker className="w-3.5 h-3.5" />, zone: 'front' },
  { id: 'arrayR', label: 'Line Array R', icon: <Speaker className="w-3.5 h-3.5" />, zone: 'front' },
  { id: 'mon1', label: 'Monitor 1', icon: <MonitorSpeaker className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mon2', label: 'Monitor 2', icon: <MonitorSpeaker className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mic1', label: 'Sem Fio 1', icon: <Radio className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mic2', label: 'Sem Fio 2', icon: <Mic className="w-3.5 h-3.5" />, zone: 'stage' },
  { id: 'mixer', label: 'Mesa FOH', icon: <Disc3 className="w-3.5 h-3.5" />, zone: 'foh' },
  { id: 'notebook', label: 'Notebook', icon: <Laptop className="w-3.5 h-3.5" />, zone: 'foh' },
];

export const Slide05_ScenarioAuditorium: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wall_of_Sound_%28QuadFest%29.jpg/1280px-Wall_of_Sound_%28QuadFest%29.jpg" alt="Auditório" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
      Cenário 3
    </motion.div>
    <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Montagem para Auditório</h2>
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col gap-4">
        <ScenarioCard
          title="Auditório"
          description="Evento de médio porte — cobertura uniforme para a plateia e retorno claro para os músicos."
          equipment={['4 Microfones Sem Fio', 'Sistema Line Array', 'Monitores', 'Mesa Digital FOH', 'Notebook']}
          icon={<Building2 className="w-5 h-5" />}
          color="emerald"
        />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm flex items-center gap-3"
        >
          <Target className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm text-slate-300 font-medium">Distribua o sistema entre palco, frente e FOH e valide o plano.</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <ScenarioBuilder
          title="Plano de Distribuição"
          zones={zones}
          items={items}
          accent="emerald"
        />
      </motion.div>
    </div>
  </div>
);