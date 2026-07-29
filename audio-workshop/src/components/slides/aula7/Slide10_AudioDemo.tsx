import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { AudioComparison } from '../../ui/AudioComparison';
import { slide10Notes } from './notes';
export { slide10Notes };

export const Slide10_AudioDemo: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Mesa digital" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Demonstração Auditiva" subtitle="Ouça a diferença que cada faixa faz" badge="Demonstração" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-2xl my-auto">
      <AudioComparison />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-6 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm text-center"
      >
        <span className="text-slate-300 text-sm">
          Cada preset altera também a animação do equalizador — observe o <span className="text-blue-400 font-bold">gráfico de resposta</span>.
        </span>
      </motion.p>
    </motion.div>
  </div>
);
