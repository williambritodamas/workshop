import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HighlightZone {
  id: string;
  label: string;
  description: string;
  style: React.CSSProperties;
}

const zones: HighlightZone[] = [
  { id: 'channel', label: 'Canal', description: 'Cada fonte sonora ocupa um canal independente com seus próprios controles.', style: { top: '8%', left: '2%', width: '22%', height: '84%' } },
  { id: 'gain', label: 'Gain', description: 'Ajusta a sensibilidade da entrada — o primeiro controle do canal.', style: { top: '10%', left: '3%', width: '8%', height: '12%' } },
  { id: 'eq', label: 'Equalizador', description: 'Ajusta graves (Low), médios (Mid) e agudos (High) do canal.', style: { top: '24%', left: '3%', width: '8%', height: '20%' } },
  { id: 'aux', label: 'Auxiliar (AUX)', description: 'Envia o sinal para monitores de palco ou processadores de efeito.', style: { top: '46%', left: '3%', width: '8%', height: '16%' } },
  { id: 'pan', label: 'Pan', description: 'Posiciona o som no panorama estéreo — esquerda, centro ou direita.', style: { top: '64%', left: '3%', width: '8%', height: '10%' } },
  { id: 'mute', label: 'Mute', description: 'Silencia completamente o canal sem alterar o Fader.', style: { top: '75%', left: '2%', width: '10%', height: '8%' } },
  { id: 'solo', label: 'Solo', description: 'Permite ouvir apenas aquele canal, isolando-o dos demais.', style: { top: '75%', left: '12%', width: '10%', height: '8%' } },
  { id: 'fader', label: 'Fader', description: 'Controla o volume final do canal antes de enviar à saída.', style: { top: '10%', left: '20%', width: '4%', height: '80%' } },
];

export const MixerOverview: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const active = zones.find((z) => z.id === activeZone);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start">
      <div className="relative w-full md:w-3/5 aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="grid grid-cols-8 gap-0.5 w-full h-full opacity-40">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5 p-0.5 bg-slate-900/50 rounded">
                  <div className="w-full h-3 rounded bg-slate-800" />
                  <div className="w-full flex gap-0.5">
                    <div className="flex-1 h-2 rounded bg-slate-800" />
                    <div className="flex-1 h-2 rounded bg-slate-800" />
                    <div className="flex-1 h-2 rounded bg-slate-800" />
                  </div>
                  <div className="w-full h-4 rounded bg-slate-800" />
                  <div className="w-full h-2 rounded bg-slate-800" />
                  <div className="w-3 h-1 rounded bg-slate-800" />
                  <div className="w-full h-2 rounded bg-slate-800" />
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                  </div>
                  <div className="w-full flex-1 rounded bg-slate-800 mt-0.5" style={{ height: `${20 + Math.random() * 60}%` }} />
                </div>
              ))}
            </div>
            <span className="text-slate-600 text-xs mt-2 block">Mesa de som ilustrativa</span>
          </div>
        </div>
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
            className="absolute border-2 rounded-lg transition-all duration-300 cursor-pointer"
            style={{
              ...zone.style,
              borderColor: activeZone === zone.id ? '#3B82F6' : 'transparent',
              backgroundColor: activeZone === zone.id ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
            }}
          >
            <span className={`absolute -top-6 left-0 text-xs font-bold whitespace-nowrap transition-all ${
              activeZone === zone.id ? 'text-blue-400' : 'text-transparent'
            }`}>
              {zone.label}
            </span>
          </button>
        ))}
      </div>
      <div className="w-full md:w-2/5 min-h-32">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/30"
            >
              <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">{active.label}</span>
              <p className="text-white text-base mt-2 leading-relaxed">{active.description}</p>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <p className="text-slate-500 text-sm text-center">Clique em uma região da mesa ao lado para ver a descrição.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
