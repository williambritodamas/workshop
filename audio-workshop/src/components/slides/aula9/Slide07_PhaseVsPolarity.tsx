import { motion } from 'framer-motion';
import { Clock, CircuitBoard, ArrowRight } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide07Notes } from './notes';
export { slide07Notes };

export const Slide07_PhaseVsPolarity: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784169/pexels-photo-3784169.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa de som digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Fase vs Polaridade" subtitle="Não confunda — são conceitos diferentes!" badge="Comparação" />
    <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
        className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-6 h-6 text-blue-400" />
          <h3 className="text-blue-400 font-black text-lg">Fase</h3>
        </div>
        <ul className="space-y-3 text-xs">
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-blue-400 mt-0.5">→</span> Relacionada ao <strong className="text-white">TEMPO</strong>
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-blue-400 mt-0.5">→</span> Atraso ou adiantamento entre ondas
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-blue-400 mt-0.5">→</span> Varia conforme a <strong className="text-white">distância</strong> percorrida
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-blue-400 mt-0.5">→</span> Afeta frequências <strong className="text-white">diferentemente</strong>
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-blue-400 mt-0.5">→</span> Exemplo: dois microfones a distâncias diferentes
          </li>
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
        className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <CircuitBoard className="w-6 h-6 text-purple-400" />
          <h3 className="text-purple-400 font-black text-lg">Polaridade</h3>
        </div>
        <ul className="space-y-3 text-xs">
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-purple-400 mt-0.5">→</span> Relacionada ao <strong className="text-white">SINAL ELÉTRICO</strong>
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-purple-400 mt-0.5">→</span> Inversão instantânea (+ vira -)
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-purple-400 mt-0.5">→</span> Afeta <strong className="text-white">todas</strong> as frequências igualmente
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-purple-400 mt-0.5">→</span> Não depende de distância
          </li>
          <li className="flex items-start gap-2 text-slate-300">
            <span className="text-purple-400 mt-0.5">→</span> Exemplo: botão Ø ou cabo XLR invertido
          </li>
        </ul>
      </motion.div>
    </div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      className="relative z-10 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm max-w-lg mt-6"
    >
      <p className="text-cyan-400 text-xs font-bold text-center flex items-center justify-center gap-2">
        <ArrowRight className="w-4 h-4" />
        Ambos podem causar cancelamento — mas por razões diferentes!
      </p>
    </motion.div>
  </div>
);
