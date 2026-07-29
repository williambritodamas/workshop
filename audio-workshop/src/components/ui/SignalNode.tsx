import { motion } from 'framer-motion';

interface SignalNodeProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  active?: boolean;
  highlight?: 'default' | 'success' | 'danger';
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const highlightStyles = {
  default: {
    border: 'border-slate-700',
    bg: 'bg-slate-900/80',
    iconBg: 'bg-slate-800',
    iconColor: 'text-blue-400',
    activeBorder: 'border-blue-500',
    activeBg: 'bg-blue-500/10',
    glow: 'shadow-blue-500/20',
  },
  success: {
    border: 'border-slate-700',
    bg: 'bg-slate-900/80',
    iconBg: 'bg-slate-800',
    iconColor: 'text-emerald-400',
    activeBorder: 'border-emerald-500',
    activeBg: 'bg-emerald-500/10',
    glow: 'shadow-emerald-500/20',
  },
  danger: {
    border: 'border-slate-700',
    bg: 'bg-slate-900/80',
    iconBg: 'bg-slate-800',
    iconColor: 'text-red-400',
    activeBorder: 'border-red-500',
    activeBg: 'bg-red-500/10',
    glow: 'shadow-red-500/20',
  },
};

const sizeStyles = {
  sm: { padding: 'p-3', iconSize: 'p-2', textSize: 'text-xs', subtitleSize: 'text-[10px]', icon: 'w-5 h-5' },
  md: { padding: 'p-4', iconSize: 'p-3', textSize: 'text-sm', subtitleSize: 'text-xs', icon: 'w-6 h-6' },
  lg: { padding: 'p-5', iconSize: 'p-4', textSize: 'text-base', subtitleSize: 'text-sm', icon: 'w-8 h-8' },
};

export const SignalNode: React.FC<SignalNodeProps> = ({
  icon,
  title,
  subtitle,
  active = false,
  highlight: hl = 'default',
  delay = 0,
  size = 'md',
  onClick,
}) => {
  const s = highlightStyles[hl];
  const sz = sizeStyles[size];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex flex-col items-center justify-center ${sz.padding} rounded-2xl border transition-all duration-300 cursor-pointer ${
        active
          ? `${s.activeBorder} ${s.activeBg} shadow-lg ${s.glow} ring-1 ${s.activeBorder}`
          : `${s.border} ${s.bg} hover:border-blue-500/40 hover:bg-slate-800/60`
      }`}
    >
      <div className={`${sz.iconSize} rounded-xl ${active ? s.activeBg : s.iconBg} border ${
        active ? s.activeBorder : 'border-slate-700'
      } transition-all duration-300 ${active ? 'scale-110' : ''}`}>
        <div className={`${s.iconColor} ${sz.icon}`}>
          {icon}
        </div>
      </div>
      <span className={`${sz.textSize} font-bold text-white mt-2 text-center leading-tight`}>
        {title}
      </span>
      {subtitle && (
        <span className={`${sz.subtitleSize} text-slate-400 mt-0.5 text-center`}>
          {subtitle}
        </span>
      )}
      {active && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`mt-2 w-1.5 h-1.5 rounded-full ${hl === 'danger' ? 'bg-red-400 animate-pulse' : 'bg-blue-400'}`}
        />
      )}
    </motion.button>
  );
};
