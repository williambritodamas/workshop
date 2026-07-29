import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FrequencyBandCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  examples: string[];
  color: string;
  delay?: number;
}

export const FrequencyBandCard: React.FC<FrequencyBandCardProps> = ({ icon, title, description, examples, color, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}
    className={`p-5 rounded-2xl border ${color} backdrop-blur-sm`}
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="text-white">{icon}</span>
      <h3 className="text-white font-extrabold text-lg">{title}</h3>
    </div>
    <p className="text-slate-300 text-sm leading-relaxed mb-3">{description}</p>
    <div className="flex flex-wrap gap-1.5">
      {examples.map((ex, i) => (
        <span key={i} className="px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-[10px] font-bold">
          {ex}
        </span>
      ))}
    </div>
  </motion.div>
);
