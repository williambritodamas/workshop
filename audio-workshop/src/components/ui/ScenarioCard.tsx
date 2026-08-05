import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ScenarioCardProps {
  title: string;
  description: string;
  equipment: string[];
  icon: React.ReactNode;
  color: string;
}

const colorStyles: Record<string, { icon: string; chip: string }> = {
  amber: {
    icon: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    chip: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  },
  blue: {
    icon: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    chip: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  },
  emerald: {
    icon: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
  },
  red: {
    icon: 'bg-red-500/10 border-red-500/30 text-red-400',
    chip: 'bg-red-500/10 text-red-300 border-red-500/20',
  },
  purple: {
    icon: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    chip: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  },
  cyan: {
    icon: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    chip: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  },
};

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ title, description, equipment, icon, color }) => {
  const styles = colorStyles[color] ?? colorStyles.blue;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-2xl border shrink-0 ${styles.icon}`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-base mb-1">{title}</h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-3">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {equipment.map((item) => (
              <span key={item}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${styles.chip}`}
              >
                <CheckCircle2 className="w-3 h-3" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
