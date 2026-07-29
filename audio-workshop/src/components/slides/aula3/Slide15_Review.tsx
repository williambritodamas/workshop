import { useState } from 'react';
import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
import { CheckCircle2, Award, ArrowRight } from 'lucide-react';

export { slide15Notes };

const pillars = [
  { text: 'Todo sistema possui uma fonte sonora.', icon: '🎤' },
  { text: 'O microfone capta o som e transforma em eletricidade.', icon: '🎧' },
  { text: 'O cabo transporta o sinal elétrico.', icon: '🔌' },
  { text: 'A mesa controla e organiza o áudio.', icon: '🎛️' },
  { text: 'O amplificador fornece potência.', icon: '⚡' },
  { text: 'A caixa reproduz o som no ambiente.', icon: '🔊' },
];

const flowSteps = [
  'Pessoa', '→', 'Microfone', '→', 'Cabo', '→',
  'Mesa', '→', 'Processamento', '→', 'Amplificador', '→',
  'Caixa', '→', 'Ouvido',
];

export const Slide15_Review: React.FC = () => {
  const [showFlow, setShowFlow] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <SlideTitle
        title="Revisão da Aula 3"
        subtitle="Os pilares do fluxo de áudio"
        badge="Resumo"
      />

      <div className="w-full max-w-5xl my-auto flex flex-col items-center gap-6">
        {/* Pilares em grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all"
            >
              <div className="text-2xl shrink-0">{p.icon}</div>
              <span className="text-xs md:text-sm font-bold text-white leading-tight">
                {p.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Botão para mostrar fluxograma */}
        {!showFlow ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => setShowFlow(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg"
          >
            <CheckCircle2 className="w-4 h-4" />
            Ver Fluxograma Completo
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full flex flex-wrap items-center justify-center gap-1.5 p-4 rounded-2xl bg-slate-900 border border-blue-500/30"
          >
            {flowSteps.map((step, idx) => (
              step === '→' ? (
                <ArrowRight key={idx} className="w-4 h-4 text-blue-400" />
              ) : (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-slate-800 text-xs font-bold text-white border border-slate-700"
                >
                  {step}
                </span>
              )
            ))}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold"
      >
        <Award className="w-4 h-4 text-yellow-400" />
        Fluxo de sinal dominado!
      </motion.div>
    </div>
  );
};
