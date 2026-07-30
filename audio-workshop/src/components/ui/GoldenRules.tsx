import { motion } from 'framer-motion';
import { Ear, ShieldCheck, Volume2, LayoutGrid, Cable, Waves, Minus, Search, Clock, BookOpen } from 'lucide-react';

const rules = [
  { icon: <Ear className="w-5 h-5" />, text: 'Escute antes de mexer', color: 'blue' },
  { icon: <ShieldCheck className="w-5 h-5" />, text: 'Não entre em pânico', color: 'emerald' },
  { icon: <Volume2 className="w-5 h-5" />, text: 'Gain antes do Fader', color: 'amber' },
  { icon: <LayoutGrid className="w-5 h-5" />, text: 'Organização evita problemas', color: 'purple' },
  { icon: <Cable className="w-5 h-5" />, text: 'Cabos são parte do sistema', color: 'cyan' },
  { icon: <Waves className="w-5 h-5" />, text: 'Equalização é equilíbrio', color: 'pink' },
  { icon: <Minus className="w-5 h-5" />, text: 'Menos é mais', color: 'orange' },
  { icon: <Search className="w-5 h-5" />, text: 'Resolva a causa não o sintoma', color: 'indigo' },
  { icon: <Clock className="w-5 h-5" />, text: 'Teste tudo antes do público chegar', color: 'rose' },
  { icon: <BookOpen className="w-5 h-5" />, text: 'Aprenda continuamente', color: 'teal' },
];

export const GoldenRules: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <h3 className="text-white font-bold text-sm mb-4 text-center">10 Regras de Ouro</h3>
      <div className="space-y-2">
        {rules.map((rule, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className={`p-1.5 rounded-lg bg-${rule.color}-500/10 text-${rule.color}-400`}>
              {rule.icon}
            </div>
            <span className="text-sm text-white font-semibold">{rule.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
