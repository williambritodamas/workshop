import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FeedbackLoopAnimationProps {
  active?: boolean;
  speed?: number;
}

const stages = ['Pessoa', 'Microfone', 'Mesa', 'Caixa'] as const;
const stagePositions = [
  { x: 200, y: 40 },
  { x: 340, y: 160 },
  { x: 200, y: 280 },
  { x: 60, y: 160 },
];

export const FeedbackLoopAnimation: React.FC<FeedbackLoopAnimationProps> = ({ active = false, speed = 1 }) => {
  const particles = useMemo(() =>
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      offset: (i / 12) * 100,
    })), []);

  const dur = 3 / speed;

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 320" className="w-full">
        <defs>
          <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#3B82F6" />
          </marker>
          <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <path d="M0,0 L8,3 L0,6" fill="#EF4444" />
          </marker>
        </defs>

        <path d="M200,50 C300,80 340,120 340,160" fill="none" stroke={active ? '#EF4444' : '#3B82F6'} strokeWidth="2" strokeDasharray="6,4" markerEnd={active ? 'url(#arrowRed)' : 'url(#arrowBlue)'} />
        <path d="M330,180 C280,260 240,270 200,270" fill="none" stroke={active ? '#EF4444' : '#3B82F6'} strokeWidth="2" strokeDasharray="6,4" markerEnd={active ? 'url(#arrowRed)' : 'url(#arrowBlue)'} />
        <path d="M190,270 C130,270 60,220 60,170" fill="none" stroke={active ? '#EF4444' : '#3B82F6'} strokeWidth="2" strokeDasharray="6,4" markerEnd={active ? 'url(#arrowRed)' : 'url(#arrowBlue)'} />
        <path d="M70,140 C90,100 150,60 190,50" fill="none" stroke={active ? '#EF4444' : '#3B82F6'} strokeWidth="2" strokeDasharray="6,4" markerEnd={active ? 'url(#arrowRed)' : 'url(#arrowBlue)'} />

        {active && particles.map((p) => (
          <motion.circle
            key={p.id}
            r="4"
            fill="#EF4444"
            initial={{ offsetDistance: `${p.offset}%` }}
            animate={{ offsetDistance: [`${p.offset}%`, `${p.offset + 100}%`] }}
            transition={{ repeat: Infinity, duration: dur, ease: 'linear' }}
            style={{ offsetPath: "path('M200,50 C300,80 340,120 340,160 L330,180 C280,260 240,270 200,270 L190,270 C130,270 60,220 60,170 L70,140 C90,100 150,60 190,50 Z')", offsetRotate: '0deg' }}
          />
        ))}

        {stagePositions.map((pos, i) => (
          <g key={stages[i]}>
            <rect x={pos.x - 50} y={pos.y - 18} width="100" height="36" rx="18" fill="rgba(30,41,59,0.9)" stroke={active && i === 3 ? '#EF4444' : '#3B82F6'} strokeWidth="1.5" />
            <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill="#E2E8F0" fontSize="12" fontWeight="bold">{stages[i]}</text>
          </g>
        ))}

        {active && (
          <motion.text x="200" y="15" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8 }}
          >
            FEEDBACK!
          </motion.text>
        )}
      </svg>
    </div>
  );
};
