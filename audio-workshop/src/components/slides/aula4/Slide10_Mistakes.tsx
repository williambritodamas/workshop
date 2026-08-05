import { motion } from 'framer-motion';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide10Notes } from './notes';
import { Mic, X, VolumeX, Hand, Wind, Bug } from 'lucide-react';
export { slide10Notes };

const mistakes = [
  { icon: <Hand className="w-5 h-5" />, title: 'Segurar na cápsula', desc: 'Abafa o som e estraga a captação — segure sempre pelo corpo.', color: 'red', emoji: '👐' },
  { icon: <Wind className="w-5 h-5" />, title: 'Soprar para testar', desc: 'Nunca sopre! Isso danifica o diafragma. Use a voz.', color: 'red', emoji: '💨' },
  { icon: <VolumeX className="w-5 h-5" />, title: 'Cobrir a ventilação', desc: 'Alguns microfones têm ventilação na base — cobrir causa microfonia.', color: 'red', emoji: '🔇' },
  { icon: <Bug className="w-5 h-5" />, title: 'Enrolar cabo no braço', desc: 'Desgasta e pode quebrar a solda interna. Use organizadores.', color: 'red', emoji: '🪢' },
  { icon: <X className="w-5 h-5" />, title: 'Bater no microfone', desc: 'Bater não testa nada! Pode desalinhar a cápsula permanentemente.', color: 'red', emoji: '🔨' },
  { icon: <Mic className="w-5 h-5" />, title: 'Ignorar o padrão polar', desc: 'Usar um microfone omnidirecional em palco com monitores causa feedback.', color: 'red', emoji: '🎯' },
];

export const Slide10_Mistakes: React.FC = () => (
  <div className="relative w-full flex-1 flex flex-col justify-between items-center p-8 md:p-12 overflow-y-auto">
    <SlideTitle title="Erros comuns" subtitle="O que NÃO fazer com um microfone" badge="Atenção" />
    <div className="w-full max-w-5xl my-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {mistakes.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08 }}
          className="p-4 rounded-2xl bg-red-900/10 border border-red-500/20 hover:border-red-500/40 transition-colors"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-red-500/10 text-red-400">{m.icon}</div>
            <span className="text-sm">{m.emoji}</span>
            <h4 className="text-white font-extrabold text-sm">{m.title}</h4>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

