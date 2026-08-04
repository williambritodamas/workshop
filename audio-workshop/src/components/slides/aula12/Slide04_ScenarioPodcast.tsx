import { motion } from 'framer-motion';
import { Podcast, Mic, Disc3, Laptop, Phone, Video } from 'lucide-react';
import { ScenarioCard } from '../../ui/ScenarioCard';
import { ScenarioBuilder } from '../../ui/ScenarioBuilder';
import { slide04Notes } from './notes';
export { slide04Notes };

const zones = [
  { id: 'table', label: 'Mesa de Gravação', hint: 'Onde os participantes falam e são captados', className: '' },
  { id: 'rack', label: 'Rack / Computador', hint: 'Onde o som entra, é gravado e monitorado', className: '' },
];

const items = [
  { id: 'mic1', label: 'Mic. 1', icon: <Mic className="w-3.5 h-3.5" />, zone: 'table' },
  { id: 'mic2', label: 'Mic. 2', icon: <Mic className="w-3.5 h-3.5" />, zone: 'table' },
  { id: 'cam', label: 'Câmera', icon: <Video className="w-3.5 h-3.5" />, zone: 'table' },
  { id: 'interface', label: 'Interface/Mesa', icon: <Disc3 className="w-3.5 h-3.5" />, zone: 'rack' },
  { id: 'notebook', label: 'Notebook', icon: <Laptop className="w-3.5 h-3.5" />, zone: 'rack' },
  { id: 'phones', label: 'Fones', icon: <Phone className="w-3.5 h-3.5" />, zone: 'rack' },
];

export const Slide04_ScenarioPodcast: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Mixing_console.jpg?width=1920" alt="Estúdio podcast" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
      Cenário 2
    </motion.div>
    <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Montagem para Podcast</h2>
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col gap-4">
        <ScenarioCard
          title="Podcast"
          description="Gravação com 2 pessoas — o som precisa chegar limpo à interface e ser monitorado em tempo real."
          equipment={['2 Microfones Condensadores', 'Interface ou Mesa Digital', 'Notebook', 'Fones', 'Câmera']}
          icon={<Podcast className="w-5 h-5" />}
          color="blue"
        />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm flex items-center gap-3"
        >
          <span className="text-sm text-slate-300 font-medium">Posicione os equipamentos entre a mesa de captação e o rack de gravação, depois valide.</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <ScenarioBuilder
          title="Roteiro de Conexão"
          zones={zones}
          items={items}
          accent="blue"
        />
      </motion.div>
    </div>
  </div>
);