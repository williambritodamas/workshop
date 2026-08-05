import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Disc3, Mic, Volume2, Waves, XCircle, HelpCircle } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide10Notes } from './notes';
export { slide10Notes };

interface ProblemCard {
  id: string;
  icon: React.ReactNode;
  label: string;
  causes: string[];
  solutions: string[];
  color: string;
}

const problems: ProblemCard[] = [
  { id: 'no-sound', icon: <VolumeX className="w-6 h-6" />, label: 'Sem som', causes: ['Cabo solto', 'Canal mute', 'Ganho baixo', 'Caixa desligada'], solutions: ['Verifique todos os cabos', 'Desmute o canal', 'Aumente o gain', 'Ligue a caixa'], color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { id: 'one-side', icon: <Disc3 className="w-6 h-6" />, label: 'Só um lado funciona', causes: ['Cabo mono na entrada estéreo', 'Pan desbalanceado', 'Cabo XLR com problema'], solutions: ['Use cabos estéreo', 'Centralize o PAN', 'Teste outro cabo'], color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { id: 'low-mic', icon: <Mic className="w-6 h-6" />, label: 'Mic muito baixo', causes: ['Ganho insuficiente', 'Microfone dinâmico longe', 'Phantom Power desligado'], solutions: ['Aumente o ganho gradualmente', 'Aproxime o microfone', 'Ative o phantom se necessário'], color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { id: 'noise', icon: <Volume2 className="w-6 h-6" />, label: 'Muito ruído', causes: ['Ganho excessivo', 'Cabo blindado danificado', 'Fonte de energia suja'], solutions: ['Reduza o ganho', 'Troque o cabo', 'Use filtro de linha'], color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { id: 'feedback', icon: <Waves className="w-6 h-6" />, label: 'Feedback', causes: ['Mic perto da caixa', 'Volume muito alto', 'EQ com pico em frequência crítica'], solutions: ['Afaste o mic da caixa', 'Reduza o volume', 'Corte a frequência no EQ'], color: 'border-rose-500/30 bg-rose-500/10 text-rose-400' },
  { id: 'muted', icon: <XCircle className="w-6 h-6" />, label: 'Canal mute', causes: ['Mute acidental', 'Roteamento errado', 'Grupo de mute ativado'], solutions: ['Verifique o botão MUTE', 'Confira o roteamento', 'Desative grupos de mute'], color: 'border-slate-500/30 bg-slate-500/10 text-slate-400' },
];

export const Slide10_CommonProblems: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/sound-reinforcement.jpg" alt="Sistema de som" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Problemas Comuns" subtitle="Clique em cada cartão para ver causas e soluções" badge="Solução de Problemas" />
      <div className="relative z-10 w-full max-w-4xl my-auto grid grid-cols-2 md:grid-cols-3 gap-3">
        {problems.map((p, i) => (
          <motion.button key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            onClick={() => setSelected(selected === p.id ? null : p.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border backdrop-blur-sm transition-all cursor-pointer ${selected === p.id ? p.color + ' ring-2 ring-white/20' : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-600'}`}
          >
            {p.icon}
            <span className="text-xs font-bold">{p.label}</span>
            <HelpCircle className="w-3 h-3 opacity-50" />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (() => {
          const prob = problems.find(p => p.id === selected);
          if (!prob) return null;
          return (
            <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
              className="relative z-10 mt-4 w-full max-w-md p-4 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md"
            >
              <p className="text-sm font-bold text-white mb-2">Causas:</p>
              <ul className="list-disc list-inside text-xs text-slate-300 mb-2 space-y-0.5">{prob.causes.map((c, i) => <li key={i}>{c}</li>)}</ul>
              <p className="text-sm font-bold text-emerald-400 mb-2">Soluções:</p>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">{prob.solutions.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};
