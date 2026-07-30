import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Disc3, Cable, Speaker, Zap, Monitor, Laptop, Music, Radio, Power } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide04Notes } from './notes';
export { slide04Notes };

interface EquipCard {
  id: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const equipment: EquipCard[] = [
  { id: 'mic', label: 'Microfone', desc: 'Capta o som e transforma em sinal elétrico.', icon: <Mic className="w-6 h-6" />, color: 'border-blue-500/30 bg-blue-500/10 text-blue-400' },
  { id: 'mixer', label: 'Mesa de Som', desc: 'Gerencia, equaliza e roteia os sinais de áudio.', icon: <Disc3 className="w-6 h-6" />, color: 'border-purple-500/30 bg-purple-500/10 text-purple-400' },
  { id: 'active', label: 'Caixa Ativa', desc: 'Amplifica e projeta o som. Tem amp embutido.', icon: <Speaker className="w-6 h-6" />, color: 'border-red-500/30 bg-red-500/10 text-red-400' },
  { id: 'passive', label: 'Caixa Passiva', desc: 'Requer amplificador externo para funcionar.', icon: <Speaker className="w-6 h-6" />, color: 'border-rose-500/30 bg-rose-500/10 text-rose-400' },
  { id: 'amp', label: 'Amplificador', desc: 'Fornece potência para caixas passivas.', icon: <Zap className="w-6 h-6" />, color: 'border-amber-500/30 bg-amber-500/10 text-amber-400' },
  { id: 'di', label: 'DI Box', desc: 'Converte sinal não balanceado em balanceado.', icon: <Radio className="w-6 h-6" />, color: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' },
  { id: 'monitor', label: 'Monitor', desc: 'Caixa de retorno para o palco.', icon: <Monitor className="w-6 h-6" />, color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400' },
  { id: 'notebook', label: 'Notebook', desc: 'Fonte de áudio: playback, backing track, etc.', icon: <Laptop className="w-6 h-6" />, color: 'border-pink-500/30 bg-pink-500/10 text-pink-400' },
  { id: 'xlr', label: 'Cabo XLR', desc: 'Cabo balanceado para microfones e conexão profissional.', icon: <Cable className="w-6 h-6" />, color: 'border-slate-500/30 bg-slate-500/10 text-slate-400' },
  { id: 'p10', label: 'Cabo P10', desc: 'Cabo não balanceado para instrumentos e conexões simples.', icon: <Cable className="w-6 h-6" />, color: 'border-stone-500/30 bg-stone-500/10 text-stone-400' },
  { id: 'power', label: 'Energia', desc: 'Fonte elétrica: réguas, filtros e aterramento.', icon: <Power className="w-6 h-6" />, color: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400' },
  { id: 'music', label: 'Suportes', desc: 'Stands, pedestais e suportes para microfones.', icon: <Music className="w-6 h-6" />, color: 'border-lime-500/30 bg-lime-500/10 text-lime-400' },
];

export const Slide04_Equipment: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Microfone" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
      </div>
      <SlideTitle title="Equipamentos" subtitle="Conheça cada peça do sistema" badge="Inventário" />
      <div className="relative z-10 w-full max-w-5xl my-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {equipment.map((eq, i) => (
          <motion.button key={eq.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
            onClick={() => setSelected(selected === eq.id ? null : eq.id)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl border backdrop-blur-sm transition-all cursor-pointer ${selected === eq.id ? eq.color + ' ring-2 ring-white/20' : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-600'}`}
          >
            {eq.icon}
            <span className="text-[10px] font-bold leading-tight text-center">{eq.label}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
            className="relative z-10 mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-md text-center"
          >
            <p className="text-sm text-slate-200 font-medium">
              {equipment.find(e => e.id === selected)?.desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
