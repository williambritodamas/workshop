import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { SystemBuilder } from '../../ui/SystemBuilder';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_Connections: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Audio_mixer_faders.jpg?width=1920" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Cadeia de Conexões" subtitle="A ordem correta dos equipamentos" badge="Conexões" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 w-full max-w-3xl my-auto">
      <div className="p-4 mb-4 rounded-xl bg-amber-500/5 border border-amber-500/20 backdrop-blur-sm text-center">
        <p className="text-xs text-amber-300 font-medium">
          Microfone → Cabo XLR → Mesa de Som → Saída Principal → Caixa Ativa
        </p>
      </div>
      <SystemBuilder />
    </motion.div>
  </div>
);
