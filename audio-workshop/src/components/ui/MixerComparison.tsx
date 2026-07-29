import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const analogFeatures = [
  '✅ Controles físicos dedicados',
  '✅ Visualização completa',
  '✅ Sem menus ou submenus',
  '✅ Curva de aprendizado curta',
  '❌ Sem memória de cenas',
  '❌ Efeitos limitados',
  '❌ Sem controle remoto',
];

const digitalFeatures = [
  '✅ Memórias (Scenes) programáveis',
  '✅ Processamento interno flexível',
  '✅ Controle remoto via tablet/PC',
  '✅ Grande variedade de efeitos',
  '❌ Curva de aprendizado maior',
  '❌ Dependência de tela/menu',
  '❌ Maior custo inicial',
];

export const MixerComparison: React.FC = () => {
  const [showDigital, setShowDigital] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={() => setShowDigital(false)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
            !showDigital ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Analógica
        </button>
        <span className="text-slate-600 text-sm font-bold">vs</span>
        <button
          onClick={() => setShowDigital(true)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
            showDigital ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          Digital
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={showDigital ? 'digital' : 'analog'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className={`p-6 rounded-3xl border ${!showDigital ? 'border-blue-500/40 bg-blue-500/10' : 'border-slate-800 bg-slate-900/60'} backdrop-blur-sm`}>
            <h3 className={`text-2xl font-black mb-4 ${!showDigital ? 'text-blue-400' : 'text-slate-500'}`}>Analógica</h3>
            <div className="space-y-2">
              {analogFeatures.map((f, i) => (
                <div key={i} className={`text-sm ${!showDigital ? 'text-slate-200' : 'text-slate-500'}`}>{f}</div>
              ))}
            </div>
          </div>
          <div className={`p-6 rounded-3xl border ${showDigital ? 'border-cyan-500/40 bg-cyan-500/10' : 'border-slate-800 bg-slate-900/60'} backdrop-blur-sm`}>
            <h3 className={`text-2xl font-black mb-4 ${showDigital ? 'text-cyan-400' : 'text-slate-500'}`}>Digital</h3>
            <div className="space-y-2">
              {digitalFeatures.map((f, i) => (
                <div key={i} className={`text-sm ${showDigital ? 'text-slate-200' : 'text-slate-500'}`}>{f}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
