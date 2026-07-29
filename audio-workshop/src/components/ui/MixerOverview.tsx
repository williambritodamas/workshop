import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HighlightZone {
  id: string;
  label: string;
  description: string;
  style: React.CSSProperties;
  color: string;
}

const zones: HighlightZone[] = [
  {
    id: 'channel',
    label: 'Canal',
    description: 'Cada fonte sonora ocupa um canal independente com controles próprios de volume, equalização e posicionamento.',
    style: { top: '5%', left: '2%', width: '25%', height: '90%' },
    color: 'blue',
  },
  {
    id: 'gain',
    label: 'Gain',
    description: 'Ajusta a sensibilidade da entrada. Define o quanto o microfone "escuta". Deve ser ajustado antes do Fader.',
    style: { top: '8%', left: '3%', width: '8%', height: '13%' },
    color: 'amber',
  },
  {
    id: 'eq',
    label: 'Equalizador',
    description: 'Molda o timbre do som: Low (graves), Mid (médios) e High (agudos). Use para corrigir ou realçar frequências.',
    style: { top: '23%', left: '3%', width: '8%', height: '22%' },
    color: 'purple',
  },
  {
    id: 'aux',
    label: 'AUX',
    description: 'Envia o sinal para monitores de palco (para o músico se ouvir) ou para processadores de efeito como reverb.',
    style: { top: '47%', left: '3%', width: '8%', height: '16%' },
    color: 'cyan',
  },
  {
    id: 'pan',
    label: 'Pan',
    description: 'Posiciona o som entre os canais esquerdo e direito do sistema estéreo. Centralizado = som igual em ambos.',
    style: { top: '65%', left: '3%', width: '8%', height: '10%' },
    color: 'emerald',
  },
  {
    id: 'mute',
    label: 'Mute',
    description: 'Silencia completamente o canal, independentemente da posição do Fader. O LED acende quando ativo.',
    style: { top: '76%', left: '2%', width: '10%', height: '9%' },
    color: 'red',
  },
  {
    id: 'solo',
    label: 'Solo',
    description: 'Isola o canal para audição nos fones do operador. Essencial para ajustar um microfone específico.',
    style: { top: '76%', left: '13%', width: '10%', height: '9%' },
    color: 'emerald',
  },
  {
    id: 'fader',
    label: 'Fader',
    description: 'Controla o volume final do canal. Diferente do Gain (entrada), o Fader controla a saída do canal.',
    style: { top: '8%', left: '21%', width: '5%', height: '82%' },
    color: 'blue',
  },
  {
    id: 'master',
    label: 'Master',
    description: 'Seção principal que controla o volume geral de saída para as caixas de som. Afeta todos os canais.',
    style: { top: '5%', left: '72%', width: '26%', height: '90%' },
    color: 'red',
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  blue: { border: 'border-blue-500', bg: 'bg-blue-500/15', text: 'text-blue-400' },
  amber: { border: 'border-amber-500', bg: 'bg-amber-500/15', text: 'text-amber-400' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-500/15', text: 'text-purple-400' },
  cyan: { border: 'border-cyan-500', bg: 'bg-cyan-500/15', text: 'text-cyan-400' },
  emerald: { border: 'border-emerald-500', bg: 'bg-emerald-500/15', text: 'text-emerald-400' },
  red: { border: 'border-red-500', bg: 'bg-red-500/15', text: 'text-red-400' },
};

export const MixerOverview: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const active = zones.find((z) => z.id === activeZone);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
      <div className="relative w-full lg:w-3/5 min-h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-950">
        <img
          src="https://images.unsplash.com/photo-1774967550630-ce20e84afecb?q=80&w=1200&auto=format&fit=crop"
          alt="Mesa de som"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-slate-950/20 to-slate-950/40" />
        {zones.map((zone) => {
          const colors = colorMap[zone.color];
          const isActive = activeZone === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
              className={`absolute border-2 rounded-lg transition-all duration-200 cursor-pointer hover:opacity-100 ${
                isActive ? `${colors.border} ${colors.bg} opacity-100` : 'border-transparent hover:border-white/30 hover:bg-white/5 opacity-100'
              }`}
              style={zone.style}
            >
              <span className={`absolute -top-6 left-0 text-[10px] md:text-xs font-bold whitespace-nowrap px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm transition-all ${
                isActive ? `${colors.text} opacity-100` : 'text-white/70 opacity-100'
              }`}>
                {zone.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="w-full lg:w-2/5">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-5 rounded-2xl border ${colorMap[active.color].border} ${colorMap[active.color].bg} h-full`}
            >
              <span className={`text-xs font-bold uppercase tracking-wider ${colorMap[active.color].text}`}>{active.label}</span>
              <p className="text-white text-sm md:text-base mt-3 leading-relaxed">{active.description}</p>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 h-full flex items-center justify-center"
            >
              <p className="text-slate-400 text-sm text-center">Clique em uma região da mesa ao lado para ver a descrição.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
