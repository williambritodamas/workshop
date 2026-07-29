import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ControlCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  detail: string;
  color?: string;
  delay?: number;
}

export const ControlCard: React.FC<ControlCardProps> = ({ icon, name, description, detail, color = 'blue', delay = 0 }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border border-${color}-500/30 bg-slate-900/80 backdrop-blur-sm overflow-hidden cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-3 p-4">
        <div className={`p-2.5 rounded-xl bg-${color}-500/10 text-${color}-400`}>{icon}</div>
        <div className="flex-1 min-w-0">
          <span className="text-white font-extrabold text-base">{name}</span>
          <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">{description}</p>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0 border-t border-slate-800">
              <p className="text-sm text-slate-300 leading-relaxed">{detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
