import { motion } from 'framer-motion';
import { ExternalLink, Play, BookOpen, FileText } from 'lucide-react';
import { SlideTitle } from '../../ui/SlideTitle';
import { slide15Notes } from './notes';
export { slide15Notes };

const refs = [
  { icon: <FileText className="w-4 h-4" />, label: 'Manual Behringer X32', url: 'https://www.behringer.com', color: 'from-blue-500 to-blue-600' },
  { icon: <FileText className="w-4 h-4" />, label: 'Manual Yamaha MG16XU', url: 'https://www.yamaha.com', color: 'from-blue-500 to-blue-600' },
  { icon: <Play className="w-4 h-4" />, label: '"Understanding Signal Flow" — Produce Like A Pro', url: '#', color: 'from-red-500 to-red-600' },
  { icon: <Play className="w-4 h-4" />, label: '"Mixing Consoles 101" — The Recording Revolution', url: '#', color: 'from-red-500 to-red-600' },
  { icon: <BookOpen className="w-4 h-4" />, label: '"Live Sound Reinforcement" — Scott Hunter Stark', url: '#', color: 'from-amber-500 to-amber-600' },
  { icon: <Play className="w-4 h-4" />, label: 'Canal: "Audio University" (inglês)', url: 'https://youtube.com/@audiouniversity', color: 'from-red-500 to-red-600' },
  { icon: <Play className="w-4 h-4" />, label: 'Canal: "Dicas de Áudio" (português)', url: '#', color: 'from-red-500 to-red-600' },
  { icon: <ExternalLink className="w-4 h-4" />, label: 'PDF resumo: material.audiosemmisterio.com.br', url: '#', color: 'from-emerald-500 to-emerald-600' },
];

export const Slide15_References: React.FC = () => (
  <div className="relative w-full h-full flex flex-col justify-between items-center p-8 md:p-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1920&auto=format&fit=crop" alt="Mesa de som" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950 to-slate-950/90" />
    </div>
    <SlideTitle title="Referências e Materiais" subtitle="Para continuar aprendendo" badge="Referências" />
    <div className="relative z-10 w-full max-w-3xl my-auto grid grid-cols-1 md:grid-cols-2 gap-3">
      {refs.map((r, i) => (
        <motion.a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
          className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all"
        >
          <div className={`p-2 rounded-xl bg-gradient-to-br ${r.color}`}>{r.icon}</div>
          <span className="text-white text-sm font-bold flex-1">{r.label}</span>
          <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
        </motion.a>
      ))}
    </div>
  </div>
);
