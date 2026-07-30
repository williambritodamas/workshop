import { motion } from 'framer-motion';
import { Podcast, HelpCircle } from 'lucide-react';
import { ScenarioCard } from '../../ui/ScenarioCard';
import { slide04Notes } from './notes';
export { slide04Notes };

export const Slide04_ScenarioPodcast: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Estúdio podcast" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
      className="relative z-10 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">
      Cenário 2
    </motion.div>
    <h2 className="relative z-10 mt-4 text-3xl md:text-4xl font-black text-white">Montagem para Podcast</h2>
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <ScenarioCard
        title="Podcast"
        description="Gravação de podcast com equipamento profissional"
        equipment={['2 Microfones Condensadores', 'Interface ou Mesa Digital', 'Notebook', 'Fones', 'Câmeras']}
        icon={<Podcast className="w-5 h-5" />}
        color="blue"
      />
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Onde cada equipamento deve ser conectado?
            </p>
          </div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
          <h4 className="text-white font-bold text-sm mb-3">Fluxo de Conexão</h4>
          <div className="flex flex-col items-center gap-1 text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Microfones → Interface</span>
            <span className="text-slate-600">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Interface → Notebook (USB)</span>
            <span className="text-slate-600">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Fones → Interface (saída)</span>
            <span className="text-slate-600">↓</span>
            <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Câmeras → Sincronia</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
