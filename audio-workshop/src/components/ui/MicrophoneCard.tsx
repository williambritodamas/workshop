import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Zap, Volume2, Waves } from 'lucide-react';

interface MicrophoneCardProps {
  name: string;
  icon: React.ReactNode;
  image: string;
  application: string;
  sensitivity: number;
  environment: string[];
  details: string;
  color: string;
  delay?: number;
  phantom?: boolean;
}

const sensIcons = (level: number) => {
  const icons = [];
  const IconComp = level > 2 ? Zap : level > 1 ? Volume2 : Waves;
  for (let i = 0; i < level; i++) icons.push(<IconComp key={i} className="w-3.5 h-3.5" />);
  return icons;
};

export const MicrophoneCard: React.FC<MicrophoneCardProps> = ({
  name, icon, image, application, sensitivity, environment, details, color, delay = 0, phantom,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 bg-slate-900/90 ${open ? `border-${color}-500/50 shadow-lg` : 'border-slate-800 hover:border-blue-500/40'}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex flex-col"
      >
        <div className="relative h-40 md:h-44 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>

        <div className="p-4 md:p-5 flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`p-1.5 rounded-lg bg-slate-800`}>{icon}</span>
              <h3 className="text-base md:text-lg font-extrabold text-white">{name}</h3>
            </div>
            <p className="text-xs text-slate-400">{application}</p>
          </div>
          <div className="shrink-0 text-slate-500">
            {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-5 pb-5 pt-0 border-t border-slate-800 space-y-3">
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs font-semibold text-slate-400">Sensibilidade:</span>
                <div className="flex items-center gap-0.5 text-blue-400">
                  {sensIcons(sensitivity)}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {environment.map((env, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {env}
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{details}</p>

              {phantom && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-semibold">
                  <Zap className="w-3 h-3" />
                  Requer Phantom Power (48V)
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
