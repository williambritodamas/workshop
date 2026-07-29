import { motion } from 'framer-motion';

interface EquipmentHighlightProps {
  children: React.ReactNode;
  active?: boolean;
  color?: 'blue' | 'emerald' | 'amber' | 'red' | 'purple' | 'cyan';
  label?: string;
  pulse?: boolean;
}

const colorStyles = {
  blue: { border: 'border-blue-500', bg: 'bg-blue-500/10', glow: 'shadow-blue-500/20', text: 'text-blue-400' },
  emerald: { border: 'border-emerald-500', bg: 'bg-emerald-500/10', glow: 'shadow-emerald-500/20', text: 'text-emerald-400' },
  amber: { border: 'border-amber-500', bg: 'bg-amber-500/10', glow: 'shadow-amber-500/20', text: 'text-amber-400' },
  red: { border: 'border-red-500', bg: 'bg-red-500/10', glow: 'shadow-red-500/20', text: 'text-red-400' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-500/10', glow: 'shadow-purple-500/20', text: 'text-purple-400' },
  cyan: { border: 'border-cyan-500', bg: 'bg-cyan-500/10', glow: 'shadow-cyan-500/20', text: 'text-cyan-400' },
};

export const EquipmentHighlight: React.FC<EquipmentHighlightProps> = ({
  children,
  active = false,
  color = 'blue',
  label,
  pulse = false,
}) => {
  const c = colorStyles[color];

  return (
    <motion.div
      initial={false}
      animate={active ? {
        scale: 1.02,
        borderColor: ['rgba(59,130,246,0.5)', 'rgba(59,130,246,0.8)', 'rgba(59,130,246,0.5)'],
      } : { scale: 1 }}
      transition={pulse ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : { duration: 0.3 }}
      className={`relative rounded-2xl border-2 transition-all duration-500 ${
        active
          ? `${c.border} ${c.bg} shadow-lg ${c.glow}`
          : 'border-transparent'
      }`}
    >
      {label && active && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute -top-3 left-4 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.bg} ${c.border} border ${c.text}`}
        >
          {label}
        </motion.span>
      )}
      {children}
    </motion.div>
  );
};
