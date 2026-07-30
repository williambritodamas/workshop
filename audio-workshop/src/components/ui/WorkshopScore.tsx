import { motion } from 'framer-motion';
import { Medal, Award, Trophy } from 'lucide-react';

interface WorkshopScoreProps {
  score: number;
  maxScore?: number;
}

const medals = [
  { min: 0, max: 40, title: 'Operador Iniciante', emoji: '🥉', icon: <Medal className="w-5 h-5" />, color: 'amber' },
  { min: 40, max: 70, title: 'Operador Confiante', emoji: '🥈', icon: <Medal className="w-5 h-5" />, color: 'slate' },
  { min: 70, max: 90, title: 'Operador de Áudio', emoji: '🥇', icon: <Award className="w-5 h-5" />, color: 'amber' },
  { min: 90, max: 101, title: 'Mestre do Áudio Sem Mistério', emoji: '🏆', icon: <Trophy className="w-5 h-5" />, color: 'yellow' },
];

export const WorkshopScore: React.FC<WorkshopScoreProps> = ({ score, maxScore = 100 }) => {
  const pct = Math.min(100, Math.round((score / maxScore) * 100));
  const medal = medals.find((m) => pct >= m.min && pct < m.max) ?? medals[0];

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm">
      <h3 className="text-white font-bold text-sm mb-4 text-center">Pontuação Final</h3>

      <div className="text-center mb-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
          className="text-5xl mb-2"
        >
          {medal.emoji}
        </motion.div>
        <p className="text-3xl font-black text-white">{score}/{maxScore}</p>
        <p className="text-slate-400 text-sm">{pct}%</p>
      </div>

      <div className="w-full bg-slate-800 rounded-full h-3 mb-4 overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400`}
        />
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="text-center p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30"
      >
        <p className="text-white font-bold text-sm">{medal.title}</p>
      </motion.div>
    </div>
  );
};
