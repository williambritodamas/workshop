import { motion } from 'framer-motion';
import { Medal, Award, Trophy, Star } from 'lucide-react';

interface AchievementBadgeProps {
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
  title: string;
  unlocked: boolean;
}

const config = {
  bronze: { icon: <Medal className="w-8 h-8" />, color: 'amber', bg: '#B45309', glow: 'rgba(180,83,9,0.4)' },
  silver: { icon: <Award className="w-8 h-8" />, color: 'slate', bg: '#64748B', glow: 'rgba(100,116,139,0.4)' },
  gold: { icon: <Trophy className="w-8 h-8" />, color: 'yellow', bg: '#CA8A04', glow: 'rgba(202,138,4,0.4)' },
  platinum: { icon: <Star className="w-8 h-8" />, color: 'cyan', bg: '#06B6D4', glow: 'rgba(6,182,212,0.4)' },
};

export const AchievementBadge: React.FC<AchievementBadgeProps> = ({ level, title, unlocked }) => {
  const c = config[level];

  return (
    <motion.div
      animate={{ scale: unlocked ? 1 : 0.95, opacity: unlocked ? 1 : 0.4 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 relative overflow-hidden"
    >
      {unlocked && (
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at center, ${c.glow}, transparent 70%)` }}
        />
      )}
      <div className="relative" style={{ color: unlocked ? c.bg : '#475569' }}>
        {c.icon}
      </div>
      <span className={`text-xs font-bold text-center relative z-10 ${unlocked ? 'text-white' : 'text-slate-600'}`}>
        {title}
      </span>
      {!unlocked && <span className="text-[10px] text-slate-700 font-bold relative z-10">🔒 Bloqueado</span>}
    </motion.div>
  );
};
