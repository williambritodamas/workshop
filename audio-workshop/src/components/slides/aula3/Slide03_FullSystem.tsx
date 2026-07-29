import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { SignalFlowAnimation } from '../../ui/SignalFlowAnimation';
import { slide03Notes } from './notes';
import { User, Mic, Cable, Sliders, Waves, Zap, Speaker, Ear } from 'lucide-react';

export { slide03Notes };

export const Slide03_FullSystem: React.FC = () => {

  const steps = [
    { id: 'pessoa', icon: <User />, title: 'Pessoa' },
    { id: 'microfone', icon: <Mic />, title: 'Microfone' },
    { id: 'cabo', icon: <Cable />, title: 'Cabo' },
    { id: 'mesa', icon: <Sliders />, title: 'Mesa de Som' },
    { id: 'processamento', icon: <Waves />, title: 'Processamento' },
    { id: 'amplificador', icon: <Zap />, title: 'Amplificador' },
    { id: 'caixa', icon: <Speaker />, title: 'Caixa' },
    { id: 'ouvido', icon: <Ear />, title: 'Ouvido' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="O Sistema Completo"
        subtitle="Cada equipamento tem seu papel no caminho do som"
        badge="Visão Geral"
      />

      <div className="w-full max-w-6xl my-auto flex flex-col items-center gap-6">
        <div className="w-full max-w-4xl">
          <SignalFlowAnimation
            steps={steps}
            autoPlay={true}
            interval={800}
            direction="horizontal"
          />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-4 text-slate-400 text-sm md:text-base text-center max-w-xl"
      >
        Esse é o mapa completo. Cada etapa é essencial — se uma falhar, o som para.
      </motion.p>
    </div>
  );
};
