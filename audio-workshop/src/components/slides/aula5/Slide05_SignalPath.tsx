import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { AnimatedSignalPath } from '../../ui/AnimatedSignalPath';
import { slide05Notes } from './notes';
export { slide05Notes };

export const Slide05_SignalPath: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="O caminho dentro da mesa" subtitle="O sinal percorre uma sequência lógica dentro de cada canal" badge="Fluxo" />
    <div className="relative z-10 w-full max-w-6xl my-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <AnimatedSignalPath autoPlay />
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            Todos os canais seguem <span className="text-blue-400 font-bold">praticamente o mesmo caminho</span>. 
            A ordem importa: cada etapa prepara o sinal para a próxima.
          </p>
        </div>
        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-blue-400 font-bold">🎯 Dica:</span> O Gain é a primeira etapa porque define a 
            quantidade de sinal que vai entrar no canal. Se o Gain estiver baixo, as próximas etapas terão pouco 
            sinal para trabalhar.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);
