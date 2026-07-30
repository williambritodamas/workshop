import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ScenarioCardProps {
  title: string;
  description: string;
  equipment: string[];
  icon: React.ReactNode;
  color: string;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ title, description, equipment, icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-2xl bg-${color}-500/10 border border-${color}-500/30 text-${color}-400 shrink-0`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-base mb-1">{title}</h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-3">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {equipment.map((item) => (
              <span key={item}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-${color}-500/10 text-${color}-300 border border-${color}-500/20`}
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
