import { motion } from 'framer-motion';
import { Building2, Target, LayoutGrid } from 'lucide-react';
import { ScenarioCard } from '../../ui/ScenarioCard';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_ScenarioAuditorium: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/169720/pexels-photo-169720.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Auditório" className="w-full h-full object-cover opacity-20" />
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
          description="Evento de médio porte com sistema profissional"
          equipment={['4 Microfones Sem Fio', 'Notebook', 'Mesa Digital', 'Projetor', 'Sistema Line Array', 'Monitores']}
          icon={<Building2 className="w-5 h-5" />}
          color="emerald"
        />
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 backdrop-blur-sm flex items-center gap-3"
        >
          <Target className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm text-slate-300 font-medium">Objetivo: Planejar toda a operação.</span>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <LayoutGrid className="w-4 h-4 text-emerald-400" />
          <h4 className="text-white font-bold text-sm">Grid de Planejamento</h4>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Line Array', color: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300', row: '1', col: '1-4' },
            { label: 'Palco', color: 'bg-slate-800 border-slate-700 text-slate-300', row: '2', col: '1-4' },
            { label: 'Monitores', color: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-300', row: '3', col: '1-2' },
            { label: 'Mesa FOH', color: 'bg-purple-500/20 border-purple-500/30 text-purple-300', row: '3', col: '3-4' },
            { label: 'Plateia', color: 'bg-slate-800/50 border-slate-700/50 text-slate-500', row: '4', col: '1-4' },
          ].map((cell) => (
            <div key={cell.label}
              className={`col-span-${cell.col} p-2 rounded-lg border text-[10px] font-bold text-center ${cell.color}`}
            >
              {cell.label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);
