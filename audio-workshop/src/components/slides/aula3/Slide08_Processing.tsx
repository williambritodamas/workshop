import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { InteractiveFlow } from '../../ui/InteractiveFlow';
import { slide08Notes } from './notes';

export { slide08Notes };

const processingSteps = [
  { id: 'entrada', label: 'Entrada', description: 'O sinal chega da mesa de som pronto para ser tratado.', color: '🔵' },
  { id: 'equalizador', label: 'Equalizador', description: 'Ajusta os graves, médios e agudos. Deixa o som mais equilibrado.', color: '🟢' },
  { id: 'compressor', label: 'Compressor', description: 'Controla os picos de volume. Deixa o som mais estável.', color: '🟡' },
  { id: 'efeitos', label: 'Efeitos', description: 'Adiciona reverb, delay e outros efeitos para enriquecer o som.', color: '🟣' },
  { id: 'saida', label: 'Saída', description: 'O som tratado segue para o amplificador ou caixa.', color: '🔴' },
];

export const Slide08_Processing: React.FC = () => {
  return (
    <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
      <SlideTitle
        title="Processamento"
        subtitle="Antes de enviar para as caixas, podemos melhorar o som"
        badge="Tratamento de Áudio"
      />

      <div className="w-full my-auto flex flex-col items-center">
        <InteractiveFlow items={processingSteps} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-slate-400 text-sm md:text-base text-center max-w-xl"
        >
          Cada etapa pode ser usada ou ignorada. O importante é saber que o som
          pode ser tratado antes de chegar às caixas.
        </motion.p>
      </div>
    </div>
  );
};

