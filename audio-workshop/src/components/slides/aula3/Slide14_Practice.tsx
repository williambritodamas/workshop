import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { PracticeChecklist } from '../../ui/PracticeChecklist';
import { slide14Notes } from './notes';
import { Lightbulb } from 'lucide-react';

export { slide14Notes };

const demoItems = [
  'Fale no microfone — ouça o som na caixa.',
  'Desligue um cabo — o som para?',
  'Tire o volume do canal na mesa.',
  'Ligue o volume novamente.',
  'Desligue a caixa de som.',
  'Pergunte: "Onde o som parou?"',
];

export const Slide14_Practice: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Demonstração Prática"
        subtitle="Hora de experimentar na prática!"
        badge="Mão na Massa"
      />

      <div className="w-full max-w-4xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <PracticeChecklist items={demoItems} title="Checklist da Demonstração" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-950 border border-blue-500/40 text-center shadow-2xl"
        >
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mx-auto mb-4">
            <Lightbulb className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-extrabold text-white mb-3">
            Raciocínio Lógico
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Essa dinâmica ajuda a desenvolver o raciocínio para resolver problemas.
          </p>
          <p className="text-xs text-blue-400 mt-3 font-semibold">
            Sempre que o som parar, pergunte: "Qual etapa do fluxo eu interrompi?"
          </p>
        </motion.div>
      </div>
    </div>
  );
};
