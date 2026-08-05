import { motion } from 'framer-motion';
import { MapPin, HelpCircle, ArrowRight } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { StagePlanner } from '../../ui/StagePlanner';
import { slide03Notes } from './notes';
export { slide03Notes };

export const Slide03_Planning: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Mixing_console.jpg/1280px-Mixing_console.jpg" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Planejamento" subtitle="Onde colocar cada equipamento?" badge="Planejamento" />
    <div className="relative z-10 w-full max-w-4xl my-auto flex flex-col items-center gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm"
        >
          <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400" /> Perguntas-chave
          </p>
          <ul className="space-y-2">
            {['Onde fica a mesa de som?', 'Caixas à frente ou atrás?', 'Monitores no chão?', 'Por onde passam os cabos?', 'Quantos microfones?', 'Fonte de energia próxima?'].map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <HelpCircle className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                {q}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm"
        >
          <p className="text-sm font-bold text-amber-300 mb-3 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" /> Regra de ouro
          </p>
          <p className="text-xs text-slate-300 leading-relaxed">
            As caixas de som devem ficar à frente dos microfones para evitar feedback. A mesa de som deve estar posicionada de forma que o operador enxergue todo o palco.
          </p>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
        className="w-full max-w-lg rounded-xl overflow-hidden border border-slate-800"
      >
        <StagePlanner />
      </motion.div>
    </div>
  </div>
);
