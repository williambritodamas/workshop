import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide08Notes } from './notes';
import { Check, X, Save, Sparkles, Wifi, Smile, Eye } from 'lucide-react';
export { slide08Notes };

const rows = [
  { feature: 'Salvar configurações', analog: <X className="w-4 h-4 text-red-400" />, digital: <Check className="w-4 h-4 text-emerald-400" /> },
  { feature: 'Quantidade de efeitos', analog: <span className="text-red-400 text-xs font-bold">Limitada</span>, digital: <span className="text-emerald-400 text-xs font-bold">Alta</span> },
  { feature: 'Controle remoto', analog: <X className="w-4 h-4 text-red-400" />, digital: <Check className="w-4 h-4 text-emerald-400" /> },
  { feature: 'Facilidade para iniciantes', analog: <Check className="w-4 h-4 text-emerald-400" />, digital: <span className="text-amber-400 text-xs font-bold">Boa (com prática)</span> },
  { feature: 'Visualizar tudo ao mesmo tempo', analog: <Check className="w-4 h-4 text-emerald-400" />, digital: <span className="text-amber-400 text-xs font-bold">Parcial</span> },
];

const icons = [
  <Save className="w-4 h-4" />, <Sparkles className="w-4 h-4" />, <Wifi className="w-4 h-4" />,
  <Smile className="w-4 h-4" />, <Eye className="w-4 h-4" />,
];

export const Slide08_PracticalDifferences: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/33379549/pexels-photo-33379549.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O que muda na prática?" subtitle="Comparação direta entre os dois mundos" badge="Comparação" />
    <div className="relative z-10 w-full max-w-4xl my-auto">
      <div className="overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-0">
          <div className="p-4 bg-slate-800/50 text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800">Característica</div>
          <div className="p-4 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800 text-center">Analógica</div>
          <div className="p-4 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border-b border-slate-800 text-center">Digital</div>
          {rows.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
              className={`contents ${i < rows.length - 1 ? '' : ''}`}
            >
              <div className="flex items-center gap-2 p-4 border-b border-slate-800/50">
                <span className="text-blue-400/70">{icons[i]}</span>
                <span className="text-white text-sm font-bold">{row.feature}</span>
              </div>
              <div className="flex items-center justify-center p-4 border-b border-slate-800/50 border-l border-slate-800/50">{row.analog}</div>
              <div className="flex items-center justify-center p-4 border-b border-slate-800/50 border-l border-slate-800/50">{row.digital}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="mt-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm text-center"
      >
        <p className="text-slate-300 text-sm">
          <span className="text-blue-400 font-bold">🎯 Conclusão:</span> Conhecendo a lógica, 
          qualquer mesa se torna familiar.
        </p>
      </motion.div>
    </div>
  </div>
);

